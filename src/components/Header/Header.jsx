'use client';
import styles from './Header.module.scss';
import Logo from '../icons/Logo';
import MenuButton from './MenuButton';
import CircleButton from '../shared/CircleButton';
import { useWindowWidth } from '@/hooks/useWindowWidth';

const Header = () => {
  const windowWidth = useWindowWidth();
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />

          <div className={styles.btnWrapper}>
            <MenuButton />
            {windowWidth >= 768 && (
              <CircleButton text="Get in touch" id="contact" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
