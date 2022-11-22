import { IWeatherProps } from "../interfaces/Weather";

export const WeatherDetails = ({ weather }: IWeatherProps) => {
    return (
        <ul className="mt-10 border-b border-[#ccc] text-xs font-normal transition-all sm:text-base">
            <h4 className="font-bold tracking-wide text-white">
                Weather Details
            </h4>
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
