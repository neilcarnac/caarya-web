import React from 'react'
import { Box, Typography } from '@mui/material'

const Doctext = () => {
    return (
        <>
        <Box
        >

        <Typography
            variant="h4"
           
            sx={{
              ml: 65,
              mt: -63,
              textTransform: 'capitalize',
              FontFamily: "Poppins",
            //   FontSize: 4r,
              color: 'black',
            }}
            >
              <span style={{fontWeight: "bold"}}>
                Documentation
              </span> 
            </Typography>
            <Typography
                variant="h4"

                sx={{
                    ml: 96,
                    mt: -5.1,
                    textTransform: 'capitalize',
                    FontFamily: "Poppins",
                    color: 'black',
                }}
            >
                <span style={{ fontWeight: "bold" }}>
                    <i>Templates</i>
                </span>
            </Typography>
            <Typography
                variant="h6"

                sx={{
                    ml: 65,
                    mt: 0,
                    textTransform: 'capitalize',
                    FontFamily: "Poppins",
                    color: 'black',
                }}
            >
                <span style={{ fontWeight: "bold" }}>
                    Try out our fun and easy templates for faster documentation and referencing
                </span>
            </Typography>
            </Box>

        </>
    )
}

export default Doctext
