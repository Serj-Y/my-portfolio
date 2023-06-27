import React from "react";
import styles from "./Skills.module.css"
import stylesContainer from "../../common/styles/Container.module.css"
import ReactLogo from "../../common/assets/image/react.gif"
import JsLogo from "../../common/assets/image/200w.gif"
import CssLogo from "../../common/assets/image/4202020css3htmllogosocialsocialmedia-115668_115633.png"
import { SkillBlockConstructor } from "./skillsBlockConstructor/SkillBlockConstructor";
type PropsType = {

}


export const Skills: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Skills}>
            <div>
                <h1>Skills</h1>
            </div>
            <div className={stylesContainer.Container} >
                <SkillBlockConstructor
                    img={ReactLogo}
                    alt={"ReactLogo"}
                    title={"React"}
                    description={"React is a JavaScript-based UI development library.  Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development."}
                />
                <SkillBlockConstructor
                    img={JsLogo}
                    alt={"JsLogo"}
                    title={"JavaScript"}
                    description={"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else."}
                />
                <SkillBlockConstructor
                    img={CssLogo}
                    alt={"CssLogo"}
                    title={"CSS"}
                    description={"Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."}
                />
            </div>
        </div>
    )
}