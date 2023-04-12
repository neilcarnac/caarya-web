import { Box } from '@mui/system'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { motion } from 'framer-motion'
import Motionprac from '../../Components/Motions/MotionPrac/Motionprac'
import Rectangle from '../../Components/Rectangle/Rectangle'
import FoldForm from '../../Components/FoldForm/FoldForm'
import CardItem from '../../Components/CardItem/CardItem'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { PropTypes } from '@mui/material'
import Resources from '../../Components/Resources/Resources'
import Doctext from '../../Components/DocText/Doctext'
const Home = () => {
  return (
  <>
    <Navbar />
    <Rectangle />
    <FoldForm />
    <Doctext />
    <Resources />
    {/* <Motionprac />     */}
  </>
  )
}

export default Home
