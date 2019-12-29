<script>
    import { createEventDispatcher } from 'svelte';
    import uuid from 'uuid';

    const dispatch = createEventDispatcher();
    
    const createNewPlayer = () => {
        return {
            id: uuid(),
            name: "",
            points: 0,
            showControls: false
        }
    };

    let player = createNewPlayer();

    const onSubmit = e => {
        e.preventDefault();
        dispatch('addplayer', player);
        player = createNewPlayer();
    }
</script>

<form class="grid-3" on:submit={onSubmit}>
    <input type="text" placeholder="Player Name" bind:value={player.name}>
    <input type="text" placeholder="Player Points" bind:value={player.points}>
    <input type="submit" class="btn btn-primary" value="Add Player">
</form>