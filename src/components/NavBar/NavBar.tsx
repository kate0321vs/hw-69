import {NavLink} from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from '@mui/material';


const NavBar = () => {
    return (
      <Box sx={{mb: 5}}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              color='inherit'
              component={NavLink}
              to='/'
              sx={{ flexGrow: 1, textDecoration: 'none' }}
            >
              TV Shows
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default NavBar;