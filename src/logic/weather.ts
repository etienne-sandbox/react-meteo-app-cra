import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  IconProps,
  Question,
  Sun,
} from "phosphor-react";

type WeatherItem = { icon: React.ComponentType<IconProps>; color: string; name: string };

export const DEFAULT_WEATHER_ITEM: WeatherItem = {
  icon: Question,
  color: "#9ca3af",
  name: "Inconnu",
};

export const WEATHER_DATA = (() => {
  const a: Array<WeatherItem | undefined> = [];
  // Clear sky
  a[0] = { icon: Sun, color: "#eab308", name: "Ensoleillé" };

  // Mainly clear, partly cloudy, and overcast
  a[1] = { icon: CloudSun, color: "#eab308", name: "Quelques nuages" };
  a[2] = { icon: CloudSun, color: "#94a3b8", name: "Eclaircies" };
  a[3] = { icon: Cloud, color: "#0ea5e9", name: "Nuageux" };

  // Fog and depositing rime fog
  a[45] = { icon: CloudFog, color: "#9ca3af", name: "Brouillard" };
  a[48] = { icon: CloudFog, color: "#9ca3af", name: "Brouillard givrant" };

  // Drizzle: Light, moderate, and dense intensity
  a[51] = { icon: CloudRain, color: "#c084fc", name: "Un peu de bruine" };
  a[53] = { icon: CloudRain, color: "#c084fc", name: "Bruine" };
  a[55] = { icon: CloudRain, color: "#c084fc", name: "Beacoup de bruine" };

  // Freezing Drizzle: Light and dense intensity
  a[56] = { icon: CloudSnow, color: "#94a3b8", name: "Quelques averses verglaçantes" };
  a[57] = { icon: CloudSnow, color: "#94a3b8", name: "Averses verglaçantes" };

  // Rain: Slight, moderate and heavy intensity
  a[61] = { icon: CloudRain, color: "#1e40af", name: "Quelques averses" };
  a[63] = { icon: CloudRain, color: "#1e40af", name: "Averses" };
  a[65] = { icon: CloudRain, color: "#1e40af", name: "Nombreuses averses" };

  // Freezing Rain: Light and heavy intensity
  a[66] = { icon: CloudSnow, color: "#1e40af", name: "Rare pluies verglaçantes" };
  a[67] = { icon: CloudSnow, color: "#1e40af", name: "Pluie verglaçante" };

  // Snow fall: Slight, moderate, and heavy intensity
  a[71] = { icon: CloudSnow, color: "#334155", name: "Quelques flocons" };
  a[73] = { icon: CloudSnow, color: "#334155", name: "Neige" };
  a[75] = { icon: CloudSnow, color: "#334155", name: "Beaucoup de neige" };

  // Snow grains
  a[77] = { icon: CloudSnow, color: "#334155", name: "Grêle" };

  // Rain showers: Slight, moderate, and violent
  a[80] = { icon: CloudRain, color: "#1e3a8a", name: "Forte pluie" };
  a[81] = { icon: CloudRain, color: "#1e3a8a", name: "Très forte pluie" };
  a[82] = { icon: CloudRain, color: "#1e3a8a", name: "Vache qui pisse" };

  // Snow showers slight and heavy
  a[85] = { icon: CloudSnow, color: "#1e3a8a", name: "Chute de neige" };
  a[86] = { icon: CloudSnow, color: "#1e3a8a", name: "Tempête de neige" };

  // Thunderstorm: Slight or moderate
  a[95] = { icon: CloudLightning, color: "#334155", name: "Orage" };

  // Thunderstorm with slight and heavy hail
  a[96] = { icon: CloudLightning, color: "#1e3a8a", name: "Orage et grêle" };
  a[99] = { icon: CloudLightning, color: "#1e3a8a", name: "Très fort orage" };

  return a;
})();
