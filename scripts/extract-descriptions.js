#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const HTML_PATH = path.join(__dirname, '../index.html');
const DATA_PATH = path.join(__dirname, '../map-data.js');

function readMapData() {
  const src = fs.readFileSync(DATA_PATH, 'utf8');
  const json = src.replace(/^const MAP_DATA = /, '').replace(/;\s*$/, '').trim();
  return JSON.parse(json);
}

function writeMapData(data) {
  fs.writeFileSync(DATA_PATH, `const MAP_DATA = ${JSON.stringify(data, null, 2)};\n`);
}

function stripTags(s) {
  return s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

function normalize(s) {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function scoreMatch(mapName, evtTitle) {
  const nameParts = normalize(mapName).split(' ').filter(w => w.length >= 4);
  const evtNorm = normalize(evtTitle);
  return nameParts.filter(w => evtNorm.includes(w)).length;
}

function extractEvents(html) {
  const events = [];
  const re = /<div class="itin-evt-body"><strong>([\s\S]*?)<\/strong><p>([\s\S]*?)<\/p><\/div>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    events.push({
      title: stripTags(m[1]),
      description: stripTags(m[2]),
    });
  }
  return events;
}

function main() {
  const html = fs.readFileSync(HTML_PATH, 'utf8');
  const data = readMapData();
  const events = extractEvents(html);

  console.log(`Found ${events.length} itinerary events`);

  let matched = 0;
  for (const place of data) {
    if (place.description) continue;

    let best = null, bestScore = 0;
    for (const evt of events) {
      const score = scoreMatch(place.name, evt.title);
      if (score > bestScore) {
        bestScore = score;
        best = evt;
      }
    }

    if (best && bestScore >= 1) {
      place.description = best.description;
      matched++;
      console.log(`  ✓ "${place.name}" ← "${best.title}"`);
    }
  }

  writeMapData(data);
  console.log(`\nDone. ${matched}/${data.length} entries got descriptions. map-data.js updated.`);
}

main();
