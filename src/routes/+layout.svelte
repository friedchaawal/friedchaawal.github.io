<script>
</script>

<style>
    .container{display: flex;}
    .row{flex-direction: row;}
    .column{flex-direction: column;}

    .sidebar{
        background-color: cornflowerblue;
    }
</style>

<div class="parent container row">
    <div class="sidebar column">
asdfgheriofhiouwerh
    </div>
    <div>
        <slot />
    </div>
</div>