import styles from './Header.module.scss';
import Logo from '../icons/Logo';
import MenuButton from './MenuButton';
import CircleButton from '../shared/CircleButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <div className={styles.btnWrapper}>
            <MenuButton />
            <div className={styles.hideWrapper}>
              <CircleButton text="Get in touch" id="contact" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
