<script>
	import Navbar from './Navbar.svelte';
	import Player from './Player.svelte';
	import AddPlayer from './AddPlayer.svelte';

	let players = [
		{
			id: 1,
			name: 'John Doe',
			points: 53,
			showControls: false
		},
		{	
			id: 2,
			name: 'Sam Smith',
			points: 45,
			showControls: false
		},
		{	
			id: 3,
			name: 'Sara Wilson',
			points: 34,
			showControls: false
		},
	];

	const addPlayer = e => {
		const newPlayer = e.detail;
		players = [...players, newPlayer];
	};

	const removePlayer = e => {
		players = players.filter(player => player.id !== e.detail);
	}

</script>

<Navbar />
<div class="container">
	<AddPlayer on:addplayer={addPlayer} />
	{#if players.length}
		{#each players as player, i (player.id)}
			<Player player={player} on:removeplayer={removePlayer} />
		{/each}
	{:else}
		<p>No Players</p>
	{/if}
</div>