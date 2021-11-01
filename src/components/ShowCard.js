import React, { Fragment } from 'react'

export const ShowCard = (show) => {
    return (
       //Setup styyle and format of card itself
          <Fragment>
          <figure>
          <img className="rounded" src={show.venueImg} alt="imageholder" />
          </figure>
          <div className="m1-25">
           <h2>{show.venue}</h2>
           <p>{show.desc}</p>
          <button  className="btn btn-dark"> Get tickets</button>
          </div>
          </Fragment>
    )
}
