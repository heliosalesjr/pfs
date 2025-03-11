import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import data from '@/data/data.json'
import NavLink from './NavLink'


const Nav = () => {
  return (
    <Box 
        sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: "1rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.75)" 
        }}
    >
        <Link href="/">
            <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 'bold' }}>
            Hello Planets!
            </Typography>
        </Link>
        

        <Box>
            {data.map((planet) => (
                <NavLink 
                    planetId={planet.id} 
                    planetName={planet.name}
                    key={planet.id}    
                />
            ))}
        </Box>
    </Box>
    
  )
}

export default Nav