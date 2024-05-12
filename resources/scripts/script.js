`use strict`
const LANG = "ja";

window.addEventListener("load", async ()=>{

	const Synth = window.speechSynthesis;

	const voices = Synth.getVoices();
	console.info(voices);

	//const recognition = new SpeechRecognition();
	const recognition = new webkitSpeechRecognition();
	recognition.lang = LANG;
	//recognition.continuous = true;
	recognition.intermResult = true;

	//start, audiostart, speechstart, speechend, audioend, end

	let PrevNode = null;

	const textArea = document.querySelector("#textArea");

	recognition.addEventListener("result", (e)=>{
		recognition.stop();
		let results = e.results;
		console.info(results);

		let node = document.createElement("p");
		const text =results[0][results.length-1].transcript;

		node.innerText =  text;
		
		textArea.className = "";
		window.requestAnimationFrame(() => {
			window.requestAnimationFrame(() => {
				textArea.classList.add("prevLineAnim");
			});
		});

		textArea.insertBefore(node, PrevNode);
		PrevNode = node;

			const utter = new SpeechSynthesisUtterance();
			utter.lang = LANG;
			utter.pitch = 1.5;
			utter.text = text;
			/*
			utter.volume
			utter.voice
			utter.rate
			*/
			Synth.speak(utter);

	
	});


	recognition.addEventListener("error", ()=>{
		recognition.stop();

	});
//intermResult とisFInal

	recognition.addEventListener("end", ()=>{
		recognition.start();

	});

	recognition.start();

	recognition.addEventListener("audiostart",()=>{
		console.log("audiostart");

	});

	recognition.addEventListener("audioend",()=>{
		console.log("audioend");

	});


	recognition.addEventListener("end",()=>{
		console.log("end");

	});

	recognition.addEventListener("nomatch",()=>{
		console.log("nomatch");

	});

	recognition.addEventListener("soundend",()=>{
		console.log("soundend");

	});

	recognition.addEventListener("speechstart",()=>{
		console.log("speechstart");

	});

	recognition.addEventListener("speechend",()=>{
		console.log("speechend");

	});

	recognition.addEventListener("start",()=>{
		console.log("start");

	});


});
