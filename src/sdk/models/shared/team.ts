import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum TeamTimezoneEnum {
    AfricaAbidjan = "Africa/Abidjan",
    AfricaAccra = "Africa/Accra",
    AfricaAddisAbaba = "Africa/Addis_Ababa",
    AfricaAlgiers = "Africa/Algiers",
    AfricaAsmara = "Africa/Asmara",
    AfricaBamako = "Africa/Bamako",
    AfricaBangui = "Africa/Bangui",
    AfricaBanjul = "Africa/Banjul",
    AfricaBissau = "Africa/Bissau",
    AfricaBlantyre = "Africa/Blantyre",
    AfricaBrazzaville = "Africa/Brazzaville",
    AfricaBujumbura = "Africa/Bujumbura",
    AfricaCairo = "Africa/Cairo",
    AfricaCasablanca = "Africa/Casablanca",
    AfricaCeuta = "Africa/Ceuta",
    AfricaConakry = "Africa/Conakry",
    AfricaDakar = "Africa/Dakar",
    AfricaDarEsSalaam = "Africa/Dar_es_Salaam",
    AfricaDjibouti = "Africa/Djibouti",
    AfricaDouala = "Africa/Douala",
    AfricaElAaiun = "Africa/El_Aaiun",
    AfricaFreetown = "Africa/Freetown",
    AfricaGaborone = "Africa/Gaborone",
    AfricaHarare = "Africa/Harare",
    AfricaJohannesburg = "Africa/Johannesburg",
    AfricaJuba = "Africa/Juba",
    AfricaKampala = "Africa/Kampala",
    AfricaKhartoum = "Africa/Khartoum",
    AfricaKigali = "Africa/Kigali",
    AfricaKinshasa = "Africa/Kinshasa",
    AfricaLagos = "Africa/Lagos",
    AfricaLibreville = "Africa/Libreville",
    AfricaLome = "Africa/Lome",
    AfricaLuanda = "Africa/Luanda",
    AfricaLubumbashi = "Africa/Lubumbashi",
    AfricaLusaka = "Africa/Lusaka",
    AfricaMalabo = "Africa/Malabo",
    AfricaMaputo = "Africa/Maputo",
    AfricaMaseru = "Africa/Maseru",
    AfricaMbabane = "Africa/Mbabane",
    AfricaMogadishu = "Africa/Mogadishu",
    AfricaMonrovia = "Africa/Monrovia",
    AfricaNairobi = "Africa/Nairobi",
    AfricaNdjamena = "Africa/Ndjamena",
    AfricaNiamey = "Africa/Niamey",
    AfricaNouakchott = "Africa/Nouakchott",
    AfricaOuagadougou = "Africa/Ouagadougou",
    AfricaPortoNovo = "Africa/Porto-Novo",
    AfricaSaoTome = "Africa/Sao_Tome",
    AfricaTripoli = "Africa/Tripoli",
    AfricaTunis = "Africa/Tunis",
    AfricaWindhoek = "Africa/Windhoek",
    AmericaAdak = "America/Adak",
    AmericaAnchorage = "America/Anchorage",
    AmericaAnguilla = "America/Anguilla",
    AmericaAntigua = "America/Antigua",
    AmericaAraguaina = "America/Araguaina",
    AmericaArgentinaBuenosAires = "America/Argentina/Buenos_Aires",
    AmericaArgentinaCatamarca = "America/Argentina/Catamarca",
    AmericaArgentinaCordoba = "America/Argentina/Cordoba",
    AmericaArgentinaJujuy = "America/Argentina/Jujuy",
    AmericaArgentinaLaRioja = "America/Argentina/La_Rioja",
    AmericaArgentinaMendoza = "America/Argentina/Mendoza",
    AmericaArgentinaRioGallegos = "America/Argentina/Rio_Gallegos",
    AmericaArgentinaSalta = "America/Argentina/Salta",
    AmericaArgentinaSanJuan = "America/Argentina/San_Juan",
    AmericaArgentinaSanLuis = "America/Argentina/San_Luis",
    AmericaArgentinaTucuman = "America/Argentina/Tucuman",
    AmericaArgentinaUshuaia = "America/Argentina/Ushuaia",
    AmericaAruba = "America/Aruba",
    AmericaAsuncion = "America/Asuncion",
    AmericaAtikokan = "America/Atikokan",
    AmericaBahia = "America/Bahia",
    AmericaBahiaBanderas = "America/Bahia_Banderas",
    AmericaBarbados = "America/Barbados",
    AmericaBelem = "America/Belem",
    AmericaBelize = "America/Belize",
    AmericaBlancSablon = "America/Blanc-Sablon",
    AmericaBoaVista = "America/Boa_Vista",
    AmericaBogota = "America/Bogota",
    AmericaBoise = "America/Boise",
    AmericaCambridgeBay = "America/Cambridge_Bay",
    AmericaCampoGrande = "America/Campo_Grande",
    AmericaCancun = "America/Cancun",
    AmericaCaracas = "America/Caracas",
    AmericaCayenne = "America/Cayenne",
    AmericaCayman = "America/Cayman",
    AmericaChicago = "America/Chicago",
    AmericaChihuahua = "America/Chihuahua",
    AmericaCostaRica = "America/Costa_Rica",
    AmericaCreston = "America/Creston",
    AmericaCuiaba = "America/Cuiaba",
    AmericaCuracao = "America/Curacao",
    AmericaDanmarkshavn = "America/Danmarkshavn",
    AmericaDawson = "America/Dawson",
    AmericaDawsonCreek = "America/Dawson_Creek",
    AmericaDenver = "America/Denver",
    AmericaDetroit = "America/Detroit",
    AmericaDominica = "America/Dominica",
    AmericaEdmonton = "America/Edmonton",
    AmericaEirunepe = "America/Eirunepe",
    AmericaElSalvador = "America/El_Salvador",
    AmericaFortNelson = "America/Fort_Nelson",
    AmericaFortaleza = "America/Fortaleza",
    AmericaGlaceBay = "America/Glace_Bay",
    AmericaGooseBay = "America/Goose_Bay",
    AmericaGrandTurk = "America/Grand_Turk",
    AmericaGrenada = "America/Grenada",
    AmericaGuadeloupe = "America/Guadeloupe",
    AmericaGuatemala = "America/Guatemala",
    AmericaGuayaquil = "America/Guayaquil",
    AmericaGuyana = "America/Guyana",
    AmericaHalifax = "America/Halifax",
    AmericaHavana = "America/Havana",
    AmericaHermosillo = "America/Hermosillo",
    AmericaIndianaIndianapolis = "America/Indiana/Indianapolis",
    AmericaIndianaKnox = "America/Indiana/Knox",
    AmericaIndianaMarengo = "America/Indiana/Marengo",
    AmericaIndianaPetersburg = "America/Indiana/Petersburg",
    AmericaIndianaTellCity = "America/Indiana/Tell_City",
    AmericaIndianaVevay = "America/Indiana/Vevay",
    AmericaIndianaVincennes = "America/Indiana/Vincennes",
    AmericaIndianaWinamac = "America/Indiana/Winamac",
    AmericaInuvik = "America/Inuvik",
    AmericaIqaluit = "America/Iqaluit",
    AmericaJamaica = "America/Jamaica",
    AmericaJuneau = "America/Juneau",
    AmericaKentuckyLouisville = "America/Kentucky/Louisville",
    AmericaKentuckyMonticello = "America/Kentucky/Monticello",
    AmericaKralendijk = "America/Kralendijk",
    AmericaLaPaz = "America/La_Paz",
    AmericaLima = "America/Lima",
    AmericaLosAngeles = "America/Los_Angeles",
    AmericaLowerPrinces = "America/Lower_Princes",
    AmericaMaceio = "America/Maceio",
    AmericaManagua = "America/Managua",
    AmericaManaus = "America/Manaus",
    AmericaMarigot = "America/Marigot",
    AmericaMartinique = "America/Martinique",
    AmericaMatamoros = "America/Matamoros",
    AmericaMazatlan = "America/Mazatlan",
    AmericaMenominee = "America/Menominee",
    AmericaMerida = "America/Merida",
    AmericaMetlakatla = "America/Metlakatla",
    AmericaMexicoCity = "America/Mexico_City",
    AmericaMiquelon = "America/Miquelon",
    AmericaMoncton = "America/Moncton",
    AmericaMonterrey = "America/Monterrey",
    AmericaMontevideo = "America/Montevideo",
    AmericaMontserrat = "America/Montserrat",
    AmericaNassau = "America/Nassau",
    AmericaNewYork = "America/New_York",
    AmericaNipigon = "America/Nipigon",
    AmericaNome = "America/Nome",
    AmericaNoronha = "America/Noronha",
    AmericaNorthDakotaBeulah = "America/North_Dakota/Beulah",
    AmericaNorthDakotaCenter = "America/North_Dakota/Center",
    AmericaNorthDakotaNewSalem = "America/North_Dakota/New_Salem",
    AmericaNuuk = "America/Nuuk",
    AmericaOjinaga = "America/Ojinaga",
    AmericaPanama = "America/Panama",
    AmericaPangnirtung = "America/Pangnirtung",
    AmericaParamaribo = "America/Paramaribo",
    AmericaPhoenix = "America/Phoenix",
    AmericaPortAuPrince = "America/Port-au-Prince",
    AmericaPortOfSpain = "America/Port_of_Spain",
    AmericaPortoVelho = "America/Porto_Velho",
    AmericaPuertoRico = "America/Puerto_Rico",
    AmericaPuntaArenas = "America/Punta_Arenas",
    AmericaRainyRiver = "America/Rainy_River",
    AmericaRankinInlet = "America/Rankin_Inlet",
    AmericaRecife = "America/Recife",
    AmericaRegina = "America/Regina",
    AmericaResolute = "America/Resolute",
    AmericaRioBranco = "America/Rio_Branco",
    AmericaSantarem = "America/Santarem",
    AmericaSantiago = "America/Santiago",
    AmericaSantoDomingo = "America/Santo_Domingo",
    AmericaSaoPaulo = "America/Sao_Paulo",
    AmericaScoresbysund = "America/Scoresbysund",
    AmericaSitka = "America/Sitka",
    AmericaStBarthelemy = "America/St_Barthelemy",
    AmericaStJohns = "America/St_Johns",
    AmericaStKitts = "America/St_Kitts",
    AmericaStLucia = "America/St_Lucia",
    AmericaStThomas = "America/St_Thomas",
    AmericaStVincent = "America/St_Vincent",
    AmericaSwiftCurrent = "America/Swift_Current",
    AmericaTegucigalpa = "America/Tegucigalpa",
    AmericaThule = "America/Thule",
    AmericaThunderBay = "America/Thunder_Bay",
    AmericaTijuana = "America/Tijuana",
    AmericaToronto = "America/Toronto",
    AmericaTortola = "America/Tortola",
    AmericaVancouver = "America/Vancouver",
    AmericaWhitehorse = "America/Whitehorse",
    AmericaWinnipeg = "America/Winnipeg",
    AmericaYakutat = "America/Yakutat",
    AmericaYellowknife = "America/Yellowknife",
    AntarcticaCasey = "Antarctica/Casey",
    AntarcticaDavis = "Antarctica/Davis",
    AntarcticaDumontDUrville = "Antarctica/DumontDUrville",
    AntarcticaMacquarie = "Antarctica/Macquarie",
    AntarcticaMawson = "Antarctica/Mawson",
    AntarcticaMcMurdo = "Antarctica/McMurdo",
    AntarcticaPalmer = "Antarctica/Palmer",
    AntarcticaRothera = "Antarctica/Rothera",
    AntarcticaSyowa = "Antarctica/Syowa",
    AntarcticaTroll = "Antarctica/Troll",
    AntarcticaVostok = "Antarctica/Vostok",
    ArcticLongyearbyen = "Arctic/Longyearbyen",
    AsiaAden = "Asia/Aden",
    AsiaAlmaty = "Asia/Almaty",
    AsiaAmman = "Asia/Amman",
    AsiaAnadyr = "Asia/Anadyr",
    AsiaAqtau = "Asia/Aqtau",
    AsiaAqtobe = "Asia/Aqtobe",
    AsiaAshgabat = "Asia/Ashgabat",
    AsiaAtyrau = "Asia/Atyrau",
    AsiaBaghdad = "Asia/Baghdad",
    AsiaBahrain = "Asia/Bahrain",
    AsiaBaku = "Asia/Baku",
    AsiaBangkok = "Asia/Bangkok",
    AsiaBarnaul = "Asia/Barnaul",
    AsiaBeirut = "Asia/Beirut",
    AsiaBishkek = "Asia/Bishkek",
    AsiaBrunei = "Asia/Brunei",
    AsiaChita = "Asia/Chita",
    AsiaChoibalsan = "Asia/Choibalsan",
    AsiaColombo = "Asia/Colombo",
    AsiaDamascus = "Asia/Damascus",
    AsiaDhaka = "Asia/Dhaka",
    AsiaDili = "Asia/Dili",
    AsiaDubai = "Asia/Dubai",
    AsiaDushanbe = "Asia/Dushanbe",
    AsiaFamagusta = "Asia/Famagusta",
    AsiaGaza = "Asia/Gaza",
    AsiaHebron = "Asia/Hebron",
    AsiaHoChiMinh = "Asia/Ho_Chi_Minh",
    AsiaHongKong = "Asia/Hong_Kong",
    AsiaHovd = "Asia/Hovd",
    AsiaIrkutsk = "Asia/Irkutsk",
    AsiaJakarta = "Asia/Jakarta",
    AsiaJayapura = "Asia/Jayapura",
    AsiaJerusalem = "Asia/Jerusalem",
    AsiaKabul = "Asia/Kabul",
    AsiaKamchatka = "Asia/Kamchatka",
    AsiaKarachi = "Asia/Karachi",
    AsiaKathmandu = "Asia/Kathmandu",
    AsiaKhandyga = "Asia/Khandyga",
    AsiaKolkata = "Asia/Kolkata",
    AsiaKrasnoyarsk = "Asia/Krasnoyarsk",
    AsiaKualaLumpur = "Asia/Kuala_Lumpur",
    AsiaKuching = "Asia/Kuching",
    AsiaKuwait = "Asia/Kuwait",
    AsiaMacau = "Asia/Macau",
    AsiaMagadan = "Asia/Magadan",
    AsiaMakassar = "Asia/Makassar",
    AsiaManila = "Asia/Manila",
    AsiaMuscat = "Asia/Muscat",
    AsiaNicosia = "Asia/Nicosia",
    AsiaNovokuznetsk = "Asia/Novokuznetsk",
    AsiaNovosibirsk = "Asia/Novosibirsk",
    AsiaOmsk = "Asia/Omsk",
    AsiaOral = "Asia/Oral",
    AsiaPhnomPenh = "Asia/Phnom_Penh",
    AsiaPontianak = "Asia/Pontianak",
    AsiaPyongyang = "Asia/Pyongyang",
    AsiaQatar = "Asia/Qatar",
    AsiaQostanay = "Asia/Qostanay",
    AsiaQyzylorda = "Asia/Qyzylorda",
    AsiaRiyadh = "Asia/Riyadh",
    AsiaSakhalin = "Asia/Sakhalin",
    AsiaSamarkand = "Asia/Samarkand",
    AsiaSeoul = "Asia/Seoul",
    AsiaShanghai = "Asia/Shanghai",
    AsiaSingapore = "Asia/Singapore",
    AsiaSrednekolymsk = "Asia/Srednekolymsk",
    AsiaTaipei = "Asia/Taipei",
    AsiaTashkent = "Asia/Tashkent",
    AsiaTbilisi = "Asia/Tbilisi",
    AsiaTehran = "Asia/Tehran",
    AsiaThimphu = "Asia/Thimphu",
    AsiaTokyo = "Asia/Tokyo",
    AsiaTomsk = "Asia/Tomsk",
    AsiaUlaanbaatar = "Asia/Ulaanbaatar",
    AsiaUrumqi = "Asia/Urumqi",
    AsiaUstNera = "Asia/Ust-Nera",
    AsiaVientiane = "Asia/Vientiane",
    AsiaVladivostok = "Asia/Vladivostok",
    AsiaYakutsk = "Asia/Yakutsk",
    AsiaYangon = "Asia/Yangon",
    AsiaYekaterinburg = "Asia/Yekaterinburg",
    AsiaYerevan = "Asia/Yerevan",
    AtlanticAzores = "Atlantic/Azores",
    AtlanticBermuda = "Atlantic/Bermuda",
    AtlanticCanary = "Atlantic/Canary",
    AtlanticCapeVerde = "Atlantic/Cape_Verde",
    AtlanticFaroe = "Atlantic/Faroe",
    AtlanticMadeira = "Atlantic/Madeira",
    AtlanticReykjavik = "Atlantic/Reykjavik",
    AtlanticSouthGeorgia = "Atlantic/South_Georgia",
    AtlanticStHelena = "Atlantic/St_Helena",
    AtlanticStanley = "Atlantic/Stanley",
    AustraliaAdelaide = "Australia/Adelaide",
    AustraliaBrisbane = "Australia/Brisbane",
    AustraliaBrokenHill = "Australia/Broken_Hill",
    AustraliaDarwin = "Australia/Darwin",
    AustraliaEucla = "Australia/Eucla",
    AustraliaHobart = "Australia/Hobart",
    AustraliaLindeman = "Australia/Lindeman",
    AustraliaLordHowe = "Australia/Lord_Howe",
    AustraliaMelbourne = "Australia/Melbourne",
    AustraliaPerth = "Australia/Perth",
    AustraliaSydney = "Australia/Sydney",
    CanadaAtlantic = "Canada/Atlantic",
    CanadaCentral = "Canada/Central",
    CanadaEastern = "Canada/Eastern",
    CanadaMountain = "Canada/Mountain",
    CanadaNewfoundland = "Canada/Newfoundland",
    CanadaPacific = "Canada/Pacific",
    EuropeAmsterdam = "Europe/Amsterdam",
    EuropeAndorra = "Europe/Andorra",
    EuropeAstrakhan = "Europe/Astrakhan",
    EuropeAthens = "Europe/Athens",
    EuropeBelgrade = "Europe/Belgrade",
    EuropeBerlin = "Europe/Berlin",
    EuropeBratislava = "Europe/Bratislava",
    EuropeBrussels = "Europe/Brussels",
    EuropeBucharest = "Europe/Bucharest",
    EuropeBudapest = "Europe/Budapest",
    EuropeBusingen = "Europe/Busingen",
    EuropeChisinau = "Europe/Chisinau",
    EuropeCopenhagen = "Europe/Copenhagen",
    EuropeDublin = "Europe/Dublin",
    EuropeGibraltar = "Europe/Gibraltar",
    EuropeGuernsey = "Europe/Guernsey",
    EuropeHelsinki = "Europe/Helsinki",
    EuropeIsleOfMan = "Europe/Isle_of_Man",
    EuropeIstanbul = "Europe/Istanbul",
    EuropeJersey = "Europe/Jersey",
    EuropeKaliningrad = "Europe/Kaliningrad",
    EuropeKiev = "Europe/Kiev",
    EuropeKirov = "Europe/Kirov",
    EuropeLisbon = "Europe/Lisbon",
    EuropeLjubljana = "Europe/Ljubljana",
    EuropeLondon = "Europe/London",
    EuropeLuxembourg = "Europe/Luxembourg",
    EuropeMadrid = "Europe/Madrid",
    EuropeMalta = "Europe/Malta",
    EuropeMariehamn = "Europe/Mariehamn",
    EuropeMinsk = "Europe/Minsk",
    EuropeMonaco = "Europe/Monaco",
    EuropeMoscow = "Europe/Moscow",
    EuropeOslo = "Europe/Oslo",
    EuropeParis = "Europe/Paris",
    EuropePodgorica = "Europe/Podgorica",
    EuropePrague = "Europe/Prague",
    EuropeRiga = "Europe/Riga",
    EuropeRome = "Europe/Rome",
    EuropeSamara = "Europe/Samara",
    EuropeSanMarino = "Europe/San_Marino",
    EuropeSarajevo = "Europe/Sarajevo",
    EuropeSaratov = "Europe/Saratov",
    EuropeSimferopol = "Europe/Simferopol",
    EuropeSkopje = "Europe/Skopje",
    EuropeSofia = "Europe/Sofia",
    EuropeStockholm = "Europe/Stockholm",
    EuropeTallinn = "Europe/Tallinn",
    EuropeTirane = "Europe/Tirane",
    EuropeUlyanovsk = "Europe/Ulyanovsk",
    EuropeUzhgorod = "Europe/Uzhgorod",
    EuropeVaduz = "Europe/Vaduz",
    EuropeVatican = "Europe/Vatican",
    EuropeVienna = "Europe/Vienna",
    EuropeVilnius = "Europe/Vilnius",
    EuropeVolgograd = "Europe/Volgograd",
    EuropeWarsaw = "Europe/Warsaw",
    EuropeZagreb = "Europe/Zagreb",
    EuropeZaporozhye = "Europe/Zaporozhye",
    EuropeZurich = "Europe/Zurich",
    Gmt = "GMT",
    IndianAntananarivo = "Indian/Antananarivo",
    IndianChagos = "Indian/Chagos",
    IndianChristmas = "Indian/Christmas",
    IndianCocos = "Indian/Cocos",
    IndianComoro = "Indian/Comoro",
    IndianKerguelen = "Indian/Kerguelen",
    IndianMahe = "Indian/Mahe",
    IndianMaldives = "Indian/Maldives",
    IndianMauritius = "Indian/Mauritius",
    IndianMayotte = "Indian/Mayotte",
    IndianReunion = "Indian/Reunion",
    PacificApia = "Pacific/Apia",
    PacificAuckland = "Pacific/Auckland",
    PacificBougainville = "Pacific/Bougainville",
    PacificChatham = "Pacific/Chatham",
    PacificChuuk = "Pacific/Chuuk",
    PacificEaster = "Pacific/Easter",
    PacificEfate = "Pacific/Efate",
    PacificEnderbury = "Pacific/Enderbury",
    PacificFakaofo = "Pacific/Fakaofo",
    PacificFiji = "Pacific/Fiji",
    PacificFunafuti = "Pacific/Funafuti",
    PacificGalapagos = "Pacific/Galapagos",
    PacificGambier = "Pacific/Gambier",
    PacificGuadalcanal = "Pacific/Guadalcanal",
    PacificGuam = "Pacific/Guam",
    PacificHonolulu = "Pacific/Honolulu",
    PacificKiritimati = "Pacific/Kiritimati",
    PacificKosrae = "Pacific/Kosrae",
    PacificKwajalein = "Pacific/Kwajalein",
    PacificMajuro = "Pacific/Majuro",
    PacificMarquesas = "Pacific/Marquesas",
    PacificMidway = "Pacific/Midway",
    PacificNauru = "Pacific/Nauru",
    PacificNiue = "Pacific/Niue",
    PacificNorfolk = "Pacific/Norfolk",
    PacificNoumea = "Pacific/Noumea",
    PacificPagoPago = "Pacific/Pago_Pago",
    PacificPalau = "Pacific/Palau",
    PacificPitcairn = "Pacific/Pitcairn",
    PacificPohnpei = "Pacific/Pohnpei",
    PacificPortMoresby = "Pacific/Port_Moresby",
    PacificRarotonga = "Pacific/Rarotonga",
    PacificSaipan = "Pacific/Saipan",
    PacificTahiti = "Pacific/Tahiti",
    PacificTarawa = "Pacific/Tarawa",
    PacificTongatapu = "Pacific/Tongatapu",
    PacificWake = "Pacific/Wake",
    PacificWallis = "Pacific/Wallis",
    USAlaska = "US/Alaska",
    USArizona = "US/Arizona",
    USCentral = "US/Central",
    USEastern = "US/Eastern",
    USHawaii = "US/Hawaii",
    USMountain = "US/Mountain",
    USPacific = "US/Pacific",
    Utc = "UTC"
}

export class Team extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_control" })
  accessControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=anonymize_ips" })
  anonymizeIps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=api_token" })
  apiToken: string;

  @SpeakeasyMetadata({ data: "json, name=app_urls" })
  appUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=capture_console_log_opt_in" })
  captureConsoleLogOptIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=capture_performance_opt_in" })
  capturePerformanceOptIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=completed_snippet_onboarding" })
  completedSnippetOnboarding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=correlation_config" })
  correlationConfig?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=data_attributes" })
  dataAttributes?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=effective_membership_level" })
  effectiveMembershipLevel: number;

  @SpeakeasyMetadata({ data: "json, name=groups_on_events_querying_enabled" })
  groupsOnEventsQueryingEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_group_types" })
  hasGroupTypes: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=ingested_event" })
  ingestedEvent: boolean;

  @SpeakeasyMetadata({ data: "json, name=inject_web_apps" })
  injectWebApps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_demo" })
  isDemo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=live_events_columns" })
  liveEventsColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization: string;

  @SpeakeasyMetadata({ data: "json, name=path_cleaning_filters" })
  pathCleaningFilters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=person_display_name_properties" })
  personDisplayNameProperties?: string[];

  @SpeakeasyMetadata({ data: "json, name=person_on_events_querying_enabled" })
  personOnEventsQueryingEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=primary_dashboard" })
  primaryDashboard?: number;

  @SpeakeasyMetadata({ data: "json, name=recording_domains" })
  recordingDomains?: string[];

  @SpeakeasyMetadata({ data: "json, name=session_recording_opt_in" })
  sessionRecordingOptIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=slack_incoming_webhook" })
  slackIncomingWebhook?: string;

  @SpeakeasyMetadata({ data: "json, name=test_account_filters" })
  testAccountFilters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=test_account_filters_default_checked" })
  testAccountFiltersDefaultChecked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: TeamTimezoneEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;
}

export class TeamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_control, form, name=access_control;, multipart_form, name=access_control" })
  accessControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=anonymize_ips, form, name=anonymize_ips;, multipart_form, name=anonymize_ips" })
  anonymizeIps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=app_urls, form, name=app_urls;, multipart_form, name=app_urls" })
  appUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=capture_console_log_opt_in, form, name=capture_console_log_opt_in;, multipart_form, name=capture_console_log_opt_in" })
  captureConsoleLogOptIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=capture_performance_opt_in, form, name=capture_performance_opt_in;, multipart_form, name=capture_performance_opt_in" })
  capturePerformanceOptIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=completed_snippet_onboarding, form, name=completed_snippet_onboarding;, multipart_form, name=completed_snippet_onboarding" })
  completedSnippetOnboarding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=correlation_config, form, name=correlation_config;json=true, multipart_form, name=correlation_config;json=true" })
  correlationConfig?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=data_attributes, form, name=data_attributes;json=true, multipart_form, name=data_attributes;json=true" })
  dataAttributes?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=inject_web_apps, form, name=inject_web_apps;, multipart_form, name=inject_web_apps" })
  injectWebApps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_demo, form, name=is_demo;, multipart_form, name=is_demo" })
  isDemo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=live_events_columns, form, name=live_events_columns;, multipart_form, name=live_events_columns" })
  liveEventsColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;, multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path_cleaning_filters, form, name=path_cleaning_filters;json=true, multipart_form, name=path_cleaning_filters;json=true" })
  pathCleaningFilters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=person_display_name_properties, form, name=person_display_name_properties;, multipart_form, name=person_display_name_properties" })
  personDisplayNameProperties?: string[];

  @SpeakeasyMetadata({ data: "json, name=primary_dashboard, form, name=primary_dashboard;, multipart_form, name=primary_dashboard" })
  primaryDashboard?: number;

  @SpeakeasyMetadata({ data: "json, name=recording_domains, form, name=recording_domains;, multipart_form, name=recording_domains" })
  recordingDomains?: string[];

  @SpeakeasyMetadata({ data: "json, name=session_recording_opt_in, form, name=session_recording_opt_in;, multipart_form, name=session_recording_opt_in" })
  sessionRecordingOptIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=slack_incoming_webhook, form, name=slack_incoming_webhook;, multipart_form, name=slack_incoming_webhook" })
  slackIncomingWebhook?: string;

  @SpeakeasyMetadata({ data: "json, name=test_account_filters, form, name=test_account_filters;json=true, multipart_form, name=test_account_filters;json=true" })
  testAccountFilters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=test_account_filters_default_checked, form, name=test_account_filters_default_checked;, multipart_form, name=test_account_filters_default_checked" })
  testAccountFiltersDefaultChecked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timezone, form, name=timezone;, multipart_form, name=timezone" })
  timezone?: TeamTimezoneEnum;
}