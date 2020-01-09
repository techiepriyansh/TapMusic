let synth;
let musicalKey;
let rootNote;
let tapBtns = [];
let changeRootNoteBtn;
const screenDim = 600;
const padding = 20;
const bgColor = 205;

function setup()
{
	createCanvas(window.innerWidth, window.innerHeight);
	background(bgColor);
	textAlign(CENTER);
	rectMode(CENTER);

	createTapButtons();

	changeRootNote();

	synth = new Tone.Synth().toMaster();


}


function createTapButtons()
{


	for(let i = 0; i < 8; i++)
	{
		let y = (floor(i/3)+1) * padding + ((height - 4*padding)/6) * (2*floor(i/3) + 1) ;
		let x = ((i%3)+1) * padding + ((width - 4*padding)/6) * (2*(i%3) + 1) ;

		tapBtn = new TapButton(x, y, (width - 4*padding)/3,(height - 4*padding)/3,i+1);
		tapBtns.push(tapBtn);
	}

	let i = 8;
	let y = (floor(i/3)+1) * padding + ((height - 4*padding)/6) * (2*floor(i/3) + 1) ;
	let x = ((i%3)+1) * padding + ((width - 4*padding)/6) * (2*(i%3) + 1) ;
	changeRootNoteBtn = new ChangeRootNoteButton(x, y, (width - 4*padding)/3,(height - 4*padding)/3);


}

function changeRootNote()
{
	rootNote = prompt("Please enter the root note of the major key in which you want to play");
	musicalKey = getMajorKey(rootNote);
}

//-------------------------------------
function draw()
{	
	background(bgColor);
	
	for(let tapBtn of tapBtns)
	{
		tapBtn.update();
	}

	changeRootNoteBtn.update()

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

	if(changeRootNoteBtn.isMouseOverMe())
	{
		changeRootNote();
	}
}


function mouseReleased()
{
	synth.triggerRelease();
}

function touchStarted()
{
	for(tapBtn of tapBtns)
	{
		if(tapBtn.isTouched())
		{
			let keyNum = tapBtn.allotedKey;
			let noteFreq = midiToFreq(musicalKey[keyNum]);
			synth.triggerAttack(noteFreq);
			break;
		}
	}

	if(changeRootNoteBtn.isTouched())
	{
		changeRootNote();
	}
}

function touchEnded()
{
	synth.triggerRelease();
}
