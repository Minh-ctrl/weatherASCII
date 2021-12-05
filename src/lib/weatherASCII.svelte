<script lang="ts">
    import objASCII from "$lib/weatherConstant";
    import type {WeatherData} from "src/global";
    let ASCIIicon, ASCIIicon1, ASCIIicon2;
    let fetched;
    async function fetchWeatherData(){
        const req = await fetch (`https://wttr.in/${newline}?format=j1`);
        const res = (await req.json()) as WeatherData;
        let weathercode = res.current_condition[0].weatherCode;
        let weathercode1 = res.weather[1].hourly[5].weatherCode;
        let weathercode2 = res.weather[2].hourly[5].weatherCode;
        ASCIIicon = objASCII[weathercode];
        ASCIIicon1 = objASCII[weathercode1];
        ASCIIicon2 = objASCII[weathercode2];
        fetched= res;
        console.log(objASCII[weathercode1])
        console.log(objASCII[weathercode2])


        return res;
    }
    let arr=[];
    let newline=''; 
    let promise= fetchWeatherData();
    function handleKeydown(event){  
        if (event.code == 'Enter'){
            event.preventDefault()
            arr= [...arr, newline];
            fetchWeatherData();
            console.log(newline);
            newline='';
            // console.log(ASCIIicon1);
            // console.log(ASCIIicon2);
        }
    }
</script>
<main class="w-full flex flex-col justify-between">
    <div class="container flex flex-col flex-nowrap justify-center w-full">
        {#each arr as line}
        <div class="history text-white bg-black text-7xl w-full">> {line}</div>
        {/each}
    </div>
    <div class="input__field flex flex-row justify-center w-full  text-7xl">
        <input bind:value={newline}  contenteditable="true" class="bg-black w-full inline outline-none visible" type="text" on:keyup|preventDefault={handleKeydown} >
    </div>

<div class="w-full flex flex-row justify-center h-full">
    <pre class="w-full flex flex-row leading-tight justify-around">
    {#await promise}
    <div class="history text-white  text-7xl w-full "> FETCHING DATA</div>
        {:then weatherData}
        <div class="container flex flex-row w-full justify-between">
            <div class="grid">
                <div class="container flex flex-col w-full">
                    {#each ASCIIicon.weatherSymbol as weatherSymbol}
                        <span class="symbol text-3xl w-full">{weatherSymbol}</span>
                    {/each} 
                </div>
                <div class="container text-3xl flex flex-col">
                    <p>{fetched.current_condition[0].localObsDateTime}</p>
                    <p>{fetched.current_condition[0].weatherDesc[0].value}</p>
                    <p>{fetched.current_condition[0].FeelsLikeC}°C</p>
                </div>
            </div>
            <div class="grid">
                <div class="container flex flex-col">
                    {#each ASCIIicon1.weatherSymbol as weatherSymbol}
                        <span class="symbol text-3xl">{weatherSymbol}</span>
                    {/each} 
                </div>
                <div class="container text-3xl flex flex-col">
                    <p>{fetched.weather[1].date}</p>
                    <p>{fetched.weather[1].hourly[5].weatherDesc[0].value}</p>
                    <p>{fetched.weather[1].hourly[5].FeelsLikeC}°C</p>
                </div>
            </div>
            <div class="grid">
                <div class="container flex flex-col w-full">
                    {#each ASCIIicon2.weatherSymbol as weatherSymbol}
                        <span class="symbol text-3xl">{weatherSymbol}</span>
                    {/each} 
                </div>
                <div class="container text-3xl flex flex-col">
                    <p>{fetched.weather[2].date}</p>
                    <p>{fetched.weather[2].hourly[5].weatherDesc[0].value}</p>
                    <p>{fetched.weather[2].hourly[5].FeelsLikeC}°C</p>
                </div>
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