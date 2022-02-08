<script lang="ts">
    import objASCII from "$lib/weatherConstant";
    import type { WeatherData } from "src/global";
    let weatherCode, weatherCode1, weatherCode2;
    let fetched;
    let arr = [];
    let newline = ">";
    async function fetchWeatherData() {
        const req = await fetch(`https://wttr.in/${newline}?format=j1`);
        const res = (await req.json()) as WeatherData;
        weatherCode = res.current_condition[0].weatherCode;
        weatherCode1 = res.weather[1].hourly[5].weatherCode;
        weatherCode2 = res.weather[2].hourly[5].weatherCode;
        fetched = res;
        return res;
    }
    async function handleKeydown(event) {
        if (event.code == "Enter") {
            event.preventDefault();
            await fetchWeatherData();
            arr = [
                ...arr,
                {
                    text: newline,
                    fetched,
                    ASCIIicon: objASCII[weatherCode],
                    ASCIIicon1: objASCII[weatherCode1],
                    ASCIIicon2: objASCII[weatherCode2],
                },
            ];
            newline = ">";
        }
    }
</script>

<main class="w-full flex flex-col justify-between">
    <div class="container flex flex-col flex-nowrap justify-center w-full">
        {#each arr as query}
            <div class="history text-white bg-black text-4xl w-full">
                {query.text}
            </div>
            <pre class="w-full flex flex-row leading-tight justify-around">
                    <div class="container flex flex-row w-full justify-around">
                        <div class="grid">
                            <div class="container flex flex-col w-full">
                                {#each query.ASCIIicon.weatherSymbol as weatherSymbol}
                                <span class="symbol text-xl w-full"
                                    >{weatherSymbol}</span
                                >
                            {/each} 
                            </div>
                            <div class="container text-xl flex flex-col">
                                <p>Country: {query.fetched.nearest_area[0]
                                    .country[0].value}</p>
                                <p>{query.fetched.current_condition[0]
                                    .localObsDateTime}</p>
                                <p>{query.fetched.current_condition[0]
                                    .weatherDesc[0].value}</p>
                                <p>{query.fetched.current_condition[0]
                                    .FeelsLikeC}°C</p>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="container flex flex-col">
                                {#each query.ASCIIicon1.weatherSymbol as weatherSymbol}
                                <span class="symbol text-xl"
                                    >{weatherSymbol}</span
                                >
                            {/each} 
                            </div>
                            <div class="container text-xl flex flex-col">
                                <p>{query.fetched.weather[1].date}</p>
                                <p>{query.fetched.weather[1].hourly[5]
                                    .weatherDesc[0].value}</p>
                                <p>{query.fetched.weather[1].hourly[5]
                                    .FeelsLikeC}°C</p>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="container flex flex-col w-full">
                                {#each query.ASCIIicon2.weatherSymbol as weatherSymbol}
                                <span class="symbol text-xl"
                                    >{weatherSymbol}</span
                                >
                            {/each} 
                            </div>
                            <div class="container text-xl flex flex-col">
                                <p>{query.fetched.weather[2].date}</p>
                                <p>{query.fetched.weather[2].hourly[5]
                                    .weatherDesc[0].value}</p>
                                <p>{query.fetched.weather[2].hourly[5]
                                    .FeelsLikeC}°C</p>
                            </div>
                        </div>
                    </div>
                </pre>
        {/each}
    </div>
    <div class="input__field flex flex-row justify-center w-full  text-3xl">
        <input
            bind:value={newline}
            contenteditable="true"
            class="bg-black w-full inline outline-none visible"
            type="text"
            on:keyup|preventDefault={handleKeydown}
        />
    </div>

    <div class="w-full flex flex-row justify-center h-full">
        <pre class="w-full flex flex-row leading-tight justify-around">
    {#await handleKeydown}
                <div
                    class="history text-white  text-5xl w-full "> FETCHING DATA</div>
            {:then weatherData}
                <!-- this section is left empty because it is redundant as the data is displayed on the pre tag -->
            {/await}
    </pre>
    </div>
</main>

<style>
    .symbol {
        letter-spacing: -0.05em;
    }
    :root {
        --text-color: #00aa00;
    }
    pre {
        color: var(--text-color);
    }
    input {
        color: var(--text-color);
    }
    .history {
        color: var(--text-color);
    }
</style>
