import styles from './Header.module.scss';
import Logo from '../icons/Logo';
import MenuButton from './MenuButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <MenuButton/>
        </div>
      </div>
    </header>
  );
};

export default Header;
