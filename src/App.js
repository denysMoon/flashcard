import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { theme } from "./utils/muiTheme";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWords } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWords());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header />
        <Container>Container</Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
