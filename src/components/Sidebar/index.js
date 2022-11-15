import React from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CourseActions from '../../store/actions/course'

const Sidebar = ({ modules, dispatch, toggleLesson }) => (
    
<List
sx={{
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
  position: 'relative',
  overflow: 'auto',
  maxHeight: 300,
  '& ul': { padding: 0 },
}}
subheader={<li />}
>
{modules.map((module) => (
  <li key={`section-${module.id}`}>
    <ul>
      <ListSubheader>{module.title}</ListSubheader>
      {module.lessons.map((lesson) => (
        <ListItem key={lesson.title}>
          <ListItemText button onClick={() => toggleLesson(module, lesson)} primary={lesson.title} />
        </ListItem>
      ))}
    </ul>
  </li>
))}
</List>
  
)

const mapSatateToProps = (state) => ({
  modules: state.course.modules,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CourseActions, dispatch)

export default connect(mapSatateToProps, mapDispatchToProps)(Sidebar)
