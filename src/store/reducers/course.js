const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
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

export default function course(state = INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_LESSON') {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    }
  }

  return state
}
