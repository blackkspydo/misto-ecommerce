import styles from './Header.module.css';
import Logo from './Logo';
import Nav from './Nav';
import DashNav from './DashNav';
const Header = () => {

 return(
   <header className={styles.header}>
        <div className={styles.logo}>
            <Logo />
        </div>
        <div className={styles.navigation}>
          <Nav />
          <DashNav />
        </div>
   </header>

 )
}

export default Header;