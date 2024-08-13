import React from "react";
import styles from "./MyProjects.module.scss";
import { TitleConstructor } from "../common/components/titleConstructor/TitleConstructor";
import { ProjectConstructor } from "../common/components/projectConstructor/ProjectConstructor";
import Weather_App from "../common/assets/image/Weather_App.png";
import Smart_PosTerminal from "../common/assets/image/Smart_PosTerminal.png";
import Todo_App from "../common/assets/image/Todo.png";
import Weather_Todo from "../common/assets/image/Weather&Todo_app.png";
import { Fade } from "react-awesome-reveal";

export const MyProjects = () => {
  const WeatherAppImage = {
    backgroundImage: `url(${Weather_App})`,
  };
  const PosTerminal = {
    backgroundImage: `url(${Smart_PosTerminal})`,
  };
  const Todo = {
    backgroundImage: `url(${Todo_App})`,
  };
  const WeatherTodo = {
    backgroundImage: `url(${Weather_Todo})`,
  };

  return (
    <div id="Projects" className={styles.Projects}>
      <TitleConstructor Title={"My Projects"} />
      <div className={styles.Container}>
        <Fade direction="left">
          <ProjectConstructor
            HrefForButton="https://serj-y.github.io/Weather_Web/"
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
        <Fade direction="left" >
          <ProjectConstructor
            HrefForButton="https://to-do-list-eight-murex-47.vercel.app/"
            propProjectStyle={styles.Block}
            propImgStyle={styles.Img}
            style={Todo}
            title={"ToDo"}
            description={
              "This To-Do List app is a robust and user-friendly application designed to help users manage their tasks efficiently. Built with modern web technologies, it offers a seamless and responsive experience across different devices."
            }
          />
        </Fade>
        <Fade direction="right" >
          <ProjectConstructor
            HrefForButton="https://github.com/Serj-Y"
            propProjectStyle={styles.Block}
            propImgStyle={styles.Img}
            style={WeatherTodo}
            title={"ToDo & Weather"}
            description={
              "This projects represent transitions React web apps to React Native. The Weather App features real-time updates, location-based forecasts, hourly data, and an editable favorite city list. The To-Do List App includes task management, prioritization, drag-and-drop, swipe-to-edit/delete, and cross-platform user accounts. Both apps were effectively migrated to React Native. Can find both apps in my repositories."
            }
          />
        </Fade>
      </div>
    </div>
  );
};
