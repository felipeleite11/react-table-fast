import React, { createContext, useState, useEffect } from 'react'

import { comparisonFunction } from '../util/sort'
import * as AggregationFunctions from '../util/aggregation-functions'

export const TableContext = createContext()

const TableProvider = ({ children }) => {
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
            {children}
        </TableContext.Provider>
    )
}

export default TableProvider
