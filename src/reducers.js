export const ADD_BREADCRUMB = 'ADD_BREADCRUMB'
export const ADD_CHANNEL = 'ADD_CHANNEL'

const defaultChannelState = {}
const defaultBreadcrumbState = {}

export const channels = (state=defaultChannelState, action) => {
  return state
}

export const breadcrumbs = (state=defaultBreadcrumbState, action) => {
  return state
}

export const addBreadcrumb = channel => ({ type: ADD_BREADCRUMB, channel })
export const addChannel = channel => ({ type: ADD_CHANNEL, channel })
