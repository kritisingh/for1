// High-resolution local driver portraits bundled directly with the application.
// 100% offline, zero network latency, zero CORS or ad-blocker issues.

const DRIVER_IMAGE_MAP = {
  'Max Verstappen': new URL('../assets/drivers/verstappen.jpg', import.meta.url).href,
  'Lando Norris': new URL('../assets/drivers/norris.jpg', import.meta.url).href,
  'Lewis Hamilton': new URL('../assets/drivers/hamilton.jpg', import.meta.url).href,
  'Nico Rosberg': new URL('../assets/drivers/rosberg_n.jpg', import.meta.url).href,
  'Sebastian Vettel': new URL('../assets/drivers/vettel.jpg', import.meta.url).href,
  'Jenson Button': new URL('../assets/drivers/button.jpg', import.meta.url).href,
  'Kimi Räikkönen': new URL('../assets/drivers/raikkonen.jpg', import.meta.url).href,
  'Fernando Alonso': new URL('../assets/drivers/alonso.jpg', import.meta.url).href,
  'Michael Schumacher': new URL('../assets/drivers/schumacher.jpg', import.meta.url).href,
  'Mika Häkkinen': new URL('../assets/drivers/hakkinen.jpg', import.meta.url).href,
  'Jacques Villeneuve': new URL('../assets/drivers/villeneuve_j.jpg', import.meta.url).href,
  'Damon Hill': new URL('../assets/drivers/hill_d.jpg', import.meta.url).href,
  'Alain Prost': new URL('../assets/drivers/prost.jpg', import.meta.url).href,
  'Nigel Mansell': new URL('../assets/drivers/mansell.jpg', import.meta.url).href,
  'Ayrton Senna': new URL('../assets/drivers/senna.jpg', import.meta.url).href,
  'Nelson Piquet': new URL('../assets/drivers/piquet.jpg', import.meta.url).href,
  'Niki Lauda': new URL('../assets/drivers/lauda.jpg', import.meta.url).href,
  'Keke Rosberg': new URL('../assets/drivers/rosberg_k.jpg', import.meta.url).href,
  'Alan Jones': new URL('../assets/drivers/jones.jpg', import.meta.url).href,
  'Jody Scheckter': new URL('../assets/drivers/scheckter.jpg', import.meta.url).href,
  'Mario Andretti': new URL('../assets/drivers/andretti.jpg', import.meta.url).href,
  'James Hunt': new URL('../assets/drivers/hunt.jpg', import.meta.url).href,
  'Emerson Fittipaldi': new URL('../assets/drivers/fittipaldi.jpg', import.meta.url).href,
  'Jackie Stewart': new URL('../assets/drivers/stewart.jpg', import.meta.url).href,
  'Jochen Rindt': new URL('../assets/drivers/rindt.jpg', import.meta.url).href,
  'Graham Hill': new URL('../assets/drivers/hill_g.jpg', import.meta.url).href,
  'Denny Hulme': new URL('../assets/drivers/hulme.jpg', import.meta.url).href,
  'Jack Brabham': new URL('../assets/drivers/brabham.jpg', import.meta.url).href,
  'Jim Clark': new URL('../assets/drivers/clark.jpg', import.meta.url).href,
  'John Surtees': new URL('../assets/drivers/surtees.jpg', import.meta.url).href,
  'Phil Hill': new URL('../assets/drivers/hill_p.jpg', import.meta.url).href,
  'Mike Hawthorn': new URL('../assets/drivers/hawthorn.jpg', import.meta.url).href,
  'Juan Fangio': new URL('../assets/drivers/fangio.jpg', import.meta.url).href,
  'Juan Manuel Fangio': new URL('../assets/drivers/fangio.jpg', import.meta.url).href,
  'Alberto Ascari': new URL('../assets/drivers/ascari.jpg', import.meta.url).href,
  'Nino Farina': new URL('../assets/drivers/farina.jpg', import.meta.url).href,
  'Giuseppe Farina': new URL('../assets/drivers/farina.jpg', import.meta.url).href
};

export function getLocalDriverPortrait(driverName) {
  if (!driverName) return null;
  const direct = DRIVER_IMAGE_MAP[driverName] || DRIVER_IMAGE_MAP[driverName.trim()];
  if (direct) return direct;

  const normalized = driverName.toLowerCase().trim();
  for (const [name, url] of Object.entries(DRIVER_IMAGE_MAP)) {
    if (name.toLowerCase() === normalized) return url;
  }
  return null;
}
