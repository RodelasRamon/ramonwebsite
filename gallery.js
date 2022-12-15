const imgArr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "11",
    "b",
    "c",
    "f",
    "k1",
    "k2",
    "k3",
    "m1",
    "k4",
    "newton14",
    "m3",
    "p",
    "m6",
    "mask",
    "m2",
  ];
  


const carousel = document.querySelector('.carousel-inner');

const appendImg = (imgUrl) => {
    const div = document.createElement("div");
    div.classList.add("carousel-item");
    const image = document.createElement("img");
    image.src = `assets/${imgUrl}.jpg`;
    image.classList.add("d-block");
    image.classList.add("w-100");
    div.appendChild(image);
    carousel.appendChild(div);
  };
  
  for (let url of imgArr) {
    appendImg(url);
  }
  