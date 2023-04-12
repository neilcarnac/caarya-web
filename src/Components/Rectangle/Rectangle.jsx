import { Box, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'

const RectangleAnimation = {
  hidden: {
    opacity: 0,
    x: '-200vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 2.3,
    }
  }
}

const Rectangle = () => {
  return (
    <>
      <Box 
      my={1}
      >

        <motion.div
          variants={RectangleAnimation}
          initial="hidden"
          animate="visible">
          <Box
          ml={-2}
            width="101.69%"
            height="300px"
            overflow="hidden"
            backgroundColor="#e2c8e2">
          
          <Typography
            variant="h6"
           
            sx={{
              ml: 7,
              mt: 5,
              textTransform: 'capitalize',
              FontFamily: "Poppins",
              color: 'black',
            }}
            >
              <span style={{fontWeight: "bold"}}>
                Knowledge Building
              </span> 
            </Typography>
          <Typography
            variant="h6"
           
            sx={{
              ml: 31,
              mt: -4,
              textTransform: 'capitalize',
              FontFamily: "Poppins",
              color: 'black',
            }}
            >
              <span style={{fontWeight: "bold"}}>
                <i>Quests</i>
              </span> 
            </Typography>

          <Box
          width="500px"
          height="500px"
          overflow= "hidden"
          borderRadius="600px"
          ml={130}
          mt={-20}
          backgroundColor="#ead6ea"
          >
          </Box>
          
            
          
          </Box>
        </motion.div>

      </Box>
    </>
  )
}

export default Rectangle
