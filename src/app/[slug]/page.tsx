import React from 'react'
import data from '@/data/data.json'
import { Box, Container, Link, Typography } from '@mui/material';
import Image from 'next/image';
import DataBox from '@/components/DataBox';

const Planet = async ( {params}: {params: Promise<{slug: string}> }) => {
    const { slug } = await params;

    const planet = data[Number(slug)];

    return (
    <Box>
        <Container maxWidth="lg" sx={{height: "89vh", display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>

            <Box 
                sx={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    margin: '15vh 0',
                    }}>
                <Image 
                    src={planet.images.planet }
                    alt={planet.name }
                    width={350}
                    height={350}
                
                />
                <Box sx={{width: '60%'}}>
                    <Typography variant='h2'>
                        {planet.name}
                    </Typography>
                    <Typography>
                        {planet.overview.content}
                    </Typography>
                    <Typography>
                        Source: <Link href={planet.structure.source}> Wikipedia </Link>
                    </Typography>
                </Box>

            </Box>

            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
                <DataBox title="Rotation Time" data={planet.rotation} />
                <DataBox title="Revolution Time" data={planet.revolution} />
                <DataBox title="Radius" data={planet.radius} />
                <DataBox title="Average Temperature" data={planet.temperature} />
                
            </Box>
        </Container>
    </Box>
  )
}

export default Planet