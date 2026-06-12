#!/usr/bin/env python3
"""Parse Japan 26.kmz and print a MAP_DATA JS array with phase and day assignments."""
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

# KMZ name -> list of Aug day numbers it appears on in the itinerary.
# Names must match exactly as they appear in the KMZ file.
DAY_LOCATIONS = {
    # Aug 15 - Arrival
    'Ramen Gojuban':                            [15, 21, 26],
    'Tokyo Airbnb':                             [15],
    # Aug 16 - Tokyo Day 1
    'Harajuku Gyozarou':                        [16, 22],
    'KOFFEE MAMEYA':                            [16, 22],
    'Kibidango Azuma':                          [16, 23],
    'Kamejuu':                                  [16, 23],
    'Sushi Keita':                              [16, 26],
    # Aug 17 - Drive to Gotemba
    'Costco Wholesale Zama Warehouse':          [17],
    'Gotemba Premium Outlets':                  [17],
    'Sawayaka Gotemba Premium Outlet branch':   [17],
    'Gotemba Airbnb':                           [17],
    # Aug 18 - Fun2Drive (curly apostrophe U+2019 matches KMZ)
    'The fun2drive Owners’ Club Co., Ltd.': [18],
    'とんかつ 壱（はじまり）': [18],
    # Aug 19 - Mt. Fuji
    'Fujisan Parking Lot (former: Fuji-Hokuroku)': [19],
    'Fuji Subaru Line 5th Station':             [19],
    # Aug 20 - Hakone
    'Toraya Kobo':                              [20],
    'Ramen Iida Shoten':                        [20],
    'Matsudayama Herb Garden':                  [20],
    # Aug 21 - Assembly
    'Tonkatsu Tonta':                           [21, 26],
    'Kisaburō Nōjō':             [21],
    'Iyoshi Cola Honten Shimo Ochiai':          [21],
    'Unagi Hashimoto':                          [21, 23],
    'Round One Ikebukuro':                      [21, 26],
    # Aug 22 - South Arc (Harajuku / Daikanyama / Roppongi)
    'Sushisho Masa':                            [22],
    'duffle with kapital':                      [22],
    'Kapital Legs':                             [22],
    'KAPITAL Legs Roppongi':                    [22],
    'NUIR':                                     [22],
    'CASANOVA vintage GINZA':                   [22, 24],
    'Kapital':                                  [22, 24],
    'Rec Coffee Shibuya East':                  [22],
    "HENRY'S BURGER Daikanyama":                [22],
    'Wagyumafia The Cutlet Sandwich':           [22],
    'DE FRITES STAAN HARAJUKU':                [22],
    'Iyoshi Cola':                              [22],
    'たまごぐらし':     [22],
    'Aji no Nakamura':                          [22],
    'Menya Sign':                               [22],
    'Los Tacos Azules':                         [22, 25],
    'Kotaro':                                   [22, 26],
    'Komiyama-nishiazabu.':                    [22, 26],
    'SAVOY Azabujuban':                         [22, 26],
    # Aug 23 - Northeast Corridor (Yanaka / Akihabara)
    'Pelican Café':                        [23],
    'HATCOFFEE':                                [23],
    'Tensuzu':                                  [23],
    'Gyukatsu Motomura Ueno Branch':            [23],
    'Kanazawa Maimon Sushi Ueno':               [23],
    'The Pizza Bar On 38th':                    [23, 24],
    'Kama-Asa':                                 [23],
    'HINOYA':                                   [23],
    'AMERICAYA':                                [23],
    'Active Akiba Batting Cage Centre':         [23],
    # Aug 24 - East-South Corridor (Ginza / Tsukiji)
    'Sushi Dai':                                [24],
    'Centre The Bakery':                        [24],
    "Cafe de l'ambre":                          [24],
    'Glitch Coffee and Roasters GINZA':         [24],
    'BONGENCOFFEE Ginza':                       [24],
    'Ginza Kagari - Soba':                      [24],
    'Miko Sushi Ginza':                         [24],
    'Wabi Sabi DX.':                            [24],
    'Parlor Vinefru Ginza shave ice':           [24],
    '400℃ PIZZA TOKYO':                    [24, 26],
    # Aug 25 - West Arc (Shimokitazawa / Koenji)
    'European Curry Tomato':                    [25],
    'A Tes Souhaits':                           [25],
    'Whistler':                                 [25],
    'reload':                                   [25],
    'Bears ベアーズ':          [25],
    '古着屋 Re:Re: Garden 下北沢店': [25],
    'Blue Lug Hatagaya':                        [25],
    'Ogawa Coffee Laboratory Shimokitazawa':    [25],
    'cafe viet arco':                           [25],
    'Et -THE CULTURAL COFFEEHOUSE-':            [25],
    'Murrma Coffee Stop':                       [25],
    'Path':                                     [25],
    'Sousakumen Hitosuji':                      [25],
    'Rāmenya Shima':                       [25],
    # Aug 26 - Last Day (Shinjuku)
    'Fūunji Shinjuku':                     [26],
    'Azuki to Kōri':                       [26],
    'Shinjuku Batting Center':                  [26],
}


def assign_phase(name, lng):
    """Phase 2 = Gotemba/Fuji/Hakone (lng < 139.3). Phase 1 = named Tokyo spots. Phase 3 = rest."""
    if lng < 139.3:
        return 2
    if name in PHASE1_NAMES:
        return 1
    return 3


def assign_days(name):
    """Return list of Aug day numbers this location appears on (empty = unscheduled)."""
    return DAY_LOCATIONS.get(name, [])


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
                'days': assign_days(name),
            })
    return places


def main():
    kmz_path = sys.argv[1] if len(sys.argv) > 1 else '/Users/fdc/Downloads/Japan 26.kmz'
    places = parse_kmz(kmz_path)
    print('const MAP_DATA = ' + json.dumps(places, ensure_ascii=False, indent=2) + ';')


if __name__ == '__main__':
    main()
