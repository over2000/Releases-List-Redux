const INITIAL_STATE = {
  activeList: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: 'SETS',
      lists: [
        {
          id: 1,
          title: 'BOILER ROOM',
          tracklist: [
            'Floating Points - Sea',
            'Aphex Twin - Watch',
            'SIA - WORK',
            'MF DOOM - CLASS',
          ],
        },
        {
          id: 2,
          title: 'RINSE FM',
          tracklist: [
            'Boards of Canda - Sustance',
            'Radiohead - Sprint',
            'Paper Trails - DARKSIE',
            'Glue - Bicep',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'ALBUNS',
      lists: [
        {
          id: 1,
          title: 'IFSS001',
          tracklist: ['Start', 'Decay', 'Gain', 'FullOFF'],
        },
        {
          id: 2,
          title: 'IFSS002',
          tracklist: ['LessCode', 'Hardline', 'Softway', 'BigSierra'],
        },
      ],
    },
  ],
}

export default function list(state = INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_LIST') {
    return {
      ...state,
      activeList: action.list,
      activeModule: action.module,
    }
  }

  return state
}
