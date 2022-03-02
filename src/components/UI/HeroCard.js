import styles from "./HeroCard.module.css"

const HeroCard = props =>{
    return (
        <div className={`${styles[`hero-card`]} ${styles[`${props.class}`]}`}>
            <div className={styles[`hero-card__image`]}>
                <img src={props.image} alt=""/>
            </div>
            <div className={styles.button}><a href={props.link}>{props.text}</a></div>
        </div>
    )
}

export default HeroCard;