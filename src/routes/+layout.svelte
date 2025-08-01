<script>
    let pages = [
    ["/", "home"],
    ["/projects", "projects"],
    ["/journal", "journal"],
    ["/handles", "handles"],
]
    import { page } from '$app/stores';
    $: url = $page.url.pathname;
</script>

<style>
    #Parent {
        width: 100%;
        height: 100%;
        flex: 1;
    }
    .sidebar {
        background-color: var(--color-overlay);
        width: 13%;
        height: 100%;
        gap: 0.925vh;
        position: fixed;
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
    #Nav {
        margin-top: 4vh;
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
        border-radius: 3%;
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
        text-decoration: none;
        padding: 0.5vmin;
        color: var(--color-text)
    }   
    #Content {
        background-color: var(--color-base);
        width: 87%;
        margin-left: 13%;
    }
</style>

<div id="Parent" class="container row">
    <div class="sidebar container column">
        <div id="Pfp" class="container row centered">
            <img src="pfp.jpg">
        </div>
        <div id="Nav" class="container column centered">
            {#each pages as [link, title] }
                    <a href={link}><button class="inactive" class:active="{link === '/'+url.split('/')[1]}">{title}</button></a>
            {/each}
        </div>
        <div id="Webring" class="container">
            <a href="https://3t1t.neocities.org/fried/previous">&lt;-</a>
            <a href="https://3t1t.neocities.org/">3t1t webring</a>
            <a href="https://3t1t.neocities.org/fried/next">-&gt;</a>
        </div>
    </div>
    <div id="Content" class="">
        <slot />
    </div>
</div>