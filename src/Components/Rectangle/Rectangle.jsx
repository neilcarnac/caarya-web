import { Box, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'

const RectangleAnimation = {
  hidden: {
    opacity: 0,
    y: '100px',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      types: "spring",
      delay: 0.3,
      duration: 1.3,
    }
  }
}

const RectangleAnimationtwo = {
  hidden: {
    opacity: 0,
    y: '-100px',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.3,
      duration: 1.3,
    }
  }
}

const Rectangle = () => {
  return (
    <>
      <Box 
      my={1}
      >

          <Box
          ml={-2}
            width="101.69%"
            height="300px"
            overflow="hidden"
            backgroundColor="#e2d2ea">
          
              <motion.div
                variants={RectangleAnimation}
                initial="hidden"
                animate="visible">
          <Typography
            variant="h5"
           
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
            </motion.div>
            <motion.div
                variants={RectangleAnimationtwo}
                initial="hidden"
                animate="visible">
          <Typography
            variant="h5"
           
            sx={{
              ml: 34,
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
            </motion.div>
          <Box
          width="500px"
          height="500px"
          overflow= "hidden"
          borderRadius="600px"
          ml={130}
          mt={-20}
          backgroundColor="#dbc7e3"
          >
          </Box>
          
            
          
          </Box>

      </Box>
    </>
  )
}

export default Rectangle
