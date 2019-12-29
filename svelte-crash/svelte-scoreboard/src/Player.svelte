<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let player;
    let { id, name, points, showControls} = player;

	const addPoint = e => points += 1;
	const removePoint = e => points -=1;

    const toggleControls = e => showControls = !showControls;
    const onDelete = e => dispatch('removeplayer', id);

</script>

<div class="card">
    <h1>
        {name}
        <button class="btn btn-sm" on:click={toggleControls}>
            {#if showControls}-{:else}+{/if}
        </button>
        <button class="btn btn-sm btn-danger" on:click={onDelete}>
            x
        </button>
    </h1>
    <h3>Points: {points}</h3>
    {#if showControls}
        <button class="btn" on:click={addPoint}>+1</button>
        <button class="btn btn-dark" on:click={removePoint}>-1</button>
        <input type="number" bind:value={points} />
    {/if}
</div>

<style>
	h1 {
		color: #204f6e;
	}

	h3 {
		margin-bottom: 10px;
	}
</style>