var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
    if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Amsterdam is cool, ' + storedName;
}
};

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image.jpg') {
      myImage.setAttribute ('src','images/amd.jpg');
    } else {
      myImage.setAttribute ('src','images/image.jpg');
    }
};

myButton.onclick = function() {
  setUserName();
};







