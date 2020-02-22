<script>
    import { Sound, CountDown, StartPauseStop } from '../configs/store';
    let mySound, myCountDown;
	const unsubscribeSound = Sound.subscribe(value => {
		mySound = value; 
	});
    const unsubscribeCount = CountDown.subscribe(value => {
		myCountDown = value;
	});
    const unsubscribeStart = StartPauseStop.subscribe(value => {
		//takeAction(value);
        console.log(value);
	});
    
    function takeAction(action){
        if(action == 'start'){
            console.log(start);
        }
    }
</script>
<div>
    {mySound.Name}<br/>
    {#if mySound.Audio}
    <audio src={mySound.Audio} controls />
    {/if}
    {myCountDown}
</div>