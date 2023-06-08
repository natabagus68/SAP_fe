export default function FileIcon({ color = "#FFF", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 42 42"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M21 24.5h-5.25a1.75 1.75 0 010-3.5H21a1.75 1.75 0 010 3.5zM15.75 28h10.5a1.75 1.75 0 110 3.5h-10.5a1.75 1.75 0 010-3.5zm14.777 7H11.471c-.535 0-.971-.392-.971-.875V7.875c0-.483.436-.875.971-.875H21v5.512c0 2.752 2.13 4.988 4.75 4.988h5.75v16.625c0 .483-.436.875-.973.875zM24.5 8.71L29.299 14h-3.55c-.689 0-1.249-.668-1.249-1.488V8.71zm10.045 5.864l-9.527-10.5a1.75 1.75 0 00-1.297-.574h-12.25C9.005 3.5 7 5.463 7 7.875v26.25c0 2.411 2.005 4.375 4.471 4.375h19.056c2.466 0 4.473-1.964 4.473-4.375V15.75c0-.436-.163-.854-.455-1.176z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
