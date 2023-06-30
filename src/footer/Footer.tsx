import React from "react";
import styles from "./Footer.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import ReactLogo from "../common/assets/image/React.png";
import JsLogo from "../common/assets/image/JavaScript.png";
import ReduxLogo from "../common/assets/image/Redux.png"
import TypeScriptLogo from "../common/assets/image/TypeScript.png"
import { BlockConstructor } from "../common/blockConstructor/BlockConstructor";
import { TitleConstructor } from "../common/titleConstructor/TitleConstructor";

type PropsType = {

}


export const Footer: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Footer}>
            <TitleConstructor Title={"Serj_Y"} />
            <div className={stylesContainer.Container} >
                <BlockConstructor
                    img={ReactLogo} alt={"ReactLogo"} propImgStyle={styles.Img} propBlockStyle={styles.Block}
                />
                <BlockConstructor
                    img={ReduxLogo} alt={"ReduxLogo"} propImgStyle={styles.Img} propBlockStyle={styles.Block}
                />
                <BlockConstructor
                    img={JsLogo} alt={"JsLogo"} propImgStyle={styles.Img} propBlockStyle={styles.Block}
                />
                <BlockConstructor
                    img={TypeScriptLogo} alt={"TypeScriptLogo"} propImgStyle={styles.Img} propBlockStyle={styles.Block}
                />
            </div>
            <h6>© 2023 Serj_Y. All rights reserved.</h6>
        </div>
    )
}