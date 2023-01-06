import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const CardSwiper = ({ movie }: any) => {
  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <Card className="p-0 overflow-hidden h-100 shadow">
      <img src={image} alt={`affiche film ${movie.title}`} />
    </Card>
  );
};

export default CardSwiper;
