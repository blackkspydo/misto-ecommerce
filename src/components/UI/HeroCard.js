import styles from "./HeroCard.module.css"
import { Link } from "react-router-dom";
const HeroCard = props =>{
    return (
        <div className={`${styles[`hero-card`]} ${styles[`${props.class}`]}`}>
            <div className={styles[`hero-card__image`]}>
                <img src={props.image} alt=""/>
            </div>
            <div className={styles.button}><Link to={props.link}>{props.text}</Link></div>
        </div>
    )
}

export default HeroCard;