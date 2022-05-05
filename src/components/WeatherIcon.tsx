import { DEFAULT_WEATHER_ITEM, WEATHER_DATA } from "../logic/weather";

type WeatherIconProps = {
  code: number;
  size: number;
};

export function WeatherIcon({ code, size }: WeatherIconProps): JSX.Element {
  const { color, icon: Icon } = WEATHER_DATA[code] ?? DEFAULT_WEATHER_ITEM;
  return <Icon size={size} weight="duotone" color={color} />;
}
