import styles from './MenuButton.module.scss';
import MenuIcon from '@/components/icons/MenuIcon';

const MenuButton = () => {
  return (
    <button type="button" className={styles.btn} aria-label="Menu Open">
      <MenuIcon />
    </button>
  );
};

export default MenuButton;
