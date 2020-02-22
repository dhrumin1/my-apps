<h1>Peace Mantra</h1>

<script>
	import { Sound } from './configs/store';
	import Sounds from './comps/Sounds.svelte';
	import Unit from './comps/Unit.svelte';
	import Play from './comps/Play.svelte';
	let mySound;
	
	const unsubscribe = Sound.subscribe(value => {
		mySound = value;
	});
	
</script>

<Sounds />
{#if mySound.Name}
<h1>{mySound.Name}</h1>
{/if}
<Unit />
<Play />