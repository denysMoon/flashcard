import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./utils/muiTheme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      Title
    </ThemeProvider>
  );
};

export default App;
