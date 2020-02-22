<h1>{AppName}</h1>

<script>
	export let AppName;
	import { Sound } from './configs/Store';
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