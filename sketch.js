let synth;
let musicalKey;
let tapBtns = [];
const screenDim = 600;
const padding = 20;

function setup()
{
	createCanvas(screenDim, screenDim);
	background(205);
	textAlign(CENTER);
	rectMode(CENTER);

	createTapButtons();

	let changeRootNoteBtn = createButton("Change Root Note");
	changeRootNoteBtn.position(0,height + 20);
	changeRootNoteBtn.mousePressed(changeRootNote);

	changeRootNote();

	synth = new Tone.Synth().toMaster();


}

function createTapButtons()
{
	for(i = 0; i < 8; i++)
	{
		let y = (floor(i/3)+1) * padding + ((screenDim - 4*padding)/6) * (2*floor(i/3) + 1) ;
		let x = ((i%3)+1) * padding + ((screenDim - 4*padding)/6) * (2*(i%3) + 1) ;

		tapBtn = new TapButton(x, y, (screenDim - 4*padding)/3,i+1);
		tapBtns.push(tapBtn);
	}
}

function changeRootNote()
{
	let rootNote = prompt("Please enter the root note of the major key in which you want to play");
	musicalKey = getMajorKey(rootNote);
}

//-------------------------------------
function draw()
{	
	background(205);
	
	for(let tapBtn of tapBtns)
	{
		tapBtn.update();
	}

}


function keyPressed()
{	
	let keyNum = Number.parseInt(key);
	let noteFreq = midiToFreq(musicalKey[keyNum]);
	synth.triggerAttack(noteFreq);
}

function keyReleased()
{	
	synth.triggerRelease();
}

function mousePressed()
{
	for(tapBtn of tapBtns)
	{
		if(tapBtn.isMouseOverMe())
		{
			let keyNum = tapBtn.allotedKey;
			let noteFreq = midiToFreq(musicalKey[keyNum]);
			synth.triggerAttack(noteFreq);
			break;
		}
	}
}


function mouseReleased()
{
	synth.triggerRelease();
}

