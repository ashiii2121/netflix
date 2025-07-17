import React from 'react';
import "./boxes.css"; 

function Boxes() {
  const data = [
    {
      title: "Enjoy on your TV",
      description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      img: "tv.png",
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favourites easily and always have something to watch.",
      img: "down.png",
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      img: "alm.png",
    },
    {
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      img: "msg.png"
    }
  ];

  return (
    <div className='card1'>
      {data.map((item ) => (
        <div  className='box' >
          <div className='b-con'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div className='image'>
            <img src={item.img} alt="box icon" height="48px" width="48px" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Boxes;
