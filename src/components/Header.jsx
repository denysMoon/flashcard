import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "none" }}>
        <Toolbar>
          <Navigation />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
