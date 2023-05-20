import React from 'react'


const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
        <svg
                width="32px"
                height="32px"
                class="home__scroll-mouse"
                viewBox="0 0 247 390"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill-rule= "evenodd"
                clip-rule= "evenodd"
                stroke-linecap= "round"
                stroke-linejoin= "round"
                stroke-miterlimit= "1.5"
                
              >
                <path
                  class="wheel"
                  d="M123.359,79.775l0,72.843"
                  fill= "none"
                  stroke= "var(--title-color)"
                  stroke-width= "20px"             
                ></path>
                <path
                  id="mouse"
                  d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                  fill= "none"
                  stroke="var(--title-color)"
                  stroke-width= "20px"
                ></path>
        </svg>
        <span className="home__scroll-name">
            Scroll Down
        </span>
        <i class="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
    </div>
  )
}

export default ScrollDown