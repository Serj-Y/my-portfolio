import React from "react";
import styles from "./MyProjects.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import ReactLogo from "../common/assets/image/React.png";
import JsLogo from "../common/assets/image/JavaScript.png";
import { MyProjectBlockConstructor } from "./myProjectBlockConstructor/MyProjectBlockConstructor";

type PropsType = {

}


export const MyProjects: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Skills}>
            <div className={styles.Title}>
                <h2>My Projects</h2>
            </div>
            <div className={`${stylesContainer.Container} ${styles.Container}`} >
                <MyProjectBlockConstructor
                    img={ReactLogo}
                    alt={"ReactLogo"}
                    name={"React"}
                    description={"React is a JavaScript-based UI development library.  Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development."}
                />
                <MyProjectBlockConstructor
                    img={JsLogo}
                    alt={"JsLogo"}
                    name={"JavaScript"}
                    description={"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else."}
                />
            </div>            
        </div>
    )
}