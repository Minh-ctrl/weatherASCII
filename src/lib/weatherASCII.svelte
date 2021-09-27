<script lang="ts">
    import objASCII from "$lib/weatherConstant";
    import type {WeatherData} from "src/global";
    let location="india";
    let ASCIIicon;
    async function fetchWeatherData(){
        const req= await fetch (`http://wttr.in/${location}?format=j1`);
        const res= (await req.json()) as WeatherData;
        let weathercode= res.current_condition[0].weatherCode;
        ASCIIicon=objASCII[weathercode]
        return res;
    }
    let promise= fetchWeatherData();
</script>

<pre class="text-gray-200 flex flex-col leading-tight">
 Current Weather:
{#await promise}
    <p> fetching data</p>
    {:then weatherData}
    {#each ASCIIicon.weatherSymbol as weatherSymbol}
        <span class="symbol">{weatherSymbol}</span>
    {/each} 
{/await}
</pre>

<style>
 .symbol{
    letter-spacing: -0.05em;
 }
</style>