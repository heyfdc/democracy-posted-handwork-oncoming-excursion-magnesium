#!/usr/bin/env python3
"""Parse Japan 26.kmz and print a MAP_DATA JS array with phase assignments."""
import sys
import zipfile
import json
import xml.etree.ElementTree as ET

KML_NS = 'http://www.opengis.net/kml/2.2'

# Placemarks from Aug 15-16 itinerary (Phase 1 · Tokyo Round 1)
PHASE1_NAMES = {
    'Ramen Gojuban', 'Sushi Keita', 'Harajuku Gyozarou',
    'KOFFEE MAMEYA', 'Kibidango Azuma', 'Kamejuu', 'Tokyo Airbnb'
}

def assign_phase(name, lng):
    """Phase 2 = Gotemba/Fuji/Hakone (lng < 139.3). Phase 1 = named Tokyo spots. Phase 3 = rest."""
    if lng < 139.3:
        return 2
    if name in PHASE1_NAMES:
        return 1
    return 3

def parse_kmz(kmz_path):
    places = []
    with zipfile.ZipFile(kmz_path) as z:
        kml_name = next((n for n in z.namelist() if n.endswith('.kml')), None)
        if kml_name is None:
            raise ValueError(f"No .kml file found in {kmz_path}")
        kml_data = z.read(kml_name)

    root = ET.fromstring(kml_data)
    ns = {'k': KML_NS}

    for folder in root.findall('.//k:Folder', ns):
        category_el = folder.find('k:name', ns)
        category = category_el.text if category_el is not None else 'Other'
        for pm in folder.findall('k:Placemark', ns):
            name_el = pm.find('k:name', ns)
            coords_el = pm.find('.//k:Point/k:coordinates', ns)
            if name_el is None or coords_el is None:
                continue
            name = (name_el.text or '').strip()
            if not name:
                continue
            coords_text = (coords_el.text or '').strip()
            if not coords_text:
                continue
            parts = coords_text.split(',')
            lng, lat = float(parts[0]), float(parts[1])
            places.append({
                'name': name,
                'lat': round(lat, 7),
                'lng': round(lng, 7),
                'category': category,
                'phase': assign_phase(name, lng),
            })
    return places

def main():
    kmz_path = sys.argv[1] if len(sys.argv) > 1 else '/Users/fdc/Downloads/Japan 26.kmz'
    places = parse_kmz(kmz_path)
    print('const MAP_DATA = ' + json.dumps(places, ensure_ascii=False, indent=2) + ';')

if __name__ == '__main__':
    main()
