import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from '../SearchResult/SearchResult';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>

      <SearchResult
        img="https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-39982980-unapproved/original/d07e036e-ddf7-4839-a334-c519d2d5067f.JPEG?aki_policy=large"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$30 total"
      />
      
      <SearchResult
        img="https://a0.muscache.com/im/pictures/4e8e7914-5078-44f2-a6de-79ddead1bf7d.jpg?im_w=1200"
        location="Entire condominium hosted by Nancy"
        title="❤️The Valley Khaoyai by Nancy❤️"
        description="6 guests · 2 bedrooms · 3 beds · 2 baths"
        star={4.84}
        price="$78 / night"
        total="$78 total"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/354cdc94-d383-4012-83f0-d82141647d84.jpg?im_w=320"
        location="Private room in apartment hosted by Ple"
        title="The link ( Milan Buildings)"
        description="2 guests · Studio · 1 bed · 1 private bath"
        star={4.77}
        price="$20 / night"
        total="$20 total"
      />
    </div>
  )
}

export default SearchPage;
