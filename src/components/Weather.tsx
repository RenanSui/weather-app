import { IWeatherProps } from '../interfaces/Weather';

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
        <section
            className="relative z-10 flex flex-wrap justify-center py-10 text-white transition-all duration-300 sm:mx-6 sm:mt-auto sm:w-4/12 sm:items-end sm:justify-start md:w-6/12 md:px-0 lg:ml-12 lg:w-7/12 lg:justify-start"
            aria-labelledby="main-location-weather-details"
        >
            <h1 className="hidden" id="main-location-weather-details">
                Location temperature detail
            </h1>
            <p className="mx-2 flex justify-center text-8xl tracking-wide sm:mb-3">
                {Math.floor(current.temp_c)}°
            </p>
            <section
                className="mx-2 mb-3 flex flex-col justify-end font-medium"
                aria-labelledby="sub-location-weather-details"
            >
                <h1 className="hidden" id="sub-location-weather-details">
                    Location name and time details
                </h1>
                <p className="mb-3 break-all text-center text-4xl tracking-wide transition-all sm:text-left md:text-5xl">
                    {location.name}
                </p>
                <section
                    className="mx-auto text-xs tracking-wide sm:mx-0 sm:mb-1"
                    aria-labelledby="location-time-hour-details"
                >
                    <h1 className="hidden" id="location-time-hour-details">
                        Location time details
                    </h1>
                    <p className="inline-block">{time} - </p>
                    <p className="inline-block">
                        {`${dayOfTheWeek(day, month, year)}`}
                        {` ${month}/${day}/${year}`}
                    </p>
                </section>
            </section>
            <section
                id="weather-condition"
                className="mb-3 ml-3 flex flex-col items-center justify-end tracking-wide"
                aria-labelledby="location-weather-condition"
            >
                <h1 className="hidden" id="location-weather-condition">
                    Location Weather condition
                </h1>
                <img src={current.condition.icon} alt="icon" className="" />
                <p className="inline-block text-sm font-medium">
                    {current.condition.text}
                </p>
            </section>
        </section>
    );
};
