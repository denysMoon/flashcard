import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CardLearn from "./CardLearn";
import "../App.css";
import { Typography } from "@mui/material";

const Learn = () => {
  const words = useSelector((store) => store.words.words);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    className: "slides",
    centerMode: true,
    centerPadding: "60px",
  };
  console.log(words);

  return (
    <Box
      sx={{
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        mt: 10,
      }}
    >
      <Slider {...settings}>
        {[...words].reverse().map((item) => {
          return <CardLearn item={item} key={item._id} />;
        })}
      </Slider>
      <Typography>Press on the word to see translation.</Typography>
    </Box>
  );
};

export default Learn;
