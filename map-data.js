const MAP_DATA = [
  {
    "name": "Gotemba Airbnb",
    "lat": 35.3009967,
    "lng": 138.9362405,
    "category": "Accommodations",
    "phase": 2,
    "days": [17, 18, 19, 20]
  },
  {
    "name": "Tokyo Airbnb",
    "lat": 35.7413651,
    "lng": 139.7343174,
    "category": "Accommodations",
    "phase": 1,
    "days": [15, 16, 21, 22, 23, 24, 25, 26]
  },
  {
    "name": "The fun2drive Owners’ Club Co., Ltd.",
    "lat": 35.2768032,
    "lng": 139.0030231,
    "category": "Points of Interest",
    "phase": 2,
    "days": [
      18
    ]
  },
  {
    "name": "Costco Wholesale Zama Warehouse",
    "lat": 35.4825789,
    "lng": 139.4270333,
    "category": "Points of Interest",
    "phase": 2,
    "days": [17]
  },
  {
    "name": "Fujisan Parking Lot (former: Fuji-Hokuroku)",
    "lat": 35.4800197,
    "lng": 138.7739002,
    "category": "Points of Interest",
    "phase": 2,
    "days": [
      19
    ]
  },
  {
    "name": "Fuji Subaru Line 5th Station",
    "lat": 35.3948949,
    "lng": 138.7325799,
    "category": "Points of Interest",
    "phase": 2,
    "days": [
      19
    ]
  },
  {
    "name": "Sushisho Masa",
    "lat": 35.6595096,
    "lng": 139.723112,
    "category": "Food",
    "phase": 3,
    "days": [
      22
    ]
  },
  {
    "name": "Kisaburō Nōjō",
    "lat": 35.7262876,
    "lng": 139.745621,
    "category": "Food",
    "phase": 3,
    "days": [
      21
    ]
  },
  {
    "name": "たまごぐらし",
    "lat": 35.6651279,
    "lng": 139.7130048,
    "category": "Food",
    "phase": 3,
    "days": [
      22
    ]
  },
  {
    "name": "Sousakumen Hitosuji",
    "lat": 35.6839253,
    "lng": 139.6592271,
    "category": "Food",
    "phase": 3,
    "days": [
      25
    ]
  },
  {
    "name": "ロックンスリー",
    "lat": 35.5098428,
    "lng": 139.6145917,
    "category": "Food",
    "phase": 3,
    "days": []
  },
  {
    "name": "Yukiguni",
    "lat": 35.4124265,
    "lng": 139.5124945,
    "category": "Food",
    "phase": 3,
    "days": []
  },
  {
    "name": "Ramen Gojuban",
    "lat": 35.7189146,
    "lng": 139.7219029,
    "category": "Food",
    "phase": 1,
    "days": [
      15,
      21,
      26
    ]
  },
  {
    "name": "Chukasoba Shibata",
    "lat": 35.6319655,
    "lng": 139.5766399,
    "category": "Food",
    "phase": 3,
    "days": []
  },
  {
    "name": "Chuka Soba Uosei",
    "lat": 35.044367,
    "lng": 139.0815742,
    "category": "Food",
    "phase": 2,
    "days": []
  },
  {
    "name": "Sushi Keita",
    "lat": 35.6654054,
    "lng": 139.7736618,
    "category": "Food",
    "phase": 1,
    "days": [
      16,
      26
    ]
  },
  {
    "name": "Menya Sign",
    "lat": 35.6264119,
    "lng": 139.7214881,
    "category": "Food",
    "phase": 3,
    "days": [
      22
    ]
  },
  {
    "name": "Ramen Iida Shoten",
    "lat": 35.1446163,
    "lng": 139.1097555,
    "category": "Food",
    "phase": 2,
    "days": [
      20
    ]
  },
  {
    "name": "Azuki to Kōri",
    "lat": 35.6822614,
    "lng": 139.6972058,
    "category": "Food",
    "phase": 3,
    "days": [
      26
    ]
  },
  {
    "name": "Tonkatsu Narikura",
    "lat": 35.6977052,
    "lng": 139.6387447,
    "category": "Food",
    "phase": 3,
    "days": []
  },
  {
    "name": "Ginza Kagari - Soba",
    "lat": 35.6712019,
    "lng": 139.7613315,
    "category": "Food",
    "phase": 3,
    "days": [
      24
    ]
  },
  {
    "name": "Kotaro",
    "lat": 35.6555569,
    "lng": 139.6992802,
    "category": "Food",
    "phase": 3,
    "days": [
      22,
      26
    ]
  },
  {
    "name": "Unagi Hashimoto",
    "lat": 35.709357,
    "lng": 139.736345,
    "category": "Food",
    "phase": 3,
    "days": [
      21,
      23
    ]
  },
  {
    "name": "Aldebaran",
    "lat": 35.6538103,
    "lng": 139.7352952,
    "category": "Food",
    "phase": 3,
    "days": []
  },
  {
    "name": "SAVOY Azabujuban",
    "lat": 35.6548695,
    "lng": 139.7364827,
    "category": "Food",
    "phase": 3,
    "days": [
      22,
      26
    ]
  },
  {
    "name": "The Pizza Bar On 38th",
    "lat": 35.6869744,
    "lng": 139.7730333,
    "category": "Food",
    "phase": 3,
    "days": [
      23,
      24
    ]
  },
  {
    "name": "Menya Ittou",
    "lat": 35.718861,
    "lng": 139.857683,
    "category": "Food",
    "phase": 3,
    "days": []
  },
  {
    "name": "European Curry Tomato",
    "lat": 35.7024686,
    "lng": 139.6197329,
    "category": "Food",
    "phase": 3,
    "days": [
      25
    ]
  },
  {
    "name": "Fūunji Shinjuku",
    "lat": 35.6868343,
    "lng": 139.6966393,
    "category": "Food",
    "phase": 3,
    "days": [
      26
    ]
  },
  {
    "name": "Okuniya Mambei",
    "lat": 35.0051936,
    "lng": 135.763335,
    "category": "Food",
    "phase": 2,
    "days": []
  },
  {
    "name": "Tonkatsu Tonta",
    "lat": 35.715484,
    "lng": 139.7066146,
    "category": "Food",
    "phase": 3,
    "days": [
      21,
      26
    ]
  },
  {
    "name": "HENRY'S BURGER Daikanyama",
    "lat": 35.6474012,
    "lng": 139.702129,
    "category": "Food",
    "phase": 3,
    "days": [
      22
    ]
  },
  {
    "name": "400℃ PIZZA TOKYO",
    "lat": 35.7002259,
    "lng": 139.7393865,
    "category": "Food",
    "phase": 3,
    "days": [
      24,
      26
    ]
  },
  {
    "name": "Los Tacos Azules",
    "lat": 35.6383451,
    "lng": 139.6681172,
    "category": "Food",
    "phase": 3,
    "days": [
      22,
      25
    ]
  },
  {
    "name": "Wagyumafia The Cutlet Sandwich",
    "lat": 35.6440853,
    "lng": 139.7004345,
    "category": "Food",
    "phase": 3,
    "days": [
      22
    ]
  },
  {
    "name": "Path",
    "lat": 35.6685131,
    "lng": 139.6899099,
    "category": "Food",
    "phase": 3,
    "days": [
      25
    ]
  },
  {
    "name": "Centre The Bakery",
    "lat": 35.6755334,
    "lng": 139.7665952,
    "category": "Food",
    "phase": 3,
    "days": [
      24
    ]
  },
  {
    "name": "KOFFEE MAMEYA",
    "lat": 35.668368,
    "lng": 139.710888,
    "category": "Food",
    "phase": 1,
    "days": [
      16,
      22
    ]
  },
  {
    "name": "A Tes Souhaits",
    "lat": 35.7090348,
    "lng": 139.5907228,
    "category": "Food",
    "phase": 3,
    "days": [
      25
    ]
  },
  {
    "name": "Ishiusubiki Teuchi Kyōrakutei",
    "lat": 35.7007762,
    "lng": 139.7395083,
    "category": "Food",
    "phase": 3,
    "days": []
  },
  {
    "name": "Harajuku Gyozarou",
    "lat": 35.6675016,
    "lng": 139.7061026,
    "category": "Food",
    "phase": 1,
    "days": [
      16,
      22
    ]
  },
  {
    "name": "Homemade Ramen Muginae",
    "lat": 35.5907765,
    "lng": 139.7328034,
    "category": "Food",
    "phase": 3,
    "days": []
  },
  {
    "name": "Sushi Dai",
    "lat": 35.6443009,
    "lng": 139.7824528,
    "category": "Food",
    "phase": 3,
    "days": [
      24
    ]
  },
  {
    "name": "Wabi Sabi DX.",
    "lat": 35.6646064,
    "lng": 139.782246,
    "category": "Food",
    "phase": 3,
    "days": [
      24
    ]
  },
  {
    "name": "Glitch Coffee and Roasters GINZA",
    "lat": 35.6689171,
    "lng": 139.7686324,
    "category": "Food",
    "phase": 3,
    "days": [
      24
    ]
  },
  {
    "name": "Ginza Hachigou",
    "lat": 35.6705477,
    "lng": 139.77015,
    "category": "Food",
    "phase": 3,
    "days": []
  },
  {
    "name": "BONGENCOFFEE Ginza",
    "lat": 35.6710713,
    "lng": 139.7708038,
    "category": "Food",
    "phase": 3,
    "days": [
      24
    ]
  },
  {
    "name": "Parlor Vinefru Ginza shave ice",
    "lat": 35.672333,
    "lng": 139.7701711,
    "category": "Food",
    "phase": 3,
    "days": [
      24
    ]
  },
  {
    "name": "Cafe de l'ambre",
    "lat": 35.6679217,
    "lng": 139.7622983,
    "category": "Food",
    "phase": 3,
    "days": [
      24
    ]
  },
  {
    "name": "Gyukatsu Motomura Ueno Branch",
    "lat": 35.7104455,
    "lng": 139.7744533,
    "category": "Food",
    "phase": 3,
    "days": [
      23
    ]
  },
  {
    "name": "Tensuzu",
    "lat": 35.7088528,
    "lng": 139.772453,
    "category": "Food",
    "phase": 3,
    "days": [
      23
    ]
  },
  {
    "name": "Kanazawa Maimon Sushi Ueno",
    "lat": 35.7068153,
    "lng": 139.7729306,
    "category": "Food",
    "phase": 3,
    "days": [
      23
    ]
  },
  {
    "name": "Pelican Café",
    "lat": 35.7069782,
    "lng": 139.7911622,
    "category": "Food",
    "phase": 3,
    "days": [
      23
    ]
  },
  {
    "name": "HATCOFFEE",
    "lat": 35.7072891,
    "lng": 139.7933029,
    "category": "Food",
    "phase": 3,
    "days": [
      23
    ]
  },
  {
    "name": "February Cafe",
    "lat": 35.7083042,
    "lng": 139.7946526,
    "category": "Food",
    "phase": 3,
    "days": []
  },
  {
    "name": "Kamejuu",
    "lat": 35.7107247,
    "lng": 139.796774,
    "category": "Food",
    "phase": 1,
    "days": [
      16,
      23
    ]
  },
  {
    "name": "Kibidango Azuma",
    "lat": 35.7114834,
    "lng": 139.7963463,
    "category": "Food",
    "phase": 1,
    "days": [
      16,
      23
    ]
  },
  {
    "name": "Murrma Coffee Stop",
    "lat": 35.6830025,
    "lng": 139.6836744,
    "category": "Food",
    "phase": 3,
    "days": [
      25
    ]
  },
  {
    "name": "Rāmenya Shima",
    "lat": 35.6883441,
    "lng": 139.6808875,
    "category": "Food",
    "phase": 3,
    "days": [
      25
    ]
  },
  {
    "name": "Ogawa Coffee Laboratory Shimokitazawa",
    "lat": 35.6633394,
    "lng": 139.6698648,
    "category": "Food",
    "phase": 3,
    "days": [
      25
    ]
  },
  {
    "name": "cafe viet arco",
    "lat": 35.6620623,
    "lng": 139.6659762,
    "category": "Food",
    "phase": 3,
    "days": [
      25
    ]
  },
  {
    "name": "Et -THE CULTURAL COFFEEHOUSE-",
    "lat": 35.6601304,
    "lng": 139.6650393,
    "category": "Food",
    "phase": 3,
    "days": [
      25
    ]
  },
  {
    "name": "Miko Sushi Ginza",
    "lat": 35.6689288,
    "lng": 139.764291,
    "category": "Food",
    "phase": 3,
    "days": [
      24
    ]
  },
  {
    "name": "Iyoshi Cola",
    "lat": 35.6644704,
    "lng": 139.7032379,
    "category": "Food",
    "phase": 3,
    "days": [
      22
    ]
  },
  {
    "name": "Iyoshi Cola Honten Shimo Ochiai",
    "lat": 35.7150005,
    "lng": 139.6958157,
    "category": "Food",
    "phase": 3,
    "days": [
      21
    ]
  },
  {
    "name": "DE FRITES STAAN HARAJUKU",
    "lat": 35.668498,
    "lng": 139.7065238,
    "category": "Food",
    "phase": 3,
    "days": [
      22
    ]
  },
  {
    "name": "Komiyama-nishiazabu.",
    "lat": 35.6616596,
    "lng": 139.7226718,
    "category": "Food",
    "phase": 3,
    "days": [
      22,
      26
    ]
  },
  {
    "name": "Rec Coffee Shibuya East",
    "lat": 35.6571905,
    "lng": 139.7079508,
    "category": "Food",
    "phase": 3,
    "days": [
      22
    ]
  },
  {
    "name": "Aji no Nakamura",
    "lat": 35.6561859,
    "lng": 139.721441,
    "category": "Food",
    "phase": 3,
    "days": [
      22
    ]
  },
  {
    "name": "Toraya Kobo",
    "lat": 35.2953757,
    "lng": 138.9599018,
    "category": "Food",
    "phase": 2,
    "days": [
      20
    ]
  },
  {
    "name": "とんかつ 壱（はじまり）",
    "lat": 35.3035074,
    "lng": 138.9419119,
    "category": "Food",
    "phase": 2,
    "days": [
      18
    ]
  },
  {
    "name": "鉄板焼「銀明翠」",
    "lat": 35.296185,
    "lng": 138.945621,
    "category": "Food",
    "phase": 2,
    "days": []
  },
  {
    "name": "Sawayaka Gotemba Premium Outlet branch",
    "lat": 35.3050066,
    "lng": 138.9658874,
    "category": "Food",
    "phase": 2,
    "days": [
      17
    ]
  },
  {
    "name": "Shinjuku Batting Center",
    "lat": 35.696635,
    "lng": 139.7044715,
    "category": "Activities",
    "phase": 3,
    "days": [
      26
    ]
  },
  {
    "name": "Round One Ikebukuro",
    "lat": 35.7300652,
    "lng": 139.7151731,
    "category": "Activities",
    "phase": 3,
    "days": [
      21,
      26
    ]
  },
  {
    "name": "Matsudayama Herb Garden",
    "lat": 35.3515296,
    "lng": 139.1376646,
    "category": "Activities",
    "phase": 2,
    "days": [
      20
    ]
  },
  {
    "name": "Active Akiba Batting Cage Centre",
    "lat": 35.6989545,
    "lng": 139.7747463,
    "category": "Activities",
    "phase": 3,
    "days": [
      23
    ]
  },
  {
    "name": "Kama-Asa",
    "lat": 35.7138476,
    "lng": 139.7886768,
    "category": "Shopping",
    "phase": 3,
    "days": [
      23
    ]
  },
  {
    "name": "HINOYA",
    "lat": 35.7103297,
    "lng": 139.7749341,
    "category": "Shopping",
    "phase": 3,
    "days": [
      23
    ]
  },
  {
    "name": "AMERICAYA",
    "lat": 35.709098,
    "lng": 139.7749895,
    "category": "Shopping",
    "phase": 3,
    "days": [
      23
    ]
  },
  {
    "name": "Whistler",
    "lat": 35.7041187,
    "lng": 139.6512871,
    "category": "Shopping",
    "phase": 3,
    "days": [
      25
    ]
  },
  {
    "name": "Gotemba Premium Outlets",
    "lat": 35.307271,
    "lng": 138.9656467,
    "category": "Shopping",
    "phase": 2,
    "days": [
      17
    ]
  },
  {
    "name": "Kapital",
    "lat": 35.6723566,
    "lng": 139.7705344,
    "category": "Shopping",
    "phase": 3,
    "days": [
      22,
      24
    ]
  },
  {
    "name": "Blue Lug Hatagaya",
    "lat": 35.6762854,
    "lng": 139.6709034,
    "category": "Shopping",
    "phase": 3,
    "days": [
      25
    ]
  },
  {
    "name": "reload",
    "lat": 35.6635297,
    "lng": 139.6701538,
    "category": "Shopping",
    "phase": 3,
    "days": [
      25
    ]
  },
  {
    "name": "Bears ベアーズ",
    "lat": 35.6615693,
    "lng": 139.6682855,
    "category": "Shopping",
    "phase": 3,
    "days": [
      25
    ]
  },
  {
    "name": "古着屋 Re:Re: Garden 下北沢店",
    "lat": 35.66274,
    "lng": 139.668119,
    "category": "Shopping",
    "phase": 3,
    "days": [
      25
    ]
  },
  {
    "name": "KAPITAL Legs Roppongi",
    "lat": 35.6600636,
    "lng": 139.7298273,
    "category": "Shopping",
    "phase": 3,
    "days": [
      22
    ]
  },
  {
    "name": "Kapital",
    "lat": 35.6437093,
    "lng": 139.7098244,
    "category": "Shopping",
    "phase": 3,
    "days": [
      22,
      24
    ]
  },
  {
    "name": "duffle with kapital",
    "lat": 35.6427858,
    "lng": 139.7101661,
    "category": "Shopping",
    "phase": 3,
    "days": [
      22
    ]
  },
  {
    "name": "Kapital Legs",
    "lat": 35.6421061,
    "lng": 139.7091477,
    "category": "Shopping",
    "phase": 3,
    "days": [
      22
    ]
  },
  {
    "name": "CASANOVA vintage GINZA",
    "lat": 35.6687784,
    "lng": 139.7632809,
    "category": "Shopping",
    "phase": 3,
    "days": [
      22,
      24
    ]
  },
  {
    "name": "NUIR",
    "lat": 35.6627103,
    "lng": 139.6989688,
    "category": "Shopping",
    "phase": 3,
    "days": [
      22
    ]
  }
];
