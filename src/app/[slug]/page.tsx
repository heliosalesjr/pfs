import React from 'react'
import data from '@/data/data.json'
import { Box, Container } from '@mui/material';
import Image from 'next/image';

const Planet = async ( {params}: {params: Promise<{slug: string}> }) => {
    const { slug } = await params;

    const planet = data[Number(slug)];

    return (
    <Box>
        <Container maxWidth="md">

            <Box>
                <Image 
                    src={planet.images.planet }
                    alt={planet.name }
                    width={500}
                    height={500}
                
                />


            </Box>

            <Box>
                
            </Box>
        </Container>
    </Box>
  )
}

export default Planet