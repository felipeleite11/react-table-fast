import React from 'react'

import TableProvider from './contexts/TableContext'

import TextboxFilter from '../src/components/TextboxFilter'
import Table from '../src/components/Table'
import Header from '../src/components/Header'
import Body from '../src/components/Body'
import Footer from '../src/components/Footer'
import * as Formats from '../src/util/format'
import * as HoverEffects from '../src/util/hover-effects'
import * as AggregationFunctions from '../src/util/aggregation-functions'

import { Container } from './styles/style'

export const TableAggregationFunctions = AggregationFunctions
export const TableFormats = Formats
export const TableHoverEffects = HoverEffects

export const TableHeader = Header
export const TableBody = Body
export const TableFooter = Footer

export const TableFast = ({
    children,
    filterable = false,
    style = {},
    className = ''
}) => {
    return (
        <TableProvider>
            <Container>
                {filterable && (
                    <TextboxFilter position='right' style={{ width: '40%' }} />
                )}

                <Table style={style} className={className}>
                    {children}
                </Table>
            </Container>
        </TableProvider>
    )
}
