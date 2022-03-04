import styles from './Header.module.css';
import Logo from './Logo';
import Nav from './Nav';
import DashNav from './DashNav';
const Header = ({showCartHandler}) => {

 return(
   <header className={styles.header}>
        <div className={styles.logo}>
            <Logo />
        </div>
        <div className={styles.navigation}>
          <Nav />
          <DashNav showCartHandler={showCartHandler}/>
        </div>
   </header>

 )
}

export default Header;