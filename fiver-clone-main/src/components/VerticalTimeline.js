'use client'
import React, { useEffect } from "react";
import "./style.css";
import Robot from "./Robot";
import  InfiniteMovingCardsDemo  from "./InfiniteMovingCardsDemo";
import { StickyScrollRevealDemo } from "./StickyScrollRevealDemo";


const VerticalTimeline = () => {
  const hideBlocks = () => {
    const blocks = document.querySelectorAll(".cd-timeline__block");
    const images = document.querySelectorAll(".cd-timeline__img");
    const contents = document.querySelectorAll(".cd-timeline__content");
    const offset = 0.8;

    blocks.forEach((block, index) => {
      if (block.getBoundingClientRect().top > window.innerHeight * offset) {
        images[index].classList.add("cd-timeline__img--hidden");
        contents[index].classList.add("cd-timeline__content--hidden");
      }
    });
  };

  const showBlocks = () => {
    const blocks = document.querySelectorAll(".cd-timeline__block");
    const images = document.querySelectorAll(".cd-timeline__img");
    const contents = document.querySelectorAll(".cd-timeline__content");
    const offset = 0.8;

    blocks.forEach((block, index) => {
      if (
        contents[index].classList.contains("cd-timeline__content--hidden") &&
        block.getBoundingClientRect().top <= window.innerHeight * offset
      ) {
        images[index].classList.add("cd-timeline__img--bounce-in");
        contents[index].classList.add("cd-timeline__content--bounce-in");
        images[index].classList.remove("cd-timeline__img--hidden");
        contents[index].classList.remove("cd-timeline__content--hidden");
      }
    });
  };

  useEffect(() => {
    hideBlocks();
    const handleScroll = () => {
      showBlocks();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="cd-timeline js-cd-timeline">
      <div className="container max-width-lg cd-timeline__container">

        <div className="cd-timeline__block">
          <div className="cd-timeline__img cd-timeline__img--picture">
            <img src="assets/img/cd-icon-picture.svg" alt="Picture" />
          </div>
          <div className="cd-timeline__content text-component">
            <h2>Title of section 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              optio, dolorum provident rerum aut hic quasi placeat iure tempora
              laudantium ipsa ad debitis unde?
            </p>
            <div className="flex justify-between items-center">
              <span className="cd-timeline__date">Jan 14</span>
              <a href="#0" className="btn btn--subtle">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="cd-timeline__block">
          <div className="cd-timeline__img cd-timeline__img--picture">
            <img src="assets/img/cd-icon-picture.svg" alt="Picture" />
          </div>
          <div className="cd-timeline__content text-component">
            <h2>Title of section 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              optio, dolorum provident rerum aut hic quasi placeat iure tempora
              laudantium ipsa ad debitis unde?
            </p>
            <div className="flex justify-between items-center">
              <span className="cd-timeline__date">Jan 14</span>
              <a href="#0" className="btn btn--subtle">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="cd-timeline__block">
          <div className="cd-timeline__img cd-timeline__img--picture">
            <img src="assets/img/cd-icon-picture.svg" alt="Picture" />
          </div>
          <div className="cd-timeline__content text-component">
            <h2>Title of section 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              optio, dolorum provident rerum aut hic quasi placeat iure tempora
              laudantium ipsa ad debitis unde?
            </p>
            <div className="flex justify-between items-center">
              <span className="cd-timeline__date">Jan 14</span>
              <a href="#0" className="btn btn--subtle">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="cd-timeline__block">
          <div className="cd-timeline__img cd-timeline__img--picture">
            <img src="assets/img/cd-icon-picture.svg" alt="Picture" />
          </div>
          <div className="cd-timeline__content text-component">
            <h2>Title of section 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              optio, dolorum provident rerum aut hic quasi placeat iure tempora
              laudantium ipsa ad debitis unde?
            </p>
            <div className="flex justify-between items-center">
              <span className="cd-timeline__date">Jan 14</span>
              <a href="#0" className="btn btn--subtle">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="cd-timeline__block">
          <div className="cd-timeline__img cd-timeline__img--picture">
            <img src="assets/img/cd-icon-picture.svg" alt="Picture" />
          </div>
          <div className="cd-timeline__content text-component">
            <h2>Title of section 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              optio, dolorum provident rerum aut hic quasi placeat iure tempora
              laudantium ipsa ad debitis unde?
            </p>
            <div className="flex justify-between items-center">
              <span className="cd-timeline__date">Jan 14</span>
              <a href="#0" className="btn btn--subtle">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="cd-timeline__block">
          <div className="cd-timeline__img cd-timeline__img--picture">
            <img src="assets/img/cd-icon-picture.svg" alt="Picture" />
          </div>
          <div className="cd-timeline__content text-component">
            <h2>Title of section 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              optio, dolorum provident rerum aut hic quasi placeat iure tempora
              laudantium ipsa ad debitis unde?
            </p>
            <div className="flex justify-between items-center">
              <span className="cd-timeline__date">Jan 14</span>
              <a href="#0" className="btn btn--subtle">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="cd-timeline__block">
          <div className="cd-timeline__img cd-timeline__img--picture">
            <img src="assets/img/cd-icon-picture.svg" alt="Picture" />
          </div>
          <div className="cd-timeline__content text-component">
            <h2>Title of section 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              optio, dolorum provident rerum aut hic quasi placeat iure tempora
              laudantium ipsa ad debitis unde?
            </p>
            <div className="flex justify-between items-center">
              <span className="cd-timeline__date">Jan 14</span>
              <a href="#0" className="btn btn--subtle">
                Read more
              </a>
            </div>
          </div>
        </div>
        <Robot/>



        {/* Repeat similar blocks for other sections */}

      </div>
      <InfiniteMovingCardsDemo/>



    </section>
  );
};

export default VerticalTimeline;
