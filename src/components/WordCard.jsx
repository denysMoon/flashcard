import {
  Card,
  IconButton,
  CardContent,
  Checkbox,
  Grid,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const WordCard = ({ item }) => {
  const [word, setWord] = useState(item.word1);

  const changeSide = () => {
    setWord(word === item.word1 ? item.word2 : item.word1);
  };

  return (
    <Grid item>
      <Card sx={{ maxWidth: 275 }}>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          </Grid>
          <Grid item>
            <IconButton>
              <VisibilityOffIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <DeleteForeverIcon />
            </IconButton>
          </Grid>
        </Grid>
        <CardContent onClick={changeSide}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {word}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default WordCard;
