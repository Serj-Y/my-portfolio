import React from "react";
import styles from "./Footer.module.scss"
import stylesContainer from "../common/components/styles/Container.module.scss";
import ReactLogo from "../common/assets/image/React.png";
import JsLogo from "../common/assets/image/JavaScript.png";
import ReduxLogo from "../common/assets/image/Redux.png"
import TypeScriptLogo from "../common/assets/image/TypeScript.png"
import { SkillBlockConstructor } from "../common/components/skillConstructor/SkillBlockConstructor";
import { TitleConstructor } from "../common/components/titleConstructor/TitleConstructor";

type PropsType = {

}


export const Footer: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Footer}>
            <TitleConstructor Title={"Serj_Y"} />
            <div className={stylesContainer.Container} >
                <SkillBlockConstructor
                    img={ReactLogo} alt={"ReactLogo"} propImgStyle={styles.Img} propBlockStyle={styles.Block}
                />
                <SkillBlockConstructor
                    img={ReduxLogo} alt={"ReduxLogo"} propImgStyle={styles.Img} propBlockStyle={styles.Block}
                />
                <SkillBlockConstructor
                    img={JsLogo} alt={"JsLogo"} propImgStyle={styles.Img} propBlockStyle={styles.Block}
                />
                <SkillBlockConstructor
                    img={TypeScriptLogo} alt={"TypeScriptLogo"} propImgStyle={styles.Img} propBlockStyle={styles.Block}
                />
            </div>
            <h6>© 2023 Serj_Y. All rights reserved.</h6>
        </div>
    )
}