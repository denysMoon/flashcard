import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box>
      <Link component="button">
        <RouterLink to="/">List</RouterLink>
      </Link>
      <Link component="button">
        <RouterLink to="/learn">Learn</RouterLink>
      </Link>
      <Link component="button">
        <RouterLink to="/about">About</RouterLink>
      </Link>
    </Box>
  );
};

export default Navigation;
