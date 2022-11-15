import React from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CourseActions from '../../store/actions/course'

const Sidebar = ({ modules, dispatch, toggleLesson }) => (
    
    <Box sx={{ display: 'flex' }}>

      <AppBar
        position="fixed"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            title
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Content
        </Typography>

      </Box>
      <Drawer
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Divider />
        <List>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {<AddRoundedIcon />}
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
    </Box>
  
)

const mapSatateToProps = (state) => ({
  modules: state.course.modules,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CourseActions, dispatch)

export default connect(mapSatateToProps, mapDispatchToProps)(Sidebar)
