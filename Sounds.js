// synth.js
document.getElementById("playBtn").addEventListener("click", async () => {
    await Tone.start();
    
    new Tone.Synth().toDestination().triggerAttackRelease("C4", "8n");
  });