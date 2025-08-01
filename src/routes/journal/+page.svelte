<script>
    export let data;
    let entries = data.entries;
</script>

<style>
    h1 {
        font-size: 4vmin;
    }
    p {
        font-size: 1.75vmin;
        margin: 0;
    }
    #Journal {
        background-color: var(--color-base);
        flex: 1;
    }
</style>
<div id="Journal">
    <h1>Journal</h1>
    <div class="timeline">
        {#if entries.length}
            {#each entries as entry}
                <div class="entry">
                    <div class="meta">{entry.date} | {entry.time}</div>
                    {#if entry.heading}
                        <div class="heading">{entry.heading}</div>
                    {/if}
                    <p>{entry.content}</p>
                </div>
            {/each}
        {/if}
    </div>
</div>