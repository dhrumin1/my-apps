
<script>
	import { Sound } from '../configs/store';
	import Minutes from './Minutes.svelte';
	import Counts from './Counts.svelte';
	let Unit;
	
	const unsubscribe = Sound.subscribe(value => {
		Unit = value.Unit;
	});
	
</script>

{#if Unit=="M"}
	<Minutes />
{/if}

{#if Unit=="C"}
	<Counts />
{/if}