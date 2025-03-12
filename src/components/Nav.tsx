"use client";
import { 
    Box, 
    Link, 
    Typography, 
    IconButton, 
    Drawer, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText 
  } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import React, { useState } from 'react';
  import data from '@/data/data.json';
  import NavLink from './NavLink';
  
  const Nav = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: "1rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.75)",
          backgroundColor: "#060623",
        }}
      >
        {/* Logo */}
        <Link href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: 24, 
              fontWeight: 'bold', 
              '&:hover': { color: 'primary.main' } 
            }}
          >
            Hello Planets!
          </Typography>
        </Link>
  
        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {data.map((planet) => (
            <NavLink planetId={planet.id} planetName={planet.name} key={planet.id} />
          ))}
        </Box>
  
        {/* Mobile Menu Button */}
        <IconButton 
          sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }} 
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
  
        {/* Mobile Drawer */}
        <Drawer 
          anchor="right" 
          open={mobileOpen} 
          onClose={handleDrawerToggle}
          sx={{ 
            "& .MuiDrawer-paper": { 
              backgroundColor: "#0A0A2E", // Um pouco mais claro que #060623
              color: "white",
              width: 250
            } 
          }}
        >
          <List>
            {data.map((planet) => (
              <ListItem key={planet.id} disablePadding>
                <ListItemButton component={Link} href={`/${planet.id}`} onClick={handleDrawerToggle}>
                  <ListItemText primary={planet.name.toUpperCase()} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    );
  };
  
  export default Nav;
  