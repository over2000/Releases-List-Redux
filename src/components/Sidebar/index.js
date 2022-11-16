import React from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Drawer from '@mui/material/Drawer'
import ListItemButton from '@mui/material/ListItemButton'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CourseActions from '../../store/actions/course'

const Sidebar = ({ modules, dispatch, toggleLesson }) => (
  <Drawer variant='permanent' anchor='right'>
    <List
      sx={{
        position: 'relative',
        overflow: 'auto',
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {modules.map((module) => (
        <li key={`section-${module.id}`}>
          <ul>
            <ListSubheader>{module.title}</ListSubheader>
            {module.lessons.map((lesson) => (
              <ListItemButton
                button
                onClick={() => toggleLesson(module, lesson)}
              >
                <ListItem key={lesson.title}>
                  <ListItemText primary={lesson.title} />
                </ListItem>
              </ListItemButton>
            ))}
          </ul>
        </li>
      ))}
    </List>
  </Drawer>
)

const mapSatateToProps = (state) => ({
  modules: state.course.modules,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CourseActions, dispatch)

export default connect(mapSatateToProps, mapDispatchToProps)(Sidebar)
