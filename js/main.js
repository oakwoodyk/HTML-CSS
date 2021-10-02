const messege = document.getElementById("chat");
messege.addEventListener("click", function () {
  alert("わーいわーい！")
})


let img;
function showdown() {
  img = document.getElementsByClassName("pic");
  img[0].src = "img/down.png";
};

function showrun() {
  img = document.getElementsByClassName("pic");
  img[0].src = "img/run.png";
};
function showbaah() {
  img = document.getElementsByClassName("pic");
  img[0].src = "img/baba.png";
};

function showchange() {
  img = document.getElementsByClassName("pic");
  img[0].src = "img/change.png";
};

function showback() {
  img = document.getElementsByClassName("pic");
  img[0].src = "img/top.png";
};


