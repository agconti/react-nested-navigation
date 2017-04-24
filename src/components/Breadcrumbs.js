import React from 'react'

const Breadcrumbs = ({items}) => (
  <h1>{items.join(' / ')}</h1>
)

export default Breadcrumbs
