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

var saveButton = $('.saveBtn');


// Unique Save Button IDs

var save1 = $('#save1');


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

    localStorage.setItem('text', JSON.stringify(inputField));

}



function saveInput() {


    var inputValue = JSON.parse(localStorage.getItem('text'));

    if (inputValue !== null) {
        inputText.text(inputValue.inputText);
        inputText2.text(inputValue.inputText2);
        inputText3.text(inputValue.inputText3);
        inputText4.text(inputValue.inputText4);
        inputText5.text(inputValue.inputText5);
        inputText6.text(inputValue.inputText6);
        inputText7.text(inputValue.inputText7);
        inputText8.text(inputValue.inputText8);
        inputText9.text(inputValue.inputText9);
    }

    else {
        return;
    }
};




saveButton.on('click', function (event) {

    event.preventDefault();
    swal("Success", "Note was Saved!", "success");
    console.log(event.target)
    saveInput();
    getInput();

});



// Function maintain launches when the website loads 

function maintain() {
    // When the function maintain runs so will the code insidde saveInput 
    saveInput();
}

maintain();




// Time Block color coded to indicate the past, present, and future 


var past = $('.past');
var present = $('.present');
var future = $('.future');

var textBox = $('.input-box');

// The current hour 

var presentHour = moment().format('H') //'H' is what displays time as military time as opposed to 'h' where is uses standard time //






// Past, Present, and Future Function(s)

function pastTime() {
    for(var pre = presentHour -1; pre >= 9; pre-- ) {
        if(pre >= 9 && pre <= 17) {
            document.getElementById(pre).classList.add('past');
        }
    }
}


function currentTime() {
    if(presentHour >= 9 && presentHour <= 17) {
        document.getElementById(presentHour).classList.add('present');
    }
}

function futureTime() {
    for(var fut = +presentHour + 1; fut <= 17; fut++) {
        if(fut <= 17) {
            document.getElementById(fut).classList.add('future');
        }
    }
}



pastTime();
currentTime();
futureTime();





