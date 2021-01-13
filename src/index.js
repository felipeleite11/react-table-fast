import React, { useState, useEffect } from 'react'

import TableContext from './contexts/TableContext'

import { comparisonFunction } from './util/sort'

import TextboxFilter from '../src/components/TextboxFilter'
import Table from '../src/components/Table'
import Header from '../src/components/Header'
import Body from '../src/components/Body'
import Footer from '../src/components/Footer'
import * as Masks from '../src/util/masks'
import * as HoverEffects from '../src/util/hover-effects'
import * as AggregationFunctions from '../src/util/aggregation-functions'

import { Container } from './styles/style'

export const TableAggregationFunctions = AggregationFunctions
export const TableMasks = Masks
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
    const [headers, setHeaders] = useState([])
    const [data, setData] = useState([])
    const [searchedData, setSearchedData] = useState([])
    const [search, setSearch] = useState('')
    const [sortDirection, setSortDirection] = useState('ASC')
    const [sortedBy, setSortedBy] = useState(null)
    const [deletion, setDeletion] = useState(null)

    function filterApply() {
        setSearchedData(
            data.filter((item) => item.name.toLowerCase().search(search) >= 0)
        )
    }

    useEffect(() => {
        setSearchedData(data)
    }, [data])

    useEffect(() => {
        filterApply()
    }, [search])

    function sortData(attr) {
        const sorted = data.sort(comparisonFunction(attr, sortDirection))

        setSortedBy(attr)
        setData(sorted)
        filterApply()

        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    }

    return (
        <TableContext.Provider
            value={{
                data,
                setData,
                headers,
                setHeaders,
                search,
                setSearch,
                setSearchedData,
                searchedData,
                sortData,
                sortDirection,
                sortedBy,
                aggregationFunctions: AggregationFunctions,
                setDeletion,
                deletion
            }}
        >
            <Container>
                {filterable && (
                    <TextboxFilter position='right' style={{ width: '40%' }} />
                )}

                <Table style={style} className={className}>
                    {children}
                </Table>
            </Container>
        </TableContext.Provider>
    )
}
