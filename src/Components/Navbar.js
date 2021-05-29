import React from 'react'

import '../style/Navbar.css'

function Navbar() {

    return (
        <div className="navStyle">
            <div className="logo">
                <svg version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
                    <title>TheCrypt</title>
                    <path id="c " fill="#03dac5" aria-label="c"  d="M184.95 313.9Q129.65 313.55 94.65 278.55Q60 243.55 60 186.5Q60 129.1 94.65 94.1Q129.65 59.1 187.05 59.1Q233.95 59.1 270 82.9L277 132.25L273.85 132.25Q266.15 102.15 242.7 86.05Q219.25 69.6 187.05 69.6Q141.2 69.6 113.55 101.45Q86.25 133.3 86.25 185.8Q86.25 238.3 113.2 270.5Q140.5 302.35 184.95 303.4Q224.15 303.4 250.4 282.05Q278.75 258.95 284.7 206.8L287.5 206.8L283.3 261.75Q251.45 313.9 184.95 313.9Z" />
                    <path id="T " fill="#ffffff" aria-label="T"  d="M340.02 256.32L343.82 253.94Q358.55 271.52 358.55 288.62Q358.55 306.19 350.47 318.54Q342.39 331.37 324.34 339.92Q306.29 348.94 283.49 348.94L88.74 348.93Q74.02 348.93 56.44 351.78Q38.39 354.63 31.27 357.48L31.27 297.63L36.02 298.11L36.02 306.18Q36.02 317.58 44.09 325.66Q52.17 334.21 63.09 334.68L153.34 334.69L153.36 50.16Q152.88 33.06 138.16 24.51Q131.03 20.71 122.96 20.71L116.78 20.71L116.78 15.96L220.81 15.96L220.81 20.71L214.63 20.71Q202.28 20.71 193.73 29.26Q184.71 37.81 184.23 49.69L184.22 334.69L283.49 334.69Q321.49 334.69 338.6 310.47Q347.62 298.12 347.62 284.34Q347.62 271.04 340.02 256.32Z" />
                </svg>
            </div>
            <div className="nav">
                <span>The<span style={ { "color": "#03DAC5" } }>Crypt</span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <div className="navs">
                    <span className="active">Home</span>
                    <span>Compare</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>
                <div className="bag-btn">
                    <button>Populate Bag</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar