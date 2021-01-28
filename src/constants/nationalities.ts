const nationalities: {[key: string]: string} = {
  "Afghanistan": "af",
  "Albania": "al",
  "Algeria": "dz",
  "American Samoa": "as",
  "Andorra": "ad",
  "Angola": "ao",
  "Anguilla": "ai",
  "Antarctica": "aq",
  "Antigua and Barbuda": "ag",
  "Argentina": "ar",
  "Armenia": "am",
  "Aruba": "aw",
  "Australia": "au",
  "Austria": "at",
  "Azerbaijan": "az",
  "Bahamas": "bs",
  "Bahrain": "bh",
  "Bangladesh": "bd",
  "Barbados": "bb",
  "Belarus": "by",
  "Belgium": "be",
  "Belize": "bz",
  "Benin": "bj",
  "Bermuda": "bm",
  "Bhutan": "bt",
  "Bolivia": "bo",
  "Bosnia and Herzegovina": "ba",
  "Botswana": "bw",
  "Bouvet Island": "bv",
  "Brazil": "br",
  "British Indian Ocean Territory": "io",
  "British Virgin Islands": "vg",
  "Brunei": "bn",
  "Bulgaria": "bg",
  "Burkina Faso": "bf",
  "Burundi": "bi",
  "Cambodia": "kh",
  "Cameroon": "cm",
  "Canada": "ca",
  "Cape Verde": "cv",
  "Caribbean Netherlands": "bq",
  "Cayman Islands": "ky",
  "Central African Republic": "cf",
  "Chad": "td",
  "Chile": "cl",
  "China": "cn",
  "Christmas Island": "cx",
  "Cocos (Keeling) Islands": "cc",
  "Colombia": "co",
  "Comoros": "km",
  "Cook Islands": "ck",
  "Costa Rica": "cr",
  "Croatia": "hr",
  "Cuba": "cu",
  "Curaçao": "cw",
  "Cyprus": "cy",
  "Czechia": "cz",
  "Côte d'Ivoire (Ivory Coast)": "ci",
  "DR Congo": "cd",
  "Denmark": "dk",
  "Djibouti": "dj",
  "Dominica": "dm",
  "Dominican Republic": "do",
  "Ecuador": "ec",
  "Egypt": "eg",
  "El Salvador": "sv",
  "England": "gb-eng",
  "Equatorial Guinea": "gq",
  "Eritrea": "er",
  "Estonia": "ee",
  "Eswatini (Swaziland)": "sz",
  "Ethiopia": "et",
  "European Union": "eu",
  "Falkland Islands": "fk",
  "Faroe Islands": "fo",
  "Fiji": "fj",
  "Finland": "fi",
  "France": "fr",
  "French Guiana": "gf",
  "French Polynesia": "pf",
  "French Southern and Antarctic Lands": "tf",
  "Gabon": "ga",
  "Gambia": "gm",
  "Germany": "de",
  "Ghana": "gh",
  "Gibraltar": "gi",
  "Greece": "gr",
  "Greenland": "gl",
  "Grenada": "gd",
  "Guadeloupe": "gp",
  "Guam": "gu",
  "Guatemala": "gt",
  "Guernsey": "gg",
  "Guinea": "gn",
  "Guinea-Bissau": "gw",
  "Guyana": "gy",
  "Haiti": "ht",
  "Heard Island and McDonald Islands": "hm",
  "Honduras": "hn",
  "Hong Kong": "hk",
  "Hungary": "hu",
  "Iceland": "is",
  "India": "in",
  "Indonesia": "id",
  "Iran": "ir",
  "Iraq": "iq",
  "Ireland": "ie",
  "Isle of Man": "im",
  "Israel": "il",
  "Italy": "it",
  "Jamaica": "jm",
  "Japan": "jp",
  "Jersey": "je",
  "Jordan": "jo",
  "Kazakhstan": "kz",
  "Kenya": "ke",
  "Kiribati": "ki",
  "Kosovo": "xk",
  "Kuwait": "kw",
  "Kyrgyzstan": "kg",
  "Laos": "la",
  "Latvia": "lv",
  "Lebanon": "lb",
  "Lesotho": "ls",
  "Liberia": "lr",
  "Libya": "ly",
  "Liechtenstein": "li",
  "Lithuania": "lt",
  "Luxembourg": "lu",
  "Macau": "mo",
  "Madagascar": "mg",
  "Malawi": "mw",
  "Malaysia": "my",
  "Maldives": "mv",
  "Mali": "ml",
  "Malta": "mt",
  "Marshall Islands": "mh",
  "Martinique": "mq",
  "Mauritania": "mr",
  "Mauritius": "mu",
  "Mayotte": "yt",
  "Mexico": "mx",
  "Micronesia": "fm",
  "Moldova": "md",
  "Monaco": "mc",
  "Mongolia": "mn",
  "Montenegro": "me",
  "Montserrat": "ms",
  "Morocco": "ma",
  "Mozambique": "mz",
  "Myanmar": "mm",
  "Namibia": "na",
  "Nauru": "nr",
  "Nepal": "np",
  "Netherlands": "nl",
  "New Caledonia": "nc",
  "New Zealand": "nz",
  "Nicaragua": "ni",
  "Niger": "ne",
  "Nigeria": "ng",
  "Niue": "nu",
  "Norfolk Island": "nf",
  "North Korea": "kp",
  "North Macedonia": "mk",
  "Northern Ireland": "gb-nir",
  "Northern Mariana Islands": "mp",
  "Norway": "no",
  "Oman": "om",
  "Pakistan": "pk",
  "Palau": "pw",
  "Palestine": "ps",
  "Panama": "pa",
  "Papua New Guinea": "pg",
  "Paraguay": "py",
  "Peru": "pe",
  "Philippines": "ph",
  "Pitcairn Islands": "pn",
  "Poland": "pl",
  "Portugal": "pt",
  "Puerto Rico": "pr",
  "Qatar": "qa",
  "Republic of the Congo": "cg",
  "Romania": "ro",
  "Russia": "ru",
  "Rwanda": "rw",
  "Réunion": "re",
  "Saint Barthélemy": "bl",
  "Saint Helena, Ascension and Tristan da Cunha": "sh",
  "Saint Kitts and Nevis": "kn",
  "Saint Lucia": "lc",
  "Saint Martin": "mf",
  "Saint Pierre and Miquelon": "pm",
  "Saint Vincent and the Grenadines": "vc",
  "Samoa": "ws",
  "San Marino": "sm",
  "Saudi Arabia": "sa",
  "Scotland": "gb-sct",
  "Senegal": "sn",
  "Serbia": "rs",
  "Seychelles": "sc",
  "Sierra Leone": "sl",
  "Singapore": "sg",
  "Sint Maarten": "sx",
  "Slovakia": "sk",
  "Slovenia": "si",
  "Solomon Islands": "sb",
  "Somalia": "so",
  "South Africa": "za",
  "South Georgia": "gs",
  "South Korea": "kr",
  "South Sudan": "ss",
  "Spain": "es",
  "Sri Lanka": "lk",
  "Sudan": "sd",
  "Suriname": "sr",
  "Svalbard and Jan Mayen": "sj",
  "Sweden": "se",
  "Switzerland": "ch",
  "Syria": "sy",
  "São Tomé and Príncipe": "st",
  "Taiwan": "tw",
  "Tajikistan": "tj",
  "Tanzania": "tz",
  "Thailand": "th",
  "Timor-Leste": "tl",
  "Togo": "tg",
  "Tokelau": "tk",
  "Tonga": "to",
  "Trinidad and Tobago": "tt",
  "Tunisia": "tn",
  "Turkey": "tr",
  "Turkmenistan": "tm",
  "Turks and Caicos Islands": "tc",
  "Tuvalu": "tv",
  "Uganda": "ug",
  "Ukraine": "ua",
  "United Arab Emirates": "ae",
  "United Kingdom": "gb",
  "United Nations": "un",
  "United States of America": "us",
  "United States Minor Outlying Islands": "um",
  "United States Virgin Islands": "vi",
  "Uruguay": "uy",
  "Uzbekistan": "uz",
  "Vanuatu": "vu",
  "Vatican City (Holy See)": "va",
  "Venezuela": "ve",
  "Vietnam": "vn",
  "Wales": "gb-wls",
  "Wallis and Futuna": "wf",
  "Western Sahara": "eh",
  "Yemen": "ye",
  "Zambia": "zm",
  "Zimbabwe": "zw",
  "Åland Islands": "ax",
}

// <img
//   src="https://flagcdn.com/h20/us.png"
//   srcset="https://flagcdn.com/h40/us.png 2x,
//     https://flagcdn.com/h60/us.png 3x"
//   height="20"
//   alt="United States">

// https://flagpedia.net/download/api

export default nationalities;