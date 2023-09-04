export function closeIcon(color: string | undefined) {
  if (color == "blue") {
    return (
      <svg
        width="16px"
        height="16px"
        viewBox="0 -0.5 21 21"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>close [#1511]</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-419.000000, -240.000000)"
            fill="#0288D1"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <polygon
                id="close-[#1511]"
                points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
              ></polygon>
            </g>
          </g>
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        width="16px"
        height="16px"
        viewBox="0 -0.5 21 21"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>close [#1511]</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-419.000000, -240.000000)"
            fill="#ffffff"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <polygon
                id="close-[#1511]"
                points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
              ></polygon>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
export function hamburger(hover?: string) {
  if (hover == "greyHover") {
    return (
      <div className="icon-container-gray-hover">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18L20 18"
            // stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            // stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            // stroke="#ffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  } else {
    return (
      <div className="icon-container">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18L20 18"
            // stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            // stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            // stroke="#ffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }
}
export function blueHamburger() {
  return (
    <div className="blueHamburger">
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 18L20 18"
          // stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 12L20 12"
          // stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 6L20 6"
          // stroke="#ffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
