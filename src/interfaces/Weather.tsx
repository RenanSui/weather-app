export interface IWeatherCurrent {
    temp_c: number;
    is_day: number;
    condition: {
        text: string;
        icon: string;
        code: number;
    };
    wind_kph: number;
    humidity: number;
    cloud: number;
}

export interface IWeatherProps {
    weather: IWeather;
    children?: React.ReactNode;
}

export interface IWeather {
    location: IWeatherLocation;
    current: IWeatherCurrent;
    dayTime: string;
    dayCondition: string;
    colorFormButton: string;
}

export interface IWeatherLocation {
    name: string;
    localtime: string;
}
