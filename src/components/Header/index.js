import React, { Fragment, useContext } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

import TableContext from '../../contexts/TableContext'

import { THead } from './styles'

export default function ({ columns, sortable = true }) {
  const { setHeaders, sortData, sortDirection, sortedBy } = useContext(
    TableContext
  )

  setHeaders(columns)

  return (
    <THead sortable={sortable}>
      <tr>
        {columns.map((item) => (
          <th key={item.name} onClick={() => sortable && sortData(item.attr)}>
            {item.name}

            {sortedBy === item.attr && (
              <Fragment>
                {sortDirection === 'asc' ? (
                  <FaChevronUp size={12} />
                ) : (
                  <FaChevronDown size={12} />
                )}
              </Fragment>
            )}
          </th>
        ))}
      </tr>
    </THead>
  )
}
