import React from 'react'

import { Table } from './styles'

export default function ({ children, style = {} }) {
  return <Table style={style}>{children}</Table>
}
