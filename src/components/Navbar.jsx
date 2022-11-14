import { IoIosArrowDown } from 'react-icons/io'

import Logo from '../assets/logo-eXStore.svg'
import Styles from './Navbar.module.scss'

export function Navbar() {
    return (
        <header>
            <div className={Styles.logo}><img src={Logo} alt="" /></div>
            <nav>
                <ul>
                    <li><a href="#">Games</a></li>
                        <li><a href="#">Browse Games<IoIosArrowDown /></a></li>
                    <li><a href="#">Store</a></li>
                </ul>
                
            </nav>
            <div className={Styles.groupBtn}>
                <button className={Styles.btnSign}>Sign up</button>
                <button className={Styles.login}>Login</button>
            </div>
        </header>
    )
}