import "./App.css";
import Content from "./Content";
import Top from "./Top";
import Bottom from "./Bottom";
import { useState, useEffect } from "react";

function App() {
  let url = "https://amiiboapi.com/api/amiibo/?character=mario";
  let marioAlbum = document.querySelector(".mario-album");
  let leftButton = document.querySelector(".moveLeft");
  let rightButton = document.querySelector(".moveRight");

  const [mario, setMario] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((mario) => {
        setMario(mario);
      });
  }, []);

  if (mario) {
    for (let i = 0; i < mario.amiibo.length; i++) {
      console.log(mario.amiibo[i].image);
      let htmlTemplate = `
          <li class="gallery__item js-gallery-item" style="background-image: url('${mario.amiibo[i].image}')">
          </li>
        `;
      marioAlbum.insertAdjacentHTML("beforeend", htmlTemplate);

      let currentSlide = 0;
      let slideWidth = 750;
      let delta = slideWidth;

      let transitionSlidePlus = () => {
        let jsGallery = document.querySelector(".js-gallery");
        if (currentSlide < 15) {
          currentSlide++;
          jsGallery.style.transform = `translateX(-${delta * currentSlide}px)`;
        } else {
          jsGallery.style.transform = `translateX(-${0})`;
          currentSlide = 1;
        }
      };

      let transitionSlideMinus = () => {
        let jsGallery = document.querySelector(".js-gallery");
        if (currentSlide > 0) {
          currentSlide--;
          jsGallery.style.transform = `translateX(-${delta * currentSlide}px)`;
        } else {
          jsGallery.style.transform = `translateX(-${0})`;
          currentSlide = 1;
        }
      };

      let nextButton = document.querySelector(".next");
      let backButton = document.querySelector(".back");

      nextButton.addEventListener("click", transitionSlidePlus);
      backButton.addEventListener("click", transitionSlideMinus);
    }
  }

  // let videoHTML = `
  //   <video width="400" controls>
  //     <source src="./MARIO_GIF.mp4" type="video/mp4">
  //   </video>
  // `;

  // marioAlbum.insertAdjacentHTML("beforeend", videoHTML);

  return (
    <div className="body">
      <Top />

      <Content />

      <Bottom />
    </div>
  );
}

export default App;
