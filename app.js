const changepic = document.querySelector(".displayImg");
const left_img = document.querySelector(".left-img");
const right_img = document.querySelector(".right-img");
const arr = ["yellow", "red", "silver", "black"];
function switchImg(id) {
  const divborder = document.querySelector(`#${id}`);
  console.log("hello", divborder);
  if (id == "yellow") {
    divborder.style.border = "2px solid blue";
    changepic.src = "./asset/yellow.avif";
    left_img.src = "./asset/single-yellow.avif";
    right_img.src = "./asset/singlebackyellow.avif";
  } else if (id == "red") {
    divborder.style.border = "2px solid blue";
    changepic.src = "./asset/red.avif";
    left_img.src = "./asset/single-redimg.avif";
    right_img.src = "./asset/singlebackred.avif";
  } else if (id == "black") {
    divborder.style.border = "2px solid blue";
    changepic.src = "./asset/black.avif";
    left_img.src = "./asset/single-black.avif";
    right_img.src = "./asset/singlebackblack.avif";
  } else if (id == "silver") {
    divborder.style.border = "2px solid blue";
    changepic.src = "./asset/silver.avif";
    left_img.src = "./asset/single-silver.avif";
    right_img.src = "./asset/singlebacksilver.avif";
  }
  tochangeborder(id);
}

function tochangeborder(id) {
  for (let i = 0; i < arr.length; i++) {
    const divborder = document.querySelector(`#${arr[i]}`);
    if (id != arr[i]) {
      divborder.style.border = "solid lightblue 1px";
    }
  }
}
