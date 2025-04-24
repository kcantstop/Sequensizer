// synth info grabbed from Tone.js website

// test button was made and given the ID playbutton 

// the following are white keys

document.getElementById("LC").addEventListener("click", async () => {
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

  document.getElementById("HC").addEventListener("click", async () => {
    await Tone.start(); //copied from tone.js allows the button to execute audio
    
    new Tone.Synth().toDestination().triggerAttackRelease("C5", "8n"); // copied from tone.js
  });


  // The following are black keys

  document.getElementById("C#").addEventListener("click", () => {
    
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C#4", "8n");
  });

  document.getElementById("D#").addEventListener("click", () => {
    
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D#4", "8n");
  });

  document.getElementById("F#").addEventListener("click", () => {
    
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F#4", "8n");
  });

  document.getElementById("G#").addEventListener("click", () => {
    
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G#4", "8n");
  });

  document.getElementById("A#").addEventListener("click", () => {
    
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A#4", "8n");
  });



