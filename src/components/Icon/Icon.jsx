const Default = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="23" stroke={color} strokeWidth="4" />
    <circle cx="25" cy="11" r="4" fill={color} />
    <path d="M29 31C29 43 27.2091 43 25 43C22.7909 43 21 43 21 31C21 19 22.7909 19 25 19C27.2091 19 29 19 29 31Z" fill={color} />
  </svg>
);

const Logo = ({ size = 24, color }) => (
  <svg width={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="25" fill="black" />
    <path
      d="M48 29.5C48 40.8218 37.7025 50 25 50C12.2975 50 2 40.8218 2 29.5C2 18.1782 12.2975 10.5 25 10.5C37.7025 10.5 48 18.1782 48 29.5Z"
      fill="#D60000"
    />
    <path
      d="M41 37.5C41 44.4036 33.8366 50 25 50C16.1634 50 9 44.4036 9 37.5C9 30.5964 16.1634 25 25 25C33.8366 25 41 30.5964 41 37.5Z"
      fill="#F7C800"
    />
  </svg>
);

const Error = ({ size = 50, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28.0424 5.38355L48.0255 40.5197C49.3525 42.853 47.6673 45.75 44.9831 45.75H5.0169C2.33269 45.75 0.647527 42.853 1.97453 40.5197L21.9576 5.38354C23.2996 3.02395 26.7004 3.02395 28.0424 5.38355Z"
      stroke={color}
      strokeWidth="3"
    />
    <path
      d="M22.9062 17.7656C22.8854 16.9844 23.25 16.5938 24 16.5938H26.5C27.25 16.5938 27.6146 16.9844 27.5938 17.7656L27.1719 31.4219C27.151 32.099 26.8125 32.4375 26.1562 32.4375H24.3438C23.6875 32.4375 23.349 32.099 23.3281 31.4219L22.9062 17.7656ZM24.0625 39C23.3333 39 22.9688 38.6094 22.9688 37.8281V35.7344C22.9688 34.9531 23.3333 34.5625 24.0625 34.5625H26.4375C27.1667 34.5625 27.5312 34.9531 27.5312 35.7344V37.8281C27.5312 38.6094 27.1667 39 26.4375 39H24.0625Z"
      fill={color}
    />
  </svg>
);
const Confirm = ({ size = 70, color }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9505 25L23.6135 32.1917" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <path d="M34.9505 18L23.9505 32" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <circle cx="25" cy="25" r="23.5" stroke={color} strokeWidth="3" />
  </svg>
);

const Icon = ({ name, color = 'currentColor', ...props }) => {
  switch (name) {
    case 'logo':
      return <Logo color={color} {...props} />;
    case 'error':
      return <Error color={color} {...props} />;
    case 'confirm':
      return <Confirm color={color} {...props} />;
    default:
      return <Default color={color} {...props} />;
  }
};

export default Icon;
