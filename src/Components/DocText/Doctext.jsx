import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const textAnimation = {
    hidden: {
        opacity: 0,
        y: '-50px',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "linear",
            delay: 0.7,
            duration: 1.3,
        }
    }
}

const Doctext = () => {
    return (
        <>
            <Box>
            <motion.div
                variants={textAnimation}
                initial="hidden"
                animate="visible"
            >
                <Box>

                    <Typography
                        variant="h4"

                        sx={{
                            ml: 65,
                            mt: -69,
                            textTransform: 'capitalize',
                            FontFamily: "Poppins",
                            //   FontSize: 4r,
                            color: 'black',
                        }}
                    >
                        <span style={{ fontWeight: "bold" }}>
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
                        variant="h7"
                        sx={{
                            ml: 65,
                            mt: 10,
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
            </motion.div>
            </Box>

        </>
    )
}

export default Doctext;
