import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";

import { BrowserRouter as Router } from "react-router-dom";

import { theme } from "./utils/muiTheme";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWords } from "./redux/actions";
import AppRoute from "./components/AppRoute";

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
        <Container sx={{ mt: 2 }}>
          <AppRoute />
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
