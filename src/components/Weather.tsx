import { IWeatherProps } from "../interfaces/Weather";

export const Weather = ({ weather }: IWeatherProps) => {
    const { location, current } = weather;

    const date = location.localtime;
    const year = date.substr(0, 4).padStart(2, '0');
    const month = date.substr(5, 2).padStart(2, '0');
    const day = date.substr(8, 2).padStart(2, '0');
    const time = date.substr(11).padStart(5, '0');

    const dayOfTheWeek = (day: string, month: string, year: string) => {
        const weekday = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        return weekday[new Date(`${month}/${day}/${year}`).getDay()];
    };

    return (
        <section className="relative z-10 flex flex-wrap justify-center py-10 text-white transition-all duration-300 sm:mx-6 sm:mt-auto sm:w-4/12 sm:items-end sm:justify-start md:w-6/12 md:px-0 lg:ml-12 lg:justify-start lg:w-7/12">
            <h1 className="mx-2 flex justify-center text-8xl tracking-wide sm:mb-3">
                {Math.floor(current.temp_c)}°
            </h1>
            <div
                id="city-time"
                className="mx-2 mb-3 flex flex-col justify-end font-medium"
            >
                <h1 className="mb-3 break-all text-center text-4xl tracking-wide transition-all sm:text-left md:text-5xl">
                    {location.name}
                </h1>
                <div className="mx-auto text-xs tracking-wide sm:mx-0 sm:mb-1">
                    <span>{time} - </span>
                    <span>
                        {`${dayOfTheWeek(day, month, year)}`}
                        {` ${month}/${day}/${year}`}
                    </span>
                </div>
            </div>
            <div
                id="weather-condition"
                className="mb-3 ml-3 flex flex-col items-center justify-end tracking-wide"
            >
                <img src={current.condition.icon} alt="icon" className="" />
                <span className="text-sm font-medium ">
                    {current.condition.text}
                </span>
            </div>
        </section>
    );
};
