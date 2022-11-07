import React, { Component } from 'react'

import { connect } from 'react-redux'

const Video = ({ activeModule, activeLesson }) => (
  <div>
    <strong>{activeModule.title}</strong>
    <span>{activeLesson.title}</span>
  </div>
)

export default connect((state) => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson,
}))(Video)
