import type { WeatherData } from "src/global";

export let location="japan";
export let res;
async function fetchWeatherData(){
    const req= await fetch (`http://wttr.in/${location}?format=j1`);
    res= (await req.json()) as WeatherData;
    return res;
}
fetchWeatherData();

