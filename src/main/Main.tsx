import React from "react";
import styles from "./Main.module.scss";
import DefaultPhoto from "../common/assets/image/Avatar.png";
import { Fade } from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";

export const Main = () => {
  const DefaultImage = {
    backgroundImage: `url(${DefaultPhoto})`,
  };

  return (
    <div id="Home" className={styles.Main}>
      <div className={styles.Container}>
        <Fade direction="left">
          <div className={styles.ImgContainer} style={DefaultImage} />
        </Fade>
        <Fade direction="right">
          <div className={styles.Text}>
            <span> Hi There</span>
            <span>
              I Am Serhii <span>Iliniuk</span>
            </span>
            <ReactTypingEffect text="Front_end Developer." />
          </div>
        </Fade>
      </div>
    </div>
  );
};
