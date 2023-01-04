import React from "react";
import {
  CardMovie,
  Description,
  H3,
  ImgMovie,
  SectionText,
} from "./section";



const CardSection = ({ movie }: any) => {
  return (
    <CardMovie key={movie.id}>
      <ImgMovie src={movie.img} alt="" />
        <H3>{movie.title}</H3>
      <SectionText>
        <Description>{movie.description}</Description>
        <p>{movie.footer}</p>
      </SectionText>

    </CardMovie>

    // <CardMovie>
    //   <ImgMovie src={movie.img} alt="" />
    //   <CardContent>
    //     <Typography gutterBottom variant="h6" component="div">
    //     {movie.title}
    //     </Typography>
    //     <Typography variant="body1" color="text.secondary">
    //     {movie.description}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //   <p>{movie.footer}</p>
    //   {/* <Typography variant="caption" color="text.secondary">
    //   <p>{movie.footer}</p>
    //     </Typography> */}
    //     {/* <Button size="small">Share</Button>
    //     <Button size="small">Learn More</Button> */}
    //   </CardActions>
    // </CardMovie>
  );
};

export default CardSection;
