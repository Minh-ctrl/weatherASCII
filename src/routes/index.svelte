
<script>
    import WeatherAscii from "$lib/weatherASCII.svelte";
</script>
<main class="crt w-full h-full">
<WeatherAscii/>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
    main{
        font-family: VT323;
        text-transform: uppercase;
    }
    .crt::before {
    background: linear-gradient(#101010 50%, rgba(16, 16, 16, 0.2) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.03));
	background-size: 100% 3px, 6px 100%;
	content: "";
	pointer-events: none;
	position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	z-index: 2;
    }
    .crt::after {
        animation: flicker 0 infinite;
	    background: rgba(16, 16, 16, 0.2);
	    content: "";
	    pointer-events: none;
	    position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	    z-index: 2;
    }
    .crt{
        animation: textShadow 1s infinite;
    }
    @keyframes textShadow {
    0% {
        text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    5% {
        text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    10% {
        text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    15% {
        text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    20% {
        text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    25% {
        text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    30% {
        text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    35% {
        text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    40% {
        text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    45% {
        text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    50% {
        text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    55% {
        text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    60% {
        text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    65% {
        text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    70% {
        text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    75% {
        text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    80% {
        text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    85% {
        text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    90% {
        text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    95% {
        text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
    100% {
        text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;
    }
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