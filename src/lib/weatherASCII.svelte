<script lang="ts">
    import objASCII from "$lib/weatherConstant";
    import type {WeatherData} from "src/global";
    import { createEventDispatcher } from 'svelte';
    const dispatch= createEventDispatcher();
    let location;
    let ASCIIicon;
    let fetched;
    async function fetchWeatherData(){
        const req= await fetch (`http://wttr.in/${location}?format=j1`);
        const res= (await req.json()) as WeatherData;
        let weathercode= res.current_condition[0].weatherCode;
        ASCIIicon=objASCII[weathercode]
        fetched= res;
        console.log(fetched);
        return res;
    }
    let promise= fetchWeatherData();
    function dispatcher(){
        dispatch('')
    }
</script>

<pre class="text-gray-200 flex flex-row leading-tight">
{#await promise}
    <input type="text" bind:value={location}>
    {:then weatherData}
    <div class="container flex flex-col w-1/12">
    {#each ASCIIicon.weatherSymbol as weatherSymbol}
        <span class="symbol">{weatherSymbol}</span>
    {/each} 
    </div>
    <div class="container flex flex-col">
    <p>Weather report: {location.toLocaleUpperCase()}</p>
    <p>{fetched.current_condition[0].weatherDesc[0].value}</p>
    <pre class="container flex flex-row">
        <p>{fetched.current_condition[0].FeelsLikeC}</p>
        <p>°C</p>
    </pre>
</div>
{/await}
</pre>

<style>
 .symbol{
    letter-spacing: -0.05em;
 }
</style>