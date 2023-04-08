import { IWeatherProps } from '../interfaces/Weather';

export const WeatherDetails = ({ weather }: IWeatherProps) => {
    return (
        <ul
            className="mt-10 border-b border-[#ccc] text-xs font-normal transition-all sm:text-base"
            aria-labelledby="sub-main-weather-details"
        >
            <h1 className="hidden" id="sub-main-weather-details">
                Location Weather Details
            </h1>
            <h2 className="font-bold tracking-wide text-white">
                Weather Details
            </h2>
            <li className="my-8 flex justify-between tracking-wide">
                <span>Cloudy</span>
                <span>{weather.current.cloud}%</span>
            </li>
            <li className="my-8 flex justify-between tracking-wide">
                <span>Humidity</span>
                <span>{weather.current.humidity}%</span>
            </li>
            <li className="mb-10 flex justify-between tracking-wide">
                <span>Wind</span>
                <span>{weather.current.wind_kph}km/h</span>
            </li>
        </ul>
    );
};
