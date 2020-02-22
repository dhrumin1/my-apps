<script>
    import { Sound, CountDown, StartPauseStop } from './../configs/Store';
    let mySound, myCountDown;
	const unsubscribeSound = Sound.subscribe(value => {
		mySound = value; 
	});
    const unsubscribeCount = CountDown.subscribe(value => {
		myCountDown = value;
	});
    const unsubscribeStart = StartPauseStop.subscribe(value => {
		takeAction(value);
        //console.log(value);
	});
    
    function takeAction(action){
        let audioElm = document.getElementById("audio");
        if(audioElm){

        switch (action) {
            case 'start','resume':
                audioElm.play();
                break;
        case 'stop':
                audioElm.stop();
                break;
        case 'pause':
                audioElm.pause();
                break;
            default:
                break;
        }
        }
    }
</script>
<div>
    {mySound.Name}<br/>
    {#if mySound.Audio}
    <audio id="audio" controls>
        <source src={mySound.Audio} />
    </audio>
    {/if}
    {myCountDown}
</div>