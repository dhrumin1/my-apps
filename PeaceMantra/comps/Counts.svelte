<script>
    import { CountDown } from '../configs/store';
	import {Counts} from '../configs/settings.svelte';
    import StartButton from './StartButton.svelte';
    import UnitButton from './UnitButton.svelte';
    let selectedCount = Counts[0];
    function selectCount(c){
        selectedCount = c;
        CountDown.update(old => c);
    }
    //set Default value
    selectCount(selectedCount);
</script>
<h3>Select Count</h3>
{#each Counts as count}
<UnitButton value={count} selected={selectedCount} on:click={()=>selectCount(count)}/>
{/each}
<!-- class={selected == min?'selected':''} on:click|preventDefault = {() => selectMin(min)}  -->

<StartButton />