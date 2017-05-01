import React from 'react'

const Breadcrumbs = ({items}) => (
  <h1 className="breadcrumbs">{items.join(' / ')}</h1>
)

export default Breadcrumbs
