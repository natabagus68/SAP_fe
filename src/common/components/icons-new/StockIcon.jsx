export default function StockIcon({ color, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M19 12.834a1 1 0 012 0V18.4a2.604 2.604 0 01-2.6 2.601H5.6A2.604 2.604 0 013 18.4V5.601c0-1.434 1.167-2.6 2.6-2.6h9.567a1 1 0 110 2H5.6a.6.6 0 00-.6.6V18.4c0 .331.269.601.6.601h12.8c.331 0 .6-.27.6-.601v-5.566zm-9.69-1.887a1 1 0 011.414.033l1.505 1.577 6.053-6.252a1 1 0 111.437 1.39l-6.777 7a.997.997 0 01-.718.306h-.004a1 1 0 01-.72-.31l-2.223-2.33a1 1 0 01.033-1.415z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
