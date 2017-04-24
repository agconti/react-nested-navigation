export const ADD_ROOT_CHANNEL = 'ADD_ROOT_CHANNEL'
export const RESET_ROOT_CHANNELS = 'RESET_ROOT_CHANNELS'
export const ADD_CHANNEL = 'ADD_CHANNEL'
export const ADD_BREADCRUMB = 'ADD_BREADCRUMB'
export const REMOVE_BREADCRUMB = 'REMOVE_BREADCRUMB'

const defaultRootChannelState = []
const defaultChannelState = {}
const defaultBreadcrumbState = {}

export const rootChannels = (state=defaultRootChannelState, action) => {
  const func = {
    [ADD_ROOT_CHANNEL]: (state, { channel: { id }}) => [...state, id]
  , [RESET_ROOT_CHANNELS]: () => []
  }[action.type]
  return func? func(state, action) : state
}

export const channels = (state=defaultChannelState, action) => {
  switch(action.type) {
    case ADD_CHANNEL:
      const { channel } = action
      return {
        ...state
      , ...{[channel.id]: channel}
      }
    default:
      return state
  }
}

export const breadcrumbs = (state=defaultBreadcrumbState, action) => {
  if (action.type === ADD_BREADCRUMB) {
    return [...state, action.channel.id]
  }
  if (action.type === REMOVE_BREADCRUMB) {
    return state.slice(action.channel.id, 1)
  }
  return state
}

export const addRootChannel = channel => ({ type: ADD_ROOT_CHANNEL, channel })
export const addChannel = channel => ({ type: ADD_CHANNEL, channel })
export const addBreadcrumb = channel => ({ type: ADD_BREADCRUMB, channel })
