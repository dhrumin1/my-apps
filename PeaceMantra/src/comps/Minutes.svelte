<script>
    import { CountDown } from './../configs/Store';
	import { Minutes } from './../configs/Settings';
    import StartButton from './StartButton.svelte';
    import UnitButton from './UnitButton.svelte';
    let selectedMin = Minutes[0];
    function selectMin(c){
        selectedMin = c;
        CountDown.update(old => c);
    }
    //set Default value
    selectMin(selectedMin);
</script>
<h3>Select Minutes</h3>
{#each Minutes as min}
<UnitButton value={min} selected={selectedMin} on:click={()=>selectMin(min)}/>
{/each}
<!-- class={selected == min?'selected':''} on:click|preventDefault = {() => selectMin(min)}  -->

<StartButton />