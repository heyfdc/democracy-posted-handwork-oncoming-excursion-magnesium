#!/usr/bin/env node
'use strict';
const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.error('Error: set GOOGLE_PLACES_API_KEY environment variable');
  process.exit(1);
}

const DATA_PATH = path.join(__dirname, '../map-data.js');

function readMapData() {
  const src = fs.readFileSync(DATA_PATH, 'utf8');
  const json = src.replace(/^const MAP_DATA = /, '').replace(/;\s*$/, '').trim();
  return JSON.parse(json);
}

function writeMapData(data) {
  fs.writeFileSync(DATA_PATH, `const MAP_DATA = ${JSON.stringify(data, null, 2)};\n`);
}

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
        return httpsGet(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks), headers: res.headers }));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchImage(name, lat, lng) {
  const searchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json`
    + `?input=${encodeURIComponent(name)}`
    + `&inputtype=textquery`
    + `&fields=place_id,photos`
    + `&locationbias=circle:5000@${lat},${lng}`
    + `&key=${API_KEY}`;

  const searchRes = await httpsGet(searchUrl);
  if (searchRes.status !== 200) return null;

  const searchData = JSON.parse(searchRes.body.toString('utf8'));
  const candidate = searchData.candidates && searchData.candidates[0];
  if (!candidate || !candidate.photos || !candidate.photos[0]) return null;

  const photoRef = candidate.photos[0].photo_reference;
  const photoUrl = `https://maps.googleapis.com/maps/api/place/photo`
    + `?maxwidth=320`
    + `&photo_reference=${photoRef}`
    + `&key=${API_KEY}`;

  const photoRes = await httpsGet(photoUrl);
  if (photoRes.status !== 200) return null;

  const ct = photoRes.headers['content-type'] || 'image/jpeg';
  return `data:${ct.split(';')[0]};base64,${photoRes.body.toString('base64')}`;
}

async function main() {
  const data = readMapData();
  let updated = 0;

  for (let i = 0; i < data.length; i++) {
    const place = data[i];
    if (place.image) {
      console.log(`[${i + 1}/${data.length}] skip (has image): ${place.name}`);
      continue;
    }
    console.log(`[${i + 1}/${data.length}] fetching: ${place.name}`);
    try {
      const image = await fetchImage(place.name, place.lat, place.lng);
      if (image) {
        place.image = image;
        updated++;
        console.log(`  ✓ ${Math.round(image.length / 1024)}KB`);
      } else {
        console.log(`  – no photo found`);
      }
    } catch (e) {
      console.error(`  ✗ ${e.message}`);
    }
    await sleep(250);
  }

  writeMapData(data);
  console.log(`\nDone. ${updated} images added. map-data.js updated.`);
}

main().catch(e => { console.error(e); process.exit(1); });
