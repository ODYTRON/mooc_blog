
// code to determine if the code runs in browser or in server

if (typeof window !== 'undefined') {
  console.log('You are on the browser')
} else {
  console.log('You are on the server')
}



// div changes color on click

// select the div
let changeColorAme = document.getElementById('whoami');
let changeColorMoocs = document.getElementById('moocs');

// create the handler

const changeAmeColor = () => {
   
    document.getElementById("about-me").style.backgroundColor = "black";

  };

  const changeMoocsColor = () => {
   
    document.getElementById("moocsec").style.backgroundColor = "black";

  };

  // create the listener to hear the handler

  changeColorAme.addEventListener('click', changeAmeColor);
  changeColorMoocs.addEventListener('click', changeMoocsColor);


  
  // code to toggle show-hide more text
 
  function adminToggle() {
    var x = document.getElementById("mooc-more");
    var y = document.getElementById("readmore-btn");
    
    
    if (document.getElementById("readmore-btn").innerHTML === "Read more") {
      x.classList.toggle("hide");
      document.getElementById("readmore-btn").innerHTML = "Read less";

    }
    else if (document.getElementById("readmore-btn").innerHTML === "Read less") {
      document.getElementById("readmore-btn").innerHTML = "Read more";
      x.classList.toggle("hide");
    }
  
   
  };



// show certificate image clickdown and hide click up 

 const mouseDownTcm = () => {

  document.getElementById("tcm-security").style.display = "block";

}


const mouseUpTcm = () => {
  document.getElementById("tcm-security").style.display = "none";
}

const mouseDownZse = () => {

  document.getElementById("z-security").style.display = "block";

}


const mouseUpZse = () => {
  document.getElementById("z-security").style.display = "none";
}



// code to generate a random color and asign it as transparent color on my photo
// when whoami menu is cliked

// array with all possible hex code digits
const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B","C","D","E","F"];

const firstDigit = "#";
// function to get a random digit from the hexDigits

const randomHex = () => {
  return hexDigits[Math.floor(Math.random() * 16)];
};

// function to get the first hex color
const getColor = () => {
  const newColor = [];
   newColor[0] = firstDigit;
   for (let i=1; i<7; i++) {
      newColor.push(randomHex());
   
  }
 
  return newColor;
};

// get a color from the function
var firstConv = getColor();
// convert it to string
var secondConv = firstConv.toString();
// remove commas
var thirdConv = secondConv.replace(/,/g,"");
// convert it again to string
var fourthConv = thirdConv.toString();
// convert letters to lower case
var fifthConv = fourthConv.toLowerCase();



// console.log(getColor());
// console.log(fifthConv);


// fill the array with numbers and transform them to appropriate form

let colorArray = new Array(100);
let TransformedColors = [];
for (j=0;j<colorArray.length; j++) {
  colorArray[j] = getColor();
  TransformedColors.push(colorArray[j].join(""));
};

// console.log(TransformedColors);


//select only one random color
function ColorSelector(){
  let randomCol = Math.floor(Math.random() * TransformedColors.length);
  return TransformedColors[randomCol];

}
   

let myPhoto = document.getElementById('it-support');
let whoamiBtn = document.getElementById('whoami');
let bloodyBtn = document.getElementById('remove_handler');

// change background color to last div
const photoBackground = () => {
  let capturedColor = ColorSelector();
  document.getElementById('output').innerHTML = capturedColor;
  document.getElementById("photo").style.backgroundColor = capturedColor;
  


}
//change color to div 6 when whoami pressed
whoamiBtn.addEventListener('click', photoBackground);


//function to change only one random color when remove-handler button is pressed



function ChooseOnlyOneColor(){

  let capturedColor = ColorSelector();
  document.getElementById('output').innerHTML = capturedColor;
  document.getElementById("photo").style.backgroundColor = capturedColor
  
  bloodyBtn.removeEventListener('click', ChooseOnlyOneColor);
}
  bloodyBtn.addEventListener('click', ChooseOnlyOneColor);

