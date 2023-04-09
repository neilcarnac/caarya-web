import React from 'react'
import { motion } from 'framer-motion'
import { Backdrop } from '@mui/material'
// import Backdrop from '../MotionPrac/Backdrop/Backdrop';
const Motionprac = () => {
  return (
    <div>
      <motion.button
      whileHover={{scale:"1.1"}}
      whileTap={{scale: 0.9}}
      className="save-button"
      onClick={() => null}>
        Launch
      </motion.button>
      <Backdrop />
    </div>
  )
}

export default Motionprac
