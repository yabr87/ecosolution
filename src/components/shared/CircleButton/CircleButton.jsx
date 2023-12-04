import ArrowIcon from '@/components/icons/ArrowIcon';
import styles from './CircleButton.module.scss';

const CircleButton = ({ text, id }) => {
  return (
    <a href={`#${id}`} className={styles.btn}>
      <span className={styles.text}>{text}</span>
      <div className={styles.circle}>
        <ArrowIcon size={10} rotate={90} />
      </div>
    </a>
  );
};
export default CircleButton;
