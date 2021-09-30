
<script>
    import WeatherAscii from "$lib/weatherASCII.svelte";

</script>
<main class="w-full h-screen ">
<WeatherAscii></WeatherAscii>


</main>

<style>
    main{
        background-color: #333;
    }
    @keyframes flicker {
		0% { opacity: 0.15795 }
		5% { opacity: 0.31511 }
		10% { opacity: 0.94554 }
		15% { opacity: 0.2469 }
		20% { opacity: 0.62031 }
		25% { opacity: 0.0293 }
		30% { opacity: 0.00899 }
		35% { opacity: 0.5344 }
		40% { opacity: 0.12778 }
		45% { opacity: 0.52042 }
		50% { opacity: 0.3823 }
		55% { opacity: 0.2198 }
		60% { opacity: 0.9383 }
		65% { opacity: 0.86615 }
		70% { opacity: 0.68695 }
		75% { opacity: 0.55749 }
		80% { opacity: 0.96984 }
		85% { opacity: 0.0361 }
		90% { opacity: 0.24467 }
		95% { opacity: 0.08351 }
		100% { opacity: 0.54813 }
	}

</style>