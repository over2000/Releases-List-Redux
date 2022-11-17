const INITIAL_STATE = {
  activeList: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: 'SETS',
      lists: [
        { id: 1, title: '01', tracklist: ['1', '2', '3', '4'] },
        { id: 2, title: '02', tracklist: ['1', '2', '3', '4'] },
      ],
    },
    {
      id: 2,
      title: 'ALBUNS',
      lists: [
        { id: 1, title: '01', tracklist: ['1', '2', '3', '4'] },
        { id: 2, title: '02', tracklist: ['1', '2', '3', '4'] },
      ],
    },
  ],
}

export default function course(state = INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_LIST') {
    return {
      ...state,
      activeList: action.list,
      activeModule: action.module,
    }
  }

  return state
}
