const MenuIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      d="M2 5.167h12M2 8.5h12M2 11.833h12"
    />
  </svg>
);

export default MenuIcon;
