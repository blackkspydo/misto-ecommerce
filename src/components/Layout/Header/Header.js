import styles from './Header.module.css';
import Logo from './Logo';
import Nav from './Nav';
import DashNav from './DashNav';
const Header = ({showCartHandler,showSearchHandler}) => {

 return(
   <header className={styles.header}>
        <div className={styles.logo}>
            <Logo />
        </div>
        <div className={styles.navigation}>
          <Nav />
          <DashNav showCartHandler={showCartHandler} showSearchHandler={showSearchHandler}/>
        </div>
   </header>

 )
}

export default Header;