import { createStore } from 'redux'

const INITIAL_STATE = {
  activeLesson: null,
  activeModule: null,
  modules: [
    {
      id: 1,
      title: 'Module one',
      lessons: [
        { id: 1, title: 'lesson one' },
        { id: 2, title: 'lesson two' },
      ],
    },
    {
      id: 2,
      title: 'Module two',
      lessons: [
        { id: 1, title: 'lesson one' },
        { id: 2, title: 'lesson two' },
      ],
    },
  ],
}

function reducer(state = INITIAL_STATE, action) {
  console.log(action)

  return state
}

const store = createStore(reducer)

export default store
