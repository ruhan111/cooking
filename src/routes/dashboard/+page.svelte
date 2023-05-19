<script>
    import { food } from "../../stores/foodstore";
    import Card from "../../Components/card.svelte";

    let meals = [];

    $: {
        if ($food && $food.length > 0) {
            meals = $food;
        } else {
            meals = [];
        }
        console.log(meals);
    }
</script>

<div class="container">
    {#if meals.length > 0}
        {#each meals as meal}
            <Card
                title={meal.mealName}
                imageUrl={meal.mealImg}
                tags={meal.tags}
                area={meal.area}
            />
        {/each}
    {:else}
        <p>No meals available</p>
    {/if}
</div>

<style>
    .container {
        padding: 70px;
        display: flex;
        flex-wrap: wrap;
        gap: 80px;
        align-items: center;
        justify-content: center;
        
    }
</style>
