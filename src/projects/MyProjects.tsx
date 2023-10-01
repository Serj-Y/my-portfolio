import React from "react";
import styles from "./MyProjects.module.scss";
import { TitleConstructor } from "../common/components/titleConstructor/TitleConstructor";
import { ProjectConstructor } from "../common/components/projectConstructor/ProjectConstructor";
import Weather_App from "../common/assets/image/Weather_App.png";
import Smart_PosTerminal from "../common/assets/image/Smart_PosTerminal.png";
import { Fade } from "react-awesome-reveal";

export const MyProjects = () => {
  const WeatherAppImage = {
    backgroundImage: `url(${Weather_App})`,
  };
  const PosTerminal = {
    backgroundImage: `url(${Smart_PosTerminal})`,
  };

  return (
    <div id="Projects" className={styles.Projects}>
      <TitleConstructor Title={"My Projects"} />
      <div className={styles.Container}>
        <Fade direction="left">
          <ProjectConstructor
            HrefForButton="https://serj-y.github.io/Weather_App/"
            propProjectStyle={styles.Block}
            propImgStyle={styles.Img}
            style={WeatherAppImage}
            title={"Weather App"}
            description={
              "Weather App Built with React, TypeScript. Also on build used Custom Hooks, Tailwind CSS, Axios for Api request and I18n for translation"
            }
          />
        </Fade>
        <Fade direction="right">
          <ProjectConstructor
            HrefForButton="https://serj-y.github.io/SmartPOS_Terminal/#/burger/"
            propProjectStyle={styles.Block}
            propImgStyle={styles.Img}
            style={PosTerminal}
            title={"Smart Pos Terminal"}
            description={
              "Smart Pos Terminal Built with React, TypeScript and SASS. Also on build used Redux-store for state"
            }
          />
        </Fade>
      </div>
    </div>
  );
};
