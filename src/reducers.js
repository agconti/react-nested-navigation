export const ADD_ROOT_CHANNEL = 'ADD_ROOT_CHANNEL'
export const RESET_ROOT_CHANNELS = 'RESET_ROOT_CHANNELS'
export const ADD_CHANNEL = 'ADD_CHANNEL'
export const ADD_BREADCRUMB = 'ADD_BREADCRUMB'
export const REMOVE_BREADCRUMB = 'REMOVE_BREADCRUMB'
export const TOGGLE_BREADCRUMB = 'TOGGLE_BREADCRUMB'

const defaultRootChannelState = []
const defaultChannelState = {}
const defaultBreadcrumbState = {}

const createReducer = (defaultState, cases) => (
  (state=defaultState, action) => {
    const func = cases[action.type]
    return func? func(state, action) : state
  }
)

export const rootChannels = createReducer(defaultRootChannelState, {
    [ADD_ROOT_CHANNEL]: (state, { channel: { id }}) => [...state, id]
  , [RESET_ROOT_CHANNELS]: () => []
})

export const channels = createReducer(defaultChannelState, {
  [ADD_CHANNEL]: (state, { channel }) => ({...state, ...{[channel.id]: channel}})
})

export const breadcrumbs = createReducer(defaultBreadcrumbState, {
  [ADD_BREADCRUMB]: (state, { channel: { id }}) => [...state, id]
, [REMOVE_BREADCRUMB]: (state, { channel: { id }}) => state.filter(activeId => activeId !== id)
, [TOGGLE_BREADCRUMB](state, { channel: { id }}) {
    if (state.includes(id)) {
      return state.filter(activeId => activeId !== id)
    }
    return [...state, id]
  }
})

export const addRootChannel = channel => ({ type: ADD_ROOT_CHANNEL, channel })
export const addChannel = channel => ({ type: ADD_CHANNEL, channel })
export const toggleBreadcrumb = (rootChannelId, channel) => ({ type: TOGGLE_BREADCRUMB, rootChannelId, channel })
