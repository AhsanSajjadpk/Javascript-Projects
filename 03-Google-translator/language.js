const allSupportedLanguages = [
    {
      "language": "af"
    },
    {
      "language": "ak"
    },
    {
      "language": "am"
    },
    {
      "language": "ar"
    },
    {
      "language": "as"
    },
    {
      "language": "ay"
    },
    {
      "language": "az"
    },
    {
      "language": "be"
    },
    {
      "language": "bg"
    },
    {
      "language": "bho"
    },
    {
      "language": "bm"
    },
    {
      "language": "bn"
    },
    {
      "language": "bs"
    },
    {
      "language": "ca"
    },
    {
      "language": "ceb"
    },
    {
      "language": "ckb"
    },
    {
      "language": "co"
    },
    {
      "language": "cs"
    },
    {
      "language": "cy"
    },
    {
      "language": "da"
    },
    {
      "language": "de"
    },
    {
      "language": "doi"
    },
    {
      "language": "dv"
    },
    {
      "language": "ee"
    },
    {
      "language": "el"
    },
    {
      "language": "en"
    },
    {
      "language": "eo"
    },
    {
      "language": "es"
    },
    {
      "language": "et"
    },
    {
      "language": "eu"
    },
    {
      "language": "fa"
    },
    {
      "language": "fi"
    },
    {
      "language": "fr"
    },
    {
      "language": "fy"
    },
    {
      "language": "ga"
    },
    {
      "language": "gd"
    },
    {
      "language": "gl"
    },
    {
      "language": "gn"
    },
    {
      "language": "gom"
    },
    {
      "language": "gu"
    },
    {
      "language": "ha"
    },
    {
      "language": "haw"
    },
    {
      "language": "he"
    },
    {
      "language": "hi"
    },
    {
      "language": "hmn"
    },
    {
      "language": "hr"
    },
    {
      "language": "ht"
    },
    {
      "language": "hu"
    },
    {
      "language": "hy"
    },
    {
      "language": "id"
    },
    {
      "language": "ig"
    },
    {
      "language": "ilo"
    },
    {
      "language": "is"
    },
    {
      "language": "it"
    },
    {
      "language": "iw"
    },
    {
      "language": "ja"
    },
    {
      "language": "jv"
    },
    {
      "language": "jw"
    },
    {
      "language": "ka"
    },
    {
      "language": "kk"
    },
    {
      "language": "km"
    },
    {
      "language": "kn"
    },
    {
      "language": "ko"
    },
    {
      "language": "kri"
    },
    {
      "language": "ku"
    },
    {
      "language": "ky"
    },
    {
      "language": "la"
    },
    {
      "language": "lb"
    },
    {
      "language": "lg"
    },
    {
      "language": "ln"
    },
    {
      "language": "lo"
    },
    {
      "language": "lt"
    },
    {
      "language": "lus"
    },
    {
      "language": "lv"
    },
    {
      "language": "mai"
    },
    {
      "language": "mg"
    },
    {
      "language": "mi"
    },
    {
      "language": "mk"
    },
    {
      "language": "ml"
    },
    {
      "language": "mn"
    },
    {
      "language": "mni-Mtei"
    },
    {
      "language": "mr"
    },
    {
      "language": "ms"
    },
    {
      "language": "mt"
    },
    {
      "language": "my"
    },
    {
      "language": "ne"
    },
    {
      "language": "nl"
    },
    {
      "language": "no"
    },
    {
      "language": "nso"
    },
    {
      "language": "ny"
    },
    {
      "language": "om"
    },
    {
      "language": "or"
    },
    {
      "language": "pa"
    },
    {
      "language": "pl"
    },
    {
      "language": "ps"
    },
    {
      "language": "pt"
    },
    {
      "language": "qu"
    },
    {
      "language": "ro"
    },
    {
      "language": "ru"
    },
    {
      "language": "rw"
    },
    {
      "language": "sa"
    },
    {
      "language": "sd"
    },
    {
      "language": "si"
    },
    {
      "language": "sk"
    },
    {
      "language": "sl"
    },
    {
      "language": "sm"
    },
    {
      "language": "sn"
    },
    {
      "language": "so"
    },
    {
      "language": "sq"
    },
    {
      "language": "sr"
    },
    {
      "language": "st"
    },
    {
      "language": "su"
    },
    {
      "language": "sv"
    },
    {
      "language": "sw"
    },
    {
      "language": "ta"
    },
    {
      "language": "te"
    },
    {
      "language": "tg"
    },
    {
      "language": "th"
    },
    {
      "language": "ti"
    },
    {
      "language": "tk"
    },
    {
      "language": "tl"
    },
    {
      "language": "tr"
    },
    {
      "language": "ts"
    },
    {
      "language": "tt"
    },
    {
      "language": "ug"
    },
    {
      "language": "uk"
    },
    {
      "language": "ur"
    },
    {
      "language": "uz"
    },
    {
      "language": "vi"
    },
    {
      "language": "xh"
    },
    {
      "language": "yi"
    },
    {
      "language": "yo"
    },
    {
      "language": "zh"
    },
    {
      "language": "zh-CN"
    },
    {
      "language": "zh-TW"
    },
    {
      "language": "zu"
    }
]

const allLanguagesData = [
    {
      "code": "ab",
      "name": "Abkhazian",
      "nativeName": "Abkhazian"
    },
    {
      "code": "aa",
      "name": "Afar",
      "nativeName": "Afar"
    },
    {
      "code": "af",
      "name": "Afrikaans",
      "nativeName": "Afrikaans"
    },
    {
      "code": "ak",
      "name": "Akan",
      "nativeName": "Akan"
    },
    {
      "code": "sq",
      "name": "Albanian",
      "nativeName": "shqip"
    },
    {
      "code": "am",
      "name": "Amharic",
      "nativeName": "አማርኛ"
    },
    {
      "code": "ar",
      "name": "Arabic",
      "nativeName": "العربية"
    },
    {
      "code": "an",
      "name": "Aragonese",
      "nativeName": "Aragonese"
    },
    {
      "code": "hy",
      "name": "Armenian",
      "nativeName": "հայերեն"
    },
    {
      "code": "as",
      "name": "Assamese",
      "nativeName": "অসমীয়া"
    },
    {
      "code": "av",
      "name": "Avaric",
      "nativeName": "Avaric"
    },
    {
      "code": "ae",
      "name": "Avestan",
      "nativeName": "Avestan"
    },
    {
      "code": "ay",
      "name": "Aymara",
      "nativeName": "Aymara"
    },
    {
      "code": "az",
      "name": "Azerbaijani",
      "nativeName": "azərbaycan"
    },
    {
      "code": "bm",
      "name": "Bambara",
      "nativeName": "bamanakan"
    },
    {
      "code": "bn",
      "name": "Bangla",
      "nativeName": "বাংলা"
    },
    {
      "code": "ba",
      "name": "Bashkir",
      "nativeName": "Bashkir"
    },
    {
      "code": "eu",
      "name": "Basque",
      "nativeName": "euskara"
    },
    {
      "code": "be",
      "name": "Belarusian",
      "nativeName": "беларуская"
    },
    {
      "code": "bi",
      "name": "Bislama",
      "nativeName": "Bislama"
    },
    {
      "code": "bs",
      "name": "Bosnian",
      "nativeName": "bosanski"
    },
    {
      "code": "br",
      "name": "Breton",
      "nativeName": "brezhoneg"
    },
    {
      "code": "bg",
      "name": "Bulgarian",
      "nativeName": "български"
    },
    {
      "code": "my",
      "name": "Burmese",
      "nativeName": "မြန်မာ"
    },
    {
      "code": "ca",
      "name": "Catalan",
      "nativeName": "català"
    },
    {
      "code": "ch",
      "name": "Chamorro",
      "nativeName": "Chamorro"
    },
    {
      "code": "ce",
      "name": "Chechen",
      "nativeName": "нохчийн"
    },
    {
      "code": "zh",
      "name": "Chinese",
      "nativeName": "中文"
    },
    {
      "code": "cu",
      "name": "Church Slavic",
      "nativeName": "Church Slavic"
    },
    {
      "code": "cv",
      "name": "Chuvash",
      "nativeName": "Chuvash"
    },
    {
      "code": "kw",
      "name": "Cornish",
      "nativeName": "kernewek"
    },
    {
      "code": "co",
      "name": "Corsican",
      "nativeName": "Corsican"
    },
    {
      "code": "cr",
      "name": "Cree",
      "nativeName": "Cree"
    },
    {
      "code": "hr",
      "name": "Croatian",
      "nativeName": "hrvatski"
    },
    {
      "code": "cs",
      "name": "Czech",
      "nativeName": "čeština"
    },
    {
      "code": "da",
      "name": "Danish",
      "nativeName": "dansk"
    },
    {
      "code": "dv",
      "name": "Divehi",
      "nativeName": "Divehi"
    },
    {
      "code": "nl",
      "name": "Dutch",
      "nativeName": "Nederlands"
    },
    {
      "code": "dz",
      "name": "Dzongkha",
      "nativeName": "རྫོང་ཁ"
    },
    {
      "code": "en",
      "name": "English",
      "nativeName": "English"
    },
    {
      "code": "eo",
      "name": "Esperanto",
      "nativeName": "esperanto"
    },
    {
      "code": "et",
      "name": "Estonian",
      "nativeName": "eesti"
    },
    {
      "code": "ee",
      "name": "Ewe",
      "nativeName": "Eʋegbe"
    },
    {
      "code": "fo",
      "name": "Faroese",
      "nativeName": "føroyskt"
    },
    {
      "code": "fj",
      "name": "Fijian",
      "nativeName": "Fijian"
    },
    {
      "code": "fi",
      "name": "Finnish",
      "nativeName": "suomi"
    },
    {
      "code": "fr",
      "name": "French",
      "nativeName": "français"
    },
    {
      "code": "ff",
      "name": "Fulah",
      "nativeName": "Pulaar"
    },
    {
      "code": "gl",
      "name": "Galician",
      "nativeName": "galego"
    },
    {
      "code": "lg",
      "name": "Ganda",
      "nativeName": "Luganda"
    },
    {
      "code": "ka",
      "name": "Georgian",
      "nativeName": "ქართული"
    },
    {
      "code": "de",
      "name": "German",
      "nativeName": "Deutsch"
    },
    {
      "code": "el",
      "name": "Greek",
      "nativeName": "Ελληνικά"
    },
    {
      "code": "gn",
      "name": "Guarani",
      "nativeName": "Guarani"
    },
    {
      "code": "gu",
      "name": "Gujarati",
      "nativeName": "ગુજરાતી"
    },
    {
      "code": "ht",
      "name": "Haitian Creole",
      "nativeName": "Haitian Creole"
    },
    {
      "code": "ha",
      "name": "Hausa",
      "nativeName": "Hausa"
    },
    {
      "code": "he",
      "name": "Hebrew",
      "nativeName": "עברית"
    },
    {
      "code": "hz",
      "name": "Herero",
      "nativeName": "Herero"
    },
    {
      "code": "hi",
      "name": "Hindi",
      "nativeName": "हिन्दी"
    },
    {
      "code": "ho",
      "name": "Hiri Motu",
      "nativeName": "Hiri Motu"
    },
    {
      "code": "hu",
      "name": "Hungarian",
      "nativeName": "magyar"
    },
    {
      "code": "is",
      "name": "Icelandic",
      "nativeName": "íslenska"
    },
    {
      "code": "io",
      "name": "Ido",
      "nativeName": "Ido"
    },
    {
      "code": "ig",
      "name": "Igbo",
      "nativeName": "Igbo"
    },
    {
      "code": "id",
      "name": "Indonesian",
      "nativeName": "Indonesia"
    },
    {
      "code": "ia",
      "name": "Interlingua",
      "nativeName": "interlingua"
    },
    {
      "code": "ie",
      "name": "Interlingue",
      "nativeName": "Interlingue"
    },
    {
      "code": "iu",
      "name": "Inuktitut",
      "nativeName": "Inuktitut"
    },
    {
      "code": "ik",
      "name": "Inupiaq",
      "nativeName": "Inupiaq"
    },
    {
      "code": "ga",
      "name": "Irish",
      "nativeName": "Gaeilge"
    },
    {
      "code": "it",
      "name": "Italian",
      "nativeName": "italiano"
    },
    {
      "code": "ja",
      "name": "Japanese",
      "nativeName": "日本語"
    },
    {
      "code": "jv",
      "name": "Javanese",
      "nativeName": "Jawa"
    },
    {
      "code": "kl",
      "name": "Kalaallisut",
      "nativeName": "kalaallisut"
    },
    {
      "code": "kn",
      "name": "Kannada",
      "nativeName": "ಕನ್ನಡ"
    },
    {
      "code": "kr",
      "name": "Kanuri",
      "nativeName": "Kanuri"
    },
    {
      "code": "ks",
      "name": "Kashmiri",
      "nativeName": "کٲشُر"
    },
    {
      "code": "kk",
      "name": "Kazakh",
      "nativeName": "қазақ тілі"
    },
    {
      "code": "km",
      "name": "Khmer",
      "nativeName": "ខ្មែរ"
    },
    {
      "code": "ki",
      "name": "Kikuyu",
      "nativeName": "Gikuyu"
    },
    {
      "code": "rw",
      "name": "Kinyarwanda",
      "nativeName": "Kinyarwanda"
    },
    {
      "code": "kv",
      "name": "Komi",
      "nativeName": "Komi"
    },
    {
      "code": "kg",
      "name": "Kongo",
      "nativeName": "Kongo"
    },
    {
      "code": "ko",
      "name": "Korean",
      "nativeName": "한국어"
    },
    {
      "code": "kj",
      "name": "Kuanyama",
      "nativeName": "Kuanyama"
    },
    {
      "code": "ku",
      "name": "Kurdish",
      "nativeName": "kurdî"
    },
    {
      "code": "ky",
      "name": "Kyrgyz",
      "nativeName": "кыргызча"
    },
    {
      "code": "lo",
      "name": "Lao",
      "nativeName": "ລາວ"
    },
    {
      "code": "la",
      "name": "Latin",
      "nativeName": "Latin"
    },
    {
      "code": "lv",
      "name": "Latvian",
      "nativeName": "latviešu"
    },
    {
      "code": "li",
      "name": "Limburgish",
      "nativeName": "Limburgish"
    },
    {
      "code": "ln",
      "name": "Lingala",
      "nativeName": "lingála"
    },
    {
      "code": "lt",
      "name": "Lithuanian",
      "nativeName": "lietuvių"
    },
    {
      "code": "lu",
      "name": "Luba-Katanga",
      "nativeName": "Tshiluba"
    },
    {
      "code": "lb",
      "name": "Luxembourgish",
      "nativeName": "Lëtzebuergesch"
    },
    {
      "code": "mk",
      "name": "Macedonian",
      "nativeName": "македонски"
    },
    {
      "code": "mg",
      "name": "Malagasy",
      "nativeName": "Malagasy"
    },
    {
      "code": "ms",
      "name": "Malay",
      "nativeName": "Melayu"
    },
    {
      "code": "ml",
      "name": "Malayalam",
      "nativeName": "മലയാളം"
    },
    {
      "code": "mt",
      "name": "Maltese",
      "nativeName": "Malti"
    },
    {
      "code": "gv",
      "name": "Manx",
      "nativeName": "Gaelg"
    },
    {
      "code": "mi",
      "name": "Maori",
      "nativeName": "te reo Māori"
    },
    {
      "code": "mr",
      "name": "Marathi",
      "nativeName": "मराठी"
    },
    {
      "code": "mh",
      "name": "Marshallese",
      "nativeName": "Marshallese"
    },
    {
      "code": "mn",
      "name": "Mongolian",
      "nativeName": "монгол"
    },
    {
      "code": "na",
      "name": "Nauru",
      "nativeName": "Nauru"
    },
    {
      "code": "nv",
      "name": "Navajo",
      "nativeName": "Navajo"
    },
    {
      "code": "ng",
      "name": "Ndonga",
      "nativeName": "Ndonga"
    },
    {
      "code": "ne",
      "name": "Nepali",
      "nativeName": "नेपाली"
    },
    {
      "code": "nd",
      "name": "North Ndebele",
      "nativeName": "isiNdebele"
    },
    {
      "code": "se",
      "name": "Northern Sami",
      "nativeName": "davvisámegiella"
    },
    {
      "code": "no",
      "name": "Norwegian",
      "nativeName": "norsk"
    },
    {
      "code": "nb",
      "name": "Norwegian Bokmål",
      "nativeName": "norsk bokmål"
    },
    {
      "code": "nn",
      "name": "Norwegian Nynorsk",
      "nativeName": "norsk nynorsk"
    },
    {
      "code": "ny",
      "name": "Nyanja",
      "nativeName": "Nyanja"
    },
    {
      "code": "oc",
      "name": "Occitan",
      "nativeName": "Occitan"
    },
    {
      "code": "or",
      "name": "Odia",
      "nativeName": "ଓଡ଼ିଆ"
    },
    {
      "code": "oj",
      "name": "Ojibwa",
      "nativeName": "Ojibwa"
    },
    {
      "code": "om",
      "name": "Oromo",
      "nativeName": "Oromoo"
    },
    {
      "code": "os",
      "name": "Ossetic",
      "nativeName": "ирон"
    },
    {
      "code": "pi",
      "name": "Pali",
      "nativeName": "Pali"
    },
    {
      "code": "ps",
      "name": "Pashto",
      "nativeName": "پښتو"
    },
    {
      "code": "fa",
      "name": "Persian",
      "nativeName": "فارسی"
    },
    {
      "code": "pl",
      "name": "Polish",
      "nativeName": "polski"
    },
    {
      "code": "pt",
      "name": "Portuguese",
      "nativeName": "português"
    },
    {
      "code": "pa",
      "name": "Punjabi",
      "nativeName": "ਪੰਜਾਬੀ"
    },
    {
      "code": "qu",
      "name": "Quechua",
      "nativeName": "Runasimi"
    },
    {
      "code": "ro",
      "name": "Romanian",
      "nativeName": "română"
    },
    {
      "code": "rm",
      "name": "Romansh",
      "nativeName": "rumantsch"
    },
    {
      "code": "rn",
      "name": "Rundi",
      "nativeName": "Ikirundi"
    },
    {
      "code": "ru",
      "name": "Russian",
      "nativeName": "русский"
    },
    {
      "code": "sm",
      "name": "Samoan",
      "nativeName": "Samoan"
    },
    {
      "code": "sg",
      "name": "Sango",
      "nativeName": "Sängö"
    },
    {
      "code": "sa",
      "name": "Sanskrit",
      "nativeName": "संस्कृत भाषा"
    },
    {
      "code": "sc",
      "name": "Sardinian",
      "nativeName": "Sardinian"
    },
    {
      "code": "gd",
      "name": "Scottish Gaelic",
      "nativeName": "Gàidhlig"
    },
    {
      "code": "sr",
      "name": "Serbian",
      "nativeName": "српски"
    },
    {
      "code": "sn",
      "name": "Shona",
      "nativeName": "chiShona"
    },
    {
      "code": "ii",
      "name": "Sichuan Yi",
      "nativeName": "ꆈꌠꉙ"
    },
    {
      "code": "sd",
      "name": "Sindhi",
      "nativeName": "سنڌي"
    },
    {
      "code": "si",
      "name": "Sinhala",
      "nativeName": "සිංහල"
    },
    {
      "code": "sk",
      "name": "Slovak",
      "nativeName": "slovenčina"
    },
    {
      "code": "sl",
      "name": "Slovenian",
      "nativeName": "slovenščina"
    },
    {
      "code": "so",
      "name": "Somali",
      "nativeName": "Soomaali"
    },
    {
      "code": "nr",
      "name": "South Ndebele",
      "nativeName": "South Ndebele"
    },
    {
      "code": "st",
      "name": "Southern Sotho",
      "nativeName": "Southern Sotho"
    },
    {
      "code": "es",
      "name": "Spanish",
      "nativeName": "español"
    },
    {
      "code": "su",
      "name": "Sundanese",
      "nativeName": "Basa Sunda"
    },
    {
      "code": "sw",
      "name": "Swahili",
      "nativeName": "Kiswahili"
    },
    {
      "code": "ss",
      "name": "Swati",
      "nativeName": "Swati"
    },
    {
      "code": "sv",
      "name": "Swedish",
      "nativeName": "svenska"
    },
    {
      "code": "tl",
      "name": "Tagalog",
      "nativeName": "Tagalog"
    },
    {
      "code": "ty",
      "name": "Tahitian",
      "nativeName": "Tahitian"
    },
    {
      "code": "tg",
      "name": "Tajik",
      "nativeName": "тоҷикӣ"
    },
    {
      "code": "ta",
      "name": "Tamil",
      "nativeName": "தமிழ்"
    },
    {
      "code": "tt",
      "name": "Tatar",
      "nativeName": "татар"
    },
    {
      "code": "te",
      "name": "Telugu",
      "nativeName": "తెలుగు"
    },
    {
      "code": "th",
      "name": "Thai",
      "nativeName": "ไทย"
    },
    {
      "code": "bo",
      "name": "Tibetan",
      "nativeName": "བོད་སྐད་"
    },
    {
      "code": "ti",
      "name": "Tigrinya",
      "nativeName": "ትግር"
    },
    {
      "code": "to",
      "name": "Tongan",
      "nativeName": "lea fakatonga"
    },
    {
      "code": "ts",
      "name": "Tsonga",
      "nativeName": "Tsonga"
    },
    {
      "code": "tn",
      "name": "Tswana",
      "nativeName": "Tswana"
    },
    {
      "code": "tr",
      "name": "Turkish",
      "nativeName": "Türkçe"
    },
    {
      "code": "tk",
      "name": "Turkmen",
      "nativeName": "türkmen dili"
    },
    {
      "code": "tw",
      "name": "Twi",
      "nativeName": "Twi"
    },
    {
      "code": "uk",
      "name": "Ukrainian",
      "nativeName": "українська"
    },
    {
      "code": "ur",
      "name": "Urdu",
      "nativeName": "اردو"
    },
    {
      "code": "ug",
      "name": "Uyghur",
      "nativeName": "ئۇيغۇرچە"
    },
    {
      "code": "uz",
      "name": "Uzbek",
      "nativeName": "o‘zbek"
    },
    {
      "code": "ve",
      "name": "Venda",
      "nativeName": "Venda"
    },
    {
      "code": "vi",
      "name": "Vietnamese",
      "nativeName": "Tiếng Việt"
    },
    {
      "code": "vo",
      "name": "Volapük",
      "nativeName": "Volapük"
    },
    {
      "code": "wa",
      "name": "Walloon",
      "nativeName": "Walloon"
    },
    {
      "code": "cy",
      "name": "Welsh",
      "nativeName": "Cymraeg"
    },
    {
      "code": "fy",
      "name": "Western Frisian",
      "nativeName": "Frysk"
    },
    {
      "code": "wo",
      "name": "Wolof",
      "nativeName": "Wolof"
    },
    {
      "code": "xh",
      "name": "Xhosa",
      "nativeName": "isiXhosa"
    },
    {
      "code": "yi",
      "name": "Yiddish",
      "nativeName": "ייִדיש"
    },
    {
      "code": "yo",
      "name": "Yoruba",
      "nativeName": "Èdè Yorùbá"
    },
    {
      "code": "za",
      "name": "Zhuang",
      "nativeName": "Zhuang"
    },
    {
      "code": "zu",
      "name": "Zulu",
      "nativeName": "isiZulu"
    }
]

const allSupportedLanguagesWithAllData = allLanguagesData.filter(language => {
    let supported = false;
    allSupportedLanguages.forEach(suppLanguage => {
        if(suppLanguage.language === language.code) {
            supported = true;
        };
    });
    return supported;
})

let optionString = '';

allSupportedLanguagesWithAllData.forEach(language => {
    optionString += `<option value="${language.code}">${language.name}</option>\n`
})

// console.log(optionString);

// OUTPUT

{/* <option value="af">Afrikaans</option>
<option value="ak">Akan</option>
<option value="sq">Albanian</option>
<option value="am">Amharic</option>
<option value="ar">Arabic</option>
<option value="hy">Armenian</option>
<option value="as">Assamese</option>
<option value="ay">Aymara</option>
<option value="az">Azerbaijani</option>
<option value="bm">Bambara</option>
<option value="bn">Bangla</option>
<option value="eu">Basque</option>
<option value="be">Belarusian</option>
<option value="bs">Bosnian</option>
<option value="bg">Bulgarian</option>
<option value="my">Burmese</option>
<option value="ca">Catalan</option>
<option value="zh">Chinese</option>
<option value="co">Corsican</option>
<option value="hr">Croatian</option>
<option value="cs">Czech</option>
<option value="da">Danish</option>
<option value="dv">Divehi</option>
<option value="nl">Dutch</option>
<option value="en">English</option>
<option value="eo">Esperanto</option>
<option value="et">Estonian</option>
<option value="ee">Ewe</option>
<option value="fi">Finnish</option>
<option value="fr">French</option>
<option value="gl">Galician</option>
<option value="lg">Ganda</option>
<option value="ka">Georgian</option>
<option value="de">German</option>
<option value="el">Greek</option>
<option value="gn">Guarani</option>
<option value="gu">Gujarati</option>
<option value="ht">Haitian Creole</option>
<option value="ha">Hausa</option>
<option value="he">Hebrew</option>
<option value="hi">Hindi</option>
<option value="hu">Hungarian</option>
<option value="is">Icelandic</option>
<option value="ig">Igbo</option>
<option value="id">Indonesian</option>
<option value="ga">Irish</option>
<option value="it">Italian</option>
<option value="ja">Japanese</option>
<option value="jv">Javanese</option>
<option value="kn">Kannada</option>
<option value="kk">Kazakh</option>
<option value="km">Khmer</option>
<option value="rw">Kinyarwanda</option>
<option value="ko">Korean</option>
<option value="ku">Kurdish</option>
<option value="ky">Kyrgyz</option>
<option value="lo">Lao</option>
<option value="la">Latin</option>
<option value="lv">Latvian</option>
<option value="ln">Lingala</option>
<option value="lt">Lithuanian</option>
<option value="lb">Luxembourgish</option>
<option value="mk">Macedonian</option>
<option value="mg">Malagasy</option>
<option value="ms">Malay</option>
<option value="ml">Malayalam</option>
<option value="mt">Maltese</option>
<option value="mi">Maori</option>
<option value="mr">Marathi</option>
<option value="mn">Mongolian</option>
<option value="ne">Nepali</option>
<option value="no">Norwegian</option>
<option value="ny">Nyanja</option>
<option value="or">Odia</option>
<option value="om">Oromo</option>
<option value="ps">Pashto</option>
<option value="fa">Persian</option>
<option value="pl">Polish</option>
<option value="pt">Portuguese</option>
<option value="pa">Punjabi</option>
<option value="qu">Quechua</option>
<option value="ro">Romanian</option>
<option value="ru">Russian</option>
<option value="sm">Samoan</option>
<option value="sa">Sanskrit</option>
<option value="gd">Scottish Gaelic</option>
<option value="sr">Serbian</option>
<option value="sn">Shona</option>
<option value="sd">Sindhi</option>
<option value="si">Sinhala</option>
<option value="sk">Slovak</option>
<option value="sl">Slovenian</option>
<option value="so">Somali</option>
<option value="st">Southern Sotho</option>
<option value="es">Spanish</option>
<option value="su">Sundanese</option>
<option value="sw">Swahili</option>
<option value="sv">Swedish</option>
<option value="tl">Tagalog</option>
<option value="tg">Tajik</option>
<option value="ta">Tamil</option>
<option value="tt">Tatar</option>
<option value="te">Telugu</option>
<option value="th">Thai</option>
<option value="ti">Tigrinya</option>
<option value="ts">Tsonga</option>
<option value="tr">Turkish</option>
<option value="tk">Turkmen</option>
<option value="uk">Ukrainian</option>
<option value="ur">Urdu</option>
<option value="ug">Uyghur</option>
<option value="uz">Uzbek</option>
<option value="vi">Vietnamese</option>
<option value="cy">Welsh</option>
<option value="fy">Western Frisian</option>
<option value="xh">Xhosa</option>
<option value="yi">Yiddish</option>
<option value="yo">Yoruba</option>
<option value="zu">Zulu</option> */}