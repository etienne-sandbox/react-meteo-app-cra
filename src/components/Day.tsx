import { capitalize, formatDate } from "../logic/utils";
import { WeatherIcon } from "./WeatherIcon";
import { DEFAULT_WEATHER_ITEM, WEATHER_DATA } from "../logic/weather";
import { Measure } from "./Measure";
import { NavigationArrow } from "phosphor-react";

export type DayWeather = {
  date: Date;
  weatherCode: number;
  tempMin: number;
  tempMax: number;
  windSpeed: number;
  windDirection: number;
};

type DayProps = {
  active: boolean;
  dayWeather: DayWeather;
  onClick: () => void;
};

export function Day({ active, dayWeather, onClick }: DayProps): JSX.Element | null {
  const weekDay = capitalize(formatDate(dayWeather.date, "EEEE"));
  const date = capitalize(formatDate(dayWeather.date, "d"));
  const month = capitalize(formatDate(dayWeather.date, "MMMM"));

  const weather = (WEATHER_DATA[dayWeather.weatherCode] ?? DEFAULT_WEATHER_ITEM).name;

  return (
    <div className={"Day" + (active ? " active" : "")}>
      <div onClick={onClick} className="Day--header">
        <div className="Day--weather">
          <WeatherIcon code={dayWeather.weatherCode} size={42} />
        </div>
        <div className="Day--infos">
          <span className="Day--date">{`${weekDay} ${date} ${month}`}</span>
          <span className="Day--weather-name">{weather}</span>
        </div>
      </div>
      {active && (
        <div className="Day--details">
          <Measure color="#fdba74" name="Min." value={Math.round(dayWeather.tempMin).toString()} unit="°C" />
          <Measure color="#fca5a5" name="Max." value={Math.round(dayWeather.tempMax).toString()} unit="°C" />
          <Measure color="#67e8f9" name="Vent" value={Math.round(dayWeather.windSpeed).toString()} unit=" kh/h" />
          <Measure
            color="#fda4af"
            name="Dir."
            value={
              <NavigationArrow size={28} weight="duotone" transform={`rotate(${45 + dayWeather.windDirection})`} />
            }
          />
        </div>
      )}
    </div>
  );
}
