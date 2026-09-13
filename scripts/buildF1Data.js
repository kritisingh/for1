import fs from 'fs';
import path from 'path';

const sleep = ms => new Promise(r => setTimeout(r, ms));

const CACHE_FILE = path.resolve('src/data/season_cache.json');
let cache = {};
if (fs.existsSync(CACHE_FILE)) {
  try {
    cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
  } catch (e) {
    cache = {};
  }
}

function saveCache() {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf-8');
}

const teamColors = {
  'McLaren': '#FF8000',
  'Red Bull': '#3671C6',
  'Red Bull Racing': '#3671C6',
  'Ferrari': '#E8002D',
  'Mercedes': '#27F4D2',
  'Aston Martin': '#229971',
  'Alpine F1 Team': '#0093CC',
  'Alpine': '#0093CC',
  'Haas F1 Team': '#B6BABD',
  'Haas': '#B6BABD',
  'RB F1 Team': '#6692FF',
  'AlphaTauri': '#5E8FAA',
  'Toro Rosso': '#469BFF',
  'Williams': '#64C4FF',
  'Sauber': '#52E252',
  'Kick Sauber': '#52E252',
  'Alfa Romeo': '#900000',
  'Racing Point': '#F596C8',
  'Force India': '#FF80C7',
  'Renault': '#FFF500',
  'Lotus': '#E5C158',
  'Lotus F1': '#E5C158',
  'Lotus-Climax': '#004225',
  'Lotus-Ford': '#E5C158',
  'Lotus-BRM': '#004225',
  'Brawn': '#E8FF00',
  'Brawn GP': '#E8FF00',
  'BMW Sauber': '#002B49',
  'Toyota': '#E10600',
  'BAR': '#FFFFFF',
  'Jordan': '#EAA400',
  'Benetton': '#0090FF',
  'Stewart': '#FFFFFF',
  'Prost': '#00267F',
  'Arrows': '#FF7300',
  'Footwork': '#E60000',
  'Ligier': '#003399',
  'Minardi': '#FFD700',
  'Tyrrell': '#002D72',
  'Brabham': '#0047AB',
  'Brabham-Repco': '#0047AB',
  'Brabham-Alfa Romeo': '#0047AB',
  'Brabham-Ford': '#0047AB',
  'Brabham-Climax': '#0047AB',
  'Matra': '#0055A5',
  'Matra-Ford': '#0055A5',
  'BRM': '#0B6623',
  'Cooper': '#004225',
  'Cooper-Climax': '#004225',
  'Cooper-Maserati': '#004225',
  'Vanwall': '#1E4D2B',
  'Maserati': '#0C2340',
  'Lancia': '#9B111E',
  'Mercedes-Benz': '#D1D5DB',
  'Talbot-Lago': '#4169E1',
  'Hesketh': '#FFFFFF',
  'Shadow': '#111111',
  'March': '#FF6600',
  'Surtees': '#FFFFFF',
  'Wolf': '#1E293B',
  'Penske': '#FFFFFF',
  'Fittipaldi': '#FFD700'
};

const iconicCars = {
  2025: 'MCL38 / MCL39',
  2024: 'MCL38',
  2023: 'RB19',
  2022: 'RB18',
  2021: 'W12 E Performance',
  2020: 'W11 EQ Performance',
  2019: 'W10 EQ Power+',
  2018: 'W09 EQ Power+',
  2017: 'W08 EQ Power+',
  2016: 'F1 W07 Hybrid',
  2015: 'F1 W06 Hybrid',
  2014: 'F1 W05 Hybrid',
  2013: 'RB9',
  2012: 'RB8',
  2011: 'RB7',
  2010: 'RB6',
  2009: 'BGP 001',
  2008: 'F2008',
  2007: 'F2007',
  2006: 'R26',
  2005: 'R25',
  2004: 'F2004',
  2003: 'F2003-GA',
  2002: 'F2002',
  2001: 'F2001',
  2000: 'F1-2000',
  1999: 'F399',
  1998: 'MP4/13',
  1997: 'FW19',
  1996: 'FW18',
  1995: 'B195',
  1994: 'FW16',
  1993: 'FW15C',
  1992: 'FW14B',
  1991: 'MP4/6',
  1990: 'MP4/5B',
  1989: 'MP4/5',
  1988: 'MP4/4',
  1987: 'FW11B',
  1986: 'FW11',
  1985: 'MP4/2B',
  1984: 'MP4/2',
  1983: '126C3',
  1982: '126C2',
  1981: 'FW07C',
  1980: 'FW07B',
  1979: '312T4',
  1978: 'Lotus 79',
  1977: '312T2',
  1976: '312T2',
  1975: '312T',
  1974: 'M23',
  1973: 'Lotus 72E',
  1972: 'Lotus 72D',
  1971: 'Tyrrell 003',
  1970: 'Lotus 72',
  1969: 'Matra MS80',
  1968: 'Lotus 49B',
  1967: 'Brabham BT24',
  1966: 'Brabham BT19',
  1965: 'Lotus 33',
  1964: 'Ferrari 158',
  1963: 'Lotus 25',
  1962: 'BRM P57',
  1961: 'Ferrari 156 Sharknose',
  1960: 'Cooper T53',
  1959: 'Cooper T51',
  1958: 'Vanwall VW5',
  1957: 'Maserati 250F',
  1956: 'Lancia-Ferrari D50',
  1955: 'Mercedes-Benz W196',
  1954: 'Mercedes-Benz W196',
  1953: 'Ferrari 500',
  1952: 'Ferrari 500',
  1951: 'Alfa Romeo 159',
  1950: 'Alfa Romeo 158'
};

const eraDefinitions = year => {
  if (year >= 2022) return { name: 'Ground Effect & Hybrid Era', engine: '1.6L V6 Turbo + 350kW E-Deployment', code: 'ground-effect' };
  if (year >= 2014) return { name: 'Turbo-Hybrid Dawn', engine: '1.6L V6 Turbo + MGU-K & MGU-H', code: 'turbo-hybrid' };
  if (year >= 2006) return { name: 'Screaming 2.4L V8 Era', engine: '2.4L Naturally Aspirated V8 (18,000 RPM)', code: 'v8-era' };
  if (year >= 1995) return { name: 'Symphonic 3.0L V10 Era', engine: '3.0L Naturally Aspirated V10 (19,000+ RPM)', code: 'v10-era' };
  if (year >= 1989) return { name: 'Naturally Aspirated 3.5L Era', engine: '3.5L Atmospheric V10 / V12 Monsters', code: 'na-35' };
  if (year >= 1977) return { name: 'First Turbo Monster Era', engine: '1.5L Turbocharged (Up to 1,400 HP)', code: 'turbo-monsters' };
  if (year >= 1966) return { name: '3-Litre Return & Aero Dawn', engine: '3.0L Cosworth DFV V8 & Giant Wings', code: 'dfv-aero' };
  if (year >= 1961) return { name: '1.5L Lightweight Rear-Engine Era', engine: '1.5L Rear-Engine British Revolution', code: 'rear-engine' };
  return { name: 'Front-Engine Pioneers Era', engine: '4.5L Atmospheric / 1.5L Supercharged', code: 'pioneers' };
};

const driverPortraits = {
  'norris': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col/image.png',
  'max_verstappen': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png',
  'piastri': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/2col/image.png',
  'leclerc': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png',
  'hamilton': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png',
  'russell': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png',
  'sainz': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png',
  'perez': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png',
  'alonso': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png',
  'bottas': 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col/image.png',
  'rosberg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nico_Rosberg_2016_Malaysia_1.jpg/440px-Nico_Rosberg_2016_Malaysia_1.jpg',
  'vettel': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Sebastian_Vettel_2019_Formula_One_tests_Barcelona_%28cropped%29.jpg/440px-Sebastian_Vettel_2019_Formula_One_tests_Barcelona_%28cropped%29.jpg',
  'button': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Jenson_Button_2015_Malaysia.jpg/440px-Jenson_Button_2015_Malaysia.jpg',
  'raikkonen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Kimi_R%C3%A4ikk%C3%B6nen_2019_Formula_One_tests_Barcelona.jpg/440px-Kimi_R%C3%A4ikk%C3%B6nen_2019_Formula_One_tests_Barcelona.jpg',
  'michael_schumacher': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Michael_Schumacher_2012.jpg/440px-Michael_Schumacher_2012.jpg',
  'hakkinen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Mika_H%C3%A4kkinen_2014.jpg/440px-Mika_H%C3%A4kkinen_2014.jpg',
  'villeneuve': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jacques_Villeneuve_2010.jpg/440px-Jacques_Villeneuve_2010.jpg',
  'damon_hill': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Damon_Hill_2014.jpg/440px-Damon_Hill_2014.jpg',
  'mansell': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Nigel_Mansell_2014.jpg/440px-Nigel_Mansell_2014.jpg',
  'senna': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ayrton_Senna_Imola_1989.jpg/440px-Ayrton_Senna_Imola_1989.jpg',
  'prost': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Alain_Prost_1984.jpg/440px-Alain_Prost_1984.jpg',
  'piquet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nelson_Piquet_1983.jpg/440px-Nelson_Piquet_1983.jpg',
  'lauda': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Niki_Lauda_N%C3%BCrburgring_1976.jpg/440px-Niki_Lauda_N%C3%BCrburgring_1976.jpg',
  'scheckter': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Jody_Scheckter_1977.jpg/440px-Jody_Scheckter_1977.jpg',
  'mario_andretti': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mario_Andretti_1978.jpg/440px-Mario_Andretti_1978.jpg',
  'hunt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/James_Hunt_1976.jpg/440px-James_Hunt_1976.jpg',
  'fittipaldi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Emerson_Fittipaldi_1974.jpg/440px-Emerson_Fittipaldi_1974.jpg',
  'stewart': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Jackie_Stewart_1969.jpg/440px-Jackie_Stewart_1969.jpg',
  'rindt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jochen_Rindt_1969.jpg/440px-Jochen_Rindt_1969.jpg',
  'hulme': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Denny_Hulme_1973.jpg/440px-Denny_Hulme_1973.jpg',
  'brabham': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Jack_Brabham_1966.jpg/440px-Jack_Brabham_1966.jpg',
  'surtees': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/John_Surtees_1964.jpg/440px-John_Surtees_1964.jpg',
  'clark': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Jim_Clark_1965.jpg/440px-Jim_Clark_1965.jpg',
  'graham_hill': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Graham_Hill_1969.jpg/440px-Graham_Hill_1969.jpg',
  'phil_hill': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Phil_Hill_1962.jpg/440px-Phil_Hill_1962.jpg',
  'hawthorn': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Mike_Hawthorn_1958.jpg/440px-Mike_Hawthorn_1958.jpg',
  'fangio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Juan_Manuel_Fangio_1952.jpg/440px-Juan_Manuel_Fangio_1952.jpg',
  'ascari': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Alberto_Ascari_1953.jpg/440px-Alberto_Ascari_1953.jpg',
  'farina': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Giuseppe_Farina_1950.jpg/440px-Giuseppe_Farina_1950.jpg'
};

const dramaticMilestones = [
  {
    afterYear: 2021,
    type: 'radio',
    badge: '⚠️ RACE CONTROL CONTROVERSY',
    title: 'THE 58th LAP IN ABU DHABI',
    tagline: 'Drive to Survive Season 4 Climax',
    quote: '“No Michael, no, no, Michael, that was so not right!”',
    speaker: 'Toto Wolff to Race Director Michael Masi',
    description: 'Tied on 369.5 points entering the final round. A late safety car, unlapped cars controversially cleared between the leaders, and a single-lap sprint on fresh soft tires. Max Verstappen overtakes Lewis Hamilton on Turn 5 to clinch his maiden title in the most explosive, polarizing finale in sporting history.',
    stats: [{ label: 'Lead Change', value: 'Lap 58 of 58' }, { label: 'Championship Gap', value: '8 Points' }]
  },
  {
    afterYear: 2018,
    type: 'tech',
    badge: '🔬 SAFETY REVOLUTION',
    title: 'THE HALO SILENCES THE CRITICS',
    tagline: '12 Tonnes of Titanium Over the Cockpit',
    quote: '“I wasn’t in favor of the halo, but it’s the greatest thing we’ve brought to Formula 1.”',
    speaker: 'Romain Grosjean, from his hospital bed',
    description: 'Mocked at its unveiling as an ugly “flip-flop”, the FIA-mandated titanium halo withstands 125 kilo-Newtons of force. In Bahrain 2020, Romain Grosjean’s Haas breaches an armco barrier at 137 mph in a 67G inferno—the halo parts the steel and saves his life.',
    stats: [{ label: 'Titanium Load Rating', value: '12,000 kg' }, { label: 'Weight Penalty', value: '7 kg' }]
  },
  {
    afterYear: 2014,
    type: 'tech',
    badge: '⚡ ENGINE PARADIGM SHIFT',
    title: 'DAWN OF THE TURBO-HYBRID GODS',
    tagline: 'Thermal Efficiency Beyond 50%',
    quote: '“The quiet was deafening. But the acceleration out of corners was like a fighter jet on a catapult.”',
    speaker: 'Lewis Hamilton',
    description: 'Formula 1 axes the screaming 2.4L V8s for 1.6L V6 turbocharged hybrids armed with two energy recovery units: MGU-K (kinetic braking) and MGU-H (turbo heat). Mercedes AMG nails the split-turbo architecture, unleashing an unyielding 8-year Constructors reign.',
    stats: [{ label: 'Thermal Efficiency', value: '> 50%' }, { label: 'Mercedes Win Streak', value: '8 Titles (2014-2021)' }]
  },
  {
    afterYear: 2011,
    type: 'tech',
    badge: '💨 AERODYNAMIC WEAPONRY',
    title: 'THE FLAP OPENS: DRS INTRODUCED',
    tagline: 'Slashing Aerodynamic Drag at 200 mph',
    quote: '“Detection point: 1 second gap. Flap deployed: instant +15 km/h overspeed.”',
    speaker: 'Pit Wall Telemetry Briefing',
    description: 'To break the plague of aerodynamic “dirty air” preventing cars from following closely, the Drag Reduction System allows trailing drivers to hydraulically pop open the top rear wing plane down designated straights, revolutionizing wheel-to-wheel racecraft.',
    stats: [{ label: 'Drag Reduction', value: '-20%' }, { label: 'Speed Boost', value: '~12-18 km/h' }]
  },
  {
    afterYear: 2009,
    type: 'dossier',
    badge: '🏆 UNDERDOG MASTERCLASS',
    title: 'THE BRAWN GP FAIRY-TALE',
    tagline: 'From the Scrapheap to World Champions for £1',
    quote: '“We bought a bankrupt team for one single British pound.”',
    speaker: 'Ross Brawn',
    description: 'When Honda pulls out during the global financial crisis, Ross Brawn buys the team for £1. Exploiting a loophole in the aero regulations with their revolutionary “Double Diffuser”, Jenson Button wins 6 of the first 7 races in a car devoid of sponsor decals, etching an immortal underdog saga.',
    stats: [{ label: 'Purchase Price', value: '£1.00' }, { label: 'Win Rate Early 2009', value: '6 of 7 Races' }]
  },
  {
    afterYear: 2004,
    type: 'dossier',
    badge: '👑 UNTOUCHABLE MASTERPIECE',
    title: 'THE APEX OF THE V10: SCHUMACHER & F2004',
    tagline: '19,000 RPM, Zero Driver Aids, Pure Ferocity',
    quote: '“That car did not follow physics. It dictated physics.”',
    speaker: 'Ross Brawn on the Ferrari F2004',
    description: 'Michael Schumacher claims 13 victories in 18 races. The Ferrari F2004, propelled by a 3.0L V10 screaming to 19,000 RPM on Bridgestone grooved rubber, set lap records across the globe—many of which stood unbroken for nearly 15 years.',
    stats: [{ label: 'Season Wins', value: '13 of 18' }, { label: 'Engine Redline', value: '19,000 RPM' }]
  },
  {
    afterYear: 1994,
    type: 'dossier',
    badge: '🛡️ SAFETY CRUSADE',
    title: 'IMOLA 1994 & THE SAFETY REBIRTH',
    tagline: 'The Darkest Weekend Transforms Motorsport',
    quote: '“If you have an accident in an F1 car today, you walk away because of what happened to Ayrton and Roland.”',
    speaker: 'David Coulthard',
    description: 'The loss of Roland Ratzenberger and Ayrton Senna at the Tamburello curve shatters the sporting world. Under Professor Sid Watkins and Max Mosley, Formula 1 triggers the most ferocious safety campaign in human history: mandatory crash tests, raised cockpit bolsters, wheel tethers, and circuit redesigns.',
    stats: [{ label: 'Zero Fatalities', value: '20 Years (1994-2014)' }, { label: 'Mandatory Crash Tests', value: 'Raised 300%' }]
  },
  {
    afterYear: 1992,
    type: 'tech',
    badge: '🤖 CYBER-RACING ERA',
    title: 'CAR FROM ANOTHER PLANET: WILLIAMS FW14B',
    tagline: 'Active Suspension, Traction Control, Fly-By-Wire',
    quote: '“You had to trust the computer. If you hesitated in high-speed corners, you were lost.”',
    speaker: 'Nigel Mansell',
    description: 'Designed by Adrian Newey and Patrick Head, the FW14B utilized microprocessor-controlled hydraulic actuators to keep ride height millimeter-perfect through every compression and curb. Nigel Mansell scored 14 pole positions and demolished the competition.',
    stats: [{ label: 'Pole Positions', value: '14 of 16' }, { label: 'Tech Advantage', value: '+1.5s per lap' }]
  },
  {
    afterYear: 1989,
    type: 'radio',
    badge: '⚔️ BITTEREST RIVALRY',
    title: 'WAR AT SUZUKA: SENNA VS PROST',
    tagline: 'Teammates Collide at the Triangle Chicane',
    quote: '“If you no longer go for a gap that exists, you are no longer a racing driver.”',
    speaker: 'Ayrton Senna to Sir Jackie Stewart',
    description: 'Lap 47 at Suzuka. Senna dives up the inside; Prost turns in early. The two McLaren machines interlock wheels in the gravel. Prost steps out thinking the title is his; Senna gets a push-start through the escape road, fixes his front wing, wins the race, but is controversially disqualified by FIA boss Jean-Marie Balestre.',
    stats: [{ label: 'Collision Lap', value: 'Lap 47' }, { label: 'Disqualification', value: 'Chicane Cut Ruling' }]
  },
  {
    afterYear: 1981,
    type: 'tech',
    badge: '🔬 MATERIALS REVOLUTION',
    title: 'THE CARBON MONOCOQUE: McLAREN MP4/1',
    tagline: 'Aerospace Carbon Fiber Meets Grand Prix Speed',
    quote: '“They said it would shatter like glass. Then John Watson walked away from a 140mph crash at Monza.”',
    speaker: 'John Barnard',
    description: 'Designer John Barnard collaborates with Hercules Aerospace to build the world’s first composite carbon-fiber chassis. Doubters predicted a lethal cloud of black dust in an impact; instead, it proved infinitely stiffer and exponentially safer than aluminum, redefining race car construction forever.',
    stats: [{ label: 'Torsional Rigidity', value: '+250%' }, { label: 'Weight Reduction', value: '-30%' }]
  },
  {
    afterYear: 1978,
    type: 'tech',
    badge: '🌪️ GROUND EFFECT DAWN',
    title: 'THE SUCKDOWN: LOTUS 79 “BLACK BEAUTY”',
    tagline: 'Colin Chapman Weaponizes Bernoulli & Venturi',
    quote: '“The car is painted to the road. You don’t slide—you pull 3Gs until your neck cries.”',
    speaker: 'Mario Andretti',
    description: 'Colin Chapman and Peter Wright invert aircraft wings inside the sidepods and install flexible sliding side-skirts to seal the car floor against the tarmac. Low pressure sucks the car into the asphalt, doubling cornering speeds overnight.',
    stats: [{ label: 'Downforce Multiplier', value: '3.5x' }, { label: 'Mario Andretti', value: '1978 World Champion' }]
  },
  {
    afterYear: 1976,
    type: 'dossier',
    badge: '🔥 UNCONQUERABLE WILL',
    title: 'HUNT VS LAUDA & THE INFERNO',
    tagline: 'From the Last Rites to the Monza Grid in 42 Days',
    quote: '“Lying in hospital, I knew giving up was the only true defeat.”',
    speaker: 'Niki Lauda',
    description: 'Trapped in a flaming Ferrari at the Nürburgring Nordschleife, Niki Lauda suffers horrific burns and lung damage. Miraculously returning just 42 days later with bandaged wounds, Lauda takes the title battle down to a typhoon at Mount Fuji against James Hunt.',
    stats: [{ label: 'Comeback Interval', value: '42 Days' }, { label: 'Championship Margin', value: '1 Point' }]
  },
  {
    afterYear: 1968,
    type: 'tech',
    badge: '🪽 AERODYNAMICS BORN',
    title: 'F1 TAKES FLIGHT (IN REVERSE)',
    tagline: 'Wings Bolted Directly to Wheel Uprights',
    quote: '“Suddenly, the air wasn’t something to slip through. It was something to press you into the earth.”',
    speaker: 'Mauro Forghieri, Ferrari Chief Engineer',
    description: 'At Spa-Francorchamps and Rouen in 1968, Ferrari, Brabham, and Lotus sprout towering upside-down airplane wings mounted on spindly struts directly to the suspension uprights. The quest for aerodynamic downforce is born.',
    stats: [{ label: 'First Wing Debut', value: '1968 Spa-Francorchamps' }, { label: 'Wing Height', value: 'Up to 2 meters' }]
  },
  {
    afterYear: 1958,
    type: 'dossier',
    badge: '🏆 CONSTRUCTORS GENESIS',
    title: 'THE INAUGURAL CONSTRUCTORS’ CUP',
    tagline: 'Vanwall Crushes the Italian Giants',
    quote: '“For eight years, only the men were crowned. Now, the machines have their own throne.”',
    speaker: 'Tony Vandervell, Founder of Vanwall',
    description: 'Before 1958, only drivers competed for a World Championship. In 1958, the FIA introduces the International Cup for F1 Manufacturers. British garage Vanwall, piloted by Stirling Moss and Tony Brooks, defeats Ferrari to capture the historic first constructors’ trophy.',
    stats: [{ label: 'Inaugural Champion', value: 'Vanwall (48 Pts)' }, { label: 'Runner-up', value: 'Ferrari (40 Pts)' }]
  },
  {
    afterYear: 1950,
    type: 'bedrock',
    badge: '🏁 TIME-ZERO: THE BEDROCK',
    title: '13 MAY 1950: SILVERSTONE AIRFIELD',
    tagline: 'The First Ever Formula 1 World Championship Race',
    quote: '“In front of King George VI, Queen Elizabeth, and 120,000 spectators on an old RAF bomber station.”',
    speaker: 'Official Grand Prix d’Europe Programme',
    description: 'The inaugural race of the FIA World Championship of Drivers. Giuseppe “Nino” Farina leads an Alfa Romeo 158 “Alfetta” sweep, capturing pole position, fastest lap, and race victory at an average speed of 90.95 mph.',
    stats: [{ label: 'Starting Grid', value: '21 Drivers' }, { label: 'Winning Car', value: 'Alfa Romeo 158' }]
  }
];

async function fetchWithRetry(url, maxRetries = 6) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        return await res.json();
      }
      if (res.status === 429) {
        await sleep(1500 * attempt);
        continue;
      }
    } catch (e) {
      await sleep(1000 * attempt);
    }
  }
  return null;
}

async function getDrivers(year) {
  const cacheKey = `d_${year}`;
  if (cache[cacheKey] && cache[cacheKey].length > 0) return cache[cacheKey];

  const data = await fetchWithRetry(`https://api.jolpi.ca/ergast/f1/${year}/driverstandings.json?limit=10`);
  const list = data?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings || [];
  const parsed = list.map(d => {
    const id = d.Driver.driverId;
    const family = d.Driver.familyName;
    const given = d.Driver.givenName;
    const fullName = `${given} ${family}`;
    const teamName = d.Constructors?.[0]?.name || 'Independent';
    const teamColor = teamColors[teamName] || '#E10600';
    const portrait = driverPortraits[id] || null;

    return {
      pos: parseInt(d.position, 10),
      id,
      name: fullName,
      code: d.Driver.code || family.substring(0, 3).toUpperCase(),
      nationality: d.Driver.nationality,
      team: teamName,
      teamColor,
      points: parseFloat(d.points),
      wins: parseInt(d.wins, 10),
      portrait
    };
  });

  if (parsed.length > 0) {
    cache[cacheKey] = parsed;
    saveCache();
  }
  return parsed;
}

async function getConstructors(year) {
  if (year < 1958) return [];
  const cacheKey = `c_${year}`;
  if (cache[cacheKey] && cache[cacheKey].length > 0) return cache[cacheKey];

  const data = await fetchWithRetry(`https://api.jolpi.ca/ergast/f1/${year}/constructorstandings.json?limit=10`);
  const list = data?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings || [];
  const parsed = list.map(c => {
    const teamName = c.Constructor.name;
    const teamColor = teamColors[teamName] || '#E10600';
    const carModel = iconicCars[year] || 'Grand Prix Car';

    return {
      pos: parseInt(c.position, 10),
      id: c.Constructor.constructorId,
      name: teamName,
      nationality: c.Constructor.nationality,
      teamColor,
      points: parseFloat(c.points),
      wins: parseInt(c.wins, 10),
      carModel: c.position === '1' ? carModel : null
    };
  });

  if (parsed.length > 0) {
    cache[cacheKey] = parsed;
    saveCache();
  }
  return parsed;
}

async function main() {
  console.log('🚀 Fetching complete F1 historical dataset (1950 - 2025)...');
  const seasons = [];

  for (let year = 2025; year >= 1950; year--) {
    const drivers = await getDrivers(year);
    await sleep(250);
    const constructors = await getConstructors(year);
    await sleep(250);

    const era = eraDefinitions(year);
    seasons.push({
      year,
      era,
      heroCar: iconicCars[year] || 'Championship Challenger',
      champDriver: drivers[0] || null,
      champConstructor: constructors[0] || null,
      drivers,
      constructors,
      constructorsApplicable: year >= 1958
    });
    console.log(`Year ${year}: ${drivers.length} drivers, ${constructors.length} teams`);
  }

  const finalOutput = {
    generatedAt: new Date().toISOString(),
    totalSeasons: seasons.length,
    seasons,
    milestones: dramaticMilestones
  };

  const outDir = path.resolve('src/data');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outFile = path.join(outDir, 'f1Data.json');
  fs.writeFileSync(outFile, JSON.stringify(finalOutput, null, 2), 'utf-8');
  console.log(`\n🎉 Successfully written complete data to ${outFile}!`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
