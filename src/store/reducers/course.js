const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: 'SETS',
      lessons: [
        { id: 1, title: '01', tracklist: ['1', '2', '3', '4'] },
        { id: 2, title: '02', tracklist: ['1', '2', '3', '4'] },
      ],
    },
    {
      id: 2,
      title: 'ALBUNS',
      lessons: [
        { id: 1, title: '01', tracklist: ['1', '2', '3', '4'] },
        { id: 2, title: '02', tracklist: ['1', '2', '3', '4'] },
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
