<!-- https://svelte.dev/examples#dom-event-forwarding -->
<style>
	button {
		font-family: 'Comic Sans MS', cursive;
		font-size: 1em;
		padding: 0.5em 1em;
		color: royalblue;
		background: gold;
		border-radius: 1em;
		box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        
	}
    button.active{
        background: red;
        color: white;
    }
</style>
<script>
    export let value;
    export let selected;  
</script>   
<button class={value==selected?'active':''} on:click|preventDefault  >
	{value}
</button>