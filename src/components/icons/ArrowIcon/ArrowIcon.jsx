const ArrowIcon = ({
  color = 'currentColor',
  size = 16,
  rotate = 0,
  styles,
}) => {
  return (
    <svg
      className={styles}
      style={{ transform: `rotate(${rotate}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M9.62 4.453 13.667 8.5 9.62 12.546M2.333 8.5h11.22"
      />
    </svg>
  );
};

export default ArrowIcon;
