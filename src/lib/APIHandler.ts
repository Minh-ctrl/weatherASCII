import type { WeatherData } from "src/global";

export let location="japan";
async function fetchWeatherData(){
    const req= await fetch (`http://wttr.in/${location}?format=j1`);
    const res= (await req.json()) as WeatherData;
    return res;
}
console.log(fetchWeatherData())
