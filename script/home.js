let box1 = document.getElementById("slide1");
  let box2 = document.getElementById("slide2");
  let box3 = document.getElementById("slide3");

  let images1 = [
    "https://images.bewakoof.com/uploads/grid/app/Hero-banner-Winterwear-men-1632396699.png",
    "https://images.bewakoof.com/uploads/grid/app/Hero-Banner-October-COTM-Killer-Brown-Non-Tribe-1632812125.png",
    "https://images.bewakoof.com/uploads/grid/app/PopCulture-Bewakoof-Homepage-HeroBannner-01-1632929375.jpg",
  ];
  let images2 = [
    "https://images.bewakoof.com/uploads/grid/app/bewakoof-plus-size-men-hero-banner-1629382694.jpg",
    "https://images.bewakoof.com/uploads/grid/app/Anime-Bewakoof-Homepage-HeroBanner-Men-Final-1632291395.jpg",
    "https://images.bewakoof.com/uploads/grid/app/Hero-Banner-Traditional-Men-1632728390.jpg",
  ];
  let images3 = [
    "https://images.bewakoof.com/uploads/grid/app/Hero-Banner-Tshirt-Men-1624969383-1632122247.jpg",
    "https://images.bewakoof.com/uploads/grid/app/Hero-Banner-Good-Jeans-Men-2-1631894416.jpg",
    "https://images.bewakoof.com/uploads/grid/app/Anime-Bewakoof-Homepage-HeroBanner-Men-Final-1632291395.jpg",
  ];
  function startSlideshow1() {
    let counter = 0;

    let img = document.createElement("img");
    img.src = images1[0];

    box1.append(img);
    let interval = setInterval(function () {
      box1.innerHTML = null;

      if (counter === images1.length) {
        counter = 0;
      }

      let img = document.createElement("img");
      img.src = images1[counter];

      box1.append(img);
      counter++;
    }, 2500);
  }
  startSlideshow1();
  function startSlideshow3() {
    let counter = 0;

    let img = document.createElement("img");
    img.src = images3[0];

    box3.append(img);
    let interval = setInterval(function () {
      box3.innerHTML = null;

      if (counter === images3.length) {
        counter = 0;
      }

      let img = document.createElement("img");
      img.src = images3[counter];

      box3.append(img);
      counter++;
    }, 2500);
  }
  startSlideshow3();
  function startSlideshow2() {
    let counter = 0;

    let img = document.createElement("img");
    img.src = images2[0];

    box2.append(img);
    let interval = setInterval(function () {
      box2.innerHTML = null;

      if (counter === images2.length) {
        counter = 0;
      }

      let img = document.createElement("img");
      img.src = images2[counter];

      box2.append(img);
      counter++;
    }, 2500);
  }
  startSlideshow2();