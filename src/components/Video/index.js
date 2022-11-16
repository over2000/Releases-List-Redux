import React, { Component } from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import { connect } from 'react-redux'

const Video = ({ activeModule, activeLesson }) => (
  <Container maxWidth='md'>
    <Box>
      <Typography variant='h5'>{activeModule.title}</Typography>
      <Typography variant='h6'>{activeLesson.title}</Typography>
      <Typography>{activeLesson.tracklist}</Typography>
      {/* <List>
        {activeLesson.tracklist.map((lesson) => (
          <ListItem key={lesson}>
            <ListItemText primary={lesson} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  </Container>
)

export default connect((state) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video)
