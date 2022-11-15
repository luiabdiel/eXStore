import { IoIosArrowForward,IoIosArrowBack  } from 'react-icons/io'

import Console from '../assets/console.svg'
import Rating from '../assets/rating.svg'
import Xbox from '../assets/xbox.svg'

import { Navbar } from './Navbar'
import {GamesGenres} from './GamesGenres'

import Styles from './Main.module.scss'
import { BestGames } from './BestGames'

export function Main() {
    return (
        <>
            <div className={Styles.hero}>
                <Navbar />
                <div className={Styles.boxText}>
                    <h1>MultiVersus</h1>
                    <span className={Styles.subTitle}>Now officially free to play for all Xbox users.</span>
                    <button className={Styles.btnGetInNow}>Get in now!</button>
                </div>
                <div className={Styles.icons}>
                    <p>
                        <IoIosArrowBack 
                        className={Styles.arrowBack} 
                        size={35} />
                    </p>
                    <p> 
                        <IoIosArrowForward 
                        className={Styles.arrowBack} 
                        size={35} />
                    </p>
                </div>
            </div>

            <section className={Styles.sectionGames}>
                <div className={Styles.sectionRatingText}>
                    <h2>Why eXStore?</h2>
                    <span>We are the official Xbox partner in Indonesia that provides official video games.</span>
                </div>
                <div className={Styles.containerRating}>
                    <div>
                        <img src={Console} alt="" />
                        <span className={Styles.descriptionRating}>5000+ video games available</span>
                    </div>
                    <div>
                        <img src={Rating} alt="" />
                        <span className={Styles.descriptionRating}>Trusted by 100.000+ customers</span>
                    </div>
                    <div>
                        <img src={Xbox} alt="" />
                        <span className={Styles.descriptionRating}>Available for all Xbox consoles</span>
                    </div>
                </div>
                <div className={Styles.gamesGenres}>
                    <div className={Styles.genresText}>  
                        <h2>Games Genres</h2>
                        <a href='#' className={Styles.seelAllGenres}>See all genres</a>
                    </div>
                    <div className={Styles.cardsGames}>
                        <GamesGenres />
                        <GamesGenres />
                        <GamesGenres />
                        <GamesGenres />
                        <GamesGenres />
                        <GamesGenres />
                    </div>
                    <div className={Styles.BestGamges}>
                        <h2>Best Seller Games</h2>
                        <div className={Styles.cardsBestGamges}>
                            <BestGames />
                            <BestGames />
                            <BestGames />
                            <BestGames />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}