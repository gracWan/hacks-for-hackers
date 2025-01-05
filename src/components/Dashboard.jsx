import React from 'react';
import "../Dashboard.css"

export default function Dashboard() {
  return (
    <div>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Pixelify+Sans:wght@400..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Varela+Round&family=Young+Serif&display=swap"
          rel="stylesheet"
        />
      </head>
      
      <body>
        <h1>Hi, welcome back xyz</h1>

        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://www.svgrepo.com/show/102841/coin.svg"
              alt="Coin Icon"
              className="icon"
            />
            Points<span className="num">714</span>
          </div>
          <div className="grid-item">
            <img
              src="https://www.svgrepo.com/show/6230/clock.svg"
              alt="Clock Icon"
              className="icon"
            />
            Meetings Completed<span className="num">3</span>
          </div>
          <div className="grid-item">
            <img
              src="https://www.svgrepo.com/show/311063/person.svg"
              alt="Friend Icon"
              className="icon"
            />
            Friends Made<span className="num">10</span>
          </div>
          <div className="grid-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/118/118221.png"
              alt="Coin Icon"
              className="icon"
            />
            Target Language <span className="num">Spanish</span>
          </div>
        </div>
      </body>
    </div>
  );
}
