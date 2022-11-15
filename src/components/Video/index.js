import React, { Component } from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { connect } from 'react-redux'

const Video = ({ activeModule, activeLesson }) => (
  <Box backgroundColor= 'red'>
    <Typography>{activeModule.title}</Typography>
    <Typography>{activeLesson.title}</Typography>
  </Box>
)

export default connect((state) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video)
