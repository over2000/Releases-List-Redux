import React from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Drawer from '@mui/material/Drawer'
import ListItemButton from '@mui/material/ListItemButton'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ReleaseActions from '../../store/actions/release'

const Sidebar = ({ modules, dispatch, toggleList }) => (
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
            {module.lists.map((list) => (
              <ListItemButton button onClick={() => toggleList(module, list)}>
                <ListItem key={list.title}>
                  <ListItemText primary={list.title} />
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
  modules: state.release.modules,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ReleaseActions, dispatch)

export default connect(mapSatateToProps, mapDispatchToProps)(Sidebar)
