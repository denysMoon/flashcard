import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link as LinkRouter } from "react-router-dom";
import Link from "@mui/material/Link";

const Header = () => {
  return (
    <Box>
      <AppBar sx={{ background: "white" }}>
        <Toolbar>
          <LinkRouter>
            <Link component="button" underline="none">
              All Words
            </Link>
          </LinkRouter>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
