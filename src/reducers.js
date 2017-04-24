export const ADD_ROOT_CHANNEL = 'ADD_ROOT_CHANNEL'
export const ADD_CHANNEL = 'ADD_CHANNEL'
export const ADD_BREADCRUMB = 'ADD_BREADCRUMB'

const defaultRootChannelState = []
const defaultChannelState = {}
const defaultBreadcrumbState = {}

export const rootChannels = (state=defaultRootChannelState, action) => {
  return state
}

export const channels = (state=defaultChannelState, action) => {
  return state
}

export const breadcrumbs = (state=defaultBreadcrumbState, action) => {
  return state
}

export const addRootChannel = channel => ({ type: ADD_ROOT_CHANNEL, channel })
export const addChannel = channel => ({ type: ADD_CHANNEL, channel })
export const addBreadcrumb = channel => ({ type: ADD_BREADCRUMB, channel })
