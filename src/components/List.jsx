import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

const List = () => {
  const words = useSelector((store) => store.words.words);

  const allWords = () => {
    if (words) {
      return words.map((item) => item.word1);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>{allWords()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
