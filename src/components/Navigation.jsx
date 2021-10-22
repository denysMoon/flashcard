import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Navigation = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <RouterLink to="/">
            <Link color="#000" underline="none" component="button">
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
              >
                List
              </Typography>
            </Link>
          </RouterLink>
        </Grid>
        <Grid item>
          <RouterLink to="/learn">
            <Link color="#000" underline="none" component="button">
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
              >
                Learn
              </Typography>
            </Link>
          </RouterLink>
        </Grid>
        <Grid item>
          <RouterLink to="/about">
            <Link color="#000" underline="none" component="button">
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
              >
                About
              </Typography>
            </Link>
          </RouterLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navigation;
