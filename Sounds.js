// synth info grabbed from Tone.js website

// Piano key mapping this reduces all the extra code I had and simplfies the call back when I implement the Sequencer
const keyMap = {
  'LC': 'C4',
  'D': 'D4',
  'E': 'E4',
  'F': 'F4',
  'G': 'G4',
  'A': 'A4',
  'B': 'B4',
  'HC': 'C5',
  'C#': 'C#4',
  'D#': 'D#4',
  'F#': 'F#4',
  'G#': 'G#4',
  'A#': 'A#4'
};

// Tone.js Setup
const synth = new Tone.Synth().toDestination();
let selectedNote = 'C4';


// Piano event listeners this is based on the original get element but uses a for each function based on the key map,Object.entries is making an array from the keymap that the function cycles through
Object.entries(keyMap).forEach(([id, note]) => {
  document.getElementById(id).addEventListener('click', async () => {
      await Tone.start();
      selectedNote = note;
      synth.triggerAttackRelease(note, '8n');
    });
})

//This function created the sequencer visually 
function createSequencer() {
  const sequencer = document.getElementById('sequencer');
  
  //Iused a basic for loop to creat a <div sequencer-step div> 8 times this loop allows me to change how may steps I want quicker
  for (let i = 0; i < 8; i++) {
    const step = document.createElement('div'); //creates each <div>
    step.className = 'sequencer-step';   //assigns the class 
    sequencer.appendChild(step);     //adds the element "<div> class=equencer-step <div>" to the sequencer container 8 times
  }
}

createSequencer();