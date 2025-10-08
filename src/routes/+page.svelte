<script>
    import { onMount } from 'svelte';

	onMount(() => {
    const ws = new WebSocket("wss://api.lanyard.rest/socket");

    ws.onopen = () => {
        ws.send(JSON.stringify({
        op: 2,
        d: { subscribe_to_id: "533956232113946629" }
        }));
    };

    ws.onmessage = (event) => {
        const { t, d } = JSON.parse(event.data);
        if (t !== "INIT_STATE" && t !== "PRESENCE_UPDATE") return;

        const spotify = d.spotify;
        const container = document.getElementById("spotify-status");

        if (spotify) {
        container.innerHTML = `
            <div style="display:flex; align-items:center; gap:1vmin;">
                <img id="album-art" src="${spotify.album_art_url}" style="width:8vmin;height:8vmin;border-radius:1.25vmin;">
                <div style="min-width:0;">
                    <p style="margin:0; font-size:1.75vmin; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:32vmin;" id="song-title"><strong>${spotify.song}</strong></p>
                    <p style="margin:0; font-size:1.75vmin; color:#aaa; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:32vmin;" id="song-artist">${spotify.artist}</p>
                    <p style="margin:0; font-size:1.25vmin; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:32vmin;" id="song-album">🎧 ${spotify.album}</p>
                </div>
            </div>
        `;
        const img = container.querySelector('#album-art');
        img.crossOrigin = "Anonymous";
        img.onload = () => {
            const colorThief = new window.ColorThief();
            try {
                const color = colorThief.getColor(img);
                container.style.background = `rgb(${color[0]},${color[1]},${color[2]})`;
                function getContrastingColor([r, g, b]) {
                    const luminance = (0.299*r + 0.587*g + 0.114*b)/255;
                    return luminance > 0.5 ? "#222" : "#fff";
                }
                const textColor = getContrastingColor(color);
                container.querySelectorAll("#song-title, #song-artist, #song-album").forEach(el => {
                    el.style.color = textColor;
                });
            } catch (e) {
                container.style.background = "#1e1e1e";
                container.querySelectorAll("#song-title, #song-artist, #song-album").forEach(el => {
                    el.style.color = "#fff";
                });
            }
        };
        } else {
            container.innerHTML = `<p>🎵 nothing atm</p>`;
            container.style.background = "#1e1e1e";
            container.style.color = "#fff";
            }
        };
	});
    </script>

<style>
    h1  {
        font-size: 4vmin;
    }
    p   {
        font-size: 1.75vmin;
        margin: 1vmin;
    }
    .textbox {
        width: 100%;
        background-color: var(--color-low);
        padding: 1.5vmin;
        border: 0.1vmin solid var(--color-high);
        border-radius: 1.25vmin;
        outline: var(--color-med);
    }
    #Home {
        background-color: var(--color-base);
        display: flex;
        flex: 1;
        height: 100%;
    }
    #HomeCenter {
        width: 50%;
        padding: 2vmin 3.5vmin 2vmin 3.5vmin;
        gap: 2vmin;
    }
    #HomeMiddle {
        width: 20%;
        padding: 2vmin 3.5vmin 2vmin 3.5vmin;
        gap: 2vmin;
    }
    #HomeSide {
        width: 30%;
        padding: 2vmin 1vmin 2vmin 3.5vmin;
        gap: 0;
        margin-right: 1%;
    }
    #AboutMe {
        width: 93%;
        text-align: center;
    }
    #NowPlaying {
        margin-top: auto;
        margin-bottom: 0.25vh;
    }
    #NowPlaying > p {
        font-size: 2vmin;
    }
    #spotify-status {
        width: 100%;
        margin-top: 0.25vh;
        margin-bottom: 0.5vh;
        min-height: 11.5vmin;
        max-height: 11.5vmin;
        align-items: center;
        display: flex;
        box-sizing: border-box;
        overflow: hidden;
        background: #1e1e1e;
        color: #fff;
        padding: 1.5vmin;
        border: 0.1vmin solid var(--color-high);
        border-radius: 1.25vmin;
        outline: var(--color-med);
    }
</style>
<div id="Home" class="row">
    <div id="HomeCenter" class="container column">
        <h1>*under construction*</h1>
        <div class="textbox column">
            <p> Handles page is done, onto nanologs in journal</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>gher98ughiuweefh9wgfwerfwqefwe</p>
            <p>g8 hfweiufhweojfowej ffowejfoejoijoiwejfoiwejf</p>
            <p>urgeh8tufrhj q2we7ft89h uerg87u wehfu8wehfiuwe hfiuhw efi uhw efiuhwe ifhweif uhweiufhweivhn 8iuwevniweg vhj98wqeufjvniweuhf giwehfiwhnev inweivnwe</p>
        </div>
    </div>
    <div style="flex:1"></div>
    <div id="HomeMiddle" class="container column">
        <p>9euw</p>
        <p>uh</p> 
    </div>
    <div id="HomeSide" class="container column">
        <div id="AboutMe" class="textbox column">
            <p>gheriuh dasdas das</p>
            <p>asdasdas sa das</p>
            <p>asdasdas sa</p>
            <p>asdas</p>
            <p>as</p>
            <p>asdasdas s</p>
        </div>
        <div id="NowPlaying">
            <p>
                <i class="fa-brands fa-spotify" style="color:#24AC4F; margin-right:0.1vmin; margin-left:0.5vmin;"></i>
                <span>Listening to:</span>
            </p>
        </div>
        <div id="spotify-status">
            <p> . . . </p>
        </div>
    </div>
</div>
