import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const CardSwiper = ({ movie }: any) => {
  return (
    <Card className="p-0 overflow-hidden h-100 shadow">
      <div className="overflow-hidden rounded p-0 bg-light">{}</div>
      <Card.Body className="text-center">
        <Card.Title className="display-6">{movie.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardSwiper;
