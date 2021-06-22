import React, { Component } from 'react';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';
const posterMap = {
  'choux-maru-istanbul': cmi,
  'choux-maru-part-1': cmp1,
  'chromeboi': cb,
  'escape-from-vim': efv,
  'goldeneye': goldeneye,
  'handsome-boy': hbmc,
  'marus-spinoff': msts,
  'terrance-king': tkr,
  'the-trash-man': ttm,
  'default': defaultPoster
}
export default class MovieCard extends Component {
  render() {
    return (
      <div className="movie-card">
        {/* which component should receive which props?IMDBRating={item.IMDBRating} genres={item.genres} poster={item.poster} */}

        <CardFront  poster={this.props.poster} />
        <CardBack title={this.props.title} IMDBRating={this.props.IMDBRating} genres={this.props.genres} />
      </div>
    )
  }
}

// Don't forget your default props!

MovieCard.defaultProps = {
  title : "Unknown",
  IMDBRating : null,
  genres: ["No Genre(s) Found"],
  poster:"default"
}