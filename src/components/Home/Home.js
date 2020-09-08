import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=240"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
          price=""
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=240"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
          price=""
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=240"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
          price=""
        />
      </div>

      <div className="home__section">
        <Card
          src=""
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
          price=""
        />
        <Card
          src=""
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
          price=""
        />
        <Card
          src=""
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
          price=""
        />
      </div>
    </div>
  )
}

export default Home;
