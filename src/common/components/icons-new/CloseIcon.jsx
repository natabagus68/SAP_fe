export default function CloseIcon({ color = "#FFFFFF", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M14.829 12l8.585-8.585a1.998 1.998 0 000-2.829 1.998 1.998 0 00-2.828 0l-8.585 8.586L3.415.587a1.998 1.998 0 00-2.829 0 1.998 1.998 0 000 2.827l8.586 8.587-8.585 8.586A1.998 1.998 0 002 24c.512 0 1.024-.195 1.413-.585l8.587-8.586 8.586 8.585a1.995 1.995 0 002.828 0 1.998 1.998 0 000-2.828l-8.586-8.585z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
