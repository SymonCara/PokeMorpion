const TYPE_COLORS = {
    'Acier': '#B7B7CE', 'Combat': '#C22E28', 'Dragon': '#6F35FC', 'Eau': '#6390F0',
    'Électrik': '#F7D02C', 'Fée': '#D685AD', 'Feu': '#EE8130', 'Glace': '#96D9D6',
    'Insecte': '#A6B91A', 'Normal': '#A8A77A', 'Plante': '#7AC74C', 'Poison': '#A33EA1',
    'Psy': '#F95587', 'Roche': '#B6A136', 'Sol': '#E2BF65', 'Spectre': '#735797',
    'Ténèbres': '#705746', 'Vol': '#A98FF3'
};

// --- CONSTANTES ET DONNÉES POKÉMON ---
const LEGENDARIES_IDS = [144,145,146,150,151,243,244,245,249,250,251,377,378,379,380,381,382,383,384,385,386,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,638,639,640,641,642,643,644,645,646,647,648,649,716,717,718,719,720,721,772,773,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,888,889,890,891,892,893,894,895,896,897,898,905,1001,1002,1003,1004,1007,1008,1014,1015,1016,1017,1024];
const MYTHICAL_IDS = [151, 251, 385, 386, 489, 490, 491, 492, 493, 494, 647, 648, 649, 719, 720, 721, 801, 802, 807, 808, 809, 893, 1025];
const STARTERS_IDS = [1,4,7,152,155,158,252,255,258,387,390,393,495,498,501,650,653,656,722,725,728,810,813,816,906,909,912];
const MEGAS_IDS = [10033, 10034, 10035, 10036, 10037, 10038, 10039, 10040, 10041, 10042, 10043, 10044, 10045, 10046, 10047, 10048, 10049, 10050, 10051, 10052, 10053, 10054, 10055, 10056, 10057, 10058, 10059, 10060, 10061, 10062, 10063, 10064, 10065, 10066, 10067, 10068, 10069, 10070, 10071, 10072, 10073, 10074, 10075, 10076, 10077, 10078, 10079, 10080, 10081, 10082, 10083, 10084, 10085, 10086, 10087, 10088, 10089, 10090, 10091, 10092];
const GYM_POKES = [25,54,66,74,95,102,111,120,121,130,143,1,4,7,133,6,9,3,150,68,94,112,131,149,208,212,248,306,376,445,448];
const BLACK_SHINIES = [6, 38, 94, 197, 248, 282, 310, 359, 384, 445, 448, 461, 612, 631, 658, 676, 681, 770, 774, 785, 786, 787, 788, 823, 887, 1007, 1008];
const SHINY_GREEN_IDS = [1, 2, 3, 15, 23, 24, 27, 31, 41, 42, 43, 44, 45, 66, 67, 68, 84, 85, 88, 89, 114, 123, 135, 149, 196, 212, 217, 220, 227, 234, 252, 253, 254, 268, 272, 284, 298, 316, 357, 373, 380, 381, 383, 387, 388, 389, 406, 429, 450, 465, 469, 593, 604, 621, 633, 634, 635, 652, 715, 718, 830, 834, 840, 841, 842, 1005, 1019];
const SHINY_BLUE_IDS = [151, 132, 700, 54, 77, 78, 109, 110, 100, 101, 241, 213, 222, 228, 229, 231, 235, 245, 280, 281, 282, 475, 298, 335, 381, 193, 469, 526, 696, 697, 698, 699, 744, 745, 34, 31, 471, 628, 490, 489, 526, 335, 235, 132, 151];
const SHINY_PINK_IDS = [251, 382, 214, 134, 142, 148, 195, 198, 430, 215, 461, 126, 467, 321, 319, 428, 417, 424, 442, 445, 97, 80, 102, 108, 463, 122, 124, 36, 40, 45, 258, 259, 260, 287, 79, 199, 320, 690, 417, 428, 214, 382];
const SHINY_GOLD_IDS = [129, 380, 59, 103, 10, 11, 16, 19, 23, 27, 52, 74, 75, 76, 81, 82, 462, 208, 212, 184, 205, 227, 302, 303, 333, 334, 426, 448, 616, 617, 621, 704, 705, 706, 803, 804, 129, 380, 59, 103, 10, 11, 16, 19, 23, 27, 52, 74, 75, 76, 81, 82];
const SHINY_RED_IDS = [130, 649, 286, 545, 701, 794, 717, 791, 338, 356, 693, 130, 649, 286, 545, 701, 794, 717, 791, 338, 356, 693];
const BABY_IDS = [172, 173, 174, 175, 236, 238, 239, 240, 298, 406, 433, 438, 439, 440, 446, 447, 458];
const FOSSIL_IDS = [138, 139, 140, 141, 142, 345, 346, 347, 348, 408, 409, 410, 411, 564, 565, 566, 567, 696, 697, 698, 699, 880, 881, 882, 883];
const PARADOX_IDS = [984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 1005, 1006, 1007, 1008, 1009, 1010, 1020, 1021, 1022, 1023];
const UB_IDS = [793, 794, 795, 796, 797, 798, 799, 803, 804, 805, 806];
const STAGE2_IDS = [2, 5, 8, 11, 14, 17, 25, 30, 33, 35, 39, 42, 44, 61, 64, 67, 70, 75, 82, 93, 148, 153, 156, 159, 180, 183, 188, 221, 247, 253, 256, 259, 266, 268, 271, 274, 281, 288, 294, 305, 329, 372, 375, 388, 391, 394, 397, 404, 315, 444, 496, 499, 502, 520, 536, 541, 544, 611, 634, 651, 654, 657, 662, 665, 670, 705, 723, 726, 729, 737, 762, 783, 811, 814, 817, 822, 825, 838, 886, 907, 910, 913, 922, 929, 933, 958, 981, 997];
const STAGE3_IDS = [3, 6, 9, 12, 15, 18, 26, 31, 34, 36, 40, 169, 45, 182, 62, 186, 65, 68, 71, 76, 462, 94, 149, 154, 157, 160, 181, 184, 189, 473, 248, 254, 257, 260, 267, 269, 272, 275, 282, 475, 289, 295, 306, 330, 373, 376, 389, 392, 395, 398, 405, 407, 445, 497, 500, 503, 521, 537, 542, 545, 612, 635, 652, 655, 658, 663, 666, 671, 706, 724, 727, 730, 733, 738, 763, 784, 812, 815, 818, 823, 826, 839, 887, 908, 911, 914, 923, 930, 934, 959, 983, 998];
const NEEDS_ITEM_IDS = [58,37,133,512,951,60,90,133,515,25,133,82,603,938,44,70,102,133,274,30,32,35,39,44,191,548,281,361,198,200,608,680,315,176,670,27,37,133,974,739,113,123,95,79,61,137,233,349,117,366,840,854,935,996];

const TYPE_MAP = {
    "Fire":"Feu","Water":"Eau","Grass":"Plante","Electric":"Électrik","Psychic":"Psy","Normal":"Normal","Fighting":"Combat","Poison":"Poison","Ground":"Sol","Flying":"Vol","Bug":"Insecte","Rock":"Roche","Ghost":"Spectre","Dragon":"Dragon","Dark":"Ténèbres","Steel":"Acier","Fairy":"Fée","Ice":"Glace"
};

// --- BACKUP COMPLET GEN 1-7 (ORDRE NATIONAL) ---
const offlineBackup = [
    [1,"Bulbizarre",["Plante","Poison"]],[2,"Herbizarre",["Plante","Poison"]],[3,"Florizarre",["Plante","Poison"]],
    [4,"Salamèche",["Feu"]],[5,"Reptincel",["Feu"]],[6,"Dracaufeu",["Feu","Vol"]],
    [7,"Carapuce",["Eau"]],[8,"Carabaffe",["Eau"]],[9,"Tortank",["Eau"]],
    [10,"Chenipan",["Insecte"]],[11,"Chrysacier",["Insecte"]],[12,"Papilusion",["Insecte","Vol"]],
    [13,"Aspicot",["Insecte","Poison"]],[14,"Coconfort",["Insecte","Poison"]],[15,"Dardargnan",["Insecte","Poison"]],
    [16,"Roucool",["Normal","Vol"]],[17,"Roucoups",["Normal","Vol"]],[18,"Roucarnage",["Normal","Vol"]],
    [19,"Rattata",["Normal"]],[20,"Rattatac",["Normal"]],[21,"Piafabec",["Normal","Vol"]],[22,"Rapasdepic",["Normal","Vol"]],
    [23,"Abo",["Poison"]],[24,"Arbok",["Poison"]],[25,"Pikachu",["Électrik"]],[26,"Raichu",["Électrik"]],
    [27,"Sabelette",["Sol"]],[28,"Sablaireau",["Sol"]],[29,"Nidoran♀",["Poison"]],[30,"Nidorina",["Poison"]],[31,"Nidoqueen",["Poison","Sol"]],
    [32,"Nidoran♂",["Poison"]],[33,"Nidorino",["Poison"]],[34,"Nidoking",["Poison","Sol"]],
    [35,"Mélofée",["Fée"]],[36,"Mélodelfe",["Fée"]],[37,"Goupix",["Feu"]],[38,"Feunard",["Feu"]],
    [39,"Rondoudou",["Normal","Fée"]],[40,"Grodoudou",["Normal","Fée"]],[41,"Nosferapti",["Poison","Vol"]],[42,"Nosferalto",["Poison","Vol"]],
    [43,"Mystherbe",["Plante","Poison"]],[44,"Ortide",["Plante","Poison"]],[45,"Rafflesia",["Plante","Poison"]],
    [46,"Paras",["Insecte","Plante"]],[47,"Parasect",["Insecte","Plante"]],[48,"Mimitoss",["Insecte","Poison"]],[49,"Aéromite",["Insecte","Poison"]],
    [50,"Taupiqueur",["Sol"]],[51,"Triopikeur",["Sol"]],[52,"Miaouss",["Normal"]],[53,"Persian",["Normal"]],[54,"Psykokwak",["Eau"]],[55,"Akwakwak",["Eau"]],
    [56,"Férosinge",["Combat"]],[57,"Colossinge",["Combat"]],[58,"Caninos",["Feu"]],[59,"Arcanin",["Feu"]],
    [60,"Ptitard",["Eau"]],[61,"Tétarte",["Eau"]],[62,"Tartard",["Eau","Combat"]],
    [63,"Abra",["Psy"]],[64,"Kadabra",["Psy"]],[65,"Alakazam",["Psy"]],
    [66,"Machoc",["Combat"]],[67,"Machopeur",["Combat"]],[68,"Mackogneur",["Combat"]],
    [69,"Chétiflor",["Plante","Poison"]],[70,"Boustiflor",["Plante","Poison"]],[71,"Empiflor",["Plante","Poison"]],
    [72,"Tentacool",["Eau","Poison"]],[73,"Tentacruel",["Eau","Poison"]],
    [74,"Racaillou",["Roche","Sol"]],[75,"Gravalanch",["Roche","Sol"]],[76,"Grolem",["Roche","Sol"]],
    [77,"Ponyta",["Feu"]],[78,"Galopa",["Feu"]],[79,"Ramoloss",["Eau","Psy"]],[80,"Flagadoss",["Eau","Psy"]],
    [81,"Magnéti",["Électrik","Acier"]],[82,"Magnéton",["Électrik","Acier"]],[83,"Canarticho",["Normal","Vol"]],
    [84,"Doduo",["Normal","Vol"]],[85,"Dodrio",["Normal","Vol"]],[86,"Otaria",["Eau"]],[87,"Lamantine",["Eau","Glace"]],
    [88,"Tadmorv",["Poison"]],[89,"Grotadmorv",["Poison"]],[90,"Kokiyas",["Eau"]],[91,"Crustabri",["Eau","Glace"]],
    [92,"Fantominus",["Spectre","Poison"]],[93,"Spectrum",["Spectre","Poison"]],[94,"Ectoplasma",["Spectre","Poison"]],
    [95,"Onix",["Roche","Sol"]],[96,"Soporifik",["Psy"]],[97,"Hypnomade",["Psy"]],[98,"Krabby",["Eau"]],[99,"Krabboss",["Eau"]],
    [100,"Voltorbe",["Électrik"]],[101,"Électrode",["Électrik"]],[102,"Noeunoeuf",["Plante","Psy"]],[103,"Noadkoko",["Plante","Psy"]],
    [104,"Oselet",["Sol"]],[105,"Ossatueur",["Sol"]],[106,"Kicklee",["Combat"]],[107,"Tygnon",["Combat"]],[108,"Excelangue",["Normal"]],
    [109,"Smogo",["Poison"]],[110,"Smogogo",["Poison"]],[111,"Rhinocorne",["Sol","Roche"]],[112,"Rhinoféros",["Sol","Roche"]],
    [113,"Leveinard",["Normal"]],[114,"Saquedeneu",["Plante"]],[115,"Kangourex",["Normal"]],[116,"Hypotrempe",["Eau"]],[117,"Hypocéan",["Eau"]],
    [118,"Poissirène",["Eau"]],[119,"Poissoroy",["Eau"]],[120,"Stari",["Eau"]],[121,"Staross",["Eau","Psy"]],
    [122,"M. Mime",["Psy","Fée"]],[123,"Insécateur",["Insecte","Vol"]],[124,"Lippoutou",["Glace","Psy"]],[125,"Élektek",["Électrik"]],[126,"Magmar",["Feu"]],
    [127,"Scarabrute",["Insecte"]],[128,"Tauros",["Normal"]],[129,"Magicarp",["Eau"]],[130,"Léviator",["Eau","Vol"]],
    [131,"Lokhlass",["Eau","Glace"]],[132,"Métamorph",["Normal"]],[133,"Évoli",["Normal"]],[134,"Aquali",["Eau"]],[135,"Voltali",["Électrik"]],[136,"Pyroli",["Feu"]],
    [137,"Porygon",["Normal"]],[138,"Amonita",["Roche","Eau"]],[139,"Amonistar",["Roche","Eau"]],[140,"Kabuto",["Roche","Eau"]],[141,"Kabutops",["Roche","Eau"]],
    [142,"Ptéra",["Roche","Vol"]],[143,"Ronflex",["Normal"]],[144,"Artikodin",["Glace","Vol"]],[145,"Électhor",["Électrik","Vol"]],[146,"Sulfura",["Feu","Vol"]],
    [147,"Minidraco",["Dragon"]],[148,"Draco",["Dragon"]],[149,"Dracolosse",["Dragon","Vol"]],
    [150,"Mewtwo",["Psy"]],[151,"Mew",["Psy"]],
    // --- Gen 2 ---
    [152,"Germignon",["Plante"]],[153,"Macronium",["Plante"]],[154,"Méganium",["Plante"]],
    [155,"Héricendre",["Feu"]],[156,"Feurisson",["Feu"]],[157,"Typhlosion",["Feu"]],
    [158,"Kaiminus",["Eau"]],[159,"Crocrodil",["Eau"]],[160,"Aligatueur",["Eau"]],
    [161,"Fouinette",["Normal"]],[162,"Fouinar",["Normal"]],[163,"Hoothoot",["Normal","Vol"]],[164,"Noarfang",["Normal","Vol"]],
    [165,"Coxy",["Insecte","Vol"]],[166,"Coxyclaque",["Insecte","Vol"]],[167,"Mimigal",["Insecte","Poison"]],[168,"Migalos",["Insecte","Poison"]],
    [169,"Nostenfer",["Poison","Vol"]],[170,"Loupio",["Eau","Électrik"]],[171,"Lanturn",["Eau","Électrik"]],[172,"Pichu",["Électrik"]],
    [173,"Mélo",["Fée"]],[174,"Toudoudou",["Normal","Fée"]],[175,"Togepi",["Fée"]],[176,"Togetic",["Fée","Vol"]],
    [177,"Natu",["Psy","Vol"]],[178,"Xatu",["Psy","Vol"]],[179,"Wattouat",["Électrik"]],[180,"Lainergie",["Électrik"]],[181,"Pharamp",["Électrik"]],
    [182,"Joliflor",["Plante"]],[183,"Marill",["Eau","Fée"]],[184,"Azumarill",["Eau","Fée"]],[185,"Simularbre",["Roche"]],
    [186,"Tarpaud",["Eau"]],[187,"Graniville",["Plante","Vol"]],[188,"Floravol",["Plante","Vol"]],[189,"Cotovol",["Plante","Vol"]],
    [190,"Capumain",["Normal"]],[191,"Tournegrin",["Plante"]],[192,"Héliatronc",["Plante"]],[193,"Yanma",["Insecte","Vol"]],
    [194,"Axoloto",["Eau","Sol"]],[195,"Maraiste",["Eau","Sol"]],[196,"Mentali",["Psy"]],[197,"Noctali",["Ténèbres"]],[198,"Cornèbre",["Ténèbres","Vol"]],
    [199,"Roigada",["Eau","Psy"]],[200,"Feuforêve",["Spectre"]],[201,"Zarbi",["Psy"]],[202,"Qulbutoké",["Psy"]],
    [203,"Girafarig",["Normal","Psy"]],[204,"Pomdepik",["Insecte"]],[205,"Forretress",["Insecte","Acier"]],[206,"Insolourdo",["Normal"]],
    [207,"Scorplane",["Sol","Vol"]],[208,"Steelix",["Acier","Sol"]],[209,"Snubbull",["Fée"]],[210,"Granbull",["Fée"]],
    [211,"Qwilfish",["Eau","Poison"]],[212,"Cizayox",["Insecte","Acier"]],[213,"Caratroc",["Insecte","Roche"]],[214,"Scarhino",["Insecte","Combat"]],
    [215,"Farfuret",["Ténèbres","Glace"]],[216,"Teddiursa",["Normal"]],[217,"Ursaring",["Normal"]],[218,"Limagma",["Feu"]],[219,"Volcaropod",["Feu","Roche"]],
    [220,"Marcacrin",["Glace","Sol"]],[221,"Cochignon",["Glace","Sol"]],[222,"Corayon",["Eau","Roche"]],[223,"Rémoraid",["Eau"]],[224,"Octillery",["Eau"]],
    [225,"Cadoizo",["Glace","Vol"]],[226,"Mantine",["Eau","Vol"]],[227,"Airmure",["Acier","Vol"]],[228,"Malosse",["Ténèbres","Feu"]],[229,"Démolosse",["Ténèbres","Feu"]],
    [230,"Hyporoi",["Eau","Dragon"]],[231,"Phanpy",["Sol"]],[232,"Donphan",["Sol"]],[233,"Porygon2",["Normal"]],
    [234,"Cerfrousse",["Normal"]],[235,"Queulorior",["Normal"]],[236,"Debugant",["Combat"]],[237,"Kapoera",["Combat"]],
    [238,"Lippouti",["Glace","Psy"]],[239,"Élekid",["Électrik"]],[240,"Magby",["Feu"]],[241,"Écrémeuh",["Normal"]],[242,"Leuphorie",["Normal"]],
    [243,"Raikou",["Électrik"]],[244,"Entei",["Feu"]],[245,"Suicune",["Eau"]],
    [246,"Embrylex",["Roche","Sol"]],[247,"Ymphect",["Roche","Sol"]],[248,"Tyranocif",["Roche","Ténèbres"]],
    [249,"Lugia",["Psy","Vol"]],[250,"Ho-Oh",["Feu","Vol"]],[251,"Celebi",["Psy","Plante"]],
    // --- Gen 3 ---
    [252,"Arcko",["Plante"]],[253,"Massko",["Plante"]],[254,"Jungko",["Plante"]],
    [255,"Poussifeu",["Feu"]],[256,"Galifeu",["Feu","Combat"]],[257,"Braségali",["Feu","Combat"]],
    [258,"Gobou",["Eau"]],[259,"Flobio",["Eau","Sol"]],[260,"Laggron",["Eau","Sol"]],
    [282,"Gardevoir",["Psy","Fée"]],[306,"Galeking",["Acier","Roche"]],[330,"Libégon",["Sol","Dragon"]],[373,"Drattak",["Dragon","Vol"]],[376,"Métalosse",["Acier","Psy"]],
    [380,"Latias",["Dragon","Psy"]],[381,"Latios",["Dragon","Psy"]],[382,"Kyogre",["Eau"]],[383,"Groudon",["Sol"]],[384,"Rayquaza",["Dragon","Vol"]],
    // --- Gen 4 ---
    [387,"Tortipouss",["Plante"]],[388,"Boskara",["Plante"]],[389,"Torterra",["Plante","Sol"]],
    [390,"Ouisticram",["Feu"]],[391,"Chimpenfeu",["Feu","Combat"]],[392,"Simiabraz",["Feu","Combat"]],
    [393,"Tiplouf",["Eau"]],[394,"Prinplouf",["Eau"]],[395,"Pingoléon",["Eau","Acier"]],
    [445,"Carchacrok",["Dragon","Sol"]],[448,"Lucario",["Combat","Acier"]],[475,"Gallame",["Psy","Combat"]],
    [483,"Dialga",["Acier","Dragon"]],[484,"Palkia",["Eau","Dragon"]],[487,"Giratina",["Spectre","Dragon"]],[493,"Arceus",["Normal"]],
    // --- Gen 5 ---
    [494,"Victini",["Psy","Feu"]],[495,"Vipélierre",["Plante"]],[498,"Gruikui",["Feu"]],[501,"Moustillon",["Eau"]],
    [570,"Zorua",["Ténèbres"]],[571,"Zoroark",["Ténèbres"]],[635,"Trioxhydre",["Ténèbres","Dragon"]],[643,"Reshiram",["Dragon","Feu"]],[644,"Zekrom",["Dragon","Électrik"]],
    // --- Gen 6 ---
    [650,"Marisson",["Plante"]],[653,"Feunnec",["Feu"]],[656,"Grenousse",["Eau"]],[658,"Amphinobi",["Eau","Ténèbres"]],
    [700,"Nymphali",["Fée"]],[716,"Xerneas",["Fée"]],[717,"Yveltal",["Ténèbres","Vol"]],[718,"Zygarde",["Dragon","Sol"]],
    // --- Gen 7 ---
    [722,"Brindibou",["Plante","Vol"]],[725,"Flamiaou",["Feu"]],[728,"Otaquin",["Eau"]],[744,"Rocabot",["Roche"]],[745,"Lougaroc",["Roche"]],
    [776,"Boumata",["Feu","Dragon"]],[777,"Togedemaru",["Électrik","Acier"]],[778,"Mimiqui",["Spectre","Fée"]],
    [785,"Tokorico",["Électrik","Fée"]],[791,"Solgaleo",["Psy","Acier"]],[792,"Lunala",["Psy","Spectre"]],[800,"Necrozma",["Psy"]],[801,"Magearna",["Acier","Fée"]]
];

const GEN8_DATA = [
    [810,"Ouistempo",["Plante"]],[811,"Badabouin",["Plante"]],[812,"Gorythmic",["Plante"]],
    [813,"Flambino",["Feu"]],[814,"Lapyro",["Feu"]],[815,"Pyrobut",["Feu"]],
    [816,"Larméléon",["Eau"]],[817,"Arrozard",["Eau"]],[818,"Lézargus",["Eau"]],
    [819,"Rongourmand",["Normal"]],[820,"Rongrigou",["Normal"]],
    [821,"Minisange",["Vol"]],[822,"Bleuseille",["Vol"]],[823,"Corvaillus",["Vol","Acier"]],
    [824,"Larvadar",["Insecte"]],[825,"Coléodôme",["Insecte","Psy"]],[826,"Astronelle",["Insecte","Psy"]],
    [827,"Goupilou",["Ténèbres"]],[828,"Roublenard",["Ténèbres"]],
    [829,"Tournicoton",["Plante"]],[830,"Blancoton",["Plante"]],
    [831,"Moumouton",["Normal"]],[832,"Moumouflon",["Normal"]],
    [833,"Khélocrok",["Eau"]],[834,"Torgamord",["Eau","Roche"]],
    [835,"Voltoutou",["Électrik"]],[836,"Fulgudog",["Électrik"]],
    [837,"Charbi",["Roche"]],[838,"Wagomine",["Roche","Feu"]],[839,"Monthracite",["Roche","Feu"]],
    [840,"Verpom",["Plante","Dragon"]],[841,"Pomdrapi",["Plante","Dragon"]],[842,"Dratatin",["Plante","Dragon"]],
    [843,"Dunaja",["Sol"]],[844,"Dunaconda",["Sol"]],
    [845,"Nigosier",["Vol","Eau"]],
    [846,"Embrochet",["Eau"]],[847,"Hastacuda",["Eau"]],
    [848,"Toxizap",["Électrik","Poison"]],[849,"Salarsen",["Électrik","Poison"]],
    [850,"Grillepattes",["Feu","Insecte"]],[851,"Scolocendre",["Feu","Insecte"]],
    [852,"Poulpaf",["Combat"]],[853,"Krakos",["Combat"]],
    [854,"Théffroi",["Spectre"]],[855,"Polthégeist",["Spectre"]],
    [856,"Bibichut",["Psy"]],[857,"Chapotus",["Psy"]],[858,"Sorcilence",["Psy","Fée"]],
    [859,"Grimalin",["Ténèbres","Fée"]],[860,"Fourbelin",["Ténèbres","Fée"]],[861,"Angoliath",["Ténèbres","Fée"]],
    [862,"Ixon",["Ténèbres","Normal"]],[863,"Berserkatt",["Acier"]],
    [864,"Corayôme",["Spectre"]],[865,"Palarticho",["Combat"]],[866,"M. Glaquette",["Glace","Psy"]],[867,"Tutétékri",["Sol","Spectre"]],
    [868,"Crémy",["Fée"]],[869,"Charmilly",["Fée"]],
    [870,"Hexadron",["Combat"]],[871,"Wattapik",["Électrik"]],
    [872,"Frissonille",["Glace","Insecte"]],[873,"Beldeneige",["Glace","Insecte"]],
    [874,"Dolman",["Roche"]],[875,"Bekaglaçon",["Glace"]],
    [876,"Wimessir",["Psy"]],[877,"Morpeko",["Électrik","Ténèbres"]],
    [878,"Charibari",["Acier"]],[879,"Pachyradjah",["Acier"]],
    [880,"Galvagon",["Électrik","Dragon"]],[881,"Galvagla",["Électrik","Glace"]],[882,"Hydragon",["Eau","Dragon"]],[883,"Hydragla",["Eau","Glace"]],
    [884,"Duralugon",["Acier","Dragon"]],
    [885,"Fantyrm",["Dragon","Spectre"]],[886,"Dispareptil",["Dragon","Spectre"]],[887,"Lanssorien",["Dragon","Spectre"]],
    [888,"Zacian",["Fée","Acier"]],[889,"Zamazenta",["Combat","Acier"]],[890,"Éthernatos",["Poison","Dragon"]],
    [891,"Wushours",["Combat"]],[892,"Shifours",["Combat","Ténèbres"]],[893,"Zarude",["Ténèbres","Plante"]],
    [894,"Regieleki",["Électrik"]],[895,"Regidrago",["Dragon"]],
    [896,"Blizzeval",["Glace"]],[897,"Spectreval",["Spectre"]],[898,"Sylveroy",["Psy","Plante"]],
    [899,"Cerbyllin",["Normal","Psy"]],[900,"Hachécateur",["Insecte","Roche"]],[901,"Ursaking",["Sol","Normal"]],
    [902,"Paragruel",["Eau","Spectre"]],[903,"Farfurex",["Combat","Poison"]],[904,"Qwilpik",["Poison","Ténèbres"]],[905,"Amovénus",["Fée","Vol"]]
];

const GEN9_DATA = [
    [906,"Poussacha",["Plante"]],[907,"Matourgeon",["Plante"]],[908,"Miascarade",["Plante","Ténèbres"]],
    [909,"Chochodile",["Feu"]],[910,"Crocogril",["Feu"]],[911,"Flâmigator",["Feu","Spectre"]],
    [912,"Coiffeton",["Eau"]],[913,"Canarbello",["Eau"]],[914,"Palmaval",["Eau","Combat"]],
    [915,"Gourmelet",["Normal"]],[916,"Fragroin",["Normal"]],
    [917,"Tissenlune",["Insecte"]],[918,"Filentrappe",["Insecte"]],
    [919,"Lilliterre",["Insecte"]],[920,"Gambex",["Insecte","Combat"]],
    [921,"Pohm",["Électrik"]],[922,"Pohmotte",["Électrik","Combat"]],[923,"Pawmot",["Électrik","Combat"]],
    [924,"Compagnol",["Normal"]],[925,"Famignol",["Normal"]],
    [926,"Patauchi",["Fée"]],[927,"Briochien",["Fée"]],
    [928,"Olivini",["Plante","Normal"]],[929,"Olivado",["Plante","Normal"]],[930,"Arboliva",["Plante","Normal"]],
    [931,"Tapatoès",["Normal","Vol"]],
    [932,"Selutin",["Roche"]],[933,"Selsel",["Roche"]],[934,"Gigansel",["Roche"]],
    [935,"Charbambin",["Feu"]],[936,"Carmadura",["Feu","Psy"]],[937,"Malvalame",["Feu","Spectre"]],
    [938,"Têtampoule",["Électrik"]],[939,"Ampibidou",["Électrik"]],
    [940,"Zapétrel",["Électrik","Vol"]],[941,"Fulguliro",["Électrik","Vol"]],
    [942,"Grondogue",["Normal"]],[943,"Mastouffe",["Normal"]],
    [944,"Gribouraigne",["Poison","Normal"]],[945,"Tag-Tag",["Poison","Normal"]],
    [946,"Virevorreur",["Plante","Spectre"]],
    [947,"Terracool",["Sol","Plante"]],[948,"Terracruel",["Sol","Plante"]],
    [949,"Crabaupique",["Roche"]],[950,"Craparoi",["Roche"]],
    [951,"Pimito",["Plante"]],[952,"Scovillain",["Plante","Feu"]],
    [953,"Léboulere",["Insecte"]],[954,"Bérasca",["Insecte","Psy"]],
    [955,"Flotillon",["Psy"]],[956,"Cléopsytra",["Psy"]],
    [957,"Forgerette",["Fée","Acier"]],[958,"Forgella",["Fée","Acier"]],[959,"Forgelina",["Fée","Acier"]],
    [960,"Taupikeau",["Eau"]],[961,"Triopikeau",["Eau"]],
    [962,"Lestombaile",["Vol","Ténèbres"]],
    [963,"Dofin",["Eau"]],[964,"Superdofin",["Eau"]],
    [965,"Vrombi",["Acier","Poison"]],[966,"Vrombotor",["Acier","Poison"]],
    [967,"Motorizard",["Dragon","Normal"]],
    [968,"Ferdeter",["Acier"]],
    [969,"Germéclat",["Roche","Poison"]],[970,"Floréclat",["Roche","Poison"]],
    [971,"Toutombe",["Spectre"]],[972,"Tomberro",["Spectre"]],
    [973,"Flamenroule",["Vol","Combat"]],
    [974,"Piétacé",["Glace"]],[975,"Balbalèze",["Glace"]],
    [976,"Délestin",["Eau","Psy"]],[977,"Oyacata",["Eau"]],
    [978,"Nigirigon",["Dragon","Eau"]],
    [979,"Courrousinge",["Combat","Spectre"]],
    [980,"Terraiste",["Sol","Poison"]],
    [981,"Bérubarbe",["Normal"]],[982,"Deusolourdo",["Normal"]],[983,"Scalpereur",["Acier","Ténèbres"]],
    [984,"Fort-Ivoire",["Sol","Combat"]],[985,"Hurle-Queue",["Fée","Psy"]],[986,"Fongus-Furie",["Plante","Ténèbres"]],[987,"Flotte-Mèche",["Spectre","Fée"]],[988,"Rampe-Ailes",["Insecte","Combat"]],[989,"Pelage-Sablé",["Électrik","Sol"]],
    [990,"Roue-de-Fer",["Acier","Sol"]],[991,"Hotte-de-Fer",["Glace","Eau"]],[992,"Paume-de-Fer",["Combat","Électrik"]],[993,"Têtes-de-Fer",["Ténèbres","Vol"]],[994,"Mite-de-Fer",["Feu","Poison"]],[995,"Épine-de-Fer",["Roche","Électrik"]],
    [996,"Frigodo",["Dragon","Glace"]],[997,"Cryodo",["Dragon","Glace"]],[998,"Glaivodo",["Dragon","Glace"]],
    [999,"Mordudor",["Spectre"]],[1000,"Gromago",["Acier","Spectre"]],
    [1001,"Chongjian",["Ténèbres","Plante"]],[1002,"Baojian",["Ténèbres","Glace"]],[1003,"Dinglu",["Ténèbres","Sol"]],[1004,"Yuyu",["Ténèbres","Feu"]],
    [1005,"Rugit-Lune",["Dragon","Ténèbres"]],[1006,"Garde-de-Fer",["Fée","Combat"]],
    [1007,"Koraidon",["Combat","Dragon"]],[1008,"Miraidon",["Électrik","Dragon"]],
    [1009,"Serpente-Eau",["Eau","Dragon"]],[1010,"Vert-de-Fer",["Plante","Psy"]],
    [1011,"Pomdramour",["Plante","Dragon"]],
    [1012,"Poltchageist",["Plante","Spectre"]],[1013,"Théffroyable",["Plante","Spectre"]],
    [1014,"Félicanis",["Poison","Combat"]],[1015,"Fortusimia",["Poison","Psy"]],[1016,"Favianos",["Poison","Fée"]],
    [1017,"Ogerpon",["Plante"]],[1018,"Pondralugon",["Acier","Dragon"]],[1019,"Pomdorochi",["Plante","Dragon"]],
    [1020,"Feu-Perçant",["Feu","Dragon"]],[1021,"Ire-Foudre",["Électrik","Dragon"]],
    [1022,"Roc-de-Fer",["Roche","Psy"]],[1023,"Chef-de-Fer",["Acier","Psy"]],
    [1024,"Terapagos",["Normal"]],[1025,"Pêchaminus",["Poison","Spectre"]]
];

const ZA_MEGAS_DATA = [
    [10278,"Méga-Mélodelfe",["Fée","Psy"]],[10279,"Méga-Empiflor",["Plante","Poison"]],[10280,"Méga-Staross",["Eau","Psy"]],[10281,"Méga-Dracolosse",["Dragon","Fée"]],[10282,"Méga-Méganium",["Plante","Fée"]],[10283,"Méga-Aligatueur",["Eau","Ténèbres"]],[10284,"Méga-Airmure",["Acier","Vol"]],[10285,"Méga-Momartik",["Glace","Spectre"]],[10286,"Méga-Roigada",["Eau","Psy"]],[10287,"Méga-Minotaupe",["Sol","Acier"]],[10288,"Méga-Scolocendre",["Feu","Insecte"]],[10289,"Méga-Baggiguane",["Ténèbres","Combat"]],[10290,"Méga-Ohmassacre",["Électrik"]],[10291,"Méga-Lugulabre",["Spectre","Feu"]],[10292,"Méga-Blindépique",["Plante","Combat"]],[10293,"Méga-Goupelin",["Feu","Psy"]],[10294,"Méga-Amphinobi",["Eau","Ténèbres"]],[10295,"Méga-Némélios",["Feu","Normal"]],[10296,"Méga-Floette",["Fée"]],[10297,"Méga-Sepiatroce",["Ténèbres","Psy"]],[10298,"Méga-Golgopathe",["Roche","Eau"]],[10299,"Méga-Kravarech",["Poison","Dragon"]],[10300,"Méga-Brutalibré",["Combat","Vol"]],[10301,"Méga-Zygarde",["Dragon","Sol"]],[10302,"Méga-Draïeul",["Normal","Dragon"]],[10303,"Méga-Hexadron",["Combat"]],[10304,"Méga-Raichu X",["Électrik","Combat"]],[10305,"Méga-Raichu Y",["Électrik","Psy"]],[10306,"Méga-Ëoko",["Psy","Spectre"]],[10307,"Méga-Absol Z",["Ténèbres","Fée"]],[10308,"Méga-Étouraptor",["Normal","Combat"]],[10309,"Méga-Carchacrok Z",["Dragon","Sol"]],[10310,"Méga-Lucario Z",["Combat","Acier"]],[10311,"Méga-Heatran",["Feu","Acier"]],[10312,"Méga-Darkrai",["Ténèbres","Spectre"]],[10313,"Méga-Golemastoc",["Sol","Spectre"]],[10314,"Méga-Mistigrix",["Psy"]],[10315,"Méga-Crabominable",["Glace","Combat"]],[10316,"Méga-Sarmuraï",["Insecte","Eau"]],[10317,"Méga-Magearna",["Acier","Fée"]],[10318,"Méga-Magearna Originel",["Acier","Fée"]],[10319,"Méga-Zeraora",["Électrik","Combat"]],[10320,"Méga-Pimito",["Plante","Feu"]],[10321,"Méga-Glimmora",["Roche","Poison"]],[10322,"Méga-Nigirigon Forme Courbe",["Dragon","Eau"]],[10323,"Méga-Nigirigon Forme Affalée",["Dragon","Eau"]],[10324,"Méga-Nigirigon Forme Raide",["Dragon","Eau"]],[10325,"Méga-Glaivodo",["Dragon","Glace"]]
];

const OFFICIAL_MEGAS_DATA = [
    [10033,"Méga-Florizarre",["Plante","Poison"]],[10034,"Méga-Dracaufeu X",["Feu","Dragon"]],[10035,"Méga-Dracaufeu Y",["Feu","Vol"]],[10036,"Méga-Tortank",["Eau"]],[10037,"Méga-Alakazam",["Psy"]],[10038,"Méga-Ectoplasma",["Spectre","Poison"]],[10039,"Méga-Kangourex",["Normal"]],[10040,"Méga-Scarabrute",["Insecte","Vol"]],[10041,"Méga-Léviator",["Eau","Ténèbres"]],[10042,"Méga-Ptéra",["Roche","Vol"]],[10043,"Méga-Mewtwo X",["Psy","Combat"]],[10044,"Méga-Mewtwo Y",["Psy"]],[10045,"Méga-Pharamp",["Électrik","Dragon"]],[10046,"Méga-Cizayox",["Insecte","Acier"]],[10047,"Méga-Scarhino",["Insecte","Combat"]],[10048,"Méga-Démolosse",["Feu","Ténèbres"]],[10049,"Méga-Tyranocif",["Roche","Ténèbres"]],[10050,"Méga-Braségali",["Feu","Combat"]],[10051,"Méga-Gardevoir",["Psy","Fée"]],[10052,"Méga-Mysdibule",["Acier","Fée"]],[10053,"Méga-Galeking",["Acier"]],[10054,"Méga-Charmina",["Combat","Psy"]],[10055,"Méga-Elecsprint",["Électrik"]],[10056,"Méga-Branette",["Spectre"]],[10057,"Méga-Absol",["Ténèbres"]],[10058,"Méga-Carchacrok",["Dragon","Sol"]],[10059,"Méga-Lucario",["Combat","Acier"]],[10060,"Méga-Blizzaroi",["Plante","Glace"]],[10061,"Méga-Latias",["Dragon","Psy"]],[10062,"Méga-Latios",["Dragon","Psy"]],[10064,"Méga-Laggron",["Eau","Sol"]],[10065,"Méga-Jungko",["Plante","Dragon"]],[10066,"Méga-Ténéfix",["Ténèbres","Spectre"]],[10067,"Méga-Altaria",["Dragon","Fée"]],[10068,"Méga-Gallade",["Psy","Combat"]],[10069,"Méga-Audino",["Normal","Fée"]],[10070,"Méga-Sharpedo",["Eau","Ténèbres"]],[10071,"Méga-Flagadoss",["Eau","Psy"]],[10072,"Méga-Steelix",["Acier","Sol"]],[10073,"Méga-Roucarnage",["Normal","Vol"]],[10074,"Méga-Oniglali",["Glace"]],[10075,"Méga-Diancie",["Roche","Fée"]],[10076,"Méga-Métalosse",["Acier","Psy"]],[10079,"Méga-Rayquaza",["Dragon","Vol"]],[10087,"Méga-Camérupt",["Feu","Sol"]],[10088,"Méga-Lockpin",["Normal","Combat"]],[10089,"Méga-Drattak",["Dragon","Vol"]],[10090,"Méga-Dardargnan",["Insecte","Poison"]]
];

const REGIONAL_FORMS_DATA = [
    // Alola (Gen 7)
    [10091,"Rattata d'Alola",["Normal","Ténèbres"]],[10092,"Rattatac d'Alola",["Normal","Ténèbres"]],[10093,"Raichu d'Alola",["Électrik","Psy"]],[10100,"Miaouss d'Alola",["Ténèbres"]],[10101,"Persian d'Alola",["Ténèbres"]],[10102,"Racaillou d'Alola",["Roche","Électrik"]],[10103,"Gravalanch d'Alola",["Roche","Électrik"]],[10104,"Grolem d'Alola",["Roche","Électrik"]],[10105,"Tadmorv d'Alola",["Poison","Ténèbres"]],[10106,"Grotadmorv d'Alola",["Poison","Ténèbres"]],[10107,"Noadkoko d'Alola",["Plante","Dragon"]],[10108,"Ossatueur d'Alola",["Feu","Spectre"]],[10094,"Sabelette d'Alola",["Glace","Acier"]],[10095,"Sablaireau d'Alola",["Glace","Acier"]],[10096,"Goupix d'Alola",["Glace"]],[10097,"Feunard d'Alola",["Glace","Fée"]],[10098,"Taupiqueur d'Alola",["Sol","Acier"]],[10099,"Triopikeur d'Alola",["Sol","Acier"]],
    // Galar (Gen 8)
    [10161,"Miaouss de Galar",["Acier"]],[10162,"Ponyta de Galar",["Psy"]],[10163,"Galopa de Galar",["Psy","Fée"]],[10164,"Ramoloss de Galar",["Psy"]],[10165,"Flagadoss de Galar",["Poison","Psy"]],[10172,"Roigada de Galar",["Poison","Psy"]],[10166,"Canarticho de Galar",["Combat"]],[10167,"Smogogo de Galar",["Poison","Fée"]],[10168,"M. Mime de Galar",["Glace","Psy"]],[10169,"Artikodin de Galar",["Psy","Vol"]],[10170,"Électhor de Galar",["Combat","Vol"]],[10171,"Sulfura de Galar",["Ténèbres","Vol"]],[10173,"Corayon de Galar",["Spectre"]],[10174,"Zigzaton de Galar",["Ténèbres","Normal"]],[10175,"Linéon de Galar",["Ténèbres","Normal"]],[10176,"Darumarond de Galar",["Glace"]],[10177,"Darumacho de Galar",["Glace"]],[10178,"Tutafeh de Galar",["Sol","Spectre"]],[10179,"Limonde de Galar",["Sol","Acier"]],
    // Hisui (Gen 8)
    [10229,"Caninos d'Hisui",["Feu","Roche"]],[10230,"Arcanin d'Hisui",["Feu","Roche"]],[10231,"Voltorbe d'Hisui",["Électrik","Plante"]],[10232,"Électrode d'Hisui",["Électrik","Plante"]],[10233,"Typhlosion d'Hisui",["Feu","Spectre"]],[10234,"Qwilfish d'Hisui",["Ténèbres","Poison"]],[10235,"Farfuret d'Hisui",["Combat","Poison"]],[10236,"Clamiral d'Hisui",["Eau","Ténèbres"]],[10237,"Fragilady d'Hisui",["Plante","Combat"]],[10238,"Zorua d'Hisui",["Normal","Spectre"]],[10239,"Zoroark d'Hisui",["Normal","Spectre"]],[10240,"Gueriaigle d'Hisui",["Psy","Vol"]],[10241,"Colimucus d'Hisui",["Acier","Dragon"]],[10242,"Muplodocus d'Hisui",["Acier","Dragon"]],[10243,"Séracrawl d'Hisui",["Glace","Roche"]],[10244,"Archéduc d'Hisui",["Plante","Combat"]],
    // Paldea (Gen 9)
    [10250,"Axoloto de Paldea",["Poison","Sol"]],[10251,"Tauros de Paldea (Combat)",["Combat"]],[10252,"Tauros de Paldea (Feu)",["Combat","Feu"]],[10253,"Tauros de Paldea (Eau)",["Combat","Eau"]]
];
