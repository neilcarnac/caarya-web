import React from 'react'
import { AppBar, Toolbar, Typography, Link, Box, TextField } from '@mui/material';

const FoldForm = () => {
  return (
    <>
    <Box
    width="400px"
    >
    <Box
    backgroundColor="white"
    height="500px"
    width="400px"
    ml={8}
    mt={8}
    borderRadius="20px"
    boxShadow= '0px 0px 3px 3px rgba(0, 0, 0, 0.2)'
    >
      <form 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <Typography
        variant='h5'
        >
         <span style={{paddingBottom:"10px", fontWeight: "bold"}}>
         Add New Resources
          </span>
        </Typography>
        <TextField

        id="title"
        label="title"
        placeholder="Input Text"
        backgroundColor="#caca6d"
        >
        </TextField>
        <br />
        <TextField

        id="description"
        label="description"
        placeholder="Input Text"
        
        >
        </TextField>

      </form>
    </Box>
    </Box>
    </>
  )
}

export default FoldForm
