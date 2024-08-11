import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
const mobile=window.innerWidth<=768 ? true:false;

  return (
    <div>
      <div className="hero" id="home">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header />
          <div className="the-ad">
            <motion.div
              initial={{ left: mobile? "155px":"200px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
            ></motion.div>
            <span>The best Fitness Club in town</span>
          </div>

          <div className="hero-text">
            <div>
              <span className="stroke-text">Shape</span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span>
                In here we will shape and build your ideal body and live up your
                life to fullest
              </span>
            </div>
          </div>

          <div className="figures">
            <div>
              <span>
                <NumberCounter end={180} start={10} delay='2' preFix='+'/>
              </span>
              <span>expert coaches</span>
            </div>
            <div>
              <span>
              <NumberCounter end={1000} start={700} delay='2' preFix='+'/>
              </span>
              <span>members joined</span>
            </div>
            <div>
              <span>
              <NumberCounter end={80} start={10} delay='2' preFix='+'/>
              </span>
              <span>fitness programs</span>
            </div>
          </div>
          <div className="hero-btn">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div className="right-h">
          <button className="btn">Join Now</button>
          <motion.div
            initial={{ right: "-1rem" }}
            whileInView={{ right: "4rem" }}
            transition={transition}
            className="heart-rate"
          >
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>120 bpm</span>
          </motion.div>
          <img src={hero_image} alt="" className="hero_image" />
          <motion.img 
           initial={{ right: "11rem" }}
           whileInView={{ right: "20rem" }}
           transition={transition}
          src={hero_image_back} alt="" className="hero_image_back" />

          <motion.div 
           initial={{ right: "37rem" }}
           whileInView={{ right: "28rem" }}
           transition={transition}

          className="calories">
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>250 kcal</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
