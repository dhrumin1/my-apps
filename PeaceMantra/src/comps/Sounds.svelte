
<script>
	import { Sound, current } from './../configs/Store';
	import { Settings } from './../configs/Settings';
    
    function onSelectSound(s){
        Sound.set(s);
    }
    
</script>

<ul>
	{#each Settings.SoundTypes as Sound, i}
		<li on:click|preventDefault={() => onSelectSound(Sound)}>
			{i + 1}: {Sound.Name}
		</li>
	{/each}
</ul>