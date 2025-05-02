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


// Piano event listeners this is based on the original get element but uses a for each function based on the key map 
Object.entries(keyMap).forEach(([id, note]) => {
  document.getElementById(id).addEventListener('click', async () => {
      await Tone.start();
      selectedNote = note;
      synth.triggerAttackRelease(note, '8n');
    });
})
