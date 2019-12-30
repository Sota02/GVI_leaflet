//geocoding via https://locationiq.com
var coordinates = {
    "lines":[
        {"name":"Schlossplatz","lat":"48.778580","lon":"9.179856","genre":"park"},
        {"name":"Stuttgart Hbf","lat":"48.7850623","lon":"9.1841333","genre":"transport"},
        {"name":"Hochschule für Musik und Darstellende Kunst","lat":"48.77837085","lon":"9.1863175002149","genre":"school"},
        {"name":"Stuttgart Universität","lat":"48.7452713","lon":"9.105765","genre":"school"},
        {"name":"Kicho","lat":"48.7715","lon":"9.1821351","genre":"restaurant"},
        {"name":"Bopser","lat":"48.7594441","lon":"9.1845646","genre":"transport"},
        {"name":"Burreatos","lat":"48.777219","lon":"9.172914","genre":"restaurant"},
        {"name":"Wilhelma Zoo","lat":"48.8058886","lon":"9.20458100362154","genre":"park"},
        {"name":"Killesberg","lat":"48.8039779","lon":"9.1668696","genre":"park"},
        {"name":"Pragfriedhof","lat":"48.795600","lon":"9.185423","genre":"park"},
        {"name":"Olgaeck","lat":"48.7737271","lon":"9.1848469","genre":"transport"},
        {"name":"Cannstatter Wasen","lat":"48.7965117","lon":"9.2201605","genre":"park"},
        {"name":"Hochschule für Technik Stuttgart","lat":"48.78028215","lon":"9.17246878182805","genre":"school"},
        {"name":"Hochschule der Medien Stuttgart","lat":"48.7416439","lon":"9.10102976924761","genre":"school"},
        {"name":"Palm Beach","lat":"48.7930485","lon":"9.22989431529209","genre":"restaurant"}
    ]   
}

var redIcon = L.icon({
    iconUrl: './images/pinRed.png',
    iconSize: [40, 40], // size of the icon
    iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
});

var greenIcon = L.icon({ 
    iconUrl: './images/pinGreen.png',
    iconSize: [40, 40], 
    iconAnchor: [20, 20],
});

var yellowIcon = L.icon({
    iconUrl: './images/pinYellow.png',
    iconSize: [40, 40], 
    iconAnchor: [20, 20],
});

var blueIcon = L.icon({
    iconUrl: './images/pinBlue.png',
    iconSize: [40, 40], 
    iconAnchor: [20, 20],
});

var dummyJson = {
    "lines":[
        {
          "Station ID": 1,
          "Capacity": 19,
          "Latitude": 51.529163,
          "Longitude": -0.10997,
          "Station Name": "River Street , Clerkenwell"
        },
        {
          "Station ID": 2,
          "Capacity": 37,
          "Latitude": 51.499606,
          "Longitude": -0.197574,
          "Station Name": "Phillimore Gardens, Kensington"
        }
    ]
}

var stations = {
    "lines":[
        {
          "Station ID": 1,
          "Capacity": 19,
          "Latitude": 51.529163,
          "Longitude": -0.10997,
          "Station Name": "River Street , Clerkenwell"
        },
        {
          "Station ID": 2,
          "Capacity": 37,
          "Latitude": 51.499606,
          "Longitude": -0.197574,
          "Station Name": "Phillimore Gardens, Kensington"
        },
        {
          "Station ID": 3,
          "Capacity": 32,
          "Latitude": 51.521283,
          "Longitude": -0.084605,
          "Station Name": "Christopher Street, Liverpool Street"
        },
        {
          "Station ID": 4,
          "Capacity": 23,
          "Latitude": 51.530059,
          "Longitude": -0.120973,
          "Station Name": "St. Chad's Street, King's Cross"
        },
        {
          "Station ID": 5,
          "Capacity": 27,
          "Latitude": 51.49313,
          "Longitude": -0.156876,
          "Station Name": "Sedding Street, Sloane Square"
        },
        {
          "Station ID": 6,
          "Capacity": 18,
          "Latitude": 51.518117,
          "Longitude": -0.144228,
          "Station Name": "Broadcasting House, Marylebone"
        },
        {
          "Station ID": 7,
          "Capacity": 16,
          "Latitude": 51.5343,
          "Longitude": -0.168074,
          "Station Name": "Charlbert Street, St. John's Wood"
        },
        {
          "Station ID": 8,
          "Capacity": 18,
          "Latitude": 51.528341,
          "Longitude": -0.170134,
          "Station Name": "Lodge Road, St. John's Wood"
        },
        {
          "Station ID": 9,
          "Capacity": 19,
          "Latitude": 51.507385,
          "Longitude": -0.09644,
          "Station Name": "New Globe Walk, Bankside"
        },
        {
          "Station ID": 10,
          "Capacity": 18,
          "Latitude": 51.505974,
          "Longitude": -0.092754,
          "Station Name": "Park Street, Bankside"
        },
        {
          "Station ID": 11,
          "Capacity": 24,
          "Latitude": 51.523951,
          "Longitude": -0.122502,
          "Station Name": "Brunswick Square, Bloomsbury"
        },
        {
          "Station ID": 12,
          "Capacity": 49,
          "Latitude": 51.52168,
          "Longitude": -0.130431,
          "Station Name": "Malet Street, Bloomsbury"
        },
        {
          "Station ID": 13,
          "Capacity": 21,
          "Latitude": 51.519914,
          "Longitude": -0.136039,
          "Station Name": "Scala Street, Fitzrovia"
        },
        {
          "Station ID": 14,
          "Capacity": 48,
          "Latitude": 51.529943,
          "Longitude": -0.123616,
          "Station Name": "Belgrove Street , King's Cross"
        },
        {
          "Station ID": 15,
          "Capacity": 26,
          "Latitude": 51.517727,
          "Longitude": -0.127854,
          "Station Name": "Great Russell Street, Bloomsbury"
        },
        {
          "Station ID": 16,
          "Capacity": 22,
          "Latitude": 51.526357,
          "Longitude": -0.125979,
          "Station Name": "Cartwright Gardens , Bloomsbury"
        },
        {
          "Station ID": 17,
          "Capacity": 26,
          "Latitude": 51.521661,
          "Longitude": -0.109006,
          "Station Name": "Hatton Wall, Holborn"
        },
        {
          "Station ID": 18,
          "Capacity": 27,
          "Latitude": 51.51477,
          "Longitude": -0.122219,
          "Station Name": "Drury Lane, Covent Garden"
        },
        {
          "Station ID": 19,
          "Capacity": 30,
          "Latitude": 51.52505,
          "Longitude": -0.131161,
          "Station Name": "Taviton Street, Bloomsbury"
        },
        {
          "Station ID": 20,
          "Capacity": 28,
          "Latitude": 51.527736,
          "Longitude": -0.135273,
          "Station Name": "Drummond Street , Euston"
        },
        {
          "Station ID": 21,
          "Capacity": 16,
          "Latitude": 51.530078,
          "Longitude": -0.138846,
          "Station Name": "Hampstead Road (Cartmel), Euston"
        },
        {
          "Station ID": 22,
          "Capacity": 19,
          "Latitude": 51.522264,
          "Longitude": -0.114079,
          "Station Name": "Northington Street , Holborn"
        },
        {
          "Station ID": 23,
          "Capacity": 16,
          "Latitude": 51.519435,
          "Longitude": -0.119123,
          "Station Name": "Red Lion Square, Holborn"
        },
        {
          "Station ID": 24,
          "Capacity": 35,
          "Latitude": 51.51908,
          "Longitude": -0.124678,
          "Station Name": "British Museum, Bloomsbury"
        },
        {
          "Station ID": 25,
          "Capacity": 32,
          "Latitude": 51.528833,
          "Longitude": -0.13225,
          "Station Name": "Doric Way , Somers Town"
        },
        {
          "Station ID": 26,
          "Capacity": 21,
          "Latitude": 51.52728,
          "Longitude": -0.118295,
          "Station Name": "Ampton Street , Clerkenwell"
        },
        {
          "Station ID": 27,
          "Capacity": 33,
          "Latitude": 51.513821,
          "Longitude": -0.107927,
          "Station Name": "Bouverie Street, Temple"
        },
        {
          "Station ID": 28,
          "Capacity": 19,
          "Latitude": 51.523518,
          "Longitude": -0.143613,
          "Station Name": "Bolsover Street, Fitzrovia"
        },
        {
          "Station ID": 29,
          "Capacity": 22,
          "Latitude": 51.513735,
          "Longitude": -0.193487,
          "Station Name": "Hereford Road, Bayswater"
        },
        {
          "Station ID": 30,
          "Capacity": 24,
          "Latitude": 51.529154,
          "Longitude": -0.093421,
          "Station Name": "Windsor Terrace, Hoxton"
        },
        {
          "Station ID": 31,
          "Capacity": 36,
          "Latitude": 51.529537,
          "Longitude": -0.083353,
          "Station Name": "Fanshaw Street, Hoxton"
        },
        {
          "Station ID": 32,
          "Capacity": 43,
          "Latitude": 51.524696,
          "Longitude": -0.084439,
          "Station Name": "Leonard Circus , Shoreditch"
        },
        {
          "Station ID": 33,
          "Capacity": 18,
          "Latitude": 51.5156,
          "Longitude": -0.070056,
          "Station Name": "Central House, Aldgate"
        },
        {
          "Station ID": 34,
          "Capacity": 16,
          "Latitude": 51.534123,
          "Longitude": -0.129386,
          "Station Name": "Pancras Road, King's Cross"
        },
        {
          "Station ID": 36,
          "Capacity": 28,
          "Latitude": 51.501737,
          "Longitude": -0.18498,
          "Station Name": "De Vere Gardens, Kensington"
        },
        {
          "Station ID": 37,
          "Capacity": 17,
          "Latitude": 51.491593,
          "Longitude": -0.192369,
          "Station Name": "Penywern Road, Earl's Court"
        },
        {
          "Station ID": 38,
          "Capacity": 17,
          "Latitude": 51.497387,
          "Longitude": -0.197245,
          "Station Name": "Abingdon Villas, Kensington"
        },
        {
          "Station ID": 39,
          "Capacity": 41,
          "Latitude": 51.526377,
          "Longitude": -0.07813,
          "Station Name": "Shoreditch High Street, Shoreditch"
        },
        {
          "Station ID": 40,
          "Capacity": 16,
          "Latitude": 51.52127,
          "Longitude": -0.075578,
          "Station Name": "Commercial Street, Shoreditch"
        },
        {
          "Station ID": 42,
          "Capacity": 28,
          "Latitude": 51.530991,
          "Longitude": -0.093903,
          "Station Name": "Wenlock Road , Hoxton"
        },
        {
          "Station ID": 43,
          "Capacity": 18,
          "Latitude": 51.52026,
          "Longitude": -0.157183,
          "Station Name": "Crawford Street, Marylebone"
        },
        {
          "Station ID": 44,
          "Capacity": 21,
          "Latitude": 51.510736,
          "Longitude": -0.144165,
          "Station Name": "Bruton Street, Mayfair"
        },
        {
          "Station ID": 45,
          "Capacity": 26,
          "Latitude": 51.522511,
          "Longitude": -0.162298,
          "Station Name": "Boston Place, Marylebone"
        },
        {
          "Station ID": 46,
          "Capacity": 16,
          "Latitude": 51.507131,
          "Longitude": -0.06691,
          "Station Name": "Nesham Street, Wapping"
        },
        {
          "Station ID": 47,
          "Capacity": 19,
          "Latitude": 51.523344,
          "Longitude": -0.183846,
          "Station Name": "Warwick Avenue Station, Maida Vale"
        },
        {
          "Station ID": 48,
          "Capacity": 25,
          "Latitude": 51.512484,
          "Longitude": -0.099141,
          "Station Name": "Godliman Street, St. Paul's"
        },
        {
          "Station ID": 49,
          "Capacity": 16,
          "Latitude": 51.507069,
          "Longitude": -0.145904,
          "Station Name": "Curzon Street, Mayfair"
        },
        {
          "Station ID": 50,
          "Capacity": 27,
          "Latitude": 51.528673,
          "Longitude": -0.087459,
          "Station Name": "East Road, Hoxton"
        },
        {
          "Station ID": 51,
          "Capacity": 29,
          "Latitude": 51.526717,
          "Longitude": -0.104298,
          "Station Name": "Finsbury Library , Finsbury"
        },
        {
          "Station ID": 52,
          "Capacity": 18,
          "Latitude": 51.522954,
          "Longitude": -0.094934,
          "Station Name": "Roscoe Street, St. Luke's"
        },
        {
          "Station ID": 53,
          "Capacity": 18,
          "Latitude": 51.509992,
          "Longitude": -0.143495,
          "Station Name": "Grafton Street, Mayfair"
        },
        {
          "Station ID": 54,
          "Capacity": 27,
          "Latitude": 51.521747,
          "Longitude": -0.094475,
          "Station Name": "Golden Lane, Barbican"
        },
        {
          "Station ID": 55,
          "Capacity": 33,
          "Latitude": 51.517075,
          "Longitude": -0.086685,
          "Station Name": "Finsbury Circus, Liverpool Street"
        },
        {
          "Station ID": 56,
          "Capacity": 16,
          "Latitude": 51.520583,
          "Longitude": -0.154701,
          "Station Name": "Paddington Street, Marylebone"
        },
        {
          "Station ID": 57,
          "Capacity": 32,
          "Latitude": 51.523346,
          "Longitude": -0.120202,
          "Station Name": "Guilford Street , Bloomsbury"
        },
        {
          "Station ID": 58,
          "Capacity": 20,
          "Latitude": 51.524526,
          "Longitude": -0.079248,
          "Station Name": "New Inn Yard, Shoreditch"
        },
        {
          "Station ID": 60,
          "Capacity": 18,
          "Latitude": 51.526448,
          "Longitude": -0.17219,
          "Station Name": "Lisson Grove, St. John's Wood"
        },
        {
          "Station ID": 61,
          "Capacity": 33,
          "Latitude": 51.497382,
          "Longitude": -0.089446,
          "Station Name": "Great Dover Street, The Borough"
        },
        {
          "Station ID": 62,
          "Capacity": 24,
          "Latitude": 51.490757,
          "Longitude": -0.106323,
          "Station Name": "Cotton Garden Estate, Kennington"
        },
        {
          "Station ID": 63,
          "Capacity": 27,
          "Latitude": 51.53089,
          "Longitude": -0.089782,
          "Station Name": "Murray Grove , Hoxton"
        },
        {
          "Station ID": 64,
          "Capacity": 26,
          "Latitude": 51.509462,
          "Longitude": -0.124749,
          "Station Name": "William IV Street, Strand"
        },
        {
          "Station ID": 65,
          "Capacity": 17,
          "Latitude": 51.525227,
          "Longitude": -0.135188,
          "Station Name": "Gower Place , Euston"
        },
        {
          "Station ID": 66,
          "Capacity": 40,
          "Latitude": 51.51795,
          "Longitude": -0.108657,
          "Station Name": "Holborn Circus, Holborn"
        },
        {
          "Station ID": 67,
          "Capacity": 28,
          "Latitude": 51.518825,
          "Longitude": -0.108028,
          "Station Name": "Hatton Garden, Holborn"
        },
        {
          "Station ID": 68,
          "Capacity": 26,
          "Latitude": 51.520596,
          "Longitude": -0.116688,
          "Station Name": "Theobald's Road , Holborn"
        },
        {
          "Station ID": 70,
          "Capacity": 24,
          "Latitude": 51.53136,
          "Longitude": -0.117069,
          "Station Name": "Calshot Street , King's Cross"
        },
        {
          "Station ID": 71,
          "Capacity": 34,
          "Latitude": 51.515418,
          "Longitude": -0.09885,
          "Station Name": "Newgate Street , St. Paul's"
        },
        {
          "Station ID": 72,
          "Capacity": 16,
          "Latitude": 51.52352,
          "Longitude": -0.10834,
          "Station Name": "Farringdon Lane, Clerkenwell"
        },
        {
          "Station ID": 73,
          "Capacity": 37,
          "Latitude": 51.525726,
          "Longitude": -0.088486,
          "Station Name": "Old Street Station, St. Luke's"
        },
        {
          "Station ID": 74,
          "Capacity": 17,
          "Latitude": 51.485917,
          "Longitude": -0.124469,
          "Station Name": "Vauxhall Cross, Vauxhall"
        },
        {
          "Station ID": 75,
          "Capacity": 19,
          "Latitude": 51.532199,
          "Longitude": -0.10548,
          "Station Name": "Torrens Street, Angel"
        },
        {
          "Station ID": 76,
          "Capacity": 21,
          "Latitude": 51.525595,
          "Longitude": -0.144083,
          "Station Name": "Longford Street, The Regent's Park"
        },
        {
          "Station ID": 77,
          "Capacity": 26,
          "Latitude": 51.523418,
          "Longitude": -0.124121,
          "Station Name": "Russell Square Station, Bloomsbury"
        },
        {
          "Station ID": 78,
          "Capacity": 17,
          "Latitude": 51.524868,
          "Longitude": -0.099489,
          "Station Name": "Sadlers Sports Centre, Finsbury"
        },
        {
          "Station ID": 80,
          "Capacity": 45,
          "Latitude": 51.500693,
          "Longitude": -0.102091,
          "Station Name": "Webber Street , Southwark"
        },
        {
          "Station ID": 81,
          "Capacity": 19,
          "Latitude": 51.520253,
          "Longitude": -0.141327,
          "Station Name": "Great Titchfield Street, Fitzrovia"
        },
        {
          "Station ID": 82,
          "Capacity": 15,
          "Latitude": 51.514274,
          "Longitude": -0.111257,
          "Station Name": "Chancery Lane, Holborn"
        },
        {
          "Station ID": 84,
          "Capacity": 25,
          "Latitude": 51.515937,
          "Longitude": -0.111778,
          "Station Name": "Breams Buildings, Holborn"
        },
        {
          "Station ID": 85,
          "Capacity": 41,
          "Latitude": 51.500647,
          "Longitude": -0.0786,
          "Station Name": "Tanner Street, Bermondsey"
        },
        {
          "Station ID": 86,
          "Capacity": 24,
          "Latitude": 51.489479,
          "Longitude": -0.115156,
          "Station Name": "Sancroft Street, Vauxhall"
        },
        {
          "Station ID": 87,
          "Capacity": 16,
          "Latitude": 51.516468,
          "Longitude": -0.079684,
          "Station Name": "Devonshire Square, Liverpool Street"
        },
        {
          "Station ID": 88,
          "Capacity": 25,
          "Latitude": 51.518587,
          "Longitude": -0.132053,
          "Station Name": "Bayley Street , Bloomsbury"
        },
        {
          "Station ID": 89,
          "Capacity": 18,
          "Latitude": 51.52625,
          "Longitude": -0.123509,
          "Station Name": "Tavistock Place, Bloomsbury"
        },
        {
          "Station ID": 90,
          "Capacity": 27,
          "Latitude": 51.533019,
          "Longitude": -0.139174,
          "Station Name": "Harrington Square 1, Camden Town"
        },
        {
          "Station ID": 91,
          "Capacity": 20,
          "Latitude": 51.493686,
          "Longitude": -0.111014,
          "Station Name": "Walnut Tree Walk, Vauxhall"
        },
        {
          "Station ID": 92,
          "Capacity": 41,
          "Latitude": 51.498898,
          "Longitude": -0.10044,
          "Station Name": "Borough Road, Elephant & Castle"
        },
        {
          "Station ID": 93,
          "Capacity": 37,
          "Latitude": 51.534408,
          "Longitude": -0.109025,
          "Station Name": "Cloudesley Road, Angel"
        },
        {
          "Station ID": 94,
          "Capacity": 28,
          "Latitude": 51.495061,
          "Longitude": -0.085814,
          "Station Name": "Bricklayers Arms, Borough"
        },
        {
          "Station ID": 95,
          "Capacity": 15,
          "Latitude": 51.520841,
          "Longitude": -0.09734,
          "Station Name": "Aldersgate Street, Barbican"
        },
        {
          "Station ID": 96,
          "Capacity": 26,
          "Latitude": 51.53095,
          "Longitude": -0.078505,
          "Station Name": "Falkirk Street, Hoxton"
        },
        {
          "Station ID": 97,
          "Capacity": 18,
          "Latitude": 51.497924,
          "Longitude": -0.183834,
          "Station Name": "Gloucester Road (North), Kensington"
        },
        {
          "Station ID": 98,
          "Capacity": 54,
          "Latitude": 51.525542,
          "Longitude": -0.138231,
          "Station Name": "Hampstead Road, Euston"
        },
        {
          "Station ID": 99,
          "Capacity": 16,
          "Latitude": 51.514577,
          "Longitude": -0.158264,
          "Station Name": "Old Quebec Street, Marylebone"
        },
        {
          "Station ID": 100,
          "Capacity": 24,
          "Latitude": 51.490435,
          "Longitude": -0.122806,
          "Station Name": "Albert Embankment, Vauxhall"
        },
        {
          "Station ID": 101,
          "Capacity": 22,
          "Latitude": 51.511553,
          "Longitude": -0.09294,
          "Station Name": "Queen Street 1, Bank"
        },
        {
          "Station ID": 102,
          "Capacity": 17,
          "Latitude": 51.513406,
          "Longitude": -0.076793,
          "Station Name": "Jewry Street, Aldgate"
        },
        {
          "Station ID": 103,
          "Capacity": 18,
          "Latitude": 51.504723,
          "Longitude": -0.192538,
          "Station Name": "Vicarage Gate, Kensington"
        },
        {
          "Station ID": 104,
          "Capacity": 34,
          "Latitude": 51.511594,
          "Longitude": -0.077121,
          "Station Name": "Crosswall, Tower"
        },
        {
          "Station ID": 105,
          "Capacity": 26,
          "Latitude": 51.515529,
          "Longitude": -0.19024,
          "Station Name": "Westbourne Grove, Bayswater"
        },
        {
          "Station ID": 106,
          "Capacity": 21,
          "Latitude": 51.514105,
          "Longitude": -0.147301,
          "Station Name": "Woodstock Street, Mayfair"
        },
        {
          "Station ID": 107,
          "Capacity": 20,
          "Latitude": 51.526008,
          "Longitude": -0.096317,
          "Station Name": "Finsbury Leisure Centre, St. Luke's"
        },
        {
          "Station ID": 108,
          "Capacity": 29,
          "Latitude": 51.498125,
          "Longitude": -0.132102,
          "Station Name": "Abbey Orchard Street, Westminster"
        },
        {
          "Station ID": 109,
          "Capacity": 56,
          "Latitude": 51.515631,
          "Longitude": -0.132328,
          "Station Name": "Soho Square , Soho"
        },
        {
          "Station ID": 110,
          "Capacity": 17,
          "Latitude": 51.533043,
          "Longitude": -0.172528,
          "Station Name": "Wellington Road, St. John's Wood"
        },
        {
          "Station ID": 111,
          "Capacity": 28,
          "Latitude": 51.510017,
          "Longitude": -0.157275,
          "Station Name": "Park Lane , Hyde Park"
        },
        {
          "Station ID": 112,
          "Capacity": 42,
          "Latitude": 51.515809,
          "Longitude": -0.10527,
          "Station Name": "Stonecutter Street, Holborn"
        },
        {
          "Station ID": 113,
          "Capacity": 19,
          "Latitude": 51.496462,
          "Longitude": -0.183289,
          "Station Name": "Gloucester Road (Central), South Kensington"
        },
        {
          "Station ID": 114,
          "Capacity": 22,
          "Latitude": 51.524517,
          "Longitude": -0.158963,
          "Station Name": "Park Road (Baker Street), The Regent's Park"
        },
        {
          "Station ID": 115,
          "Capacity": 34,
          "Latitude": 51.514233,
          "Longitude": -0.073537,
          "Station Name": "Braham Street, Aldgate"
        },
        {
          "Station ID": 116,
          "Capacity": 21,
          "Latitude": 51.514499,
          "Longitude": -0.141423,
          "Station Name": "Little Argyll Street, West End"
        },
        {
          "Station ID": 117,
          "Capacity": 25,
          "Latitude": 51.49288,
          "Longitude": -0.114934,
          "Station Name": "Lollard Street, Vauxhall"
        },
        {
          "Station ID": 118,
          "Capacity": 13,
          "Latitude": 51.495827,
          "Longitude": -0.135478,
          "Station Name": "Rochester Row, Westminster"
        },
        {
          "Station ID": 119,
          "Capacity": 18,
          "Latitude": 51.525893,
          "Longitude": -0.090847,
          "Station Name": "Bath Street, St. Luke's"
        },
        {
          "Station ID": 120,
          "Capacity": 17,
          "Latitude": 51.515735,
          "Longitude": -0.09308,
          "Station Name": "The Guildhall, Guildhall"
        },
        {
          "Station ID": 121,
          "Capacity": 22,
          "Latitude": 51.518913,
          "Longitude": -0.156166,
          "Station Name": "Baker Street, Marylebone"
        },
        {
          "Station ID": 122,
          "Capacity": 23,
          "Latitude": 51.521113,
          "Longitude": -0.078869,
          "Station Name": "Norton Folgate, Liverpool Street"
        },
        {
          "Station ID": 123,
          "Capacity": 18,
          "Latitude": 51.52836,
          "Longitude": -0.104724,
          "Station Name": "St. John Street, Finsbury"
        },
        {
          "Station ID": 124,
          "Capacity": 20,
          "Latitude": 51.496544,
          "Longitude": -0.150905,
          "Station Name": "Eaton Square, Belgravia"
        },
        {
          "Station ID": 125,
          "Capacity": 21,
          "Latitude": 51.500694,
          "Longitude": -0.094524,
          "Station Name": "Borough High Street, The Borough"
        },
        {
          "Station ID": 126,
          "Capacity": 52,
          "Latitude": 51.517821,
          "Longitude": -0.096496,
          "Station Name": "Museum of London, Barbican"
        },
        {
          "Station ID": 127,
          "Capacity": 17,
          "Latitude": 51.517008,
          "Longitude": -0.093885,
          "Station Name": "Wood Street, Guildhall"
        },
        {
          "Station ID": 128,
          "Capacity": 22,
          "Latitude": 51.495362,
          "Longitude": -0.185296,
          "Station Name": "Emperor's Gate, South Kensington"
        },
        {
          "Station ID": 129,
          "Capacity": 18,
          "Latitude": 51.511897,
          "Longitude": -0.137043,
          "Station Name": "Golden Square, Soho"
        },
        {
          "Station ID": 130,
          "Capacity": 24,
          "Latitude": 51.509506,
          "Longitude": -0.075459,
          "Station Name": "Tower Gardens , Tower"
        },
        {
          "Station ID": 131,
          "Capacity": 16,
          "Latitude": 51.533005,
          "Longitude": -0.136792,
          "Station Name": "Eversholt Street , Camden Town"
        },
        {
          "Station ID": 132,
          "Capacity": 38,
          "Latitude": 51.523648,
          "Longitude": -0.074754,
          "Station Name": "Bethnal Green Road, Shoreditch"
        },
        {
          "Station ID": 133,
          "Capacity": 18,
          "Latitude": 51.501364,
          "Longitude": -0.191462,
          "Station Name": "Derry Street, Kensington"
        },
        {
          "Station ID": 134,
          "Capacity": 20,
          "Latitude": 51.504904,
          "Longitude": -0.06797,
          "Station Name": "Wapping High Street, Wapping"
        },
        {
          "Station ID": 135,
          "Capacity": 21,
          "Latitude": 51.52326,
          "Longitude": -0.104708,
          "Station Name": "Clerkenwell Green, Clerkenwell"
        },
        {
          "Station ID": 136,
          "Capacity": 32,
          "Latitude": 51.511961,
          "Longitude": -0.097441,
          "Station Name": "Queen Victoria Street, St. Paul's"
        },
        {
          "Station ID": 138,
          "Capacity": 19,
          "Latitude": 51.512276,
          "Longitude": -0.157436,
          "Station Name": "Green Street, Mayfair"
        },
        {
          "Station ID": 139,
          "Capacity": 18,
          "Latitude": 51.494881,
          "Longitude": -0.117974,
          "Station Name": "Lambeth Road, Vauxhall"
        },
        {
          "Station ID": 140,
          "Capacity": 33,
          "Latitude": 51.520962,
          "Longitude": -0.085634,
          "Station Name": "Finsbury Square , Moorgate"
        },
        {
          "Station ID": 141,
          "Capacity": 29,
          "Latitude": 51.515308,
          "Longitude": -0.147203,
          "Station Name": "Chapel Place, Marylebone"
        },
        {
          "Station ID": 142,
          "Capacity": 24,
          "Latitude": 51.493724,
          "Longitude": -0.198286,
          "Station Name": "West Cromwell Road, Earl's Court"
        },
        {
          "Station ID": 143,
          "Capacity": 24,
          "Latitude": 51.496886,
          "Longitude": -0.161203,
          "Station Name": "Pont Street, Knightsbridge"
        },
        {
          "Station ID": 144,
          "Capacity": 47,
          "Latitude": 51.48894,
          "Longitude": -0.111435,
          "Station Name": "Kennington Cross, Kennington"
        },
        {
          "Station ID": 145,
          "Capacity": 24,
          "Latitude": 51.500743,
          "Longitude": -0.202759,
          "Station Name": "Ilchester Place, Kensington"
        },
        {
          "Station ID": 146,
          "Capacity": 35,
          "Latitude": 51.488365,
          "Longitude": -0.129361,
          "Station Name": "Vauxhall Bridge , Pimlico"
        },
        {
          "Station ID": 148,
          "Capacity": 16,
          "Latitude": 51.492111,
          "Longitude": -0.138364,
          "Station Name": "Tachbrook Street, Victoria"
        },
        {
          "Station ID": 149,
          "Capacity": 18,
          "Latitude": 51.484788,
          "Longitude": -0.110683,
          "Station Name": "Kennington Road Post Office, Oval"
        },
        {
          "Station ID": 150,
          "Capacity": 28,
          "Latitude": 51.497056,
          "Longitude": -0.168917,
          "Station Name": "Holy Trinity Brompton, Knightsbridge"
        },
        {
          "Station ID": 151,
          "Capacity": 26,
          "Latitude": 51.512136,
          "Longitude": -0.201554,
          "Station Name": "Chepstow Villas, Notting Hill"
        },
        {
          "Station ID": 152,
          "Capacity": 21,
          "Latitude": 51.49217,
          "Longitude": -0.101536,
          "Station Name": "Hampton Street, Walworth"
        },
        {
          "Station ID": 153,
          "Capacity": 27,
          "Latitude": 51.511933,
          "Longitude": -0.174411,
          "Station Name": "Bayswater Road, Hyde Park"
        },
        {
          "Station ID": 154,
          "Capacity": 35,
          "Latitude": 51.503791,
          "Longitude": -0.112824,
          "Station Name": "Waterloo Station 3, Waterloo"
        },
        {
          "Station ID": 155,
          "Capacity": 19,
          "Latitude": 51.495866,
          "Longitude": -0.191933,
          "Station Name": "Lexham Gardens, Kensington"
        },
        {
          "Station ID": 156,
          "Capacity": 33,
          "Latitude": 51.494436,
          "Longitude": -0.092921,
          "Station Name": "New Kent Road, The Borough"
        },
        {
          "Station ID": 157,
          "Capacity": 37,
          "Latitude": 51.500397,
          "Longitude": -0.193068,
          "Station Name": "Wright's Lane, Kensington"
        },
        {
          "Station ID": 158,
          "Capacity": 18,
          "Latitude": 51.490853,
          "Longitude": -0.19617,
          "Station Name": "Trebovir Road, Earl's Court"
        },
        {
          "Station ID": 159,
          "Capacity": 39,
          "Latitude": 51.514619,
          "Longitude": -0.137841,
          "Station Name": "Great Marlborough Street, Soho"
        },
        {
          "Station ID": 160,
          "Capacity": 20,
          "Latitude": 51.506633,
          "Longitude": -0.131773,
          "Station Name": "Waterloo Place, St. James's"
        },
        {
          "Station ID": 161,
          "Capacity": 16,
          "Latitude": 51.492345,
          "Longitude": -0.141334,
          "Station Name": "Guildhouse Street, Victoria"
        },
        {
          "Station ID": 162,
          "Capacity": 20,
          "Latitude": 51.517606,
          "Longitude": -0.121328,
          "Station Name": "Southampton Place, Holborn"
        },
        {
          "Station ID": 163,
          "Capacity": 27,
          "Latitude": 51.493184,
          "Longitude": -0.167894,
          "Station Name": "Sloane Avenue, Knightsbridge"
        },
        {
          "Station ID": 164,
          "Capacity": 16,
          "Latitude": 51.515607,
          "Longitude": -0.183118,
          "Station Name": "Cleveland Gardens, Bayswater"
        },
        {
          "Station ID": 165,
          "Capacity": 15,
          "Latitude": 51.517932,
          "Longitude": -0.183716,
          "Station Name": "Orsett Terrace, Bayswater"
        },
        {
          "Station ID": 166,
          "Capacity": 27,
          "Latitude": 51.501855,
          "Longitude": -0.159237,
          "Station Name": "Seville Street, Knightsbridge"
        },
        {
          "Station ID": 167,
          "Capacity": 19,
          "Latitude": 51.49395,
          "Longitude": -0.147624,
          "Station Name": "Eccleston Place, Victoria"
        },
        {
          "Station ID": 168,
          "Capacity": 19,
          "Latitude": 51.500401,
          "Longitude": -0.195455,
          "Station Name": "Argyll Road, Kensington"
        },
        {
          "Station ID": 169,
          "Capacity": 18,
          "Latitude": 51.514746,
          "Longitude": -0.165164,
          "Station Name": "Porchester Place, Paddington"
        },
        {
          "Station ID": 170,
          "Capacity": 30,
          "Latitude": 51.527842,
          "Longitude": -0.108068,
          "Station Name": "Hardwick Street, Clerkenwell"
        },
        {
          "Station ID": 171,
          "Capacity": 14,
          "Latitude": 51.491615,
          "Longitude": -0.186753,
          "Station Name": "Collingham Gardens, Earl's Court"
        },
        {
          "Station ID": 172,
          "Capacity": 19,
          "Latitude": 51.491211,
          "Longitude": -0.173715,
          "Station Name": "Sumner Place, South Kensington"
        },
        {
          "Station ID": 173,
          "Capacity": 15,
          "Latitude": 51.50486,
          "Longitude": -0.113001,
          "Station Name": "Waterloo Road, South Bank"
        },
        {
          "Station ID": 174,
          "Capacity": 36,
          "Latitude": 51.512529,
          "Longitude": -0.115163,
          "Station Name": "Strand, Strand"
        },
        {
          "Station ID": 175,
          "Capacity": 26,
          "Latitude": 51.521743,
          "Longitude": -0.081118,
          "Station Name": "Appold Street, Liverpool Street"
        },
        {
          "Station ID": 176,
          "Capacity": 23,
          "Latitude": 51.517919,
          "Longitude": -0.188098,
          "Station Name": "Gloucester Terrace, Bayswater"
        },
        {
          "Station ID": 177,
          "Capacity": 25,
          "Latitude": 51.49616,
          "Longitude": -0.140947,
          "Station Name": "Ashley Place, Victoria"
        },
        {
          "Station ID": 178,
          "Capacity": 19,
          "Latitude": 51.489856,
          "Longitude": -0.141923,
          "Station Name": "Warwick Square, Pimlico"
        },
        {
          "Station ID": 180,
          "Capacity": 17,
          "Latitude": 51.512911,
          "Longitude": -0.153645,
          "Station Name": "North Audley Street, Mayfair"
        },
        {
          "Station ID": 181,
          "Capacity": 21,
          "Latitude": 51.499412,
          "Longitude": -0.152317,
          "Station Name": "Belgrave Square, Belgravia"
        },
        {
          "Station ID": 182,
          "Capacity": 18,
          "Latitude": 51.522029,
          "Longitude": -0.165842,
          "Station Name": "Bell Street , Marylebone"
        },
        {
          "Station ID": 183,
          "Capacity": 24,
          "Latitude": 51.482362,
          "Longitude": -0.136123,
          "Station Name": "Riverlight North, Nine Elms"
        },
        {
          "Station ID": 184,
          "Capacity": 34,
          "Latitude": 51.520715,
          "Longitude": -0.145211,
          "Station Name": "Portland Place, Marylebone"
        },
        {
          "Station ID": 185,
          "Capacity": 14,
          "Latitude": 51.488057,
          "Longitude": -0.140741,
          "Station Name": "Alderney Street, Pimlico"
        },
        {
          "Station ID": 186,
          "Capacity": 16,
          "Latitude": 51.517335,
          "Longitude": -0.17581,
          "Station Name": "South Wharf Road, Paddington"
        },
        {
          "Station ID": 191,
          "Capacity": 28,
          "Latitude": 51.503117,
          "Longitude": -0.15352,
          "Station Name": "Hyde Park Corner, Hyde Park"
        },
        {
          "Station ID": 192,
          "Capacity": 16,
          "Latitude": 51.512515,
          "Longitude": -0.133201,
          "Station Name": "Wardour Street, Soho"
        },
        {
          "Station ID": 193,
          "Capacity": 60,
          "Latitude": 51.505817,
          "Longitude": -0.100186,
          "Station Name": "Bankside Mix, Bankside"
        },
        {
          "Station ID": 199,
          "Capacity": 24,
          "Latitude": 51.510484,
          "Longitude": -0.082989,
          "Station Name": "Great Tower Street, Monument"
        },
        {
          "Station ID": 200,
          "Capacity": 14,
          "Latitude": 51.514924,
          "Longitude": -0.066078,
          "Station Name": "LMU Commercial Road, Whitechapel"
        },
        {
          "Station ID": 202,
          "Capacity": 37,
          "Latitude": 51.512363,
          "Longitude": -0.069542,
          "Station Name": "Leman Street, Aldgate"
        },
        {
          "Station ID": 203,
          "Capacity": 15,
          "Latitude": 51.518218,
          "Longitude": -0.100791,
          "Station Name": "West Smithfield Rotunda, Farringdon"
        },
        {
          "Station ID": 204,
          "Capacity": 19,
          "Latitude": 51.526599,
          "Longitude": -0.112432,
          "Station Name": "Margery Street, Clerkenwell"
        },
        {
          "Station ID": 206,
          "Capacity": 36,
          "Latitude": 51.518154,
          "Longitude": -0.062697,
          "Station Name": "New Road 1 , Whitechapel"
        },
        {
          "Station ID": 207,
          "Capacity": 18,
          "Latitude": 51.501352,
          "Longitude": -0.153194,
          "Station Name": "Grosvenor Crescent, Belgravia"
        },
        {
          "Station ID": 208,
          "Capacity": 20,
          "Latitude": 51.525051,
          "Longitude": -0.166304,
          "Station Name": "Mallory Street, Marylebone"
        },
        {
          "Station ID": 209,
          "Capacity": 30,
          "Latitude": 51.493583,
          "Longitude": -0.165101,
          "Station Name": "Denyer Street, Knightsbridge"
        },
        {
          "Station ID": 210,
          "Capacity": 21,
          "Latitude": 51.516814,
          "Longitude": -0.151926,
          "Station Name": "Hinde Street, Marylebone"
        },
        {
          "Station ID": 211,
          "Capacity": 34,
          "Latitude": 51.494645,
          "Longitude": -0.158105,
          "Station Name": "Cadogan Place, Knightsbridge"
        },
        {
          "Station ID": 212,
          "Capacity": 17,
          "Latitude": 51.506584,
          "Longitude": -0.199004,
          "Station Name": "Campden Hill Road, Notting Hill"
        },
        {
          "Station ID": 213,
          "Capacity": 36,
          "Latitude": 51.50274,
          "Longitude": -0.149569,
          "Station Name": "Wellington Arch, Hyde Park"
        },
        {
          "Station ID": 214,
          "Capacity": 32,
          "Latitude": 51.526838,
          "Longitude": -0.130504,
          "Station Name": "Endsleigh Gardens, Euston"
        },
        {
          "Station ID": 215,
          "Capacity": 54,
          "Latitude": 51.519069,
          "Longitude": -0.088285,
          "Station Name": "Moorfields, Moorgate"
        },
        {
          "Station ID": 216,
          "Capacity": 30,
          "Latitude": 51.490945,
          "Longitude": -0.18119,
          "Station Name": "Old Brompton Road, South Kensington"
        },
        {
          "Station ID": 217,
          "Capacity": 16,
          "Latitude": 51.516154,
          "Longitude": -0.082422,
          "Station Name": "Wormwood Street, Liverpool Street"
        },
        {
          "Station ID": 218,
          "Capacity": 20,
          "Latitude": 51.489716,
          "Longitude": -0.170194,
          "Station Name": "St. Luke's Church, Chelsea"
        },
        {
          "Station ID": 219,
          "Capacity": 29,
          "Latitude": 51.490163,
          "Longitude": -0.190393,
          "Station Name": "Bramham Gardens, Earl's Court"
        },
        {
          "Station ID": 220,
          "Capacity": 27,
          "Latitude": 51.490664,
          "Longitude": -0.166485,
          "Station Name": "Chelsea Green, Chelsea"
        },
        {
          "Station ID": 221,
          "Capacity": 16,
          "Latitude": 51.494816,
          "Longitude": -0.130458,
          "Station Name": "Horseferry Road, Westminster"
        },
        {
          "Station ID": 222,
          "Capacity": 43,
          "Latitude": 51.502757,
          "Longitude": -0.155349,
          "Station Name": "Knightsbridge, Hyde Park"
        },
        {
          "Station ID": 223,
          "Capacity": 24,
          "Latitude": 51.491484,
          "Longitude": -0.09022,
          "Station Name": "Rodney Road , Walworth"
        },
        {
          "Station ID": 224,
          "Capacity": 16,
          "Latitude": 51.514769,
          "Longitude": -0.188129,
          "Station Name": "Whiteley's, Bayswater"
        },
        {
          "Station ID": 225,
          "Capacity": 30,
          "Latitude": 51.509353,
          "Longitude": -0.196422,
          "Station Name": "Notting Hill Gate Station, Notting Hill"
        },
        {
          "Station ID": 226,
          "Capacity": 24,
          "Latitude": 51.508446,
          "Longitude": -0.131961,
          "Station Name": "Charles II Street, West End"
        },
        {
          "Station ID": 227,
          "Capacity": 23,
          "Latitude": 51.528915,
          "Longitude": -0.11548,
          "Station Name": "Great Percy Street, Clerkenwell"
        },
        {
          "Station ID": 228,
          "Capacity": 40,
          "Latitude": 51.507424,
          "Longitude": -0.134621,
          "Station Name": "St. James's Square, St. James's"
        },
        {
          "Station ID": 229,
          "Capacity": 24,
          "Latitude": 51.506543,
          "Longitude": -0.123179,
          "Station Name": "Whitehall Place, Strand"
        },
        {
          "Station ID": 230,
          "Capacity": 31,
          "Latitude": 51.506692,
          "Longitude": -0.103137,
          "Station Name": "Poured Lines, Bankside"
        },
        {
          "Station ID": 231,
          "Capacity": 31,
          "Latitude": 51.493967,
          "Longitude": -0.178732,
          "Station Name": "Queen's Gate (Central), South Kensington"
        },
        {
          "Station ID": 232,
          "Capacity": 16,
          "Latitude": 51.51501,
          "Longitude": -0.112753,
          "Station Name": "Carey Street, Holborn"
        },
        {
          "Station ID": 233,
          "Capacity": 22,
          "Latitude": 51.50777,
          "Longitude": -0.130699,
          "Station Name": "Pall Mall East, West End"
        },
        {
          "Station ID": 234,
          "Capacity": 24,
          "Latitude": 51.534504,
          "Longitude": -0.106992,
          "Station Name": "Liverpool Road (N1 Centre), Angel"
        },
        {
          "Station ID": 235,
          "Capacity": 36,
          "Latitude": 51.495718,
          "Longitude": -0.110889,
          "Station Name": "Kennington Road  , Vauxhall"
        },
        {
          "Station ID": 236,
          "Capacity": 30,
          "Latitude": 51.51838,
          "Longitude": -0.073438,
          "Station Name": "Fashion Street, Whitechapel"
        },
        {
          "Station ID": 237,
          "Capacity": 30,
          "Latitude": 51.509786,
          "Longitude": -0.068161,
          "Station Name": "Dock Street, Wapping"
        },
        {
          "Station ID": 238,
          "Capacity": 32,
          "Latitude": 51.523353,
          "Longitude": -0.175116,
          "Station Name": "Frampton Street, Paddington"
        },
        {
          "Station ID": 239,
          "Capacity": 26,
          "Latitude": 51.524438,
          "Longitude": -0.138019,
          "Station Name": "Warren Street Station, Euston"
        },
        {
          "Station ID": 240,
          "Capacity": 14,
          "Latitude": 51.505459,
          "Longitude": -0.105692,
          "Station Name": "Colombo Street, Southwark"
        },
        {
          "Station ID": 242,
          "Capacity": 23,
          "Latitude": 51.522008,
          "Longitude": -0.151359,
          "Station Name": "Beaumont Street, Marylebone"
        },
        {
          "Station ID": 243,
          "Capacity": 25,
          "Latitude": 51.490962,
          "Longitude": -0.139625,
          "Station Name": "Gloucester Street, Pimlico"
        },
        {
          "Station ID": 244,
          "Capacity": 18,
          "Latitude": 51.516118,
          "Longitude": -0.128585,
          "Station Name": "Earnshaw Street , Covent Garden"
        },
        {
          "Station ID": 245,
          "Capacity": 29,
          "Latitude": 51.485357,
          "Longitude": -0.142207,
          "Station Name": "Grosvenor Road, Pimlico"
        },
        {
          "Station ID": 246,
          "Capacity": 41,
          "Latitude": 51.522853,
          "Longitude": -0.099994,
          "Station Name": "Berry Street, Clerkenwell"
        },
        {
          "Station ID": 247,
          "Capacity": 50,
          "Latitude": 51.530052,
          "Longitude": -0.168314,
          "Station Name": "St. John's Wood Church, The Regent's Park"
        },
        {
          "Station ID": 248,
          "Capacity": 27,
          "Latitude": 51.506451,
          "Longitude": -0.170279,
          "Station Name": "Triangle Car Park, Hyde Park"
        },
        {
          "Station ID": 249,
          "Capacity": 42,
          "Latitude": 51.498597,
          "Longitude": -0.096191,
          "Station Name": "Harper Road, The Borough"
        },
        {
          "Station ID": 250,
          "Capacity": 10,
          "Latitude": 51.489932,
          "Longitude": -0.162727,
          "Station Name": "Royal Avenue 1, Chelsea"
        },
        {
          "Station ID": 251,
          "Capacity": 34,
          "Latitude": 51.518908,
          "Longitude": -0.079249,
          "Station Name": "Brushfield Street, Liverpool Street"
        },
        {
          "Station ID": 252,
          "Capacity": 30,
          "Latitude": 51.504636,
          "Longitude": -0.116542,
          "Station Name": "Jubilee Gardens, South Bank"
        },
        {
          "Station ID": 253,
          "Capacity": 30,
          "Latitude": 51.534042,
          "Longitude": -0.086379,
          "Station Name": "Shoreditch Park, Hoxton"
        },
        {
          "Station ID": 254,
          "Capacity": 17,
          "Latitude": 51.530515,
          "Longitude": -0.106408,
          "Station Name": "Chadwell Street, Angel"
        },
        {
          "Station ID": 255,
          "Capacity": 22,
          "Latitude": 51.525575,
          "Longitude": -0.179592,
          "Station Name": "Clifton Road, Maida Vale"
        },
        {
          "Station ID": 256,
          "Capacity": 15,
          "Latitude": 51.51362,
          "Longitude": -0.116764,
          "Station Name": "Houghton Street, Strand"
        },
        {
          "Station ID": 257,
          "Capacity": 16,
          "Latitude": 51.522481,
          "Longitude": -0.154907,
          "Station Name": "Westminster University, Marylebone"
        },
        {
          "Station ID": 258,
          "Capacity": 23,
          "Latitude": 51.501432,
          "Longitude": -0.178656,
          "Station Name": "Kensington Gore, Knightsbridge"
        },
        {
          "Station ID": 260,
          "Capacity": 18,
          "Latitude": 51.513684,
          "Longitude": -0.13558,
          "Station Name": "Broadwick Street, Soho"
        },
        {
          "Station ID": 261,
          "Capacity": 15,
          "Latitude": 51.513489,
          "Longitude": -0.191351,
          "Station Name": "Princes Square, Bayswater"
        },
        {
          "Station ID": 262,
          "Capacity": 35,
          "Latitude": 51.498744,
          "Longitude": -0.103132,
          "Station Name": "LSBU (Borough Road), Elephant & Castle"
        },
        {
          "Station ID": 263,
          "Capacity": 21,
          "Latitude": 51.514225,
          "Longitude": -0.08066,
          "Station Name": "St. Mary Axe, Aldgate"
        },
        {
          "Station ID": 264,
          "Capacity": 20,
          "Latitude": 51.526443,
          "Longitude": -0.109256,
          "Station Name": "Tysoe Street, Clerkenwell"
        },
        {
          "Station ID": 265,
          "Capacity": 17,
          "Latitude": 51.515953,
          "Longitude": -0.169249,
          "Station Name": "Southwick Street, Paddington"
        },
        {
          "Station ID": 266,
          "Capacity": 41,
          "Latitude": 51.501026,
          "Longitude": -0.180246,
          "Station Name": "Queen's Gate (North), Kensington"
        },
        {
          "Station ID": 267,
          "Capacity": 22,
          "Latitude": 51.49206,
          "Longitude": -0.132224,
          "Station Name": "Regency Street, Westminster"
        },
        {
          "Station ID": 268,
          "Capacity": 29,
          "Latitude": 51.493204,
          "Longitude": -0.144132,
          "Station Name": "Belgrave Road, Victoria"
        },
        {
          "Station ID": 269,
          "Capacity": 46,
          "Latitude": 51.500823,
          "Longitude": -0.08974,
          "Station Name": "Empire Square, The Borough"
        },
        {
          "Station ID": 270,
          "Capacity": 31,
          "Latitude": 51.486343,
          "Longitude": -0.122492,
          "Station Name": "Kennington Lane Rail Bridge, Vauxhall"
        },
        {
          "Station ID": 271,
          "Capacity": 32,
          "Latitude": 51.535836,
          "Longitude": -0.156285,
          "Station Name": "London Zoo,  The Regent's Park"
        },
        {
          "Station ID": 272,
          "Capacity": 22,
          "Latitude": 51.501444,
          "Longitude": -0.110699,
          "Station Name": "Baylis Road, Waterloo"
        },
        {
          "Station ID": 273,
          "Capacity": 38,
          "Latitude": 51.506133,
          "Longitude": -0.114686,
          "Station Name": "Belvedere Road 1, South Bank"
        },
        {
          "Station ID": 274,
          "Capacity": 36,
          "Latitude": 51.496712,
          "Longitude": -0.205284,
          "Station Name": "Warwick Road, Olympia"
        },
        {
          "Station ID": 275,
          "Capacity": 19,
          "Latitude": 51.520044,
          "Longitude": -0.092176,
          "Station Name": "Barbican Centre, Barbican"
        },
        {
          "Station ID": 276,
          "Capacity": 24,
          "Latitude": 51.509301,
          "Longitude": -0.084985,
          "Station Name": "Lower Thames Street, Monument"
        },
        {
          "Station ID": 277,
          "Capacity": 17,
          "Latitude": 51.503157,
          "Longitude": -0.191496,
          "Station Name": "Kensington Church Street, Kensington"
        },
        {
          "Station ID": 278,
          "Capacity": 17,
          "Latitude": 51.503493,
          "Longitude": -0.07962,
          "Station Name": "Tooley Street, Bermondsey"
        },
        {
          "Station ID": 279,
          "Capacity": 25,
          "Latitude": 51.518622,
          "Longitude": -0.176645,
          "Station Name": "North Wharf Road, Paddington"
        },
        {
          "Station ID": 280,
          "Capacity": 10,
          "Latitude": 51.490083,
          "Longitude": -0.162418,
          "Station Name": "Royal Avenue 2, Chelsea"
        },
        {
          "Station ID": 281,
          "Capacity": 18,
          "Latitude": 51.495805,
          "Longitude": -0.127575,
          "Station Name": "Smith Square, Westminster"
        },
        {
          "Station ID": 282,
          "Capacity": 42,
          "Latitude": 51.519064,
          "Longitude": -0.059642,
          "Station Name": "Royal London Hospital, Whitechapel"
        },
        {
          "Station ID": 283,
          "Capacity": 16,
          "Latitude": 51.514409,
          "Longitude": -0.118478,
          "Station Name": "Kingsway, Covent Garden"
        },
        {
          "Station ID": 284,
          "Capacity": 20,
          "Latitude": 51.49914,
          "Longitude": -0.112031,
          "Station Name": "Lambeth North Station, Waterloo"
        },
        {
          "Station ID": 286,
          "Capacity": 35,
          "Latitude": 51.527294,
          "Longitude": -0.174653,
          "Station Name": "St. John's Wood Road, St. John's Wood"
        },
        {
          "Station ID": 287,
          "Capacity": 23,
          "Latitude": 51.523673,
          "Longitude": -0.128377,
          "Station Name": "Bedford Way, Bloomsbury"
        },
        {
          "Station ID": 288,
          "Capacity": 34,
          "Latitude": 51.492369,
          "Longitude": -0.147478,
          "Station Name": "Elizabeth Bridge, Victoria"
        },
        {
          "Station ID": 289,
          "Capacity": 15,
          "Latitude": 51.50923,
          "Longitude": -0.151296,
          "Station Name": "South Audley Street, Mayfair"
        },
        {
          "Station ID": 290,
          "Capacity": 15,
          "Latitude": 51.51678,
          "Longitude": -0.175488,
          "Station Name": "Winsland Street, Paddington"
        },
        {
          "Station ID": 291,
          "Capacity": 32,
          "Latitude": 51.484839,
          "Longitude": -0.138089,
          "Station Name": "Claverton Street, Pimlico"
        },
        {
          "Station ID": 292,
          "Capacity": 16,
          "Latitude": 51.498884,
          "Longitude": -0.165471,
          "Station Name": "Montpelier Street, Knightsbridge"
        },
        {
          "Station ID": 293,
          "Capacity": 25,
          "Latitude": 51.498157,
          "Longitude": -0.209494,
          "Station Name": "Kensington Olympia Station, Olympia"
        },
        {
          "Station ID": 294,
          "Capacity": 16,
          "Latitude": 51.488226,
          "Longitude": -0.135635,
          "Station Name": "St. George's Square, Pimlico"
        },
        {
          "Station ID": 295,
          "Capacity": 27,
          "Latitude": 51.500296,
          "Longitude": -0.092762,
          "Station Name": "Swan Street, The Borough"
        },
        {
          "Station ID": 296,
          "Capacity": 18,
          "Latitude": 51.493631,
          "Longitude": -0.190603,
          "Station Name": "Knaresborough Place, Earl's Court"
        },
        {
          "Station ID": 297,
          "Capacity": 17,
          "Latitude": 51.496127,
          "Longitude": -0.106,
          "Station Name": "Geraldine Street, Elephant & Castle"
        },
        {
          "Station ID": 298,
          "Capacity": 21,
          "Latitude": 51.502279,
          "Longitude": -0.074189,
          "Station Name": "Curlew Street, Shad Thames"
        },
        {
          "Station ID": 299,
          "Capacity": 19,
          "Latitude": 51.493985,
          "Longitude": -0.136928,
          "Station Name": "Vincent Square, Westminster"
        },
        {
          "Station ID": 301,
          "Capacity": 24,
          "Latitude": 51.514759,
          "Longitude": -0.148105,
          "Station Name": "Marylebone Lane, Marylebone"
        },
        {
          "Station ID": 302,
          "Capacity": 28,
          "Latitude": 51.466907,
          "Longitude": -0.216573,
          "Station Name": "Putney Pier, Wandsworth"
        },
        {
          "Station ID": 303,
          "Capacity": 28,
          "Latitude": 51.502953,
          "Longitude": -0.158456,
          "Station Name": "Albert Gate, Hyde Park"
        },
        {
          "Station ID": 305,
          "Capacity": 15,
          "Latitude": 51.486779,
          "Longitude": -0.115853,
          "Station Name": "Kennington Lane Tesco, Vauxhall"
        },
        {
          "Station ID": 306,
          "Capacity": 16,
          "Latitude": 51.518162,
          "Longitude": -0.135025,
          "Station Name": "Rathbone Street, Fitzrovia"
        },
        {
          "Station ID": 307,
          "Capacity": 24,
          "Latitude": 51.509908,
          "Longitude": -0.187842,
          "Station Name": "Black Lion Gate, Kensington Gardens"
        },
        {
          "Station ID": 308,
          "Capacity": 20,
          "Latitude": 51.499075,
          "Longitude": -0.085666,
          "Station Name": "Long Lane , Bermondsey"
        },
        {
          "Station ID": 309,
          "Capacity": 41,
          "Latitude": 51.509631,
          "Longitude": -0.119047,
          "Station Name": "Embankment (Savoy), Strand"
        },
        {
          "Station ID": 310,
          "Capacity": 19,
          "Latitude": 51.490867,
          "Longitude": -0.116911,
          "Station Name": "Black Prince Road, Vauxhall"
        },
        {
          "Station ID": 312,
          "Capacity": 20,
          "Latitude": 51.530889,
          "Longitude": -0.17677,
          "Station Name": "Grove End Road, St. John's Wood"
        },
        {
          "Station ID": 313,
          "Capacity": 38,
          "Latitude": 51.517344,
          "Longitude": -0.138072,
          "Station Name": "Wells Street, Fitzrovia"
        },
        {
          "Station ID": 314,
          "Capacity": 36,
          "Latitude": 51.500889,
          "Longitude": -0.083159,
          "Station Name": "Tyers Gate, Bermondsey"
        },
        {
          "Station ID": 315,
          "Capacity": 16,
          "Latitude": 51.525367,
          "Longitude": -0.153463,
          "Station Name": "The Tennis Courts, The Regent's Park"
        },
        {
          "Station ID": 317,
          "Capacity": 32,
          "Latitude": 51.496791,
          "Longitude": -0.093913,
          "Station Name": "Dickens Square, Borough"
        },
        {
          "Station ID": 318,
          "Capacity": 18,
          "Latitude": 51.510048,
          "Longitude": -0.138846,
          "Station Name": "Sackville Street, Mayfair"
        },
        {
          "Station ID": 319,
          "Capacity": 21,
          "Latitude": 51.527025,
          "Longitude": -0.088542,
          "Station Name": "Baldwin Street, St. Luke's"
        },
        {
          "Station ID": 320,
          "Capacity": 26,
          "Latitude": 51.493573,
          "Longitude": -0.139956,
          "Station Name": "Queen Mother Sports Centre, Victoria"
        },
        {
          "Station ID": 321,
          "Capacity": 24,
          "Latitude": 51.497855,
          "Longitude": -0.081608,
          "Station Name": "Bermondsey Street, Bermondsey"
        },
        {
          "Station ID": 322,
          "Capacity": 26,
          "Latitude": 51.526293,
          "Longitude": -0.073955,
          "Station Name": "Palissy Street, Shoreditch"
        },
        {
          "Station ID": 323,
          "Capacity": 24,
          "Latitude": 51.523196,
          "Longitude": -0.083067,
          "Station Name": "Clifton Street, Shoreditch"
        },
        {
          "Station ID": 324,
          "Capacity": 15,
          "Latitude": 51.49652,
          "Longitude": -0.101384,
          "Station Name": "Ontario Street, Elephant & Castle"
        },
        {
          "Station ID": 325,
          "Capacity": 18,
          "Latitude": 51.509087,
          "Longitude": -0.129697,
          "Station Name": "St. Martin's Street, West End"
        },
        {
          "Station ID": 326,
          "Capacity": 25,
          "Latitude": 51.532661,
          "Longitude": -0.099981,
          "Station Name": "Graham Street, Angel"
        },
        {
          "Station ID": 327,
          "Capacity": 22,
          "Latitude": 51.53095,
          "Longitude": -0.085603,
          "Station Name": "New North Road 1, Hoxton"
        },
        {
          "Station ID": 328,
          "Capacity": 22,
          "Latitude": 51.53114,
          "Longitude": -0.086016,
          "Station Name": "New North Road 2, Hoxton"
        },
        {
          "Station ID": 329,
          "Capacity": 24,
          "Latitude": 51.535892,
          "Longitude": -0.160854,
          "Station Name": "Prince Albert Road, The Regent's Park"
        },
        {
          "Station ID": 330,
          "Capacity": 34,
          "Latitude": 51.516417,
          "Longitude": -0.179135,
          "Station Name": "Eastbourne Mews, Paddington"
        },
        {
          "Station ID": 331,
          "Capacity": 30,
          "Latitude": 51.520858,
          "Longitude": -0.089887,
          "Station Name": "Bunhill Row, Moorgate"
        },
        {
          "Station ID": 332,
          "Capacity": 20,
          "Latitude": 51.493343,
          "Longitude": -0.194757,
          "Station Name": "Nevern Place, Earl's Court"
        },
        {
          "Station ID": 333,
          "Capacity": 37,
          "Latitude": 51.508605,
          "Longitude": -0.193764,
          "Station Name": "Palace Gardens Terrace, Notting Hill"
        },
        {
          "Station ID": 334,
          "Capacity": 10,
          "Latitude": 51.505044,
          "Longitude": -0.115851,
          "Station Name": "Concert Hall Approach 1, South Bank"
        },
        {
          "Station ID": 335,
          "Capacity": 33,
          "Latitude": 51.511968,
          "Longitude": -0.120718,
          "Station Name": "Tavistock Street, Covent Garden"
        },
        {
          "Station ID": 336,
          "Capacity": 18,
          "Latitude": 51.504942,
          "Longitude": -0.115533,
          "Station Name": "Concert Hall Approach 2, South Bank"
        },
        {
          "Station ID": 337,
          "Capacity": 16,
          "Latitude": 51.511084,
          "Longitude": -0.197524,
          "Station Name": "Pembridge Villas, Notting Hill"
        },
        {
          "Station ID": 338,
          "Capacity": 23,
          "Latitude": 51.511756,
          "Longitude": -0.119643,
          "Station Name": "Wellington Street , Strand"
        },
        {
          "Station ID": 339,
          "Capacity": 25,
          "Latitude": 51.533319,
          "Longitude": -0.111781,
          "Station Name": "Risinghill Street, Angel"
        },
        {
          "Station ID": 340,
          "Capacity": 16,
          "Latitude": 51.514441,
          "Longitude": -0.087587,
          "Station Name": "Bank of England Museum, Bank"
        },
        {
          "Station ID": 341,
          "Capacity": 23,
          "Latitude": 51.508103,
          "Longitude": -0.126021,
          "Station Name": "Craven Street, Strand"
        },
        {
          "Station ID": 343,
          "Capacity": 36,
          "Latitude": 51.536922,
          "Longitude": -0.150181,
          "Station Name": "London Zoo Car Park, The Regent's Park"
        },
        {
          "Station ID": 344,
          "Capacity": 17,
          "Latitude": 51.528246,
          "Longitude": -0.101026,
          "Station Name": "Goswell Road (City Uni), Finsbury"
        },
        {
          "Station ID": 345,
          "Capacity": 33,
          "Latitude": 51.488023,
          "Longitude": -0.166878,
          "Station Name": "Flood Street, Chelsea"
        },
        {
          "Station ID": 347,
          "Capacity": 17,
          "Latitude": 51.500139,
          "Longitude": -0.113936,
          "Station Name": "Lower Marsh, Waterloo"
        },
        {
          "Station ID": 348,
          "Capacity": 17,
          "Latitude": 51.51217,
          "Longitude": -0.150481,
          "Station Name": "Grosvenor Square, Mayfair"
        },
        {
          "Station ID": 349,
          "Capacity": 18,
          "Latitude": 51.51196,
          "Longitude": -0.142783,
          "Station Name": "St. George Street, Mayfair"
        },
        {
          "Station ID": 350,
          "Capacity": 21,
          "Latitude": 51.501715,
          "Longitude": -0.179854,
          "Station Name": "Queen's Gate, Kensington Gardens"
        },
        {
          "Station ID": 351,
          "Capacity": 28,
          "Latitude": 51.529423,
          "Longitude": -0.097122,
          "Station Name": "Macclesfield Rd, St Lukes"
        },
        {
          "Station ID": 352,
          "Capacity": 19,
          "Latitude": 51.486965,
          "Longitude": -0.116625,
          "Station Name": "Vauxhall Street, Vauxhall"
        },
        {
          "Station ID": 353,
          "Capacity": 17,
          "Latitude": 51.494591,
          "Longitude": -0.134234,
          "Station Name": "Greycoat Street , Westminster"
        },
        {
          "Station ID": 354,
          "Capacity": 37,
          "Latitude": 51.506767,
          "Longitude": -0.123702,
          "Station Name": "Northumberland Avenue, Strand"
        },
        {
          "Station ID": 355,
          "Capacity": 21,
          "Latitude": 51.486575,
          "Longitude": -0.117286,
          "Station Name": "Oval Way, Vauxhall"
        },
        {
          "Station ID": 356,
          "Capacity": 15,
          "Latitude": 51.494412,
          "Longitude": -0.173881,
          "Station Name": "South Kensington Station, South Kensington"
        },
        {
          "Station ID": 357,
          "Capacity": 30,
          "Latitude": 51.520994,
          "Longitude": -0.139016,
          "Station Name": "Howland Street, Fitzrovia"
        },
        {
          "Station ID": 358,
          "Capacity": 20,
          "Latitude": 51.516226,
          "Longitude": -0.124826,
          "Station Name": "High Holborn , Covent Garden"
        },
        {
          "Station ID": 359,
          "Capacity": 18,
          "Latitude": 51.497829,
          "Longitude": -0.13544,
          "Station Name": "Butler Place, Westminster"
        },
        {
          "Station ID": 360,
          "Capacity": 27,
          "Latitude": 51.496753,
          "Longitude": -0.138733,
          "Station Name": "Howick Place, Westminster"
        },
        {
          "Station ID": 361,
          "Capacity": 55,
          "Latitude": 51.503919,
          "Longitude": -0.113426,
          "Station Name": "Waterloo Station 2, Waterloo"
        },
        {
          "Station ID": 362,
          "Capacity": 57,
          "Latitude": 51.536264,
          "Longitude": -0.133952,
          "Station Name": "Royal College Street, Camden Town"
        },
        {
          "Station ID": 363,
          "Capacity": 24,
          "Latitude": 51.529121,
          "Longitude": -0.171185,
          "Station Name": "Lord's, St. John's Wood"
        },
        {
          "Station ID": 364,
          "Capacity": 41,
          "Latitude": 51.519656,
          "Longitude": -0.132339,
          "Station Name": "Alfred Place, Bloomsbury"
        },
        {
          "Station ID": 365,
          "Capacity": 47,
          "Latitude": 51.530344,
          "Longitude": -0.100168,
          "Station Name": "City Road, Angel"
        },
        {
          "Station ID": 366,
          "Capacity": 27,
          "Latitude": 51.510919,
          "Longitude": -0.151126,
          "Station Name": "Millennium Hotel, Mayfair"
        },
        {
          "Station ID": 367,
          "Capacity": 16,
          "Latitude": 51.517372,
          "Longitude": -0.164207,
          "Station Name": "Harrowby Street, Marylebone"
        },
        {
          "Station ID": 368,
          "Capacity": 25,
          "Latitude": 51.500241,
          "Longitude": -0.15934,
          "Station Name": "Harriet Street, Knightsbridge"
        },
        {
          "Station ID": 370,
          "Capacity": 20,
          "Latitude": 51.520205,
          "Longitude": -0.174593,
          "Station Name": "Paddington Green, Paddington"
        },
        {
          "Station ID": 371,
          "Capacity": 22,
          "Latitude": 51.49775,
          "Longitude": -0.10988,
          "Station Name": "King Edward Walk, Waterloo"
        },
        {
          "Station ID": 372,
          "Capacity": 24,
          "Latitude": 51.515208,
          "Longitude": -0.117863,
          "Station Name": "Sardinia Street, Holborn"
        },
        {
          "Station ID": 373,
          "Capacity": 18,
          "Latitude": 51.499806,
          "Longitude": -0.176415,
          "Station Name": "Prince Consort Road, Knightsbridge"
        },
        {
          "Station ID": 374,
          "Capacity": 36,
          "Latitude": 51.504027,
          "Longitude": -0.113864,
          "Station Name": "Waterloo Station 1, Waterloo"
        },
        {
          "Station ID": 375,
          "Capacity": 18,
          "Latitude": 51.501945,
          "Longitude": -0.194392,
          "Station Name": "Kensington Town Hall, Kensington"
        },
        {
          "Station ID": 376,
          "Capacity": 24,
          "Latitude": 51.491884,
          "Longitude": -0.125674,
          "Station Name": "Millbank Tower, Pimlico"
        },
        {
          "Station ID": 377,
          "Capacity": 15,
          "Latitude": 51.505354,
          "Longitude": -0.113656,
          "Station Name": "Waterloo Bridge, South Bank"
        },
        {
          "Station ID": 378,
          "Capacity": 42,
          "Latitude": 51.495592,
          "Longitude": -0.179077,
          "Station Name": "Natural History Museum, South Kensington"
        },
        {
          "Station ID": 379,
          "Capacity": 21,
          "Latitude": 51.514311,
          "Longitude": -0.200838,
          "Station Name": "Turquoise Island, Notting Hill"
        },
        {
          "Station ID": 380,
          "Capacity": 21,
          "Latitude": 51.506864,
          "Longitude": -0.150666,
          "Station Name": "Stanhope Gate, Mayfair"
        },
        {
          "Station ID": 381,
          "Capacity": 14,
          "Latitude": 51.51953,
          "Longitude": -0.135777,
          "Station Name": "Charlotte Street, Fitzrovia"
        },
        {
          "Station ID": 382,
          "Capacity": 15,
          "Latitude": 51.509351,
          "Longitude": -0.147449,
          "Station Name": "Farm Street, Mayfair"
        },
        {
          "Station ID": 383,
          "Capacity": 18,
          "Latitude": 51.513103,
          "Longitude": -0.131213,
          "Station Name": "Frith Street, Soho"
        },
        {
          "Station ID": 384,
          "Capacity": 15,
          "Latitude": 51.496481,
          "Longitude": -0.192404,
          "Station Name": "Marloes Road, Kensington"
        },
        {
          "Station ID": 386,
          "Capacity": 16,
          "Latitude": 51.513527,
          "Longitude": -0.13011,
          "Station Name": "Moor Street, Soho"
        },
        {
          "Station ID": 387,
          "Capacity": 30,
          "Latitude": 51.493699,
          "Longitude": -0.121394,
          "Station Name": "Fire Brigade Pier, Vauxhall"
        },
        {
          "Station ID": 388,
          "Capacity": 14,
          "Latitude": 51.510701,
          "Longitude": -0.121723,
          "Station Name": "Southampton Street, Strand"
        },
        {
          "Station ID": 389,
          "Capacity": 18,
          "Latitude": 51.51013,
          "Longitude": -0.155757,
          "Station Name": "Upper Grosvenor Street, Mayfair"
        },
        {
          "Station ID": 390,
          "Capacity": 41,
          "Latitude": 51.521776,
          "Longitude": -0.068856,
          "Station Name": "Buxton Street 1, Shoreditch"
        },
        {
          "Station ID": 392,
          "Capacity": 21,
          "Latitude": 51.499428,
          "Longitude": -0.179702,
          "Station Name": "Imperial College, Knightsbridge"
        },
        {
          "Station ID": 393,
          "Capacity": 15,
          "Latitude": 51.517334,
          "Longitude": -0.103604,
          "Station Name": "Snow Hill, Farringdon"
        },
        {
          "Station ID": 394,
          "Capacity": 18,
          "Latitude": 51.524826,
          "Longitude": -0.176268,
          "Station Name": "Aberdeen Place, St. John's Wood"
        },
        {
          "Station ID": 395,
          "Capacity": 15,
          "Latitude": 51.492462,
          "Longitude": -0.159919,
          "Station Name": "Cadogan Gardens, Chelsea"
        },
        {
          "Station ID": 396,
          "Capacity": 16,
          "Latitude": 51.51809,
          "Longitude": -0.163609,
          "Station Name": "Shouldham Street, Marylebone"
        },
        {
          "Station ID": 397,
          "Capacity": 16,
          "Latitude": 51.51348,
          "Longitude": -0.17977,
          "Station Name": "Devonshire Terrace, Bayswater"
        },
        {
          "Station ID": 398,
          "Capacity": 30,
          "Latitude": 51.502319,
          "Longitude": -0.200742,
          "Station Name": "Holland Park, Kensington"
        },
        {
          "Station ID": 399,
          "Capacity": 24,
          "Latitude": 51.522617,
          "Longitude": -0.071653,
          "Station Name": "Brick Lane Market, Shoreditch"
        },
        {
          "Station ID": 400,
          "Capacity": 26,
          "Latitude": 51.517703,
          "Longitude": -0.154106,
          "Station Name": "George Street, Marylebone"
        },
        {
          "Station ID": 401,
          "Capacity": 24,
          "Latitude": 51.528187,
          "Longitude": -0.075375,
          "Station Name": "Columbia Road, Shoreditch"
        },
        {
          "Station ID": 402,
          "Capacity": 15,
          "Latitude": 51.522892,
          "Longitude": -0.171681,
          "Station Name": "Penfold Street, Marylebone"
        },
        {
          "Station ID": 403,
          "Capacity": 16,
          "Latitude": 51.516892,
          "Longitude": -0.158249,
          "Station Name": "George Place Mews, Marylebone"
        },
        {
          "Station ID": 404,
          "Capacity": 13,
          "Latitude": 51.502042,
          "Longitude": -0.1844,
          "Station Name": "Palace Gate, Kensington Gardens"
        },
        {
          "Station ID": 405,
          "Capacity": 15,
          "Latitude": 51.494185,
          "Longitude": -0.18267,
          "Station Name": "Gloucester Road Station, South Kensington"
        },
        {
          "Station ID": 408,
          "Capacity": 40,
          "Latitude": 51.519943,
          "Longitude": -0.170704,
          "Station Name": "Paddington Green Police Station, Paddington"
        },
        {
          "Station ID": 409,
          "Capacity": 41,
          "Latitude": 51.493146,
          "Longitude": -0.099828,
          "Station Name": "Strata, Elephant & Castle"
        },
        {
          "Station ID": 410,
          "Capacity": 64,
          "Latitude": 51.519968,
          "Longitude": -0.169774,
          "Station Name": "Edgware Road Station, Marylebone"
        },
        {
          "Station ID": 411,
          "Capacity": 33,
          "Latitude": 51.493372,
          "Longitude": -0.09968,
          "Station Name": "Walworth Road, Elephant & Castle"
        },
        {
          "Station ID": 412,
          "Capacity": 17,
          "Latitude": 51.488105,
          "Longitude": -0.110121,
          "Station Name": "Cleaver Street, Kennington"
        },
        {
          "Station ID": 419,
          "Capacity": 15,
          "Latitude": 51.485821,
          "Longitude": -0.149004,
          "Station Name": "Chelsea Bridge, Pimlico"
        },
        {
          "Station ID": 420,
          "Capacity": 37,
          "Latitude": 51.504043,
          "Longitude": -0.105312,
          "Station Name": "Southwark Station 1, Southwark"
        },
        {
          "Station ID": 421,
          "Capacity": 45,
          "Latitude": 51.504044,
          "Longitude": -0.104778,
          "Station Name": "Southwark Station 2, Southwark"
        },
        {
          "Station ID": 423,
          "Capacity": 31,
          "Latitude": 51.494561,
          "Longitude": -0.153933,
          "Station Name": "Eaton Square (South), Belgravia"
        },
        {
          "Station ID": 424,
          "Capacity": 29,
          "Latitude": 51.490491,
          "Longitude": -0.149186,
          "Station Name": "Ebury Bridge, Pimlico"
        },
        {
          "Station ID": 425,
          "Capacity": 38,
          "Latitude": 51.533379,
          "Longitude": -0.139159,
          "Station Name": "Harrington Square 2, Camden Town"
        },
        {
          "Station ID": 426,
          "Capacity": 17,
          "Latitude": 51.493072,
          "Longitude": -0.129925,
          "Station Name": "Vincent Street, Pimlico"
        },
        {
          "Station ID": 427,
          "Capacity": 43,
          "Latitude": 51.51397,
          "Longitude": -0.09294,
          "Station Name": "Cheapside, Bank"
        },
        {
          "Station ID": 428,
          "Capacity": 20,
          "Latitude": 51.499917,
          "Longitude": -0.174554,
          "Station Name": "Exhibition Road, Knightsbridge"
        },
        {
          "Station ID": 430,
          "Capacity": 18,
          "Latitude": 51.48902,
          "Longitude": -0.17524,
          "Station Name": "South Parade, Chelsea"
        },
        {
          "Station ID": 431,
          "Capacity": 20,
          "Latitude": 51.534474,
          "Longitude": -0.122203,
          "Station Name": "Crinan Street, King's Cross"
        },
        {
          "Station ID": 432,
          "Capacity": 22,
          "Latitude": 51.496957,
          "Longitude": -0.173894,
          "Station Name": "Exhibition Road Museums, South Kensington"
        },
        {
          "Station ID": 433,
          "Capacity": 33,
          "Latitude": 51.524564,
          "Longitude": -0.116279,
          "Station Name": "Wren Street, Holborn"
        },
        {
          "Station ID": 435,
          "Capacity": 23,
          "Latitude": 51.488852,
          "Longitude": -0.105593,
          "Station Name": "Kennington Station, Kennington"
        },
        {
          "Station ID": 436,
          "Capacity": 36,
          "Latitude": 51.51824,
          "Longitude": -0.11655,
          "Station Name": "Red Lion Street, Holborn"
        },
        {
          "Station ID": 437,
          "Capacity": 27,
          "Latitude": 51.488124,
          "Longitude": -0.120903,
          "Station Name": "Vauxhall Walk, Vauxhall"
        },
        {
          "Station ID": 439,
          "Capacity": 22,
          "Latitude": 51.5338,
          "Longitude": -0.118677,
          "Station Name": "Killick Street, King's Cross"
        },
        {
          "Station ID": 440,
          "Capacity": 33,
          "Latitude": 51.483145,
          "Longitude": -0.113134,
          "Station Name": "Kennington Oval, Oval"
        },
        {
          "Station ID": 441,
          "Capacity": 24,
          "Latitude": 51.495656,
          "Longitude": -0.114605,
          "Station Name": "Sail Street, Vauxhall"
        },
        {
          "Station ID": 442,
          "Capacity": 24,
          "Latitude": 51.510101,
          "Longitude": -0.211358,
          "Station Name": "Walmer Road, Avondale"
        },
        {
          "Station ID": 443,
          "Capacity": 30,
          "Latitude": 51.515256,
          "Longitude": -0.058641,
          "Station Name": "Philpot Street, Whitechapel"
        },
        {
          "Station ID": 444,
          "Capacity": 24,
          "Latitude": 51.52568,
          "Longitude": -0.055312,
          "Station Name": "Bethnal Green Garden, Bethnal Green"
        },
        {
          "Station ID": 445,
          "Capacity": 28,
          "Latitude": 51.52388,
          "Longitude": -0.065076,
          "Station Name": "Cheshire Street, Bethnal Green"
        },
        {
          "Station ID": 446,
          "Capacity": 27,
          "Latitude": 51.528936,
          "Longitude": -0.055894,
          "Station Name": "York Hall, Bethnal Green"
        },
        {
          "Station ID": 447,
          "Capacity": 54,
          "Latitude": 51.493381,
          "Longitude": -0.007542,
          "Station Name": "Jubilee Crescent, Cubitt Town"
        },
        {
          "Station ID": 448,
          "Capacity": 36,
          "Latitude": 51.50623,
          "Longitude": -0.02296,
          "Station Name": "Fisherman's Walk West, Canary Wharf"
        },
        {
          "Station ID": 449,
          "Capacity": 35,
          "Latitude": 51.511088,
          "Longitude": -0.057159,
          "Station Name": "Shadwell Station, Shadwell"
        },
        {
          "Station ID": 450,
          "Capacity": 28,
          "Latitude": 51.515975,
          "Longitude": -0.053177,
          "Station Name": "Jubilee Street, Stepney"
        },
        {
          "Station ID": 451,
          "Capacity": 16,
          "Latitude": 51.504719,
          "Longitude": -0.063531,
          "Station Name": "Hermitage Court, Wapping"
        },
        {
          "Station ID": 452,
          "Capacity": 24,
          "Latitude": 51.505697,
          "Longitude": -0.070542,
          "Station Name": "St. Katharine's Way, Tower"
        },
        {
          "Station ID": 453,
          "Capacity": 24,
          "Latitude": 51.508447,
          "Longitude": -0.055167,
          "Station Name": "Garnet Street, Shadwell"
        },
        {
          "Station ID": 454,
          "Capacity": 20,
          "Latitude": 51.487679,
          "Longitude": -0.021582,
          "Station Name": "Napier Avenue, Millwall"
        },
        {
          "Station ID": 455,
          "Capacity": 17,
          "Latitude": 51.49447,
          "Longitude": -0.014409,
          "Station Name": "East Ferry Road, Cubitt Town"
        },
        {
          "Station ID": 456,
          "Capacity": 33,
          "Latitude": 51.538071,
          "Longitude": -0.144664,
          "Station Name": "Parkway, Camden Town"
        },
        {
          "Station ID": 457,
          "Capacity": 29,
          "Latitude": 51.542138,
          "Longitude": -0.145393,
          "Station Name": "Castlehaven Road, Camden Town"
        },
        {
          "Station ID": 458,
          "Capacity": 28,
          "Latitude": 51.504749,
          "Longitude": -0.057544,
          "Station Name": "Wapping Lane, Wapping"
        },
        {
          "Station ID": 459,
          "Capacity": 17,
          "Latitude": 51.535179,
          "Longitude": -0.03338,
          "Station Name": "Gunmakers Lane, Old Ford"
        },
        {
          "Station ID": 460,
          "Capacity": 33,
          "Latitude": 51.516196,
          "Longitude": -0.029138,
          "Station Name": "Burdett Road, Mile End"
        },
        {
          "Station ID": 462,
          "Capacity": 45,
          "Latitude": 51.541603,
          "Longitude": -0.138853,
          "Station Name": "Bonny Street, Camden Town"
        },
        {
          "Station ID": 463,
          "Capacity": 22,
          "Latitude": 51.534776,
          "Longitude": -0.071881,
          "Station Name": "Thurtle Road, Haggerston"
        },
        {
          "Station ID": 464,
          "Capacity": 25,
          "Latitude": 51.51417,
          "Longitude": -0.052099,
          "Station Name": "St. Mary & St. Michael Church, Stepney"
        },
        {
          "Station ID": 465,
          "Capacity": 28,
          "Latitude": 51.53558,
          "Longitude": -0.08249,
          "Station Name": "Pitfield Street North,Hoxton"
        },
        {
          "Station ID": 466,
          "Capacity": 21,
          "Latitude": 51.534464,
          "Longitude": -0.076341,
          "Station Name": "Whiston Road, Haggerston"
        },
        {
          "Station ID": 467,
          "Capacity": 17,
          "Latitude": 51.523538,
          "Longitude": -0.030556,
          "Station Name": "Southern Grove, Bow"
        },
        {
          "Station ID": 468,
          "Capacity": 24,
          "Latitude": 51.521564,
          "Longitude": -0.022694,
          "Station Name": "Cantrell Road, Bow"
        },
        {
          "Station ID": 469,
          "Capacity": 44,
          "Latitude": 51.513757,
          "Longitude": -0.020467,
          "Station Name": "Lindfield Street, Poplar"
        },
        {
          "Station ID": 470,
          "Capacity": 46,
          "Latitude": 51.530535,
          "Longitude": -0.025492,
          "Station Name": "Mostyn Grove, Bow"
        },
        {
          "Station ID": 471,
          "Capacity": 19,
          "Latitude": 51.533283,
          "Longitude": -0.028155,
          "Station Name": "Hewison Street, Old Ford"
        },
        {
          "Station ID": 472,
          "Capacity": 21,
          "Latitude": 51.529452,
          "Longitude": -0.027616,
          "Station Name": "Malmesbury Road, Bow"
        },
        {
          "Station ID": 473,
          "Capacity": 19,
          "Latitude": 51.496137,
          "Longitude": -0.019355,
          "Station Name": "Millharbour, Millwall"
        },
        {
          "Station ID": 474,
          "Capacity": 39,
          "Latitude": 51.498125,
          "Longitude": -0.011457,
          "Station Name": "Castalia Square, Cubitt Town"
        },
        {
          "Station ID": 475,
          "Capacity": 57,
          "Latitude": 51.499041,
          "Longitude": -0.020157,
          "Station Name": "Lightermans Road, Millwall"
        },
        {
          "Station ID": 476,
          "Capacity": 29,
          "Latitude": 51.489096,
          "Longitude": -0.009205,
          "Station Name": "Stebondale Street, Cubitt Town"
        },
        {
          "Station ID": 477,
          "Capacity": 36,
          "Latitude": 51.49109,
          "Longitude": -0.018716,
          "Station Name": "Spindrift Avenue, Millwall"
        },
        {
          "Station ID": 478,
          "Capacity": 21,
          "Latitude": 51.521889,
          "Longitude": -0.04667,
          "Station Name": "Stepney Green Station, Stepney"
        },
        {
          "Station ID": 479,
          "Capacity": 20,
          "Latitude": 51.527152,
          "Longitude": -0.058005,
          "Station Name": "Pott Street, Bethnal Green"
        },
        {
          "Station ID": 480,
          "Capacity": 25,
          "Latitude": 51.512871,
          "Longitude": -0.038986,
          "Station Name": "Flamborough Street, Limehouse"
        },
        {
          "Station ID": 481,
          "Capacity": 35,
          "Latitude": 51.487129,
          "Longitude": -0.009001,
          "Station Name": "Saunders Ness Road, Cubitt Town"
        },
        {
          "Station ID": 482,
          "Capacity": 26,
          "Latitude": 51.509843,
          "Longitude": -0.02377,
          "Station Name": "Thornfield House, Poplar"
        },
        {
          "Station ID": 483,
          "Capacity": 33,
          "Latitude": 51.51328,
          "Longitude": -0.047784,
          "Station Name": "Albert Gardens, Stepney"
        },
        {
          "Station ID": 484,
          "Capacity": 24,
          "Latitude": 51.528828,
          "Longitude": -0.013258,
          "Station Name": "Bromley High Street, Bow"
        },
        {
          "Station ID": 485,
          "Capacity": 24,
          "Latitude": 51.531127,
          "Longitude": -0.048017,
          "Station Name": "Old Ford Road, Bethnal Green"
        },
        {
          "Station ID": 486,
          "Capacity": 37,
          "Latitude": 51.525645,
          "Longitude": -0.069543,
          "Station Name": "Granby Street, Shoreditch"
        },
        {
          "Station ID": 487,
          "Capacity": 23,
          "Latitude": 51.511811,
          "Longitude": -0.025626,
          "Station Name": "Canton Street, Poplar"
        },
        {
          "Station ID": 488,
          "Capacity": 22,
          "Latitude": 51.506946,
          "Longitude": -0.058681,
          "Station Name": "Reardon Street, Wapping"
        },
        {
          "Station ID": 489,
          "Capacity": 34,
          "Latitude": 51.513074,
          "Longitude": -0.064094,
          "Station Name": "Christian Street, Whitechapel"
        },
        {
          "Station ID": 490,
          "Capacity": 45,
          "Latitude": 51.508622,
          "Longitude": -0.065006,
          "Station Name": "Pennington Street, Wapping"
        },
        {
          "Station ID": 491,
          "Capacity": 45,
          "Latitude": 51.522507,
          "Longitude": -0.041378,
          "Station Name": "Queen Mary's, Mile End"
        },
        {
          "Station ID": 492,
          "Capacity": 63,
          "Latitude": 51.524677,
          "Longitude": -0.03562,
          "Station Name": "The Green Bridge, Mile End"
        },
        {
          "Station ID": 494,
          "Capacity": 36,
          "Latitude": 51.50196,
          "Longitude": -0.016251,
          "Station Name": "South Quay East, Canary Wharf"
        },
        {
          "Station ID": 495,
          "Capacity": 39,
          "Latitude": 51.528169,
          "Longitude": -0.018703,
          "Station Name": "Bow Church Station, Bow"
        },
        {
          "Station ID": 496,
          "Capacity": 39,
          "Latitude": 51.52512,
          "Longitude": -0.015578,
          "Station Name": "Devons Road, Bow"
        },
        {
          "Station ID": 497,
          "Capacity": 27,
          "Latitude": 51.526177,
          "Longitude": -0.027467,
          "Station Name": "Merchant Street, Bow"
        },
        {
          "Station ID": 498,
          "Capacity": 41,
          "Latitude": 51.527058,
          "Longitude": -0.025296,
          "Station Name": "Bow Road Station, Bow"
        },
        {
          "Station ID": 499,
          "Capacity": 36,
          "Latitude": 51.519265,
          "Longitude": -0.021345,
          "Station Name": "Furze Green, Bow"
        },
        {
          "Station ID": 500,
          "Capacity": 41,
          "Latitude": 51.519806,
          "Longitude": -0.055731,
          "Station Name": "Ansell House, Stepney"
        },
        {
          "Station ID": 501,
          "Capacity": 24,
          "Latitude": 51.522561,
          "Longitude": -0.054883,
          "Station Name": "Cephas Street, Bethnal Green"
        },
        {
          "Station ID": 503,
          "Capacity": 36,
          "Latitude": 51.520893,
          "Longitude": -0.051394,
          "Station Name": "Cleveland Way, Stepney"
        },
        {
          "Station ID": 504,
          "Capacity": 30,
          "Latitude": 51.496454,
          "Longitude": -0.009506,
          "Station Name": "St. John's Park, Cubitt Town"
        },
        {
          "Station ID": 505,
          "Capacity": 29,
          "Latitude": 51.520398,
          "Longitude": -0.026768,
          "Station Name": "Ackroyd Drive, Bow"
        },
        {
          "Station ID": 506,
          "Capacity": 23,
          "Latitude": 51.517475,
          "Longitude": -0.075855,
          "Station Name": "Bell Lane, Liverpool Street"
        },
        {
          "Station ID": 507,
          "Capacity": 31,
          "Latitude": 51.528692,
          "Longitude": -0.059091,
          "Station Name": "Clarkson Street, Bethnal Green"
        },
        {
          "Station ID": 508,
          "Capacity": 18,
          "Latitude": 51.519362,
          "Longitude": -0.074431,
          "Station Name": "Fournier Street, Whitechapel"
        },
        {
          "Station ID": 509,
          "Capacity": 19,
          "Latitude": 51.517842,
          "Longitude": -0.090075,
          "Station Name": "Fore Street, Guildhall"
        },
        {
          "Station ID": 510,
          "Capacity": 41,
          "Latitude": 51.509303,
          "Longitude": -0.025996,
          "Station Name": "Westferry DLR, Limehouse"
        },
        {
          "Station ID": 511,
          "Capacity": 33,
          "Latitude": 51.511066,
          "Longitude": -0.053558,
          "Station Name": "Sutton Street, Shadwell"
        },
        {
          "Station ID": 512,
          "Capacity": 30,
          "Latitude": 51.532091,
          "Longitude": -0.06142,
          "Station Name": "Pritchard's Road, Bethnal Green"
        },
        {
          "Station ID": 513,
          "Capacity": 51,
          "Latitude": 51.514222,
          "Longitude": -0.055656,
          "Station Name": "Watney Market, Stepney"
        },
        {
          "Station ID": 514,
          "Capacity": 17,
          "Latitude": 51.516204,
          "Longitude": -0.155525,
          "Station Name": "Portman Square, Marylebone"
        },
        {
          "Station ID": 515,
          "Capacity": 24,
          "Latitude": 51.500088,
          "Longitude": -0.211316,
          "Station Name": "Russell Gardens, Olympia"
        },
        {
          "Station ID": 516,
          "Capacity": 18,
          "Latitude": 51.5112,
          "Longitude": -0.014438,
          "Station Name": "Chrisp Street Market, Poplar"
        },
        {
          "Station ID": 517,
          "Capacity": 17,
          "Latitude": 51.532513,
          "Longitude": -0.033085,
          "Station Name": "Ford Road, Old Ford"
        },
        {
          "Station ID": 518,
          "Capacity": 30,
          "Latitude": 51.528224,
          "Longitude": -0.037471,
          "Station Name": "Antill Road, Mile End"
        },
        {
          "Station ID": 519,
          "Capacity": 33,
          "Latitude": 51.518811,
          "Longitude": -0.011662,
          "Station Name": "Teviot Street, Poplar"
        },
        {
          "Station ID": 520,
          "Capacity": 21,
          "Latitude": 51.526041,
          "Longitude": -0.047218,
          "Station Name": "Bancroft Road, Bethnal Green"
        },
        {
          "Station ID": 521,
          "Capacity": 19,
          "Latitude": 51.534137,
          "Longitude": -0.037366,
          "Station Name": "Driffield Road, Old Ford"
        },
        {
          "Station ID": 522,
          "Capacity": 36,
          "Latitude": 51.525941,
          "Longitude": -0.036017,
          "Station Name": "Clinton Road, Mile End"
        },
        {
          "Station ID": 523,
          "Capacity": 24,
          "Latitude": 51.51549,
          "Longitude": -0.013475,
          "Station Name": "Langdon Park, Poplar"
        },
        {
          "Station ID": 524,
          "Capacity": 38,
          "Latitude": 51.511654,
          "Longitude": -0.179668,
          "Station Name": "Lancaster Gate , Bayswater"
        },
        {
          "Station ID": 526,
          "Capacity": 27,
          "Latitude": 51.503143,
          "Longitude": -0.008428,
          "Station Name": "Lancaster Drive, Blackwall"
        },
        {
          "Station ID": 527,
          "Capacity": 20,
          "Latitude": 51.503802,
          "Longitude": -0.215808,
          "Station Name": "Hansard Mews, Holland Park"
        },
        {
          "Station ID": 528,
          "Capacity": 16,
          "Latitude": 51.507326,
          "Longitude": -0.145827,
          "Station Name": "Clarges Street, Mayfair"
        },
        {
          "Station ID": 529,
          "Capacity": 18,
          "Latitude": 51.486892,
          "Longitude": -0.170983,
          "Station Name": "Manresa Road, Chelsea"
        },
        {
          "Station ID": 530,
          "Capacity": 18,
          "Latitude": 51.508896,
          "Longitude": -0.012413,
          "Station Name": "Newby Place, Poplar"
        },
        {
          "Station ID": 531,
          "Capacity": 21,
          "Latitude": 51.530326,
          "Longitude": -0.042744,
          "Station Name": "Twig Folly Bridge, Mile End"
        },
        {
          "Station ID": 532,
          "Capacity": 63,
          "Latitude": 51.50357,
          "Longitude": -0.020068,
          "Station Name": "Jubilee Plaza, Canary Wharf"
        },
        {
          "Station ID": 533,
          "Capacity": 33,
          "Latitude": 51.528222,
          "Longitude": -0.069743,
          "Station Name": "Wellington Row, Bethnal Green"
        },
        {
          "Station ID": 534,
          "Capacity": 27,
          "Latitude": 51.531864,
          "Longitude": -0.066035,
          "Station Name": "Goldsmith's Row, Haggerston"
        },
        {
          "Station ID": 535,
          "Capacity": 24,
          "Latitude": 51.537349,
          "Longitude": -0.147154,
          "Station Name": "Gloucester Avenue, Camden Town"
        },
        {
          "Station ID": 536,
          "Capacity": 35,
          "Latitude": 51.53385,
          "Longitude": -0.06992,
          "Station Name": "Queensbridge Road, Haggerston"
        },
        {
          "Station ID": 537,
          "Capacity": 18,
          "Latitude": 51.51793,
          "Longitude": -0.067937,
          "Station Name": "Old Montague Street, Whitechapel"
        },
        {
          "Station ID": 538,
          "Capacity": 21,
          "Latitude": 51.508981,
          "Longitude": -0.00699,
          "Station Name": "Naval Row, Blackwall"
        },
        {
          "Station ID": 539,
          "Capacity": 22,
          "Latitude": 51.531091,
          "Longitude": -0.075901,
          "Station Name": "Hoxton Station, Hoxton"
        },
        {
          "Station ID": 540,
          "Capacity": 27,
          "Latitude": 51.528302,
          "Longitude": -0.144466,
          "Station Name": "Albany Street, The Regent's Park"
        },
        {
          "Station ID": 541,
          "Capacity": 28,
          "Latitude": 51.506613,
          "Longitude": -0.142844,
          "Station Name": "Green Park Station, Mayfair"
        },
        {
          "Station ID": 542,
          "Capacity": 33,
          "Latitude": 51.514115,
          "Longitude": -0.033828,
          "Station Name": "Salmon Lane, Limehouse"
        },
        {
          "Station ID": 543,
          "Capacity": 21,
          "Latitude": 51.509591,
          "Longitude": -0.204666,
          "Station Name": "Lansdowne Walk, Ladbroke Grove"
        },
        {
          "Station ID": 544,
          "Capacity": 22,
          "Latitude": 51.526153,
          "Longitude": -0.102208,
          "Station Name": "Percival Street, Finsbury"
        },
        {
          "Station ID": 545,
          "Capacity": 24,
          "Latitude": 51.539957,
          "Longitude": -0.145246,
          "Station Name": "Arlington Road, Camden Town"
        },
        {
          "Station ID": 546,
          "Capacity": 21,
          "Latitude": 51.517428,
          "Longitude": -0.107987,
          "Station Name": "New Fetter Lane, Holborn"
        },
        {
          "Station ID": 547,
          "Capacity": 51,
          "Latitude": 51.509474,
          "Longitude": -0.002275,
          "Station Name": "East India DLR, Blackwall"
        },
        {
          "Station ID": 548,
          "Capacity": 26,
          "Latitude": 51.498386,
          "Longitude": -0.107913,
          "Station Name": "Westminster Bridge Road, Elephant & Castle"
        },
        {
          "Station ID": 549,
          "Capacity": 45,
          "Latitude": 51.49605,
          "Longitude": -0.104193,
          "Station Name": "Gaywood  Street, Elephant & Castle"
        },
        {
          "Station ID": 550,
          "Capacity": 23,
          "Latitude": 51.521564,
          "Longitude": -0.039264,
          "Station Name": "Harford Street, Mile End"
        },
        {
          "Station ID": 552,
          "Capacity": 27,
          "Latitude": 51.511542,
          "Longitude": -0.056667,
          "Station Name": "Watney Street, Shadwell"
        },
        {
          "Station ID": 553,
          "Capacity": 24,
          "Latitude": 51.535678,
          "Longitude": -0.062546,
          "Station Name": "Regent's Row , Haggerston"
        },
        {
          "Station ID": 554,
          "Capacity": 16,
          "Latitude": 51.513548,
          "Longitude": -0.005659,
          "Station Name": "Aberfeldy Street, Poplar"
        },
        {
          "Station ID": 556,
          "Capacity": 27,
          "Latitude": 51.502661,
          "Longitude": -0.021596,
          "Station Name": "Heron Quays DLR, Canary Wharf"
        },
        {
          "Station ID": 557,
          "Capacity": 20,
          "Latitude": 51.51601,
          "Longitude": -0.0985,
          "Station Name": "King Edward Street, St Pauls"
        },
        {
          "Station ID": 558,
          "Capacity": 24,
          "Latitude": 51.493978,
          "Longitude": -0.127554,
          "Station Name": "Page Street, Westminster"
        },
        {
          "Station ID": 559,
          "Capacity": 24,
          "Latitude": 51.501391,
          "Longitude": -0.205991,
          "Station Name": "Abbotsbury Road, Holland Park"
        },
        {
          "Station ID": 560,
          "Capacity": 21,
          "Latitude": 51.511624,
          "Longitude": -0.205921,
          "Station Name": "Ladbroke Grove Central, Ladbroke Grove"
        },
        {
          "Station ID": 561,
          "Capacity": 22,
          "Latitude": 51.518369,
          "Longitude": -0.043371,
          "Station Name": "Rectory Square, Stepney"
        },
        {
          "Station ID": 562,
          "Capacity": 21,
          "Latitude": 51.51746,
          "Longitude": -0.12335,
          "Station Name": "Bury Place, Holborn"
        },
        {
          "Station ID": 563,
          "Capacity": 26,
          "Latitude": 51.499286,
          "Longitude": -0.009152,
          "Station Name": "Preston's Road, Cubitt Town"
        },
        {
          "Station ID": 564,
          "Capacity": 41,
          "Latitude": 51.509943,
          "Longitude": -0.117619,
          "Station Name": "Somerset House, Strand"
        },
        {
          "Station ID": 566,
          "Capacity": 42,
          "Latitude": 51.509158,
          "Longitude": -0.224103,
          "Station Name": "Westfield Ariel Way, White City"
        },
        {
          "Station ID": 568,
          "Capacity": 18,
          "Latitude": 51.51616,
          "Longitude": -0.18697,
          "Station Name": "Bishop's Bridge Road West, Bayswater"
        },
        {
          "Station ID": 569,
          "Capacity": 30,
          "Latitude": 51.53213,
          "Longitude": -0.08299,
          "Station Name": "Pitfield Street Central, Hoxton"
        },
        {
          "Station ID": 570,
          "Capacity": 36,
          "Latitude": 51.503083,
          "Longitude": -0.017676,
          "Station Name": "Upper Bank Street, Canary Wharf"
        },
        {
          "Station ID": 571,
          "Capacity": 29,
          "Latitude": 51.506256,
          "Longitude": -0.218337,
          "Station Name": "Westfield Southern Terrace ,Shepherd's Bush"
        },
        {
          "Station ID": 572,
          "Capacity": 36,
          "Latitude": 51.539099,
          "Longitude": -0.141728,
          "Station Name": "Greenland Road, Camden Town"
        },
        {
          "Station ID": 573,
          "Capacity": 18,
          "Latitude": 51.485587,
          "Longitude": -0.18119,
          "Station Name": "Limerston Street, West Chelsea"
        },
        {
          "Station ID": 574,
          "Capacity": 45,
          "Latitude": 51.53356,
          "Longitude": -0.09315,
          "Station Name": "Eagle Wharf Road, Hoxton"
        },
        {
          "Station ID": 576,
          "Capacity": 22,
          "Latitude": 51.497304,
          "Longitude": -0.022793,
          "Station Name": "Alpha Grove, Millwall"
        },
        {
          "Station ID": 577,
          "Capacity": 20,
          "Latitude": 51.528869,
          "Longitude": -0.047548,
          "Station Name": "Globe Town Market, Bethnal Green"
        },
        {
          "Station ID": 578,
          "Capacity": 32,
          "Latitude": 51.527607,
          "Longitude": -0.057133,
          "Station Name": "Hollybush Gardens, Bethnal Green"
        },
        {
          "Station ID": 579,
          "Capacity": 36,
          "Latitude": 51.511246,
          "Longitude": -0.093051,
          "Station Name": "Queen Street 2, Bank"
        },
        {
          "Station ID": 580,
          "Capacity": 36,
          "Latitude": 51.486929,
          "Longitude": -0.102996,
          "Station Name": "Doddington Grove, Kennington"
        },
        {
          "Station ID": 581,
          "Capacity": 18,
          "Latitude": 51.519167,
          "Longitude": -0.147983,
          "Station Name": "New Cavendish Street, Marylebone"
        },
        {
          "Station ID": 583,
          "Capacity": 20,
          "Latitude": 51.497622,
          "Longitude": -0.125978,
          "Station Name": "Abingdon Green, Westminster"
        },
        {
          "Station ID": 584,
          "Capacity": 21,
          "Latitude": 51.51244,
          "Longitude": -0.19096,
          "Station Name": "Ilchester Gardens, Bayswater"
        },
        {
          "Station ID": 586,
          "Capacity": 31,
          "Latitude": 51.490645,
          "Longitude": -0.014582,
          "Station Name": "Mudchute DLR, Cubitt Town"
        },
        {
          "Station ID": 587,
          "Capacity": 22,
          "Latitude": 51.50964,
          "Longitude": -0.08497,
          "Station Name": "Monument Street, Monument"
        },
        {
          "Station ID": 588,
          "Capacity": 27,
          "Latitude": 51.52959,
          "Longitude": -0.0801,
          "Station Name": "Hoxton Street, Hoxton"
        },
        {
          "Station ID": 589,
          "Capacity": 18,
          "Latitude": 51.487196,
          "Longitude": -0.179369,
          "Station Name": "Drayton Gardens, West Chelsea"
        },
        {
          "Station ID": 590,
          "Capacity": 26,
          "Latitude": 51.53256,
          "Longitude": -0.16862,
          "Station Name": "Greenberry Street, St.John's Wood"
        },
        {
          "Station ID": 591,
          "Capacity": 27,
          "Latitude": 51.506093,
          "Longitude": -0.224223,
          "Station Name": "Westfield Library Corner, Shepherd's Bush"
        },
        {
          "Station ID": 592,
          "Capacity": 20,
          "Latitude": 51.5171,
          "Longitude": -0.18377,
          "Station Name": "Bishop's Bridge Road East, Bayswater"
        },
        {
          "Station ID": 593,
          "Capacity": 21,
          "Latitude": 51.531066,
          "Longitude": -0.11934,
          "Station Name": "Northdown Street, King's Cross"
        },
        {
          "Station ID": 594,
          "Capacity": 33,
          "Latitude": 51.513875,
          "Longitude": -0.117774,
          "Station Name": "Kingsway Southbound, Strand"
        },
        {
          "Station ID": 595,
          "Capacity": 22,
          "Latitude": 51.493267,
          "Longitude": -0.21985,
          "Station Name": "Hammersmith Road, Hammersmith"
        },
        {
          "Station ID": 596,
          "Capacity": 21,
          "Latitude": 51.472817,
          "Longitude": -0.199783,
          "Station Name": "Parson's Green , Parson's Green"
        },
        {
          "Station ID": 597,
          "Capacity": 27,
          "Latitude": 51.473471,
          "Longitude": -0.20782,
          "Station Name": "Fulham Park Road, Fulham"
        },
        {
          "Station ID": 598,
          "Capacity": 38,
          "Latitude": 51.494499,
          "Longitude": -0.228188,
          "Station Name": "Southerton Road, Hammersmith"
        },
        {
          "Station ID": 599,
          "Capacity": 28,
          "Latitude": 51.485743,
          "Longitude": -0.223616,
          "Station Name": "Manbre Road, Hammersmith"
        },
        {
          "Station ID": 600,
          "Capacity": 21,
          "Latitude": 51.481747,
          "Longitude": -0.124642,
          "Station Name": "South Lambeth Road, Vauxhall"
        },
        {
          "Station ID": 601,
          "Capacity": 36,
          "Latitude": 51.514767,
          "Longitude": -0.225787,
          "Station Name": "BBC White City, White City"
        },
        {
          "Station ID": 602,
          "Capacity": 45,
          "Latitude": 51.472993,
          "Longitude": -0.133972,
          "Station Name": "Union Grove, Wandsworth Road"
        },
        {
          "Station ID": 603,
          "Capacity": 44,
          "Latitude": 51.477839,
          "Longitude": -0.116493,
          "Station Name": "Caldwell Street, Stockwell"
        },
        {
          "Station ID": 604,
          "Capacity": 18,
          "Latitude": 51.538792,
          "Longitude": -0.138535,
          "Station Name": "St Martins Close, Camden Town"
        },
        {
          "Station ID": 605,
          "Capacity": 29,
          "Latitude": 51.520331,
          "Longitude": -0.163667,
          "Station Name": "Seymour Place, Marylebone"
        },
        {
          "Station ID": 606,
          "Capacity": 26,
          "Latitude": 51.504199,
          "Longitude": -0.210941,
          "Station Name": "Addison Road, Holland Park"
        },
        {
          "Station ID": 607,
          "Capacity": 21,
          "Latitude": 51.468814,
          "Longitude": -0.210279,
          "Station Name": "Putney Bridge Station, Fulham"
        },
        {
          "Station ID": 608,
          "Capacity": 30,
          "Latitude": 51.491093,
          "Longitude": -0.216493,
          "Station Name": "Colet Gardens, Hammersmith"
        },
        {
          "Station ID": 609,
          "Capacity": 19,
          "Latitude": 51.465123,
          "Longitude": -0.157788,
          "Station Name": "Sugden Road, Clapham"
        },
        {
          "Station ID": 610,
          "Capacity": 21,
          "Latitude": 51.482567,
          "Longitude": -0.172078,
          "Station Name": "Danvers Street, West Chelsea"
        },
        {
          "Station ID": 611,
          "Capacity": 20,
          "Latitude": 51.506465,
          "Longitude": -0.208486,
          "Station Name": "Princedale Road , Holland Park"
        },
        {
          "Station ID": 612,
          "Capacity": 30,
          "Latitude": 51.469259,
          "Longitude": -0.141812,
          "Station Name": "Wandsworth Rd, Isley Court, Wandsworth Road"
        },
        {
          "Station ID": 613,
          "Capacity": 24,
          "Latitude": 51.504038,
          "Longitude": -0.2174,
          "Station Name": "Woodstock Grove, Shepherd's Bush"
        },
        {
          "Station ID": 614,
          "Capacity": 40,
          "Latitude": 51.478172,
          "Longitude": -0.14469,
          "Station Name": "Bradmead, Battersea Park"
        },
        {
          "Station ID": 615,
          "Capacity": 24,
          "Latitude": 51.476885,
          "Longitude": -0.215895,
          "Station Name": "Finlay Street, Fulham"
        },
        {
          "Station ID": 616,
          "Capacity": 24,
          "Latitude": 51.481021,
          "Longitude": -0.209973,
          "Station Name": "Aintree Street, Fulham"
        },
        {
          "Station ID": 617,
          "Capacity": 21,
          "Latitude": 51.471079,
          "Longitude": -0.207842,
          "Station Name": "Elysium Place, Fulham"
        },
        {
          "Station ID": 618,
          "Capacity": 24,
          "Latitude": 51.476259,
          "Longitude": -0.193254,
          "Station Name": "Eel Brook Common, Walham Green"
        },
        {
          "Station ID": 619,
          "Capacity": 43,
          "Latitude": 51.473763,
          "Longitude": -0.19701,
          "Station Name": "Irene Road, Parsons Green"
        },
        {
          "Station ID": 620,
          "Capacity": 28,
          "Latitude": 51.47518,
          "Longitude": -0.16716,
          "Station Name": "Surrey Lane, Battersea"
        },
        {
          "Station ID": 621,
          "Capacity": 33,
          "Latitude": 51.460864,
          "Longitude": -0.187427,
          "Station Name": "Wandsworth Town Station, Wandsworth"
        },
        {
          "Station ID": 622,
          "Capacity": 29,
          "Latitude": 51.507481,
          "Longitude": -0.205535,
          "Station Name": "Lansdowne Road, Ladbroke Grove"
        },
        {
          "Station ID": 623,
          "Capacity": 22,
          "Latitude": 51.46193,
          "Longitude": -0.180791,
          "Station Name": "Nantes Close, Wandsworth"
        },
        {
          "Station ID": 624,
          "Capacity": 40,
          "Latitude": 51.472918,
          "Longitude": -0.132102,
          "Station Name": "Courland Grove, Wandsworth Road"
        },
        {
          "Station ID": 625,
          "Capacity": 28,
          "Latitude": 51.477619,
          "Longitude": -0.149551,
          "Station Name": "Queen's Circus, Battersea Park"
        },
        {
          "Station ID": 626,
          "Capacity": 24,
          "Latitude": 51.484386,
          "Longitude": -0.204815,
          "Station Name": "Normand Park, West Kensington"
        },
        {
          "Station ID": 627,
          "Capacity": 20,
          "Latitude": 51.46879,
          "Longitude": -0.15823,
          "Station Name": "Holden Street, Battersea"
        },
        {
          "Station ID": 628,
          "Capacity": 26,
          "Latitude": 51.468819,
          "Longitude": -0.184318,
          "Station Name": "William Morris Way, Sands End"
        },
        {
          "Station ID": 629,
          "Capacity": 28,
          "Latitude": 51.459953,
          "Longitude": -0.190184,
          "Station Name": "Morie Street, Wandsworth"
        },
        {
          "Station ID": 630,
          "Capacity": 28,
          "Latitude": 51.470732,
          "Longitude": -0.126994,
          "Station Name": "Clarence Walk, Stockwell"
        },
        {
          "Station ID": 631,
          "Capacity": 27,
          "Latitude": 51.479501,
          "Longitude": -0.14177,
          "Station Name": "Battersea Park Road, Nine Elms"
        },
        {
          "Station ID": 632,
          "Capacity": 27,
          "Latitude": 51.470538,
          "Longitude": -0.163041,
          "Station Name": "Sheepcote Lane, Battersea"
        },
        {
          "Station ID": 633,
          "Capacity": 32,
          "Latitude": 51.489591,
          "Longitude": -0.209378,
          "Station Name": "Vereker Road, West Kensington"
        },
        {
          "Station ID": 634,
          "Capacity": 33,
          "Latitude": 51.494347,
          "Longitude": -0.215804,
          "Station Name": "Brook Green South, Brook Green"
        },
        {
          "Station ID": 635,
          "Capacity": 37,
          "Latitude": 51.486062,
          "Longitude": -0.214428,
          "Station Name": "Greyhound Road, Hammersmith"
        },
        {
          "Station ID": 636,
          "Capacity": 27,
          "Latitude": 51.467064,
          "Longitude": -0.193502,
          "Station Name": "South Park, Sands End"
        },
        {
          "Station ID": 637,
          "Capacity": 25,
          "Latitude": 51.45787,
          "Longitude": -0.174691,
          "Station Name": "Spencer Park, Wandsworth Common"
        },
        {
          "Station ID": 638,
          "Capacity": 28,
          "Latitude": 51.466633,
          "Longitude": -0.169821,
          "Station Name": "Falcon Road, Clapham Junction"
        },
        {
          "Station ID": 639,
          "Capacity": 27,
          "Latitude": 51.48357,
          "Longitude": -0.202038,
          "Station Name": "Coomer Place, West Kensington"
        },
        {
          "Station ID": 640,
          "Capacity": 28,
          "Latitude": 51.472865,
          "Longitude": -0.148059,
          "Station Name": "Silverthorne Road, Battersea"
        },
        {
          "Station ID": 641,
          "Capacity": 23,
          "Latitude": 51.498241,
          "Longitude": -0.117495,
          "Station Name": "Archbishop's Park, Waterloo"
        },
        {
          "Station ID": 642,
          "Capacity": 36,
          "Latitude": 51.469161,
          "Longitude": -0.174485,
          "Station Name": "Fawcett Close, Battersea"
        },
        {
          "Station ID": 643,
          "Capacity": 22,
          "Latitude": 51.519042,
          "Longitude": -0.204764,
          "Station Name": "All Saints' Road, Portobello"
        },
        {
          "Station ID": 644,
          "Capacity": 36,
          "Latitude": 51.483732,
          "Longitude": -0.223852,
          "Station Name": "Rainville Road, Hammersmith"
        },
        {
          "Station ID": 645,
          "Capacity": 21,
          "Latitude": 51.501732,
          "Longitude": -0.100292,
          "Station Name": "Great Suffolk Street, The Borough"
        },
        {
          "Station ID": 646,
          "Capacity": 16,
          "Latitude": 51.498865,
          "Longitude": -0.137424,
          "Station Name": "Buckingham Gate, Westminster"
        },
        {
          "Station ID": 647,
          "Capacity": 27,
          "Latitude": 51.500353,
          "Longitude": -0.217515,
          "Station Name": "Richmond Way, Shepherd's Bush"
        },
        {
          "Station ID": 648,
          "Capacity": 30,
          "Latitude": 51.46904,
          "Longitude": -0.196274,
          "Station Name": "Peterborough Road, Sands End"
        },
        {
          "Station ID": 649,
          "Capacity": 22,
          "Latitude": 51.481805,
          "Longitude": -0.180274,
          "Station Name": "World's End Place, West Chelsea"
        },
        {
          "Station ID": 650,
          "Capacity": 23,
          "Latitude": 51.51687,
          "Longitude": -0.213872,
          "Station Name": "St. Mark's Road, North Kensington"
        },
        {
          "Station ID": 651,
          "Capacity": 25,
          "Latitude": 51.480898,
          "Longitude": -0.183853,
          "Station Name": "Thorndike Close, West Chelsea"
        },
        {
          "Station ID": 652,
          "Capacity": 29,
          "Latitude": 51.511486,
          "Longitude": -0.21819,
          "Station Name": "Evesham Street, Avondale"
        },
        {
          "Station ID": 653,
          "Capacity": 25,
          "Latitude": 51.470847,
          "Longitude": -0.170703,
          "Station Name": "Simpson Street, Clapham Junction"
        },
        {
          "Station ID": 654,
          "Capacity": 34,
          "Latitude": 51.482678,
          "Longitude": -0.117661,
          "Station Name": "Ashmole Estate, Oval"
        },
        {
          "Station ID": 655,
          "Capacity": 27,
          "Latitude": 51.482944,
          "Longitude": -0.219346,
          "Station Name": "Crabtree Lane, Fulham"
        },
        {
          "Station ID": 656,
          "Capacity": 29,
          "Latitude": 51.468418,
          "Longitude": -0.199135,
          "Station Name": "Broomhouse Lane, Parsons Green"
        },
        {
          "Station ID": 657,
          "Capacity": 21,
          "Latitude": 51.49968,
          "Longitude": -0.221791,
          "Station Name": "Blythe Road West, Shepherd's Bush"
        },
        {
          "Station ID": 658,
          "Capacity": 30,
          "Latitude": 51.477292,
          "Longitude": -0.164786,
          "Station Name": "Ethelburga Estate, Battersea Park"
        },
        {
          "Station ID": 659,
          "Capacity": 57,
          "Latitude": 51.46437,
          "Longitude": -0.174619,
          "Station Name": "Grant Road West, Clapham Junction"
        },
        {
          "Station ID": 660,
          "Capacity": 22,
          "Latitude": 51.49087,
          "Longitude": -0.206029,
          "Station Name": "West Kensington Station, West Kensington"
        },
        {
          "Station ID": 661,
          "Capacity": 37,
          "Latitude": 51.51632,
          "Longitude": -0.202608,
          "Station Name": "All Saints Church, Portobello"
        },
        {
          "Station ID": 662,
          "Capacity": 24,
          "Latitude": 51.484984,
          "Longitude": -0.167919,
          "Station Name": "Phene Street, Chelsea"
        },
        {
          "Station ID": 663,
          "Capacity": 24,
          "Latitude": 51.51323,
          "Longitude": -0.211593,
          "Station Name": "Clarendon Road, Avondale"
        },
        {
          "Station ID": 664,
          "Capacity": 24,
          "Latitude": 51.474376,
          "Longitude": -0.155442,
          "Station Name": "Austin Road, Battersea Park"
        },
        {
          "Station ID": 665,
          "Capacity": 28,
          "Latitude": 51.461083,
          "Longitude": -0.191722,
          "Station Name": "Smugglers Way, Wandsworth"
        },
        {
          "Station ID": 666,
          "Capacity": 38,
          "Latitude": 51.4961,
          "Longitude": -0.208158,
          "Station Name": "Olympia Way, Olympia"
        },
        {
          "Station ID": 667,
          "Capacity": 34,
          "Latitude": 51.501594,
          "Longitude": -0.222293,
          "Station Name": "Shepherd's Bush Road North, Shepherd's Bush"
        },
        {
          "Station ID": 668,
          "Capacity": 26,
          "Latitude": 51.494223,
          "Longitude": -0.236769,
          "Station Name": "Ravenscourt Park Station, Hammersmith"
        },
        {
          "Station ID": 669,
          "Capacity": 39,
          "Latitude": 51.476149,
          "Longitude": -0.123258,
          "Station Name": "Teversham Lane, Stockwell"
        },
        {
          "Station ID": 670,
          "Capacity": 28,
          "Latitude": 51.467185,
          "Longitude": -0.152248,
          "Station Name": "Ashley Crescent, Battersea"
        },
        {
          "Station ID": 671,
          "Capacity": 56,
          "Latitude": 51.475089,
          "Longitude": -0.201968,
          "Station Name": "Parsons Green Station, Parsons Green"
        },
        {
          "Station ID": 672,
          "Capacity": 28,
          "Latitude": 51.464688,
          "Longitude": -0.173656,
          "Station Name": "Grant Road Central, Clapham Junction"
        },
        {
          "Station ID": 673,
          "Capacity": 36,
          "Latitude": 51.46517,
          "Longitude": -0.180389,
          "Station Name": "Hibbert Street, Battersea"
        },
        {
          "Station ID": 674,
          "Capacity": 40,
          "Latitude": 51.535467,
          "Longitude": -0.116191,
          "Station Name": "Carnegie Street, King's Cross"
        },
        {
          "Station ID": 675,
          "Capacity": 30,
          "Latitude": 51.463489,
          "Longitude": -0.182126,
          "Station Name": "Usk Road, Clapham Junction"
        },
        {
          "Station ID": 676,
          "Capacity": 35,
          "Latitude": 51.47787,
          "Longitude": -0.126874,
          "Station Name": "Hartington Road, Stockwell"
        },
        {
          "Station ID": 677,
          "Capacity": 27,
          "Latitude": 51.468669,
          "Longitude": -0.146544,
          "Station Name": "Heath Road, Battersea"
        },
        {
          "Station ID": 678,
          "Capacity": 30,
          "Latitude": 51.462312,
          "Longitude": -0.211468,
          "Station Name": "Esmond Street, Putney"
        },
        {
          "Station ID": 679,
          "Capacity": 26,
          "Latitude": 51.474535,
          "Longitude": -0.17021,
          "Station Name": "Orbel Street, Battersea"
        },
        {
          "Station ID": 680,
          "Capacity": 28,
          "Latitude": 51.477684,
          "Longitude": -0.170329,
          "Station Name": "Westbridge Road, Battersea"
        },
        {
          "Station ID": 681,
          "Capacity": 46,
          "Latitude": 51.473036,
          "Longitude": -0.214749,
          "Station Name": "Bishop's Avenue, Fulham"
        },
        {
          "Station ID": 682,
          "Capacity": 46,
          "Latitude": 51.488108,
          "Longitude": -0.226606,
          "Station Name": "Crisp Road, Hammersmith"
        },
        {
          "Station ID": 683,
          "Capacity": 28,
          "Latitude": 51.465064,
          "Longitude": -0.16375,
          "Station Name": "Dorothy Road, Clapham Junction"
        },
        {
          "Station ID": 684,
          "Capacity": 32,
          "Latitude": 51.454752,
          "Longitude": -0.195197,
          "Station Name": "Neville Gill Close, Wandsworth"
        },
        {
          "Station ID": 685,
          "Capacity": 30,
          "Latitude": 51.46067,
          "Longitude": -0.198735,
          "Station Name": "Osiers Road, Wandsworth"
        },
        {
          "Station ID": 686,
          "Capacity": 26,
          "Latitude": 51.488144,
          "Longitude": -0.222456,
          "Station Name": "Beryl Road, Hammersmith"
        },
        {
          "Station ID": 687,
          "Capacity": 26,
          "Latitude": 51.497608,
          "Longitude": -0.211455,
          "Station Name": "Maclise Road, Olympia"
        },
        {
          "Station ID": 688,
          "Capacity": 28,
          "Latitude": 51.460951,
          "Longitude": -0.200667,
          "Station Name": "Northfields, Wandsworth"
        },
        {
          "Station ID": 689,
          "Capacity": 30,
          "Latitude": 51.459225,
          "Longitude": -0.180884,
          "Station Name": "Spanish Road, Clapham Junction"
        },
        {
          "Station ID": 690,
          "Capacity": 24,
          "Latitude": 51.470475,
          "Longitude": -0.15213,
          "Station Name": "Stanley Grove, Battersea"
        },
        {
          "Station ID": 691,
          "Capacity": 24,
          "Latitude": 51.479463,
          "Longitude": -0.195777,
          "Station Name": "Erin Close, Walham Green"
        },
        {
          "Station ID": 692,
          "Capacity": 22,
          "Latitude": 51.542118,
          "Longitude": -0.028941,
          "Station Name": "Cadogan Close, Victoria Park"
        },
        {
          "Station ID": 693,
          "Capacity": 18,
          "Latitude": 51.464786,
          "Longitude": -0.215618,
          "Station Name": "Felsham Road, Putney"
        },
        {
          "Station ID": 694,
          "Capacity": 20,
          "Latitude": 51.460717,
          "Longitude": -0.216526,
          "Station Name": "Putney Rail Station, Putney"
        },
        {
          "Station ID": 695,
          "Capacity": 21,
          "Latitude": 51.536384,
          "Longitude": -0.102757,
          "Station Name": "Islington Green, Angel"
        },
        {
          "Station ID": 696,
          "Capacity": 21,
          "Latitude": 51.487285,
          "Longitude": -0.217995,
          "Station Name": "Charing Cross Hospital, Hammersmith"
        },
        {
          "Station ID": 697,
          "Capacity": 25,
          "Latitude": 51.536392,
          "Longitude": -0.112721,
          "Station Name": "Charlotte Terrace, Angel"
        },
        {
          "Station ID": 698,
          "Capacity": 35,
          "Latitude": 51.539083,
          "Longitude": -0.070329,
          "Station Name": "Shoreditch Court, Haggerston"
        },
        {
          "Station ID": 699,
          "Capacity": 39,
          "Latitude": 51.536654,
          "Longitude": -0.07023,
          "Station Name": "Belford House, Haggerston"
        },
        {
          "Station ID": 700,
          "Capacity": 25,
          "Latitude": 51.476964,
          "Longitude": -0.174347,
          "Station Name": "Battersea Church Road, Battersea"
        },
        {
          "Station ID": 701,
          "Capacity": 30,
          "Latitude": 51.472876,
          "Longitude": -0.176267,
          "Station Name": "Vicarage Crescent, Battersea"
        },
        {
          "Station ID": 702,
          "Capacity": 24,
          "Latitude": 51.528681,
          "Longitude": -0.06555,
          "Station Name": "Durant Street, Bethnal Green"
        },
        {
          "Station ID": 703,
          "Capacity": 25,
          "Latitude": 51.515059,
          "Longitude": -0.105344,
          "Station Name": "St. Bride Street, Holborn"
        },
        {
          "Station ID": 704,
          "Capacity": 18,
          "Latitude": 51.45682,
          "Longitude": -0.202802,
          "Station Name": "Mexfield Road, East Putney"
        },
        {
          "Station ID": 706,
          "Capacity": 31,
          "Latitude": 51.502153,
          "Longitude": -0.083632,
          "Station Name": "Snowsfields, London Bridge"
        },
        {
          "Station ID": 707,
          "Capacity": 32,
          "Latitude": 51.490217,
          "Longitude": -0.215087,
          "Station Name": "Barons Court Station, West Kensington"
        },
        {
          "Station ID": 708,
          "Capacity": 33,
          "Latitude": 51.46161,
          "Longitude": -0.216145,
          "Station Name": "Disraeli Road, Putney"
        },
        {
          "Station ID": 709,
          "Capacity": 23,
          "Latitude": 51.463211,
          "Longitude": -0.21555,
          "Station Name": "Montserrat Road , Putney"
        },
        {
          "Station ID": 710,
          "Capacity": 20,
          "Latitude": 51.474392,
          "Longitude": -0.163347,
          "Station Name": "Albert Bridge Road, Battersea Park"
        },
        {
          "Station ID": 711,
          "Capacity": 31,
          "Latitude": 51.483356,
          "Longitude": -0.216305,
          "Station Name": "Everington Street, Fulham"
        },
        {
          "Station ID": 712,
          "Capacity": 22,
          "Latitude": 51.518541,
          "Longitude": -0.034903,
          "Station Name": "Mile End Stadium, Mile End"
        },
        {
          "Station ID": 713,
          "Capacity": 22,
          "Latitude": 51.541007,
          "Longitude": -0.14326,
          "Station Name": "Hawley Crescent, Camden Town"
        },
        {
          "Station ID": 714,
          "Capacity": 28,
          "Latitude": 51.473116,
          "Longitude": -0.137235,
          "Station Name": "Stewart's Road, Wandsworth Road"
        },
        {
          "Station ID": 715,
          "Capacity": 22,
          "Latitude": 51.51563,
          "Longitude": -0.049067,
          "Station Name": "Aylward Street, Stepney"
        },
        {
          "Station ID": 716,
          "Capacity": 24,
          "Latitude": 51.515427,
          "Longitude": -0.023565,
          "Station Name": "Stainsby Road , Poplar"
        },
        {
          "Station ID": 717,
          "Capacity": 43,
          "Latitude": 51.536585,
          "Longitude": -0.075885,
          "Station Name": "Dunston Road , Haggerston"
        },
        {
          "Station ID": 718,
          "Capacity": 45,
          "Latitude": 51.535716,
          "Longitude": -0.060291,
          "Station Name": "Ada Street, Hackney Central"
        },
        {
          "Station ID": 719,
          "Capacity": 34,
          "Latitude": 51.536424,
          "Longitude": -0.054162,
          "Station Name": "Victoria Park Road, Hackney Central"
        },
        {
          "Station ID": 720,
          "Capacity": 23,
          "Latitude": 51.487244,
          "Longitude": -0.205279,
          "Station Name": "Star Road, West Kensington"
        },
        {
          "Station ID": 721,
          "Capacity": 18,
          "Latitude": 51.536039,
          "Longitude": -0.026262,
          "Station Name": "Wendon Street, Old Ford"
        },
        {
          "Station ID": 722,
          "Capacity": 19,
          "Latitude": 51.524583,
          "Longitude": -0.058631,
          "Station Name": "Finnis Street, Bethnal Green"
        },
        {
          "Station ID": 723,
          "Capacity": 48,
          "Latitude": 51.46822,
          "Longitude": -0.190346,
          "Station Name": "Stephendale Road, Sands End"
        },
        {
          "Station ID": 724,
          "Capacity": 28,
          "Latitude": 51.457991,
          "Longitude": -0.184806,
          "Station Name": "Alma Road, Wandsworth"
        },
        {
          "Station ID": 725,
          "Capacity": 28,
          "Latitude": 51.477322,
          "Longitude": -0.138748,
          "Station Name": "Thessaly Road North, Wandsworth Road"
        },
        {
          "Station ID": 726,
          "Capacity": 22,
          "Latitude": 51.47505,
          "Longitude": -0.150908,
          "Station Name": "Alfreda Street, Battersea Park"
        },
        {
          "Station ID": 727,
          "Capacity": 23,
          "Latitude": 51.475698,
          "Longitude": -0.205876,
          "Station Name": "Chesilton Road, Fulham"
        },
        {
          "Station ID": 728,
          "Capacity": 29,
          "Latitude": 51.461999,
          "Longitude": -0.20624,
          "Station Name": "Putney Bridge Road, East Putney"
        },
        {
          "Station ID": 729,
          "Capacity": 24,
          "Latitude": 51.478939,
          "Longitude": -0.208485,
          "Station Name": "St. Peter's Terrace, Fulham"
        },
        {
          "Station ID": 730,
          "Capacity": 18,
          "Latitude": 51.492084,
          "Longitude": -0.229116,
          "Station Name": "Bridge Avenue, Hammersmith"
        },
        {
          "Station ID": 731,
          "Capacity": 37,
          "Latitude": 51.477276,
          "Longitude": -0.18921,
          "Station Name": "Michael Road, Walham Green"
        },
        {
          "Station ID": 732,
          "Capacity": 21,
          "Latitude": 51.506304,
          "Longitude": -0.087262,
          "Station Name": "Duke Street Hill, London Bridge"
        },
        {
          "Station ID": 733,
          "Capacity": 18,
          "Latitude": 51.505426,
          "Longitude": -0.150817,
          "Station Name": "Park Lane, Mayfair"
        },
        {
          "Station ID": 734,
          "Capacity": 31,
          "Latitude": 51.462305,
          "Longitude": -0.175407,
          "Station Name": "Plough Terrace, Clapham Junction"
        },
        {
          "Station ID": 735,
          "Capacity": 35,
          "Latitude": 51.464894,
          "Longitude": -0.173029,
          "Station Name": "Grant Road East, Clapham Junction"
        },
        {
          "Station ID": 736,
          "Capacity": 28,
          "Latitude": 51.50659,
          "Longitude": -0.216104,
          "Station Name": "Queensdale Road, Shepherd's Bush"
        },
        {
          "Station ID": 737,
          "Capacity": 26,
          "Latitude": 51.479932,
          "Longitude": -0.194116,
          "Station Name": "Fulham Broadway, Walham Green"
        },
        {
          "Station ID": 738,
          "Capacity": 37,
          "Latitude": 51.475142,
          "Longitude": -0.187278,
          "Station Name": "Imperial Road, Sands End"
        },
        {
          "Station ID": 739,
          "Capacity": 28,
          "Latitude": 51.481765,
          "Longitude": -0.185273,
          "Station Name": "Hortensia Road, West Brompton"
        },
        {
          "Station ID": 740,
          "Capacity": 26,
          "Latitude": 51.510928,
          "Longitude": -0.214594,
          "Station Name": "Sirdar Road, Avondale"
        },
        {
          "Station ID": 741,
          "Capacity": 23,
          "Latitude": 51.512981,
          "Longitude": -0.219486,
          "Station Name": "Freston Road, Avondale"
        },
        {
          "Station ID": 742,
          "Capacity": 22,
          "Latitude": 51.515108,
          "Longitude": -0.208565,
          "Station Name": "Blenheim Crescent, Ladbroke Grove"
        },
        {
          "Station ID": 743,
          "Capacity": 29,
          "Latitude": 51.460792,
          "Longitude": -0.212607,
          "Station Name": "Oxford Road, Putney"
        },
        {
          "Station ID": 744,
          "Capacity": 30,
          "Latitude": 51.467454,
          "Longitude": -0.172293,
          "Station Name": "Ingrave Street, Clapham Junction"
        },
        {
          "Station ID": 745,
          "Capacity": 29,
          "Latitude": 51.478169,
          "Longitude": -0.182435,
          "Station Name": "Upcerne Road, West Chelsea"
        },
        {
          "Station ID": 746,
          "Capacity": 24,
          "Latitude": 51.479573,
          "Longitude": -0.179038,
          "Station Name": "Lots Road, West Chelsea"
        },
        {
          "Station ID": 747,
          "Capacity": 24,
          "Latitude": 51.487964,
          "Longitude": -0.161765,
          "Station Name": "Ormonde Gate, Chelsea"
        },
        {
          "Station ID": 748,
          "Capacity": 25,
          "Latitude": 51.537277,
          "Longitude": -0.079201,
          "Station Name": "Hertford Road, De Beauvoir Town"
        },
        {
          "Station ID": 749,
          "Capacity": 37,
          "Latitude": 51.539328,
          "Longitude": -0.074284,
          "Station Name": "Haggerston Road, Haggerston"
        },
        {
          "Station ID": 750,
          "Capacity": 27,
          "Latitude": 51.471095,
          "Longitude": -0.15785,
          "Station Name": "Culvert Road, Battersea"
        },
        {
          "Station ID": 751,
          "Capacity": 24,
          "Latitude": 51.516128,
          "Longitude": -0.120909,
          "Station Name": "Newton Street, Covent Garden"
        },
        {
          "Station ID": 752,
          "Capacity": 29,
          "Latitude": 51.458164,
          "Longitude": -0.206002,
          "Station Name": "Manfred Road, East Putney"
        },
        {
          "Station ID": 753,
          "Capacity": 28,
          "Latitude": 51.492636,
          "Longitude": -0.234094,
          "Station Name": "Hammersmith Town Hall, Hammersmith"
        },
        {
          "Station ID": 754,
          "Capacity": 24,
          "Latitude": 51.5129,
          "Longitude": -0.214762,
          "Station Name": "Grenfell Road, Avondale"
        },
        {
          "Station ID": 755,
          "Capacity": 24,
          "Latitude": 51.485121,
          "Longitude": -0.174971,
          "Station Name": "The Vale, Chelsea"
        },
        {
          "Station ID": 756,
          "Capacity": 21,
          "Latitude": 51.475153,
          "Longitude": -0.159169,
          "Station Name": "Prince of Wales Drive, Battersea Park"
        },
        {
          "Station ID": 757,
          "Capacity": 24,
          "Latitude": 51.487958,
          "Longitude": -0.187404,
          "Station Name": "Harcourt Terrace, West Brompton"
        },
        {
          "Station ID": 758,
          "Capacity": 23,
          "Latitude": 51.51787,
          "Longitude": -0.201005,
          "Station Name": "Westbourne Park Road, Portobello"
        },
        {
          "Station ID": 759,
          "Capacity": 18,
          "Latitude": 51.524561,
          "Longitude": -0.165668,
          "Station Name": "Broadley Terrace, Marylebone"
        },
        {
          "Station ID": 760,
          "Capacity": 18,
          "Latitude": 51.525269,
          "Longitude": -0.163795,
          "Station Name": "Rossmore Road, Marylebone"
        },
        {
          "Station ID": 761,
          "Capacity": 26,
          "Latitude": 51.483217,
          "Longitude": -0.21186,
          "Station Name": "Humbolt Road, Fulham"
        },
        {
          "Station ID": 762,
          "Capacity": 21,
          "Latitude": 51.500703,
          "Longitude": -0.129698,
          "Station Name": "Storey's Gate, Westminster"
        },
        {
          "Station ID": 763,
          "Capacity": 47,
          "Latitude": 51.520597,
          "Longitude": -0.032566,
          "Station Name": "Mile End Park Leisure Centre, Mile End"
        },
        {
          "Station ID": 764,
          "Capacity": 33,
          "Latitude": 51.462392,
          "Longitude": -0.168292,
          "Station Name": "St. John's Road, Clapham Junction"
        },
        {
          "Station ID": 765,
          "Capacity": 39,
          "Latitude": 51.467601,
          "Longitude": -0.206827,
          "Station Name": "Ranelagh Gardens, Fulham"
        },
        {
          "Station ID": 766,
          "Capacity": 25,
          "Latitude": 51.457529,
          "Longitude": -0.192165,
          "Station Name": "Ram Street, Wandsworth"
        },
        {
          "Station ID": 767,
          "Capacity": 30,
          "Latitude": 51.457059,
          "Longitude": -0.200806,
          "Station Name": "Santos Road, Wandsworth"
        },
        {
          "Station ID": 768,
          "Capacity": 37,
          "Latitude": 51.461343,
          "Longitude": -0.159322,
          "Station Name": "Clapham Common North Side, Clapham Common"
        },
        {
          "Station ID": 769,
          "Capacity": 21,
          "Latitude": 51.473611,
          "Longitude": -0.191803,
          "Station Name": "Sandilands Road, Walham Green"
        },
        {
          "Station ID": 770,
          "Capacity": 30,
          "Latitude": 51.491026,
          "Longitude": -0.209121,
          "Station Name": "Gwendwr Road, West Kensington"
        },
        {
          "Station ID": 771,
          "Capacity": 21,
          "Latitude": 51.509224,
          "Longitude": -0.216016,
          "Station Name": "Rifle Place, Avondale"
        },
        {
          "Station ID": 772,
          "Capacity": 35,
          "Latitude": 51.472509,
          "Longitude": -0.122831,
          "Station Name": "Binfield Road, Stockwell"
        },
        {
          "Station ID": 773,
          "Capacity": 24,
          "Latitude": 51.511891,
          "Longitude": -0.107349,
          "Station Name": "Tallis Street, Temple"
        },
        {
          "Station ID": 774,
          "Capacity": 20,
          "Latitude": 51.470131,
          "Longitude": -0.20464,
          "Station Name": "Hurlingham Park, Parsons Green"
        },
        {
          "Station ID": 775,
          "Capacity": 33,
          "Latitude": 51.496664,
          "Longitude": -0.223868,
          "Station Name": "Little Brook Green, Brook Green"
        },
        {
          "Station ID": 776,
          "Capacity": 20,
          "Latitude": 51.460333,
          "Longitude": -0.167029,
          "Station Name": "Abyssinia Close, Clapham Junction"
        },
        {
          "Station ID": 777,
          "Capacity": 21,
          "Latitude": 51.461923,
          "Longitude": -0.165297,
          "Station Name": "Limburg Road, Clapham Junction"
        },
        {
          "Station ID": 779,
          "Capacity": 28,
          "Latitude": 51.514449,
          "Longitude": -0.077178,
          "Station Name": "Houndsditch, Aldgate"
        },
        {
          "Station ID": 780,
          "Capacity": 25,
          "Latitude": 51.474665,
          "Longitude": -0.183165,
          "Station Name": "Imperial Wharf Station, Sands End"
        },
        {
          "Station ID": 781,
          "Capacity": 30,
          "Latitude": 51.495898,
          "Longitude": -0.173009,
          "Station Name": "Victoria & Albert Museum, South Kensington"
        },
        {
          "Station ID": 782,
          "Capacity": 24,
          "Latitude": 51.483911,
          "Longitude": -0.197609,
          "Station Name": "Halford Road, West Kensington"
        },
        {
          "Station ID": 784,
          "Capacity": 34,
          "Latitude": 51.546326,
          "Longitude": -0.009935,
          "Station Name": "East Village, Queen Elizabeth Olympic Park"
        },
        {
          "Station ID": 785,
          "Capacity": 64,
          "Latitude": 51.54094,
          "Longitude": -0.01051,
          "Station Name": "Aquatic Centre, Queen Elizabeth Olympic Park"
        },
        {
          "Station ID": 786,
          "Capacity": 44,
          "Latitude": 51.549369,
          "Longitude": -0.015717,
          "Station Name": "Lee Valley VeloPark, Queen Elizabeth Olympic Park"
        },
        {
          "Station ID": 787,
          "Capacity": 35,
          "Latitude": 51.546805,
          "Longitude": -0.014691,
          "Station Name": "Timber Lodge, Queen Elizabeth Olympic Park"
        },
        {
          "Station ID": 788,
          "Capacity": 33,
          "Latitude": 51.544836,
          "Longitude": -0.019524,
          "Station Name": "Copper Box Arena, Queen Elizabeth Olympic Park"
        },
        {
          "Station ID": 789,
          "Capacity": 40,
          "Latitude": 51.538718,
          "Longitude": -0.011889,
          "Station Name": "Podium, Queen Elizabeth Olympic Park"
        },
        {
          "Station ID": 790,
          "Capacity": 28,
          "Latitude": 51.541793,
          "Longitude": -0.00481,
          "Station Name": "Stratford Station, Stratford"
        },
        {
          "Station ID": 792,
          "Capacity": 42,
          "Latitude": 51.505461,
          "Longitude": -0.10454,
          "Station Name": "Blackfriars Road, Southwark"
        },
        {
          "Station ID": 793,
          "Capacity": 28,
          "Latitude": 51.528279,
          "Longitude": -0.119558,
          "Station Name": "Cromer Street, Bloomsbury"
        },
        {
          "Station ID": 794,
          "Capacity": 28,
          "Latitude": 51.474567,
          "Longitude": -0.12458,
          "Station Name": "Lansdowne Way Bus Garage, Stockwell"
        },
        {
          "Station ID": 795,
          "Capacity": 28,
          "Latitude": 51.527566,
          "Longitude": -0.134849,
          "Station Name": "Melton Street, Euston"
        },
        {
          "Station ID": 796,
          "Capacity": 29,
          "Latitude": 51.524,
          "Longitude": -0.126409,
          "Station Name": "Coram Street, Bloomsbury"
        },
        {
          "Station ID": 797,
          "Capacity": 30,
          "Latitude": 51.5293,
          "Longitude": -0.128279,
          "Station Name": "Ossulston Street, Somers Town"
        },
        {
          "Station ID": 798,
          "Capacity": 27,
          "Latitude": 51.530199,
          "Longitude": -0.122299,
          "Station Name": "Birkenhead Street, King's Cross"
        },
        {
          "Station ID": 800,
          "Capacity": 30,
          "Latitude": 51.481121,
          "Longitude": -0.149035,
          "Station Name": "Sopwith Way, Battersea Park"
        },
        {
          "Station ID": 801,
          "Capacity": 29,
          "Latitude": 51.505224,
          "Longitude": -0.098031,
          "Station Name": "Lavington Street, Bankside"
        },
        {
          "Station ID": 802,
          "Capacity": 32,
          "Latitude": 51.47659,
          "Longitude": -0.118256,
          "Station Name": "Albert Square, Stockwell"
        },
        {
          "Station ID": 803,
          "Capacity": 23,
          "Latitude": 51.505409,
          "Longitude": -0.098341,
          "Station Name": "Southwark Street, Bankside"
        },
        {
          "Station ID": 804,
          "Capacity": 27,
          "Latitude": 51.534667,
          "Longitude": -0.125078,
          "Station Name": "Good's Way, King's Cross"
        },
        {
          "Station ID": 805,
          "Capacity": 27,
          "Latitude": 51.520069,
          "Longitude": -0.206338,
          "Station Name": "Bevington Road, North Kensington"
        },
        {
          "Station ID": 806,
          "Capacity": 27,
          "Latitude": 51.53724,
          "Longitude": -0.124807,
          "Station Name": "Handyside Street, King's Cross"
        },
        {
          "Station ID": 807,
          "Capacity": 24,
          "Latitude": 51.5212,
          "Longitude": -0.208888,
          "Station Name": "Bevington Road West, North Kensington"
        },
        {
          "Station ID": 808,
          "Capacity": 33,
          "Latitude": 51.473486,
          "Longitude": -0.122555,
          "Station Name": "Stockwell Roundabout, Stockwell"
        },
        {
          "Station ID": 809,
          "Capacity": 28,
          "Latitude": 51.516277,
          "Longitude": -0.118272,
          "Station Name": "Lincoln's Inn Fields, Holborn"
        },
        {
          "Station ID": 810,
          "Capacity": 30,
          "Latitude": 51.506725,
          "Longitude": -0.098807,
          "Station Name": "Tate Modern, Bankside"
        },
        {
          "Station ID": 811,
          "Capacity": 36,
          "Latitude": 51.505703,
          "Longitude": -0.027772,
          "Station Name": "Westferry Circus, Canary Wharf"
        },
        {
          "Station ID": 812,
          "Capacity": 28,
          "Latitude": 51.548731,
          "Longitude": -0.022606,
          "Station Name": "Here East North, Queen Elizabeth Olympic Park"
        },
        {
          "Station ID": 813,
          "Capacity": 37,
          "Latitude": 51.487807,
          "Longitude": -0.122759,
          "Station Name": "New Spring Gardens Walk, Vauxhall"
        },
        {
          "Station ID": 814,
          "Capacity": 30,
          "Latitude": 51.471433,
          "Longitude": -0.12367,
          "Station Name": "Clapham Road, Lingham Street, Stockwell"
        },
        {
          "Station ID": 815,
          "Capacity": 35,
          "Latitude": 51.500089,
          "Longitude": -0.116628,
          "Station Name": "Lambeth Palace Road, Waterloo"
        },
        {
          "Station ID": 816,
          "Capacity": 28,
          "Latitude": 51.546532,
          "Longitude": -0.020597,
          "Station Name": "Here East South, Queen Elizabeth Olympic Park"
        },
        {
          "Station ID": 817,
          "Capacity": 26,
          "Latitude": 51.481335,
          "Longitude": -0.138212,
          "Station Name": "Riverlight South, Nine Elms"
        },
        {
          "Station ID": 818,
          "Capacity": 13,
          "Latitude": 51.503127,
          "Longitude": -0.078655,
          "Station Name": "One Tower Bridge, Bermondsey"
        },
        {
          "Station ID": 819,
          "Capacity": 38,
          "Latitude": 51.50621,
          "Longitude": -0.114842,
          "Station Name": "Belvedere Road 2, South Bank"
        },
        {
          "Station ID": 820,
          "Capacity": 24,
          "Latitude": 51.492807,
          "Longitude": -0.091938,
          "Station Name": "Victory Place, Walworth"
        },
        {
          "Station ID": 821,
          "Capacity": 27,
          "Latitude": 51.483507,
          "Longitude": -0.147714,
          "Station Name": "Battersea Power Station, Battersea Park"
        },
        {
          "Station ID": 826,
          "Capacity": 28,
          "Latitude": 51.496863,
          "Longitude": -0.142943,
          "Station Name": "Allington street, Westminster"
        },
        {
          "Station ID": 799,
          "Capacity": 24,
          "Latitude": 51.497698,
          "Longitude": -0.137598,
          "Station Name": "Kings Gate House, Westminster"
        },
        {
          "Station ID": 69,
          "Capacity": 22,
          "Latitude": 51.526236,
          "Longitude": -0.134407,
          "Station Name": "Euston Road, Euston"
        },
        {
          "Station ID": 83,
          "Capacity": 21,
          "Latitude": 51.509639,
          "Longitude": -0.13151,
          "Station Name": "Panton Street, West End"
        },
        {
          "Station ID": 187,
          "Capacity": 24,
          "Latitude": 51.492479,
          "Longitude": -0.178433,
          "Station Name": "Queen's Gate (South), South Kensington"
        },
        {
          "Station ID": 188,
          "Capacity": 18,
          "Latitude": 51.516517,
          "Longitude": -0.164393,
          "Station Name": "Nutford Place, Marylebone"
        },
        {
          "Station ID": 189,
          "Capacity": 18,
          "Latitude": 51.531666,
          "Longitude": -0.109914,
          "Station Name": "Claremont Square, Angel"
        },
        {
          "Station ID": 190,
          "Capacity": 21,
          "Latitude": 51.489975,
          "Longitude": -0.132845,
          "Station Name": "Rampayne Street, Pimlico"
        },
        {
          "Station ID": 194,
          "Capacity": 56,
          "Latitude": 51.504627,
          "Longitude": -0.091773,
          "Station Name": "Hop Exchange, The Borough"
        },
        {
          "Station ID": 195,
          "Capacity": 30,
          "Latitude": 51.507244,
          "Longitude": -0.106237,
          "Station Name": "Milroy Walk, South Bank"
        },
        {
          "Station ID": 196,
          "Capacity": 17,
          "Latitude": 51.503688,
          "Longitude": -0.098497,
          "Station Name": "Union Street, The Borough"
        },
        {
          "Station ID": 197,
          "Capacity": 27,
          "Latitude": 51.505569,
          "Longitude": -0.111606,
          "Station Name": "Stamford Street, South Bank"
        }
      ]
}