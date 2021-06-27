/* For modal button one */
var modalOne = document.getElementById("myModalOne");
var btnOne = document.getElementById("myBtnOne");

var spanOne = document.getElementsByClassName("closeOne")[0];

btnOne.onclick = function() {
  modalOne.style.display = "block";
}

spanOne.onclick = function() {
  modalOne.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalOne) {
    modalOne.style.display = "none";
  }
}


/* For modal button two */
var modalTwo = document.getElementById("myModalTwo");
var btnTwo = document.getElementById("myBtnTwo");

var spanTwo = document.getElementsByClassName("closeTwo")[0];

btnTwo.onclick = function() {
  modalTwo.style.display = "block";
}

spanTwo.onclick = function() {
  modalTwo.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  }
}


/*To check if the password matches on onkeyup event*/
var checkpass = function() {
  if (document.getElementById('password').value ==
    document.getElementById('confirmPass').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Recheck Password';
  }
}

var modalsignin = document.getElementById('myModalOne');
var modalsignup = document.getElementById('myModalOne');

var sp=document.getElementById("myBtnOne signup");
sp.onclick=function()
{
  spanTwo.click();
  modalsignup.style.display = "block";
  
}
