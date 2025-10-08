import{w as t,a as n,f as i}from"../chunks/JhVMMGvh.js";import"../chunks/5EQaZa8d.js";var o=t(i(`<div id="Home" class="row svelte-3n925k"><div id="HomeCenter" class="container column svelte-3n925k"><h1 class="svelte-3n925k">*under construction*</h1> <div class="textbox column svelte-3n925k"><p class="svelte-3n925k">Handles page is done, onto nanologs in journal</p> <p class="svelte-3n925k">.</p> <p class="svelte-3n925k">.</p> <p class="svelte-3n925k">.</p> <p class="svelte-3n925k">.</p> <p class="svelte-3n925k">.</p> <p class="svelte-3n925k">.</p> <p class="svelte-3n925k">.</p> <p class="svelte-3n925k">.</p> <p class="svelte-3n925k">.</p> <p class="svelte-3n925k">.</p> <p class="svelte-3n925k">.</p> <p class="svelte-3n925k">gher98ughiuweefh9wgfwerfwqefwe</p> <p class="svelte-3n925k">g8 hfweiufhweojfowej ffowejfoejoijoiwejfoiwejf</p> <p class="svelte-3n925k">urgeh8tufrhj q2we7ft89h uerg87u wehfu8wehfiuwe hfiuhw efi uhw efiuhwe ifhweif uhweiufhweivhn 8iuwevniweg vhj98wqeufjvniweuhf giwehfiwhnev inweivnwe</p></div></div> <div style="flex:1"></div> <div id="HomeMiddle" class="container column svelte-3n925k"><p class="svelte-3n925k">9euw</p> <p class="svelte-3n925k">uh</p></div> <div id="HomeSide" class="container column svelte-3n925k"><div id="AboutMe" class="textbox column svelte-3n925k"><p class="svelte-3n925k">gheriuh dasdas das</p> <p class="svelte-3n925k">asdasdas sa das</p> <p class="svelte-3n925k">asdasdas sa</p> <p class="svelte-3n925k">asdas</p> <p class="svelte-3n925k">as</p> <p class="svelte-3n925k">asdasdas s</p></div> <div id="NowPlaying" class="svelte-3n925k"><p class="svelte-3n925k"><i class="fa-brands fa-spotify" style="color:#24AC4F; margin-right:0.1vmin; margin-left:0.5vmin;"></i> <span>Listening to:</span></p></div> <div id="spotify-status" class="svelte-3n925k"><p class="svelte-3n925k">🎵 nothing atm (or maybe js reload)</p></div> <script src="https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.2/color-thief.umd.js"><\/script> <script>
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
                container.innerHTML = \`
                    <div style="display:flex; align-items:center; gap:1vmin;">
                        <img id="album-art" src="\${spotify.album_art_url}" style="width:8vmin;height:8vmin;border-radius:1.25vmin;">
                        <div style="min-width:0;">
                            <p style="margin:0; font-size:1.75vmin; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:32vmin;" id="song-title"><strong>\${spotify.song}</strong></p>
                            <p style="margin:0; font-size:1.75vmin; color:#aaa; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:32vmin;" id="song-artist">\${spotify.artist}</p>
                            <p style="margin:0; font-size:1.25vmin; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:32vmin;" id="song-album">🎧 \${spotify.album}</p>
                        </div>
                    </div>
                \`;
                const img = container.querySelector('#album-art');
                img.crossOrigin = "Anonymous";
                img.onload = () => {
                    const colorThief = new window.ColorThief();
                    try {
                        const color = colorThief.getColor(img);
                        container.style.background = \`rgb(\${color[0]},\${color[1]},\${color[2]})\`;
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
                container.innerHTML = \`<p>🎵 Not listening right now</p>\`;
                container.style.background = "#1e1e1e";
                container.style.color = "#fff";
                }
            };
        <\/script></div></div>`));function r(e){var s=o();n(e,s)}export{r as component};
