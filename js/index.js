/* For modal Create Post */
var modalCreatePost = document.getElementById("myModalpost");
var btnCreatePost = document.getElementById("postBtnTwo");

var spanCreatePost = document.getElementsByClassName("closepost")[0];

btnCreatePost.onclick = function() {
  modalCreatePost.style.display = "block";
}

spanCreatePost.onclick = function() {
  modalCreatePost.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalCreatePost) {
    modalCreatePost.style.display = "none";
  }
}

function clearcontentpost(){
 document.getElementById("myPostForm").reset(); 
}