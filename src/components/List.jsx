import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import NewWord from "./NewWord";

import { useDispatch } from "react-redux";
import { deleteWord } from "../redux/actions";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const List = () => {
  const words = useSelector((store) => store.words.words);
  const dispatch = useDispatch();

  const allWords = () => {
    if (words) {
      return [...words].reverse().map((item) => {
        return (
          <TableRow
            key={item._id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {item.word1}
            </TableCell>
            <TableCell align="right">{item.word2}</TableCell>
            <TableCell align="right">
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
              <Button onClick={() => dispatch(deleteWord(item._id))}>
                <DeleteIcon />
              </Button>
            </TableCell>
          </TableRow>
        );
      });
    }
  };

  return (
    <>
      <NewWord />
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>{allWords()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
