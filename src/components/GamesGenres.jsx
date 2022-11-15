import CardImage from '../assets/cardImage.svg'

import Styles from './GamesGenres.module.scss'

export function GamesGenres() {
    return (
        <div className={Styles.containerCard}>
            <img src={CardImage} alt="" />
        </div>
    )
}