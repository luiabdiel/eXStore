import { Navbar } from "./Navbar"

import Styles from './Main.module.scss'

export function Main() {
    return (
        <>
            <div className={Styles.hero}>
                <Navbar />
                <div className={Styles.boxText}>
                    <h1>MultiVersus</h1>
                    <span>Now officially free to play for all Xbox users.</span>
                    <button className={Styles.btnGetInNow}>Get in now!</button>
                </div>
            </div>
        </>
    )
}