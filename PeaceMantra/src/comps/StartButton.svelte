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
	import { StartPauseStop } from './../configs/Store';
	function start(){
		StartPauseStop.update(old => "start");
    }
	function stop(){
		StartPauseStop.update(old => "stop");
    }
	function pause(){
		StartPauseStop.update(old => "pause");
	}
	function resume(){
		StartPauseStop.update(old => "resume");
	}
	let status;
	const unsubscribe = StartPauseStop.subscribe(value => {
		status = value;
	});
</script>
{#if status=='stop' }
	<button on:click={start}>
		Start
	</button>
{/if}
{#if status=='start' || status =='resume'}
	<button on:click={pause}>
		Pause
	</button>
	<button on:click={stop}>
		Stop
	</button>
{/if}
{#if status=='pause' }
	<button on:click={resume}>
		resume
	</button>
	<button on:click={stop}>
		Stop
	</button>
{/if}