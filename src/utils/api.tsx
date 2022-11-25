import { QueryClient } from '@tanstack/react-query';
import { getDayOrNight } from './getDayOrNight';
import axios from 'axios';

const dev = process.env.NODE_ENV !== 'production';
const platform = process.env.PLATFORM === 'vercel';
const server = dev
    ? 'http://localhost:3000'
    : platform
    ? 'https://ren-weatherapp.vercel.app'
    : 'https://ren-weatherapp.netlify.app';

const get = async (locationInput: string | undefined) => {
    const local = Boolean(locationInput) ? locationInput : 'Tokyo';

    console.log(server);

    const response = await axios.get(
        `https://ren-mycustomapiserver.vercel.app/api/api?apitype=weather&params=${local}`
    );
    const { dayOrNight } = getDayOrNight(response.data.data);
    const newResponse = { ...dayOrNight, ...response.data.data };
    return newResponse;
};

const fetchError = (
    setAlertTimer: React.Dispatch<React.SetStateAction<Boolean>>
) => {
    setAlertTimer(true);
    setTimeout(() => {
        setAlertTimer(false);
    }, 3 * 1000);
};

const getPreviousWeather = (queryClient: QueryClient) => {
    const previousWeather = queryClient
        .getQueriesData(['weather'])
        .filter((previous: any) => {
            if (!Boolean(previous[1] == undefined)) {
                return previous;
            }
        });

    console.log(previousWeather)
    return previousWeather[previousWeather.length - 1][0][1] as string;
};

export const api = {
    get,
    getPreviousWeather,
    fetchError,
};
