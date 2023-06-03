let btn = document.getElementById('btn')
window.onscroll = function () {
  if (scrollY >= 400) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}
btn.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  })
}

function showMore() {
  var content = document.getElementById("content");
  if (content.style.display === "block") {
    content.style.display = "none";
    document.getElementById("show-more-btn").innerHTML = "Show Less";
  } else {
    content.style.display = "block";
    document.getElementById("show-more-btn").innerHTML = "Show More";
  }
}

document.getElementById("show-more-btn").addEventListener("click", showMore);