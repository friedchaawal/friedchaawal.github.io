<script>
    let artwork = [
        {
            name:"guac",
            path:"guac-logo.png",
            link:"asdasdas",
        },
        {
            name:"neon-red",
            path:"neon-red.png",
            link:"beqwufhiweu",
        },
        {
            name:"mooer-msc10-pro",
            path:"mooer-msc10-pro.png",
            link:"asdjdia",
        },
    ];
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
        background-color: var(--color-low);
        padding: 1.5vmin;
        border: 0.1vmin solid var(--color-high);
        border-radius: 1.25vmin;
        outline: var(--color-med);
    }
    .grid-class {
        display: grid;
    }
    .art-box{
        padding:0;
        align-items: center;
    }
    .artwork-img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 1.25vmin;
    }
    .artwork-loop{
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
    #Projects {
        background-color: var(--color-base);
        flex: 1;
        flex-direction: column;
        padding-left: 2vmin;
        padding-right: 2vmin;
    }
    #Project-Space {
        grid-template-columns: repeat(2, 1fr);
        padding-left: 2vmin;
        padding-right: 2vmin;
    }
    #Artwork > .grid-class > div {
        height:55%;
        width:80%;
        justify-items: center;
    }
    #Artwork > .grid-class > div > a {
        align-items: center;
        font-size: 0px;
    }
    #Artwork > .grid-class > div > a:hover {
        font-size: 10px;
    }
    #Artwork > .grid-class > div > a > img:hover {
        filter: blur(2px);
    }
</style>
<div id="Projects" class="">
    </div>
    <div id="Project-Space" class="grid-class">
        <div id="Main">
            <h2> stufffff </h2>
        </div>
        <div id="Artwork">
            <h2> art stuff </h2>
            <div class="artwork-loop grid-class textbox">
                {#each artwork as art}
                    <div class="textbox art-box">
                        <a href={art.link} class="artwork-anchor">
                            <img src="artwork/{art.path}" class="artwork-img">
                        </a>
                    </div>
	            {/each}
            </div>
        </div>
</div>