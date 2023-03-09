const MenuPopup = ({isOpen}) => {
  return (
    <div className={isOpen ? "menu-popup" : "hidden"}>
      <div className="menu-popup-row">
        <div className="menu-popup-icon">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            fill="white"
          >
            <g>
              <path d="M21,16h-7v-1h7V16z M21,11H9v1h12V11z M21,7H3v1h18V7z M10,15l-7-4v8L10,15z"></path>
            </g>
          </svg>
        </div>
        <p>Add to queue</p>
      </div>
      <div className="menu-popup-row">
        <div className="menu-popup-icon">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            fill="white"
          >
            <g>
              <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path>
            </g>
          </svg>
        </div>
        <p>Save to Watch later</p>
      </div>
      <div className="menu-popup-row">
        <div className="menu-popup-icon">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            fill="white"
          >
            <g>
              <path d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z"></path>
            </g>
          </svg>
        </div>
        <p>Save to playlist</p>
      </div>
      <div className="menu-popup-row">
        <div className="menu-popup-icon">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            fill="white"
          >
            <g>
              <path d="M17 18V19H6V18H17ZM16.5 11.4L15.8 10.7L12 14.4V4H11V14.4L7.2 10.6L6.5 11.3L11.5 16.3L16.5 11.4Z"></path>
            </g>
          </svg>
        </div>
        <p>Download</p>
      </div>
      <div className="menu-popup-row">
        <div className="menu-popup-icon">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            fill="white"
          >
            <g mirror-in-rtl="" class="style-scope yt-icon">
              <path d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"></path>
            </g>
          </svg>
        </div>
        <p>Share</p>
      </div>
      <div className="menu-popup-row">
        <div className="menu-popup-icon">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            fill="white"
          >
            <g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.71 6C20.13 7.59 21 9.69 21 12c0 4.97-4.03 9-9 9-2.31 0-4.41-.87-6-2.29L18.71 6zM3 12c0-4.97 4.03-9 9-9 2.31 0 4.41.87 6 2.29L5.29 18C3.87 16.41 3 14.31 3 12zm9-10c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"
              ></path>
            </g>
          </svg>
        </div>
        <p>Not Interested</p>
      </div>
      <div className="menu-popup-row">
        <div className="menu-popup-icon">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            fill="white"
          >
            <g>
              <path d="M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12 S6.48,2,12,2L12,2z M19,13H5v-2h14V13z"></path>
            </g>
          </svg>
        </div>
        <p>Don't recommend channel</p>
      </div>
      <div className="menu-popup-row">
        <div className="menu-popup-icon">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            fill="white"
          >
            <g>
              <path d="M13.18,4l0.24,1.2L13.58,6h0.82H19v7h-5.18l-0.24-1.2L13.42,11H12.6H6V4H13.18 M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3 L14,3z"></path>
            </g>
          </svg>
        </div>
        <p>Report</p>
      </div>
    </div>
  );
};

export default MenuPopup;