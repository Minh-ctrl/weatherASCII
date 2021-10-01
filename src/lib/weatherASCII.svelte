<script lang="ts">
    import objASCII from "$lib/weatherConstant";
    import type {WeatherData} from "src/global";
    let location;
    let ASCIIicon;
    let fetched;
    async function fetchWeatherData(){
        const req= await fetch (`http://wttr.in/${newline}?format=j1`);
        const res= (await req.json()) as WeatherData;
        let weathercode= res.current_condition[0].weatherCode;
        ASCIIicon=objASCII[weathercode]
        fetched= res;
        return res;
    }
    let arr=[];
    let newline=''; 
    let promise= fetchWeatherData();
    function handleKeydown(event){  
        if (event.code=='Enter'){
            event.preventDefault()
            arr= [...arr, newline];
            fetchWeatherData();
            console.log(newline);
            newline='';
        }
    }

</script>
<main class="w-full flex flex-col justify-center">
    <div class="container flex flex-col flex-nowrap justify-center w-full">
        {#each arr as line}
        <div class="history text-white bg-yellow-900 text-2xl w-full">> {line}</div>
        {/each}
    </div>
    <div class="input__field flex flex-row justify-center w-full text-2xl">
        <input bind:value={newline}  contenteditable="true" class=" w-full inline outline-none visible" type="text" on:keyup|preventDefault={handleKeydown} 
        on:input={()=>{console.log(newline)}}>
    </div>

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
            <div class="container text-2xl flex flex-col ">
                <p>{fetched.current_condition[0].weatherDesc[0].value}</p>
                <p>{fetched.current_condition[0].FeelsLikeC}°C</p>
            </div>
        </div>
    {/await}
    </pre>
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
    input{
        color: var(--text-color);
    }
    .history{
        color: var(--text-color);
    }

</style>