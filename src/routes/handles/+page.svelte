<script>
    let handlelist = [
        {
            name: "GitHub",
            user: "@friedchaawal",
            url: "https://github.com/friedchaawal",
            icon: "fa-brands fa-github",
            bg: "#0A0E12",
            color: "var(--color-text)",
        },
        {
            name: "Discord Server",
            user: "Discord Server",
            url: "https://discord.gg/swyVXNKWPF",
            icon: "fa-brands fa-discord",
            bg: "#7289DA",
            color: "var(--color-base)",
        },
        {
            name: "YouTube",
            user: "@fried_chaawal",
            url: "https://www.youtube.com/channel/UCua-_UZDKJR74aDJncGJI3g",
            icon: "fa-brands fa-youtube",
            bg: "#AA2B28",
            color: "var(--color-base)",
        },
        {
            name: "Steam",
            user: "id/fried_chaawal",
            url: "https://steamcommunity.com/id/fried_chaawal/",
            icon: "fa-brands fa-steam",
            bg: "linear-gradient(to top, #1b2838 0%, #000000 100%)",
            color: "var(--color-text)",
        },
        {
            name: "Spotify",
            user: "Fried Chaawal",
            url: "https://open.spotify.com/user/knl33dedr8mdq3e1zjh7ccafa",
            icon: "fa-brands fa-spotify",
            bg: "#24AC4F",
            color: "var(--color-text)",
        },
];
</script>

<style>
    #Handles {
    }
    .handles-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 4vmin;
        padding: 3vmin;
    }
    .handle-card {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        border-radius: 3%;
        text-decoration: none;
        overflow: hidden;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    .handle-card:hover {
        transform: translateY(-0.5vmin);
    }
    .handle-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 18vmin;
    }
    .handle-logo i {
        font-size: 4vmin;
    }
    .handle-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1vmin 2vmin;
        background: var(--color-low);
        color: var(--color-text);
        font-size: 1.5vmin;
    }
    .handle-name {
        opacity: 0.8;
    }
    .discord-username {
        background-color: var(--color-low);
        outline: var(--color-med);
        border: 0.1vmin solid var(--color-high);
        border-radius: 1.25vmin;
        padding: 1vmin;
        width: 18%;
        margin-top: 36.5vmin;
        margin-left: 3vmin;
        font-size: 1.5vmin;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
</style>

<div id="Handles">
    <div class="handles-grid">
        {#each handlelist as handle}
            <a 
                href={handle.url} 
                class="handle-card"
                target="_blank" rel="noopener noreferrer"
            >
                <div class="handle-logo" style="background:{handle.bg};">
                    <i class={handle.icon} style="color:{handle.color};"></i>
                </div>
                <div class="handle-info">
                    <span class="handle-name">{handle.name}</span>
                </div>
            </a>
        {/each}
    </div>
    <div class="discord-username">
        <p>Discord Username: @fried_chaawal</p>
    </div>
</div>