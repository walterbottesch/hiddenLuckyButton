var controller = {
	// this function creates a number of buttons, assign a "winner" class to one of them,  and append them to "body" element
    generateButtons: function(numberOfButtons) {
		// this statement save a ramdom number used later for setting a "lucky" button
	var idWinner = Math.floor(Math.random() * numberOfButtons);

        for(var i = 0; i < numberOfButtons; i++) {
            var btn = document.createElement("BUTTON");
           	var t = document.createTextNode("CLICK ME");
        
            btn.setAttribute("style","color:red;font-size:23px");
	   		btn.setAttribute("onclick", controller.showAnswer);
		
            if(idWinner == i) {
				btn.setAttribute("class", "lucky");
	    	} 
           	btn.appendChild(t);
            document.body.appendChild(btn);
			btn.addEventListener("click", this.showAnswer)
			
        }  
    },
	showAnswer :function(evt) {
		var btnCl = evt.target;
		var btnClass = btnCl.className;
		if(btnClass === "lucky") {
			alert("Winner!");
		}
	}
};

// event handlers

function handleApplyButton() {
	var numOfButtonsInput = document.getElementById("numOfButtons");
	var numOfButtons = numOfButtonsInput.value;
	controller.generateButtons(numOfButtons);
	numOfButtonsInput.value = "";
}

function handleKeyPress(e) {
	var applyButton = document.getElementById("applyButton");
	e = e || window.event;

	if (e.keyCode === 13) {
		applyButton.click();
		return false;
	}
}
// init - called when the page has completed loading

window.onload = init;

function init() {
	// Apply button onclick handler
	var applyButton = document.getElementById("applyButton");
	applyButton.onclick = handleApplyButton;

	// handle "return" key press
	var numOfButtons = document.getElementById("numOfButtons");
	numOfButtons.onkeydown = handleKeyPress;	
}