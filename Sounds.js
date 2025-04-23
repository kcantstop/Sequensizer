// synth info grabbed from Tone.js website

// test button was made and given the ID playbutton
document.getElementById("C").addEventListener("click", async () => {
    await Tone.start(); //copied from tone.js allows the button to execute audio
    
    new Tone.Synth().toDestination().triggerAttackRelease("C4", "8n"); // copied from tone.js
  });

  document.getElementById("D").addEventListener("click", async () => {
    await Tone.start(); //copied from tone.js allows the button to execute audio
    
    new Tone.Synth().toDestination().triggerAttackRelease("D4", "8n"); // copied from tone.js
  });


  document.getElementById("E").addEventListener("click", async () => {
    await Tone.start(); //copied from tone.js allows the button to execute audio
    
    new Tone.Synth().toDestination().triggerAttackRelease("E4", "8n"); // copied from tone.js
  });



  document.getElementById("F").addEventListener("click", async () => {
    await Tone.start(); //copied from tone.js allows the button to execute audio
    
    new Tone.Synth().toDestination().triggerAttackRelease("F4", "8n"); // copied from tone.js
  });


  document.getElementById("G").addEventListener("click", async () => {
    await Tone.start(); //copied from tone.js allows the button to execute audio
    
    new Tone.Synth().toDestination().triggerAttackRelease("G4", "8n"); // copied from tone.js
  });

  document.getElementById("A").addEventListener("click", async () => {
    await Tone.start(); //copied from tone.js allows the button to execute audio
    
    new Tone.Synth().toDestination().triggerAttackRelease("A4", "8n"); // copied from tone.js
  });

  document.getElementById("B").addEventListener("click", async () => {
    await Tone.start(); //copied from tone.js allows the button to execute audio
    
    new Tone.Synth().toDestination().triggerAttackRelease("B4", "8n"); // copied from tone.js
  });