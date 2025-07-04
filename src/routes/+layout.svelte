<script>
</script>

<style>
    :root {
    --color-base: hsl(249deg 22% 12%);
    --color-surface: hsl(247deg 23% 15%);
    --color-overlay: hsl(248deg 25% 18%);
    --color-muted: hsl(249deg 12% 47%);
    --color-subtle: hsl(248deg 15% 61%);
    --color-text: hsl(245deg 50% 91%);
    --color-love: hsl(343deg 76% 68%);
    --color-gold: hsl(35deg 88% 72%);
    --color-rose: hsl(2deg 55% 83%);
    --color-pine: hsl(197deg 49% 38%);
    --color-foam: hsl(189deg 43% 73%);
    --color-iris: hsl(267deg 57% 78%);
    --color-low: #21202e;
    --color-med: #403d52;
    --color-high: #524f67;
}
    .container {display: flex;}
    .row {flex-direction: row;}
    .column {flex-direction: column;}
    .centered {justify-content: center;}
    button {font-family: inherit;}
    .box {
	margin: 2vmin;
	padding: 3vmin;
	border: 0.75vmin solid var(--color-low);
	border-radius:0.5vmin;
	background-color: var(--color-base);
}
    .parent {
        height: 100%;
        width: 100%;
        flex: 1;
}
    .sidebar {
        background-color: var(--color-overlay);
        width: 13vw;
        height: 100%;
        gap: 0.925vh;
}
        #Pfp {
            margin-top: 2.75vh;
            margin-bottom: 2vh;
        }
        #Pfp > img {
            width: 10vw;
            height: auto;
            border-radius: 50%;
    }
        .handle {
            font-size: 3vmin;
        }
        .handle > div {
            text-align: center;
            flex: 1;
        }
        .handle > div > a {
            color: var(--color-text);
        }
        .handle > div > a:hover {
            color: var(--color-gold);
            filter: brightness(110%);
            transition: color 0.3s;
        }
        .handle > div > a:active {
            filter: brightness(75%);
        }
        .handle > div > a > i {}
        #Nav {
            margin-top: 2vh;
            gap: 2.25vh;
        }
        #Nav > a {
            display: flex;
            justify-content: center;
            text-decoration: none;
        }
        #Nav > a > button.inactive {
            font-size: 2.25vmin;
            width: 10.5vw;
            height: 5vh;
            border: 0.2vmin solid var(--color-high);
            border-radius: 0.5vmin;
            color: var(--color-iris);
            background-color: var(--color-low);
            transition: all 0.3s ease;
            cursor: pointer;
        }
        #Nav > a > button.inactive:hover {
            background-color: var(--color-med);
            transform: translateX(0.3vw);
        }
        #Nav > a > button.inactive:active {
            filter: brightness(70%);
        }
        #Nav > a > button.active {
            font-size: 2.25vmin;
            width: 10.5vw;
            height: 5vh;
            border: 1px solid var(--color-base);
            border-radius: 0.5vmin;
            color: var(--color-text);
            background-color: var(--color-base);
    }
        #Webring {
            margin-top: auto;
            margin-bottom: 2vh;
            font-size: 1.75vmin;
            justify-content: center;
        }
        #Webring > a {
            padding: 0.5vmin;
            color: var(--color-text)
    }
    .content {
        background-color: var(--color-base);
        width: 87vw;
}
</style>

<div class="parent container row">
    <div class="sidebar container column">
        <div id="Pfp" class="container row centered">
            <img src="pfp.jpg">
        </div>
        <div id="Handles" class="handle container row">
			<div><a target="_blank" href="https://www.instagram.com/fried_chaawal/"><i class="fa-brands fa-instagram"></i></a></div> 
			<div><a target="_blank" href="https://www.youtube.com/@fried_chaawal"><i class="fa-brands fa-youtube"></i></a></div> 
			<div><a target="_blank" href="https://steamcommunity.com/id/fried_chaawal/"><i class="fa-brands fa-steam"></i></a></div>
        </div>
        <div id="HandlesAlt" class="handle container row">
			<div><a target="_blank" href="https://discord.gg/swyVXNKWPF"><i class="fa-brands fa-discord"></i></a></div>
			<div><a target="_blank" href="https://github.com/friedchaawal"><i class="fa-brands fa-github"></i></a></div>
		</div>
        <div id="Nav" class="container column centered">
            <a href="/blog"><button class="inactive"> blog </button></a>
            <a href=""><button class="inactive"> test </button></a>
            <a href=""><button class="inactive"> test </button></a>
            <a href=""><button class="inactive"> test </button></a>
        </div>
        <div id="Webring" class="container">
            <a href="https://3t1t.neocities.org/fried/previous">&lt;-</a>
            <a href="https://3t1t.neocities.org/">3t1t webring</a>
            <a href="https://3t1t.neocities.org/fried/next">-&gt;</a>
        </div>
    </div>
    <div class="container content">
        <slot />
    </div>
</div>