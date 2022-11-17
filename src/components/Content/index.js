import React, { Component } from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import { connect } from 'react-redux'

const Content = ({ activeList }) => (
  <Container maxWidth='md'>
    <Box>
      <Typography variant='h5'>{activeList.title}</Typography>
      <Typography>{Object.keys(activeList)[2]}</Typography>
      <List>
        {activeList?.tracklist?.map((list) => (
          <ListItem key={list}>
            <ListItemText primary={list} />
          </ListItem>
        ))}
      </List>
    </Box>
  </Container>
)

export default connect((state) => ({
  activeModule: state.release.activeModule,
  activeList: state.release.activeList,
}))(Content)
