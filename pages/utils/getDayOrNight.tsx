import { IWeather } from '../interfaces/Weather';

export const getDayOrNight = (weather: IWeather) => {
    const dayTime = weather.current.is_day ? 'day' : 'night';
    const code = weather.current.condition.code;

    const clear = Boolean(code == 1000);
    const cloudy = Boolean(
        code == 1003 ||
            code == 1006 ||
            code == 1009 ||
            code == 1030 ||
            code == 1069 ||
            code == 1087 ||
            code == 1135 ||
            code == 1273 ||
            code == 1276 ||
            code == 1279 ||
            code == 1282
    );
    const rainy = Boolean(
        code == 1063 ||
            code == 1069 ||
            code == 1072 ||
            code == 1150 ||
            code == 1153 ||
            code == 1180 ||
            code == 1183 ||
            code == 1186 ||
            code == 1189 ||
            code == 1192 ||
            code == 1195 ||
            code == 1204 ||
            code == 1207 ||
            code == 1240 ||
            code == 1243 ||
            code == 1246 ||
            code == 1249 ||
            code == 1252
    );

    // if clear, if cloudy, if rainy, else snowy
    const dayCondition = clear
        ? 'clear'
        : rainy
        ? 'rainy'
        : cloudy
        ? 'cloudy'
        : 'snowy';

    // if clear and day, if cloudy and day, if rainy and day, else snowy
    const colorFormButton = clear
        ? clear && dayTime === 'day'
            ? 'bg-[#e5ba92]'
            : 'bg-[#181e27]'
        : cloudy
        ? cloudy && dayTime === 'day'
            ? 'bg-[#fa6d1b]'
            : 'bg-[#181e27]'
        : rainy
        ? rainy && dayTime === 'day'
            ? 'bg-[#647d75]'
            : 'bg-[#325c80]'
        : dayTime === 'day'
        ? 'bg-[#4d72aa]'
        : 'bg-[#1b1b1b]';

    return {
        dayOrNight: {
            dayTime,
            dayCondition,
            colorFormButton,
        },
    };
};
