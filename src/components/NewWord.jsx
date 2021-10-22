import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { addWord } from "../redux/actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const NewWord = () => {
  const [newWord, setNewWord] = React.useState({
    word1: "",
    word2: "",
    difficult: false,
  });

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addWord(newWord));

    setOpen(false);

    setNewWord({
      word1: "",
      word2: "",
      difficult: false,
    });
  };

  const onChangeWord1 = (e) => {
    setNewWord({
      ...newWord,
      word1: e.target.value,
    });
  };

  const onChangeWord2 = (e) => {
    setNewWord({
      ...newWord,
      word2: e.target.value,
    });
  };

  const onChangeWord3 = (e) => {};

  return (
    <div>
      <Button onClick={handleOpen}>Add word</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <TextField
              label="English"
              type="form"
              onChange={onChangeWord1}
              value={newWord.word1}
              onSubmit={onSubmit}
              fullWidth={true}
              sx={{ mt: 2 }}
            ></TextField>
            <TextField
              label="Native"
              type="form"
              onChange={onChangeWord2}
              value={newWord.word2}
              onSubmit={onSubmit}
              fullWidth={true}
              sx={{ mt: 2 }}
            ></TextField>
            <Button
              onClick={onSubmit}
              fullWidth={true}
              variant="outlined"
              size="large"
              sx={{ mt: 2 }}
            >
              <Typography variant="button" sx={{ lineHeight: 1 }}>
                Post
              </Typography>
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default NewWord;
