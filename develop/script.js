// The current day presented in the header

let today = moment();

var headerDate = $('#currentDay').text(today.format('dddd, LL'));



// Text Area Variables

var inputText = $('textarea[name="input-box"]');
var inputText2 = $('textarea[name="input-box2"]');
var inputText3 = $('textarea[name="input-box3"]');
var inputText4 = $('textarea[name="input-box4"]');
var inputText5 = $('textarea[name="input-box5"]');
var inputText6 = $('textarea[name="input-box6"]');
var inputText7 = $('textarea[name="input-box7"]');
var inputText8 = $('textarea[name="input-box8"]');
var inputText9 = $('textarea[name="input-box9"]');




// Save Buttons

var saveButton = $('#save1');
var saveButton2 = $('#save2');
var saveButton3 = $('#save3');
var saveButton4 = $('#save4');
var saveButton5 = $('#save5');
var saveButton6 = $('#save6');
var saveButton7 = $('#save7');
var saveButton8 = $('#save8');
var saveButton9 = $('#save9');




// Logging & saving text to Textarea

function getInput() {
        
        var inputField = {
            inputText: inputText.val(),
            inputText2: inputText2.val(),
            inputText3: inputText3.val(),
            inputText4: inputText4.val(),
            inputText5: inputText5.val(),
            inputText6: inputText6.val(),
            inputText7: inputText7.val(),
            inputText8: inputText8.val(),
            inputText9: inputText9.val(),
        };
        
        localStorage.setItem('text', JSON.stringify(inputField))

};



function saveInput() {

    var inputValue = JSON.parse(localStorage.getItem('text'));
    
    if(inputValue !== null) {
        inputText.text(inputValue.inputText);
        inputText2.text(inputValue.inputText2);
    }
    
    else {
        return;
    }
};



function saveInput3() {
 
    if(inputValue !== null) {
        inputText3.text(inputValue.inputText3);
    }
    
    else {
        return;
    }
};

function saveInput4() {
 
    if(inputValue !== null) {
        inputText4.text(inputValue.inputText4);
    }
    
    else {
        return;
    }
};

function saveInput5() {
 
    if(inputValue !== null) {
        inputText5.text(inputValue.inputText5);
    }
    
    else {
        return;
    }
};

function saveInput6() {
 
    if(inputValue !== null) {
        inputText6.text(inputValue.inputText6);
    }
    
    else {
        return;
    }
};

function saveInput7() {
 
    if(inputValue !== null) {
        inputText7.text(inputValue.inputText7);
    }
    
    else {
        return;
    }
};

function saveInput8() {
 
    if(inputValue !== null) {
        inputText8.text(inputValue.inputText8);
    }
    
    else {
        return;
    }
};

function saveInput9() {
 
    if(inputValue !== null) {
        inputText9.text(inputValue.inputText9);
    }
    
    else {
        return;
    }
};


saveButton.on('click', function(event) {
    event.preventDefault();
    window.alert('Note was Saved!');
    saveInput();
    getInput();
});

// saveButton2.on('click', function(event) {
//     event.preventDefault();
//     window.alert('Note was Saved!');
//     saveInput();
//     getInput();
// });

saveButton3.on('click', function(event) {
    event.preventDefault();
    window.alert('Note was Saved!');
    saveInput3();
    getInput();
});

saveButton4.on('click', function(event) {
    event.preventDefault();
    window.alert('Note was Saved!');
    saveInput4();
    getInput();
});

saveButton5.on('click', function(event) {
    event.preventDefault();
    window.alert('Note was Saved!');
    saveInput5();
    getInput();
});

saveButton6.on('click', function(event) {
    event.preventDefault();
    window.alert('Note was Saved!');
    saveInput6();
    getInput();
});

saveButton7.on('click', function(event) {
    event.preventDefault();
    window.alert('Note was Saved!');
    saveInput7();
    getInput();
});

saveButton8.on('click', function(event) {
    event.preventDefault();
    window.alert('Note was Saved!');
    saveInput8();
    getInput();
});

saveButton9.on('click', function(event) {
    event.preventDefault();
    window.alert('Note was Saved!');
    saveInput9();
    getInput();
});



























// Function maintain launches when the website loads 

function maintain() {
    // When the function maintain runs so will the code insidde saveInput 
    saveInput();
}

maintain();

