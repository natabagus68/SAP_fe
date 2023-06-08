export default function FilterIcon({
  width = "16",
  height = "16",
  color = "#667085",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M7.251 11.638l1.35 1.022V9.625c0-.11.029-.22.08-.317L11.549 4h-7.12L7.176 9.32c.05.095.075.2.075.306v2.013zm2.017 3.029a.663.663 0 01-.402-.135l-2.684-2.03a.666.666 0 01-.264-.532V9.788L2.74 3.64a.664.664 0 01.592-.973h9.333a.667.667 0 01.587.983L9.935 9.794V14a.666.666 0 01-.667.667z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
