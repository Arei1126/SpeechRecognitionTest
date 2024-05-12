`use strict`
window.addEventListener("load", async ()=>{
	//const recognition = new SpeechRecognition();
	const recognition = new webkitSpeechRecognition();
	recognition.lang = "ja";
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
		node.innerText =  results[0][results.length-1].transcript


		
		textArea.className = "";
		window.requestAnimationFrame(() => {
			window.requestAnimationFrame(() => {
				textArea.classList.add("prevLineAnim");
			});
		});
		




		textArea.insertBefore(node, PrevNode);
		PrevNode = node;
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
