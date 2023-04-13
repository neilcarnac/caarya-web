import React from 'react'
import { AppBar, Toolbar, Typography, Link, Box, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import CancelIcon from '@mui/icons-material/Cancel';
import InvertingButton from '../InvertingButton/InvertingButton';
import { motion, spring } from 'framer-motion'

const AddNewResources = {
  hidden: {
    opacity: 0,
    x: '-100px',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",

      delay: 0.5,
      duration: 1.3,
    }
  }
}
const FullBoxAnimation={
  hidden: {
    opacity: 0,
    x: '-100',
  },
  visible: {
    opacity: 1,
    x:0,
    transition:{
      ease: "spring",
      duration: 3,
      x: {duration: 2}
    }
  }
}
const Titleone = {
  hidden: {
    opacity: 0,
    x: '200px',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 1.7,
    }
  }
}

const Itemanimation = {
  hidden:{
    opacity:0,
    x:'100px',
  },
  visible: {
    opacity:1,
    x:0,
    transition: {
      ease:"linear",
      duration: 2,
      x: { duration:1 }
    }
  }
}
const Itemanimationwords = {
  hidden:{
    opacity:0,
    x:'100w',
  },
  visible: {
    opacity:1,
    x:0,
    transition: {
      ease:"linear",
      duration: 1,
      x: { duration:1 }
    }
  }
}

const FoldForm = () => {
  return (
    <>
      <Box
        width="600px"
      >
            <motion.div
              variants={AddNewResources}
              initial="hidden"
              animate="visible">
        <Box
          backgroundColor="white"
          width="400px"
          ml={8}
          mt={8}
          borderRadius="20px"
          boxShadow='0px 0px 3px 3px rgba(0, 0, 0, 0.2)'
        >
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '20px',
            }}>

            <motion.div
              variants={AddNewResources}
              initial="hidden"
              animate="visible">

              <Typography
                variant='h5'

              >
                <span style={{ paddingBottom: "20px", fontWeight: "bold" }}>
                  Add New Resources!
                </span>
              </Typography>
              <br />
            </motion.div>

            {/* <motion.div
              variants={Titleone}
              initial="hidden"
              animate="visible"> */}
              <TextField
                id="title"
                label="title"
                placeholder="Input Text"
                backgroundColor="#caca6d"
              >
          </TextField>
            {/* </motion.div> */}
          <br />
          {/* <motion.div
              variants={Titleone}
              initial="hidden"
              animate="visible"> */}
          <TextField
            id="description"
            label="description"
            placeholder="Input Text"

          >
          </TextField>
          {/* </motion.div> */}
          <br />
          {/* <motion.div
              variants={Itemanimationwords} 
              initial="hidden"
              animate="visible"> */}
          <Typography
            variant='h7'
          >
            <span style={{ paddingBottom: "20px", fontWeight: "bold" }}>
              Add Tags/Keywords
            </span>
          </Typography>
          {/* </motion.div> */}

          <motion.div
              variants={Itemanimation}
              initial="hidden"
              animate="visible">
          <Stack direction={['column', 'row']} spacing="4" >
            <Box

              backgroundColor="#eedaac"
              borderRadius="25px">
              <Typography
                textAlign="center"
                paddingLeft={"10px"}
                color="#906e31"
                fontSize=".8rem"
                fontWeight="light"
              >
                <span style={{}}>
                  Item1
                </span>
                <CancelIcon style={{ height: "10px", weight: "10px" }} />
              </Typography>

            </Box>
            <Box

              backgroundColor="#eedaac"
              borderRadius="25px">
              <Typography
                paddingLeft={"10px"}
                textAlign="center"
                color="#906e31"
                fontSize=".8rem"
                fontWeight="light"
              >
                <span style={{}}>
                  Item2
                </span>
                <CancelIcon style={{ height: "10px", weight: "10px" }} />

              </Typography>

            </Box>
            <Box

              backgroundColor="#eedaac"
              borderRadius="25px">
              <Typography
                paddingLeft={"10px"}
                textAlign="center"
                color="#906e31"
                fontSize=".8rem"
                fontWeight="light"
              >
                <span style={{}}>
                  Item5
                </span>
                <CancelIcon style={{ height: "10px", weight: "10px" }} />

              </Typography>

            </Box>
            <Box

              backgroundColor="#eedaac"
              borderRadius="25px">
              <Typography
                paddingLeft={"10px"}
                textAlign="center"
                color="#906e31"
                fontSize=".8rem"
                fontWeight="light"
              >
                <span style={{}}>
                  New Tag
                </span>
                <CancelIcon style={{ height: "10px", weight: "10px" }} />

              </Typography>

            </Box>
          </Stack>
          </motion.div>

          <br />
          {/* <motion.div
              variants={Titleone}
              initial="hidden"
              animate="visible"> */}
          <TextField
            id="title"
            label="title"
            placeholder="add link here"
            backgroundColor="#caca6d"
          >
          </TextField>
          <br />
          <TextField

            id="description"
            label="title"
            placeholder="add link here"

          >
          </TextField>
          <br />
          <TextField

            id="description"
            label="title"
            placeholder="add link here"

          >
          </TextField>

          <br />
          <InvertingButton />
          {/* </motion.div> */}
        </form>
      </Box>
      </motion.div>
    </Box>
    </>
  )
}

export default FoldForm
