<script lang="ts">
    import objASCII from "$lib/weatherConstant";
    import type {WeatherData} from "src/global";
    let location;
    let ASCIIicon;
    let fetched;
    async function fetchWeatherData(){
        const req= await fetch (`http://wttr.in/${location}?format=j1`);
        const res= (await req.json()) as WeatherData;
        let weathercode= res.current_condition[0].weatherCode;
        ASCIIicon=objASCII[weathercode]
        fetched= res;
        return res;
    }
    let promise= fetchWeatherData();
    function handleKeydown(event){  
        if (event.code=='Enter'){
            event.preventDefault()
            event.target.location 
            location=event.target.value
            fetchWeatherData();
            console.log(promise);
        }
    }
</script>
<main class="w-full">
<div class="scanline flex flex-row justify-center">
<pre class="flex flex-row leading-tightjustify-center justify-items-center">
{#await promise}
    Fetching Data
    {:then weatherData}
    <div class="container flex flex-row w-full justify-center">
        <div class="container flex flex-col w-full">
            {#each ASCIIicon.weatherSymbol as weatherSymbol}
                <span class="symbol text-2xl w-full">{weatherSymbol}</span>
            {/each} 

        </div>
        <div class="container text-xl flex flex-col ">
            <p>{fetched.current_condition[0].weatherDesc[0].value}</p>
            <p>{fetched.current_condition[0].FeelsLikeC}°C</p>
        </div>
    </div>
{/await}
</pre>
</div>
    <div class="input__field flex flex-row justify-center">
        <input type="text" on:keyup|preventDefault={handleKeydown}>
    </div>
</main>
<style>
    .symbol{
    letter-spacing: -0.05em;
    }
    :root{
        --text-color: #00aa00;
    }
    pre{
        color: var(--text-color);
    }

</style>