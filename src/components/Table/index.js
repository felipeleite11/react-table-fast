import React from 'react'

import { Table } from './styles'

export default function ({ children, style = {}, className }) {
    return (
        <Table style={style} className={className}>
            {children}
        </Table>
    )
}
