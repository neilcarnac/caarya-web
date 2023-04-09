import { motion } from 'framer-motion';
import Backdrop from '../MotionPrac/Backdrop/Backdrop';
import React from 'react'

const Modals = ({handleClose, text}) => {
  return (
    <div>
      <Backdrop onClick={handleClose}>
        <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient">

        </motion.div>

        </Backdrop>
    </div>
  )
}

export default Modals
