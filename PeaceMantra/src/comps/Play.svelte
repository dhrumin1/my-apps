<script>
  import { Sound, CountDown, StartPauseStop } from "./../configs/Store";
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

  function takeAction(action) {
    let audioElm = document.getElementById("audio");
    if (audioElm) {
      switch (action) {
        case "start":
        case "resume":
          audioElm.play();
          break;
        case "stop":
          audioElm.pause();
          audioElm.currentTime = 0;
          break;
        case "pause":
          audioElm.pause();
          break;
        default:
          break;
      }
    }
  }
</script>

<div>
  {mySound.Name}
  <br />
  {#if mySound.Audio}
    <audio id="audio" src={mySound.Audio} controls>

    </audio>
  {/if}
  {myCountDown}
</div>
