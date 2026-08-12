import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = join(root, "data");
mkdirSync(dataDir, { recursive: true });

const collections = [
  {
    handle: "composters",
    title: "Composters",
    description:
      "Smart kitchen composters and outdoor tumblers that turn scraps into soil.",
  },
  {
    handle: "waste-systems",
    title: "Waste Systems",
    description:
      "Sensor cans, recycling dispensers, and compactors for quieter kitchens.",
  },
  {
    handle: "dehumidifiers",
    title: "Dehumidifiers",
    description:
      "Energy Star dehumidifiers for basements, bedrooms, and crawl spaces.",
  },
  {
    handle: "produce-dryers",
    title: "Produce Dryers",
    description:
      "Food dehydrators and herb racks for surplus fruit, vegetables, and teas.",
  },
  {
    handle: "smart-home",
    title: "Smart Home",
    description:
      "Thermostats, leak sensors, energy monitors, plugs, and air-quality stations.",
  },
  {
    handle: "home-garden",
    title: "Home & Garden",
    description:
      "Planters, rain barrels, grow lights, drip kits, and yard tumblers.",
  },
  {
    handle: "accessories",
    title: "Accessories",
    description: "Filters, bags, trays, and replacement parts for the full line.",
  },
  {
    handle: "bundles",
    title: "Bundles",
    description: "Starter kits that pair machines with the right support gear.",
  },
];

function slug(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const rows = [
  // composters (16)
  ["composters", "Canopy 12L Kitchen Composter", "Electric countertop digester with a sealed lid and charcoal filter. Turns daily scraps into a dry, soil-ready output overnight.", 349, 399, "Recycled ABS", '12.5" × 11" × 14"', "Matte Sage", "12L capacity", 18, true, ["kitchen", "electric", "odor-lock"]],
  ["composters", "Canopy Mini 4L Countertop Digester", "A compact electric unit for apartments and small kitchens. Quiet cycle, dishwasher-safe inner bucket.", 199, 229, "Recycled ABS", '9" × 9" × 11"', "Soft White", "4L capacity", 9, false, ["kitchen", "compact"]],
  ["composters", "Root Outdoor Tumbler 50L", "Single-drum yard tumbler on a powder-coated frame. Mixes greens and browns without a pitchfork.", 129, 149, "Recycled HDPE", '28" × 24" × 36"', "Forest Green", "50L capacity", 22, false, ["outdoor", "tumbler"]],
  ["composters", "Root Dual-Chamber Yard Tumbler", "Two independent drums so one batch can cure while the other fills. Gear-assist rotation.", 189, 219, "Recycled HDPE", '42" × 26" × 38"', "Slate", "Dual chamber", 34, true, ["outdoor", "dual"]],
  ["composters", "Moss Electric Kitchen Composter", "App-optional electric digester with a low-draw heating cycle and replaceable carbon filter.", 429, 479, "Recycled ABS + stainless", '13" × 12" × 15"', "Graphite", "Energy Star", 21, true, ["kitchen", "energy-star"]],
  ["composters", "Moss Quiet-Cycle Digester", "Night-mode motor and insulated drum for open-plan kitchens. 8-hour default cycle.", 379, null, "Recycled ABS", '12" × 12" × 14"', "Matte Black", "Whisper-quiet", 19, false, ["kitchen", "quiet"]],
  ["composters", "Grove Smart Kitchen Composter", "Wi-Fi status light, filter-life alerts, and a 5L bucket sized for a family of four.", 399, 449, "Recycled ABS", '12" × 11" × 13"', "Copper Trim", "App-connected", 17, false, ["kitchen", "smart"]],
  ["composters", "Grove Barrel Tumbler 80L", "Wide-mouth outdoor barrel with aeration ports and a locking hatch. Sits on a low steel cradle.", 159, 179, "Recycled HDPE", '32" × 30" × 40"', "Olive", "80L capacity", 28, false, ["outdoor", "barrel"]],
  ["composters", "Fern Compact Countertop Composter", "Manual crank plus charcoal lid for renters who do not want another plug. 3L inner pail.", 89, 99, "Bamboo + stainless", '8" × 8" × 10"', "Natural Bamboo", "Compact 3L", 6, false, ["kitchen", "manual"]],
  ["composters", "Fern Patio Tumbler", "Narrow-footprint tumbler for balconies and small patios. UV-stable drum.", 99, 119, "Recycled HDPE", '22" × 20" × 32"', "Terra", "Patio-scale", 16, false, ["outdoor", "patio"]],
  ["composters", "Alder Kitchen Digester Pro", "14L professional-style electric unit with a stainless inner bowl and extra-long filter life.", 449, 519, "Stainless steel", '14" × 13" × 16"', "Brushed Steel", "14L capacity", 24, true, ["kitchen", "pro"]],
  ["composters", "Alder Garden Tumbler XL", "120L dual-batch outdoor system for serious yards. Reinforced axle and rain cover.", 219, 249, "Recycled HDPE", '48" × 30" × 44"', "Deep Green", "120L capacity", 41, false, ["outdoor", "xl"]],
  ["composters", "Willow Smart Bin Composter", "Looks like a kitchen bin, runs a low-heat cycle, and locks odor with a gasketed lid.", 319, 359, "Recycled ABS", '13" × 11" × 18"', "Soft Black", "Odor-lock", 16, false, ["kitchen", "bin"]],
  ["composters", "Willow Dual Tumbler Set", "Paired 40L drums on one stand so you can separate food waste from yard clippings.", 249, 279, "Recycled HDPE", '46" × 24" × 36"', "Moss", "Twin drums", 36, false, ["outdoor", "dual"]],
  ["composters", "Sage Countertop Digester", "Charcoal-filter electric unit with a ceramic-look shell. Designed to sit out, not hide.", 259, 289, "Recycled ABS", '11" × 10" × 13"', "Sage Ceramic", "Charcoal filter", 14, false, ["kitchen", "filter"]],
  ["composters", "Sage Outdoor Composter 65L", "Hex-drum outdoor tumbler with a wide loading door and ground-stake kit.", 139, 159, "Recycled HDPE", '30" × 28" × 38"', "Weathered Green", "65L capacity", 25, false, ["outdoor", "tumbler"]],

  // waste-systems (16)
  ["waste-systems", "Canopy Sensor Can 13 Gal", "Motion-open kitchen can with a slow-close lid and fingerprint-resistant shell.", 129, 149, "Stainless steel", '16" × 12" × 28"', "Brushed Steel", "Motion sensor", 12, true, ["sensor", "kitchen"]],
  ["waste-systems", "Canopy Dual Recycle Station", "Side-by-side landfill and recycle streams with labeled inner buckets.", 189, 219, "Powder-coated steel", '24" × 14" × 28"', "Matte Sage", "Dual stream", 22, false, ["recycle", "dual"]],
  ["waste-systems", "Root Automatic Kitchen Bin", "IR sensor, soft-close, and a removable liner ring that holds compostable bags.", 99, 119, "Stainless steel", '14" × 11" × 26"', "Soft Black", "Soft-close", 10, false, ["sensor", "kitchen"]],
  ["waste-systems", "Root Slim Recycle Dispenser", "Narrow recycle-only can for galley kitchens. Bag-cinch collar included.", 79, 89, "Recycled ABS", '10" × 10" × 26"', "Cloud", "Slim profile", 7, false, ["recycle", "slim"]],
  ["waste-systems", "Moss Touchless Can 45L", "Large-capacity sensor can for busy kitchens. Battery or USB-C power.", 149, 169, "Stainless steel", '16" × 13" × 30"', "Graphite", "45L capacity", 14, true, ["sensor", "large"]],
  ["waste-systems", "Moss Compact Kitchen Compactor", "Under-counter compactor that reduces landfill volume without a full remodel.", 399, 449, "Powder-coated steel", '15" × 22" × 34"', "White", "Compacts waste", 62, false, ["compactor"]],
  ["waste-systems", "Grove Sensor Can Stainless", "Mirror-finish sensor can with a quiet motor and child-lock button.", 169, 189, "Stainless steel", '15" × 12" × 27"', "Mirror Steel", "Child lock", 13, false, ["sensor"]],
  ["waste-systems", "Grove Recycling Trio", "Three labeled streams—landfill, recycle, compost—on a rolling base.", 219, 249, "Powder-coated steel", '32" × 14" × 28"', "Forest", "Three streams", 28, true, ["recycle", "trio"]],
  ["waste-systems", "Fern Pedal-Free Slim Can", "Hands-free IR can in a 10-inch footprint. Ideal beside a prep counter.", 89, 99, "Recycled ABS", '10" × 10" × 24"', "Sage", "Hands-free", 6, false, ["sensor", "slim"]],
  ["waste-systems", "Fern Under-Sink Recycle Drawer", "Pull-out dual bins that mount to a cabinet floor. Soft-close slides.", 119, 139, "Recycled PP", '18" × 14" × 16"', "Natural", "Under-sink", 9, false, ["recycle", "cabinet"]],
  ["waste-systems", "Alder Kitchen Compactor", "Full-size kitchen compactor with odor filter and a reusable ram bag.", 449, 519, "Stainless steel", '15" × 24" × 35"', "Brushed Steel", "Full-size compact", 78, true, ["compactor"]],
  ["waste-systems", "Alder Dual-Stream Sensor Can", "Split lid: one sensor for trash, one for recycle. Shared stainless body.", 199, 229, "Stainless steel", '22" × 13" × 28"', "Graphite", "Split sensor", 18, false, ["sensor", "dual"]],
  ["waste-systems", "Willow Hands-Free Can 16 Gal", "Wave-open lid, liner cinch, and a sealed base that wipes clean.", 139, 159, "Stainless steel", '16" × 13" × 29"', "Matte Nickel", "16 gal", 13, false, ["sensor"]],
  ["waste-systems", "Willow Recycle Bag Dispenser", "Wall or cabinet dispenser for compostable and recycle bags. Spring feed.", 49, 59, "Recycled ABS", '8" × 4" × 10"', "Sage", "Bag dispenser", 2, false, ["recycle", "bags"]],
  ["waste-systems", "Sage Sensor Can Matte", "Matte-coated sensor can that hides fingerprints. 13-gallon liner fit.", 119, 139, "Powder-coated steel", '15" × 12" × 27"', "Matte Sage", "Fingerprint-hide", 11, false, ["sensor"]],
  ["waste-systems", "Sage Apartment Compactor", "Half-height compactor for rentals and small kitchens. Rolls out on casters.", 329, 369, "Powder-coated steel", '16" × 20" × 28"', "Soft White", "Apartment-scale", 48, false, ["compactor"]],

  // dehumidifiers (14)
  ["dehumidifiers", "Canopy Energy Star Dehumidifier 30 Pint", "Bedroom and living-room unit with auto-defrost and a washable filter.", 229, 259, "Recycled ABS", '14" × 11" × 20"', "Soft White", "Energy Star · 30 pint", 32, true, ["energy-star", "30-pint"]],
  ["dehumidifiers", "Canopy Compact Bedroom Dehumidifier", "Low-noise 20-pint class unit with a night dimmer on the display.", 159, 179, "Recycled ABS", '12" × 9" × 17"', "Cloud", "Quiet night mode", 24, false, ["bedroom", "quiet"]],
  ["dehumidifiers", "Root Basement Dehumidifier 50 Pint", "High-capacity Energy Star unit with a continuous-drain hose port.", 299, 339, "Recycled ABS", '16" × 12" × 24"', "Graphite", "Energy Star · 50 pint", 42, true, ["basement", "energy-star"]],
  ["dehumidifiers", "Root Crawl-Space Dehumidifier", "Low-profile unit for crawl spaces with a condensate pump option.", 349, 389, "Powder-coated steel", '21" × 14" × 12"', "Slate", "Crawl-space fit", 45, false, ["crawl-space"]],
  ["dehumidifiers", "Moss Quiet Dehumidifier 35 Pint", "Insulated compressor housing for open living rooms. Auto humidity set-point.", 249, 279, "Recycled ABS", '15" × 11" × 21"', "Sage", "Whisper-quiet", 34, false, ["quiet", "35-pint"]],
  ["dehumidifiers", "Moss Whole-Room Dehumidifier", "Wide-throw grille and a 1.5-gallon bucket with auto-shutoff.", 279, 309, "Recycled ABS", '16" × 12" × 23"', "Forest", "Whole-room coverage", 38, false, ["whole-room"]],
  ["dehumidifiers", "Grove Energy Star Dehumidifier 22 Pint", "Small-room Energy Star unit for closets converted to offices.", 189, 209, "Recycled ABS", '13" × 10" × 18"', "White", "Energy Star · 22 pint", 26, false, ["energy-star"]],
  ["dehumidifiers", "Grove Smart Humidity Dehumidifier", "Wi-Fi humidity logging and a schedule that follows outdoor dew point.", 319, 359, "Recycled ABS", '15" × 11" × 22"', "Graphite", "App humidity log", 36, true, ["smart", "energy-star"]],
  ["dehumidifiers", "Fern Portable Dehumidifier", "Carry-handle 16-pint unit for guest rooms and seasonal damp.", 139, 159, "Recycled ABS", '11" × 8" × 16"', "Sage", "Portable 16 pint", 18, false, ["portable"]],
  ["dehumidifiers", "Fern Closet Dehumidifier Mini", "Thermo-electric mini unit for closets, safes, and instrument cases.", 79, 89, "Recycled ABS", '7" × 5" × 9"', "Soft White", "Closet-scale", 4, false, ["mini", "closet"]],
  ["dehumidifiers", "Alder High-Capacity Dehumidifier 70 Pint", "Workshop and large-basement Energy Star machine with pump-ready drain.", 399, 449, "Powder-coated steel", '17" × 13" × 26"', "Brushed Steel", "Energy Star · 70 pint", 52, true, ["energy-star", "70-pint"]],
  ["dehumidifiers", "Alder Smart Basement Dehumidifier", "50-pint class with leak-sensor input and a filter-change reminder.", 369, 409, "Recycled ABS", '16" × 12" × 24"', "Slate", "Leak-sensor ready", 44, false, ["smart", "basement"]],
  ["dehumidifiers", "Willow Energy Star Dehumidifier 50 Pint", "Classic 50-pint Energy Star with a washable pre-filter and caster set.", 289, 319, "Recycled ABS", '16" × 12" × 24"', "White", "Energy Star · 50 pint", 41, false, ["energy-star"]],
  ["dehumidifiers", "Sage Compact Dehumidifier 20 Pint", "Apartment-scale unit with a discreet copper-trim grille.", 169, 189, "Recycled ABS", '12" × 9" × 17"', "Sage", "20 pint compact", 22, false, ["compact"]],

  // produce-dryers (12)
  ["produce-dryers", "Canopy 5-Tray Produce Dryer", "Adjustable thermostat and a rear fan for even drying of fruit and herbs.", 129, 149, "Recycled ABS", '13" × 13" × 10"', "White", "5 trays", 9, false, ["dehydrator", "5-tray"]],
  ["produce-dryers", "Canopy Herb Drying Rack", "Stackable mesh racks for air-drying herbs without a motor.", 59, 69, "Bamboo + mesh", '14" × 14" × 18"', "Natural", "Air-dry herbs", 3, false, ["herbs", "rack"]],
  ["produce-dryers", "Root Stainless Dehydrator 9-Tray", "Stainless trays, digital timer, and a rear-mounted fan for batch drying.", 199, 229, "Stainless steel", '17" × 13" × 15"', "Brushed Steel", "9 trays", 16, true, ["dehydrator", "stainless"]],
  ["produce-dryers", "Root Compact Fruit Dryer", "Four-tray countertop dryer sized for berries and apple chips.", 89, 99, "Recycled ABS", '12" × 12" × 8"', "Sage", "4 trays", 6, false, ["fruit", "compact"]],
  ["produce-dryers", "Moss Digital Produce Dryer", "Preset programs for fruit, vegetables, jerky, and herbs. 6 trays.", 159, 179, "Recycled ABS", '14" × 13" × 12"', "Graphite", "Digital presets", 11, false, ["digital"]],
  ["produce-dryers", "Moss Mesh Herb Dryer", "Hanging mesh tower for garages and pantries. Collapses for storage.", 49, 59, "Mesh + steel", '12" × 12" × 36"', "Forest", "Hanging tower", 2, false, ["herbs"]],
  ["produce-dryers", "Grove 6-Tray Food Dehydrator", "Transparent door and a rear fan. Includes fruit-leather sheets.", 139, 159, "Recycled ABS", '13" × 13" × 12"', "White", "6 trays + sheets", 10, true, ["dehydrator"]],
  ["produce-dryers", "Grove Solar-Assist Dryer", "Passive solar cabinet with a small backup fan for cloudy days.", 179, 199, "Cedar + glass", '24" × 16" × 36"', "Natural Cedar", "Solar-assist", 28, false, ["solar", "outdoor"]],
  ["produce-dryers", "Fern Countertop Dehydrator", "Entry 5-tray dryer with a simple analog dial. Quiet enough for overnight.", 99, 109, "Recycled ABS", '13" × 13" × 9"', "Cloud", "Analog 5-tray", 8, false, ["entry"]],
  ["produce-dryers", "Alder Pro Produce Dryer 10-Tray", "Commercial-style 10-tray dryer with stainless racks and a 10-hour timer.", 249, 279, "Stainless steel", '18" × 14" × 17"', "Brushed Steel", "10 trays", 22, true, ["pro", "10-tray"]],
  ["produce-dryers", "Willow Stackable Herb Dryer", "Five mesh trays that nest. Designed for mint, tea, and flower heads.", 69, 79, "Bamboo + mesh", '13" × 13" × 16"', "Natural", "Stackable mesh", 4, false, ["herbs"]],
  ["produce-dryers", "Sage Fruit Leather Dryer", "Shallow trays and a low-temp setting for fruit leather and yogurt drops.", 119, 139, "Recycled ABS", '14" × 14" × 8"', "Sage", "Leather sheets", 7, false, ["fruit-leather"]],

  // smart-home (16)
  ["smart-home", "Canopy Learning Thermostat", "Learns occupancy and trims HVAC runtime. Works with common 24V systems.", 199, 229, "Recycled ABS + glass", '4.5" × 4.5" × 1"', "Soft White", "Learning schedule", 0.6, true, ["thermostat"]],
  ["smart-home", "Canopy Leak Sensor 3-Pack", "Puck sensors for sinks, water heaters, and washing machines. 2-year battery.", 59, 69, "Recycled ABS", '2.4" diameter', "White", "3-pack sensors", 0.4, false, ["leak"]],
  ["smart-home", "Root Energy Monitor Hub", "Clamp-on whole-panel monitor with a live watt display in the app.", 129, 149, "Recycled ABS", '4" × 3" × 1.5"', "Graphite", "Whole-home watts", 0.8, true, ["energy"]],
  ["smart-home", "Root Smart Plug Duo", "Two outdoor-rated indoor plugs with energy reporting per outlet.", 29, 35, "Recycled ABS", '2.5" × 1.5" × 1.5"', "White", "Energy reporting", 0.3, false, ["plug"]],
  ["smart-home", "Moss Air Quality Monitor", "PM2.5, CO2, and humidity on a dimmable e-ink style display.", 149, 169, "Recycled ABS + aluminum", '5" × 3.2" × 1.2"', "Sage", "PM2.5 + CO2", 0.7, true, ["air-quality"]],
  ["smart-home", "Moss Leak + Freeze Sensor", "Detects water and freeze events on pipes. Magnetic mount included.", 49, 59, "Recycled ABS", '3" × 1.5" × 0.8"', "Graphite", "Leak + freeze", 0.2, false, ["leak", "freeze"]],
  ["smart-home", "Grove Smart Thermostat", "Simple heat/cool thermostat with a copper-trim bezel and geofencing.", 179, 199, "Recycled ABS", '4.4" × 4.4" × 1"', "Copper Trim", "Geofencing", 0.5, false, ["thermostat"]],
  ["smart-home", "Grove Whole-Home Energy Monitor", "Dual-clamp monitor plus two branch sensors for solar or EV circuits.", 199, 229, "Recycled ABS", '5" × 3.5" × 1.6"', "Slate", "Dual clamp + branches", 1.1, false, ["energy", "solar"]],
  ["smart-home", "Fern Indoor Air Quality Sensor", "Compact desk sensor for CO2 and VOC. USB-C powered.", 99, 119, "Recycled ABS", '3.2" × 3.2" × 1"', "White", "CO2 + VOC", 0.4, false, ["air-quality"]],
  ["smart-home", "Fern Smart Plug 4-Pack", "Four indoor plugs with schedules and a combined energy dashboard.", 45, 55, "Recycled ABS", '2.4" × 1.4" × 1.4"', "White", "4-pack plugs", 0.6, false, ["plug"]],
  ["smart-home", "Alder Climate Thermostat", "Heat-pump aware thermostat with humidity assist and a quiet click relay.", 229, 259, "Aluminum + glass", '4.6" × 4.6" × 1"', "Brushed Steel", "Heat-pump ready", 0.7, true, ["thermostat"]],
  ["smart-home", "Alder Water Leak Sensor Kit", "Hub plus four puck sensors and a water-heater rope sensor.", 79, 89, "Recycled ABS", "Kit box 8\" × 6\"", "Graphite", "Hub + 4 pucks", 1.2, false, ["leak", "kit"]],
  ["smart-home", "Willow Energy Monitor Display", "In-kitchen display that shows live household watts without opening an app.", 159, 179, "Recycled ABS + glass", '6" × 4" × 1.2"', "Sage", "Live watt display", 0.9, false, ["energy", "display"]],
  ["smart-home", "Willow Smart Plug Outdoor", "Weather-sealed outdoor plug with energy reporting and a dusk schedule.", 35, 42, "Recycled ABS", '3" × 2" × 1.8"', "Slate", "Outdoor-rated", 0.4, false, ["plug", "outdoor"]],
  ["smart-home", "Sage Air Quality Station", "Wall or desk station with PM, CO2, temp, and humidity. Local-first data.", 189, 219, "Recycled ABS", '6" × 3.5" × 1.4"', "Sage", "Local-first AQI", 0.8, false, ["air-quality"]],
  ["smart-home", "Sage Mini Leak Sensor", "Single puck for a dishwasher or fridge line. 3-year coin cell.", 29, 35, "Recycled ABS", '2.2" diameter', "White", "Single puck", 0.1, false, ["leak"]],

  // home-garden (16)
  ["home-garden", "Canopy Self-Watering Planter", "Reservoir planter with a water-level window. Sized for herbs and greens.", 79, 89, "Recycled PP", '14" × 7" × 8"', "Sage", "Self-watering", 3, false, ["planter"]],
  ["home-garden", "Canopy Rain Barrel 50 Gal", "Food-safe barrel with a screened inlet, overflow, and brass spigot.", 149, 169, "Recycled HDPE", '24" × 24" × 36"', "Forest Green", "50 gallon", 18, true, ["rain-barrel"]],
  ["home-garden", "Root Full-Spectrum Grow Light", "Bar light for seed starting and winter herbs. Hang or stand mount.", 119, 139, "Aluminum", '24" × 3" × 1.5"', "Matte Black", "Full spectrum", 2.4, false, ["grow-light"]],
  ["home-garden", "Root Drip Irrigation Starter", "Timer, 50 ft of line, and emitters for a raised-bed starter plot.", 59, 69, "Recycled PE + ABS", "Kit box 12\" × 8\"", "Black", "50 ft drip kit", 3.2, false, ["drip"]],
  ["home-garden", "Moss Raised Planter Box", "Cedar-look recycled lumber box with a liner and optional trellis posts.", 129, 149, "Recycled lumber", '36" × 16" × 18"', "Weathered Cedar", "Raised bed", 22, false, ["planter"]],
  ["home-garden", "Moss Yard Compost Tumbler", "Garden-side tumbler distinct from the kitchen line. 60L dual hatch.", 169, 189, "Recycled HDPE", '30" × 26" × 38"', "Olive", "60L yard tumbler", 27, true, ["tumbler", "yard"]],
  ["home-garden", "Grove Indoor Grow Light Bar", "Under-cabinet bar for kitchen herbs. 3000–5000K tunable.", 89, 99, "Aluminum", '18" × 2" × 1"', "White", "Tunable spectrum", 1.6, false, ["grow-light"]],
  ["home-garden", "Grove Rain Barrel 80 Gal", "Two-tap barrel with a linking kit for a second barrel later.", 199, 229, "Recycled HDPE", '28" × 28" × 42"', "Slate", "80 gallon", 24, true, ["rain-barrel"]],
  ["home-garden", "Fern Herb Planter Trio", "Three nested self-watering pots for a windowsill herb set.", 49, 59, "Recycled PP", '18" × 6" × 5"', "Sage", "Trio pots", 2, false, ["planter", "herbs"]],
  ["home-garden", "Fern Micro Drip Kit", "Balcony kit: 25 ft of line, six emitters, and a faucet timer.", 39, 45, "Recycled PE", "Kit box 10\" × 6\"", "Black", "Balcony drip", 1.8, false, ["drip"]],
  ["home-garden", "Alder Greenhouse Grow Light", "High-output bar pair for a small greenhouse or grow tent.", 159, 179, "Aluminum", '36" × 3" × 1.6"', "Graphite", "Greenhouse pair", 4.2, false, ["grow-light"]],
  ["home-garden", "Alder Garden Rain Catcher", "Downspout diverter plus a 40-gallon slim barrel for tight side yards.", 129, 149, "Recycled HDPE", '18" × 18" × 44"', "Forest", "Slim 40 gal", 16, false, ["rain-barrel"]],
  ["home-garden", "Willow Vertical Planter", "Wall-mount pocket planter for greens and strawberries.", 99, 119, "Recycled felt + steel", '24" × 8" × 36"', "Moss", "Vertical pockets", 5, false, ["planter", "vertical"]],
  ["home-garden", "Willow Drip Irrigation Pro", "100 ft of line, pressure regulator, and 20 adjustable emitters.", 89, 99, "Recycled PE + brass", "Kit box 14\" × 10\"", "Black", "100 ft pro kit", 5.5, false, ["drip"]],
  ["home-garden", "Sage Patio Planter", "Square self-watering planter with a copper-trim rim for patios.", 69, 79, "Recycled PP", '14" × 14" × 14"', "Sage", "Patio reservoir", 4, false, ["planter"]],
  ["home-garden", "Sage Outdoor Compost Tumbler", "Single 55L yard tumbler with a locking door and aeration spikes.", 139, 159, "Recycled HDPE", '28" × 24" × 36"', "Deep Green", "55L tumbler", 23, false, ["tumbler"]],

  // accessories (12)
  ["accessories", "Canopy Compost Filter 3-Pack", "Replacement carbon filters for Canopy and Sage kitchen composters.", 24, 29, "Activated carbon", "3 filters", "Natural", "3-pack filters", 0.5, false, ["filter", "compost"]],
  ["accessories", "Canopy Compostable Bags 50", "Kitchen-composter liners, 3L and 4L fit. BPI-certified compostable.", 18, 22, "Compostable film", "50 bags", "Natural", "50 compostable bags", 0.6, false, ["bags"]],
  ["accessories", "Root Replacement Tray Set", "Four extra dehydrator trays compatible with Root and Fern dryers.", 29, 35, "Recycled PP", "4 trays", "Clear", "4 extra trays", 1.4, false, ["trays"]],
  ["accessories", "Root Charcoal Filter Pack", "Six-month filter pack for Root and Willow kitchen composters.", 22, 26, "Activated carbon", "2 filters", "Black", "6-month pack", 0.4, false, ["filter"]],
  ["accessories", "Moss Dehumidifier Filter", "Washable-plus-carbon filter for Moss and Grove 30–50 pint units.", 19, 24, "Mesh + carbon", "1 filter", "White", "Washable filter", 0.3, false, ["filter", "dehumidifier"]],
  ["accessories", "Moss Sensor Can Liners", "Fit 13-gallon sensor cans. 40-count, recycled content.", 16, 19, "Recycled LDPE", "40 liners", "Clear", "40 liners", 1.1, false, ["bags", "can"]],
  ["accessories", "Grove Grow Light Bulb", "Full-spectrum E26 bulb for a single herb pot or seedling tray.", 28, 32, "Aluminum + glass", "A19", "White", "E26 full spectrum", 0.3, false, ["grow-light"]],
  ["accessories", "Grove Compost Accelerator", "Microbial starter for outdoor tumblers. Six-month jar.", 15, 18, "Organic inoculant", "12 oz jar", "Kraft", "Microbial starter", 0.8, false, ["compost"]],
  ["accessories", "Fern Leak Sensor Mount Kit", "Adhesive and magnetic mounts for Fern and Sage leak pucks.", 12, 15, "Steel + adhesive", "4 mounts", "Graphite", "Mount kit", 0.2, false, ["leak", "mount"]],
  ["accessories", "Alder Dehydrator Sheet Pack", "Non-stick fruit-leather sheets for Alder and Grove dryers. Set of 5.", 18, 22, "PTFE-free sheet", "5 sheets", "Clear", "5 leather sheets", 0.5, false, ["sheets"]],
  ["accessories", "Willow Rain Barrel Spigot Kit", "Brass spigot, overflow, and linking hose for Willow and Canopy barrels.", 22, 26, "Brass + HDPE", "Kit", "Brass", "Spigot + overflow", 1.2, false, ["rain-barrel"]],
  ["accessories", "Sage Replacement Compost Tray", "Inner bucket and lid gasket for Sage and Canopy electric composters.", 26, 32, "Recycled ABS", "1 tray", "Sage", "Inner bucket", 2.1, false, ["tray", "compost"]],

  // bundles (10)
  ["bundles", "Canopy Kitchen Starter Kit", "Canopy 12L kitchen composter, filter 3-pack, and 50 compostable bags.", 449, 519, "Mixed", "Kit", "Sage", "Composter + filters + bags", 20, true, ["kit", "kitchen"]],
  ["bundles", "Root Zero-Waste Kitchen Bundle", "Root automatic bin, slim recycle dispenser, and a year of liners.", 399, 459, "Mixed", "Kit", "Graphite", "Bin + recycle + liners", 18, false, ["kit", "waste"]],
  ["bundles", "Moss Smart Home Starter", "Moss air-quality monitor, leak 3-pack, and Fern smart plug 4-pack.", 329, 379, "Mixed", "Kit", "Sage", "AQI + leaks + plugs", 3, true, ["kit", "smart-home"]],
  ["bundles", "Grove Garden + Compost Bundle", "Grove rain barrel 80 gal, Fern herb planter trio, and Grove compost accelerator.", 379, 429, "Mixed", "Kit", "Forest", "Barrel + planters", 28, false, ["kit", "garden"]],
  ["bundles", "Fern Apartment Eco Kit", "Fern compact countertop composter, Fern portable dehumidifier, and bag pack.", 249, 289, "Mixed", "Kit", "Cloud", "Apartment starter", 25, false, ["kit", "apartment"]],
  ["bundles", "Alder Whole-Home Humidity Kit", "Alder 70-pint dehumidifier plus a Moss leak + freeze sensor.", 499, 559, "Mixed", "Kit", "Steel", "70 pint + leak sensor", 53, true, ["kit", "humidity"]],
  ["bundles", "Willow Harvest + Dry Bundle", "Willow stackable herb dryer and Grove 6-tray food dehydrator.", 289, 329, "Mixed", "Kit", "Natural", "Herbs + fruit dryer", 14, false, ["kit", "harvest"]],
  ["bundles", "Sage Household Starter Kit", "Sage countertop digester, Sage sensor can, and Canopy leak sensor 3-pack.", 549, 629, "Mixed", "Kit", "Sage", "Digester + can + leaks", 26, true, ["kit", "household"]],
  ["bundles", "Canopy Energy Watch Kit", "Canopy learning thermostat, Root energy monitor hub, and Willow outdoor plug.", 359, 409, "Mixed", "Kit", "White", "Thermostat + monitor", 2, false, ["kit", "energy"]],
  ["bundles", "Root Garden Irrigation Bundle", "Root drip starter, Willow drip pro add-on, and Sage patio planter.", 199, 229, "Mixed", "Kit", "Black", "Drip + planter", 10, false, ["kit", "irrigation"]],
];

let n = 1;
const products = rows.map((row) => {
  const [
    collection,
    title,
    description,
    price,
    compareAtPrice,
    material,
    size,
    finish,
    highlight,
    weightLbs,
    featured,
    extraTags,
  ] = row;
  const idNum = String(n).padStart(3, "0");
  const handle = slug(title);
  const product = {
    id: `vd-${idNum}`,
    handle,
    title,
    description,
    collection,
    price,
    compareAtPrice,
    currency: "USD",
    sku: `VD-${idNum}`,
    material,
    size,
    finish,
    highlight,
    weightLbs,
    featured,
    tags: [collection, ...extraTags],
    inStock: true,
    image: `/products/${handle}.webp`,
  };
  n += 1;
  return product;
});

const handles = new Set(products.map((p) => p.handle));
if (handles.size !== products.length) {
  throw new Error("Duplicate product handles");
}

const catalog = {
  brand: "Verdance",
  generatedAt: new Date().toISOString(),
  collections,
  products,
};

writeFileSync(join(dataDir, "catalog.json"), JSON.stringify(catalog, null, 2));
console.log(`Wrote ${products.length} products across ${collections.length} collections.`);
