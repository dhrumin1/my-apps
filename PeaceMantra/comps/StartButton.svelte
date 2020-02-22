<!-- https://svelte.dev/examples#dom-event-forwarding -->
<style>
	button {
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
		padding: 0.5em 1em;
		color: royalblue;
		background: gold;
		border-radius: 1em;
		box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
	}
</style>
<script>
	import { StartPauseStop } from '../configs/store';
	function start(){
		StartPauseStop.update(old => "start");
    }
	function stop(){
		StartPauseStop.update(old => "stop");
    }
	function pause(){
		StartPauseStop.update(old => "pause");
    }
</script>
<button on:click={start}>
	Start
</button>