import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ButtonIcon from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteWord } from "../redux/actions";

import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const CardLearn = ({ item }) => {
  const [word, setWord] = useState(item.word1);
  const dispatch = useDispatch();

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardContent
        onClick={() => setWord(word === item.word1 ? item.word2 : item.word1)}
      >
        <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
          {word}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Checkbox
              {...label}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
            <Checkbox
              {...label}
              icon={<VisibilityOutlinedIcon />}
              checkedIcon={<VisibilityOffOutlinedIcon />}
            />
          </Grid>
          <Grid item>
            <ButtonIcon onClick={() => dispatch(deleteWord(item._id))}>
              <DeleteIcon />
            </ButtonIcon>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default CardLearn;
