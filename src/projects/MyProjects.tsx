import React from "react";
import styles from "./MyProjects.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import ReactLogo from "../common/assets/image/React.png";
import JsLogo from "../common/assets/image/JavaScript.png";
import { BlockConstructor } from "../common/blockConstructor/BlockConstructor";
import { TitleConstructor } from "../common/titleConstructor/TitleConstructor";

type PropsType = {

}


export const MyProjects: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Projects}>
         <TitleConstructor Title={"My Projects"}  />
            <div className={`${stylesContainer.Container} ${styles.Container}`} >
                <BlockConstructor
                    propBlockStyle={styles.Block}
                    propImgStyle={styles.Img}
                    img={ReactLogo}
                    alt={"ReactLogo"}
                    name={"React"}
                    description={"React is a JavaScript-based UI development library.  Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development."}
                />
                <BlockConstructor
                    propBlockStyle={styles.Block}
                    propImgStyle={styles.Img}
                    img={JsLogo}
                    alt={"JsLogo"}
                    name={"JavaScript"}
                    description={"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else."}
                />
            </div>
        </div>
    )
}