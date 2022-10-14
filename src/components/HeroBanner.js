import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt:{lg:'212px', sm:'70px'},
      ml:{sm:'50px'}

    }} position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
          Fitness Club
        </Typography>
        <Typography fontWeight={700}
          sx={{fontSize:{sm:'40px', lg:'44px'}}}
          mb='23px' mt='30px'
        >
          Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
          Cheack out the most effective exercises for your body
        </Typography>

        <Button variant="contained" color='error' hr='#exercises'
          sx={{backgroundColor:'#FF2625', padding:'10px'}}
        >Explore Exercises</Button>
        <Typography
          fontWeight='600'
          color='#FF2625'
          sx={{
            opacity: 0.1,
            display: {lg:'block', sm:'none'},
          }}
          fontSize='200px'
        >
          Exercises
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />

    </Box>
  )
}

export default HeroBanner
