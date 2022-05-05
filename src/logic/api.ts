export interface WeatherResult {
  generationtime_ms: number;
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    windspeed_10m_max: number[];
    winddirection_10m_dominant: number[];
    weathercode: number[];
  };
  elevation: number;
  utc_offset_seconds: number;
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    windspeed_10m_max: string;
    winddirection_10m_dominant: string;
    weathercode: string;
  };
  latitude: number;
  longitude: number;
}

type WeatherOptions = {
  latitude: number;
  longitude: number;
  timezone?: string;
  signal?: AbortSignal;
};

export async function getWeather({
  timezone = "Europe/Berlin",
  latitude,
  longitude,
  signal,
}: WeatherOptions): Promise<WeatherResult> {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant&timezone=${timezone}`,
    { signal }
  );
  if (!res.ok) {
    throw res;
  }
  const data = await res.json();
  return data;
}

export type SearchResultItem = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  ranking: number;
  elevation: number;
  feature_code: string;
  timezone: string;
  population: number;

  country_code?: string;
  country?: string;
};

export interface SearchResult {
  results?: SearchResultItem[];
}

export async function search(query: string, signal?: AbortSignal): Promise<SearchResult> {
  const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?language=fr&name=${query}`, { signal });
  if (!res.ok) {
    throw res;
  }
  const data = await res.json();
  return data;
}
