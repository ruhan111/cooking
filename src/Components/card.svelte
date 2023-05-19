<script>
    export let title;
    export let area;
    export let imageUrl;
    export let tags;
</script>

<div class="card">
    {#if imageUrl}
        <img src={imageUrl} alt={title} />
    {/if}
    <div class="card-content">
        <h3>{title}</h3>
        <p class="card-tags">{tags}</p>
        <p class="area">{area}</p>
        <button class="card-button">See recipe</button>
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 1rem;
        margin-bottom: 1rem;
        width: 250px;
        height: 450px;
    }
    .area {
        font-size: small;
        height: 40px;
        line-height: 1.4;
        overflow: hidden;
        word-wrap: break-word;
    }

    .card img {
        object-fit: cover;
        width: 100%;
        height: auto;
        max-height: 50%;
    }

    .card-content h3 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        height: 70px; 
        overflow: hidden; 
        font-size: medium;
    }
    .card-tags {
        font-size: small;
        height: 40px;
        line-height: 1.4;
        overflow: hidden;
        word-wrap: break-word;
    }
    .card-button {
        display: block;
        margin-top: auto;
        border-radius: 4px;
        background-color: #3366cc;
        color: #fff;
        font-weight: bold;
        text-align: center;
        padding: 0.5rem;
        width: 100%;
    }
</style>
