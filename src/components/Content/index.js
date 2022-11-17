import React, { Component } from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { connect } from 'react-redux'

const Content = ({ activeModule, activeList }) => (
  <Container maxWidth='md'>
    <Box>
      <Typography variant='h5'>{activeModule.title}</Typography>
      <Typography variant='h6'>{activeList.title}</Typography>
      <Typography>{activeList.tracklist}</Typography>
      {/* <List>
        {activeLesson.tracklist.map((list) => (
          <ListItem key={list}>
            <ListItemText primary={list} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  </Container>
)

export default connect((state) => ({
  activeModule: state.release.activeModule,
  activeList: state.release.activeList,
}))(Content)
