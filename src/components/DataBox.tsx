import { Box, Typography } from '@mui/material'

import React from 'react'

interface Props {
    title: string;
    data: string;
}

const DataBox: React.FC<Props> = ({ title, data }) => {
  return (
    <Box 
        sx={ { 
            border: "1px solid rgba(255, 255, 255, 0.25)", 
            padding: "1rem", 
            
            width: "18vh" } }>
        <Typography variant='h3' sx={ {fontSize: "0.85rem", fontWeight: 400} }>
            {title.toUpperCase()}
        </Typography>

        <Typography sx={ {fontSize: "2rem", fontWeight: 800} }>
            {data}
        </Typography>
    </Box>
  )
}

export default DataBox