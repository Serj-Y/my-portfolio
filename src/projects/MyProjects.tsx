import React from "react";
import styles from "./MyProjects.module.scss"
import { TitleConstructor } from "../common/components/titleConstructor/TitleConstructor";
import { ProjectConstructor } from "../common/components/projectConstructor/ProjectConstructor";
import ReactLogo from "../common/assets/image/React.png";
import JsLogo from "../common/assets/image/JavaScript.png";
import { Fade } from "react-awesome-reveal";

export const MyProjects = () => {
    const ReactImage = {
        backgroundImage: `url(${ReactLogo})`,
    }
    const JsImage = {
        backgroundImage: `url(${JsLogo})`,
    }

    return (
        <div id="Projects" className={styles.Projects}>
            <TitleConstructor Title={"My Projects"} />
            <div className={styles.Container} >
                <Fade direction="left">
                    <ProjectConstructor
                        HrefForButton="https://legacy.reactjs.org"
                        propProjectStyle={styles.Block}
                        propImgStyle={styles.Img}
                        style={ReactImage}
                        title={"React"}
                        description={"React is a JavaScript-based UI development library.  Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development."}
                    />
                </Fade>
                <Fade direction="right" >
                    <ProjectConstructor
                        HrefForButton="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"
                        propProjectStyle={styles.Block}
                        propImgStyle={styles.Img}
                        style={JsImage}
                        title={"JavaScript"}
                        description={"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else."}
                    />
                </Fade>
            </div>
        </div>
    )
}