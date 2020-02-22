
<script>
    import { Sound, current } from '../configs/store';
	import {settings} from '../configs/settings.svelte';
    
    function onSelectSound(s){
        Sound.set(s);
    }
    
</script>

<ul>
	{#each settings.SoundTypes as Sound, i}
		<li on:click|preventDefault={() => onSelectSound(Sound)}>
			{i + 1}: {Sound.Name}
		</li>
	{/each}
</ul>