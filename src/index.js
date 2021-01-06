import React, { useState, useEffect } from 'react'

import TableContext from './contexts/TableContext'

import { comparisonFunction } from './util/sort'

import TextboxFilter from '../src/components/TextboxFilter'
import TableFast from '../src/components/Table'
import Header from '../src/components/Header'
import Body from '../src/components/Body'
import Footer from '../src/components/Footer'
import { default as DataTypes } from '../src/components/TableDataTypes'

import { Container } from './styles/style'

export const TableDataTypes = DataTypes

export const TableHeader = Header
export const TableBody = Body
export const TableFooter = Footer

export const Table = ({ children, filterable = false, style = {} }) => {
  const [headers, setHeaders] = useState([])
  const [data, setData] = useState([])
  const [searchedData, setSearchedData] = useState([])
  const [search, setSearch] = useState('')
  const [sortDirection, setSortDirection] = useState('ASC')
  const [sortedBy, setSortedBy] = useState(null)

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
        dataTypes: DataTypes
      }}
    >
      <Container>
        {filterable && <TextboxFilter />}

        <TableFast style={style}>{children}</TableFast>
      </Container>
    </TableContext.Provider>
  )
}
