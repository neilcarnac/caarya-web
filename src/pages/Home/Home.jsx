import { Box } from '@mui/system'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { motion } from 'framer-motion'
import Motionprac from '../../Components/Motions/MotionPrac/Motionprac'
import Rectangle from '../../Components/Rectangle/Rectangle'
import FoldForm from '../../Components/FoldForm/FoldForm'
const Home = () => {
  return (
  <>
    <Navbar />
    <Rectangle />
    <FoldForm />
    {/* <Motionprac />     */}
  </>
  )
}

export default Home
