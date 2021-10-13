import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import WordCard from "./WordCard";

const WordslistContainer = () => {
  const words = useSelector((store) => store.words.words);

  const showWords = () => {
    if (words) {
      return words.map((item) => <WordCard item={item} key={item._id} />);
    } else {
      return "no";
    }
  };

  return (
    <Grid container spacing={2} justifyContent="space-between">
      {showWords()}
    </Grid>
  );
};

export default WordslistContainer;
