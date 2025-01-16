import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import GradeIcon from '@mui/icons-material/Grade';

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // Abre el menú
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Cierra el menú
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'black' }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {/* Opción Inicio */}
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <HomeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </MenuItem>

            {/* Opción Personajes */}
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Personajes" />
            </MenuItem>

            {/* Opción Comics */}
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <BookIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Comics" />
            </MenuItem>
            {/* Opción favoritos */}
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <GradeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Favoritos" />
            </MenuItem>
          </Menu>

          <Box sx={{ flexGrow: 1 }}>
            <img
              src="src/image/Marvel-Logo.png" // Cambia esto por la ruta de tu imagen
              alt="Marvel Logo"
              style={{ height: '60px', width: 'auto' }}
            />
          </Box>
          <Button color="inherit">Danny Veliz</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
