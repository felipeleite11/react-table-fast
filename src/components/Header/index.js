import React, { Fragment, useContext } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

import TableContext from '../../contexts/TableContext'

import { THead } from './styles'

export default function ({
    columns,
    sortable = true,
    style = {},
    className = ''
}) {
    const { setHeaders, sortData, sortDirection, sortedBy } = useContext(
        TableContext
    )

    setHeaders(columns)

    return (
        <THead sortable={sortable} style={style} className={className}>
            <tr>
                {columns.map((item) => (
                    <th
                        key={item.name}
                        onClick={() => sortable && sortData(item.attr)}
                        style={item.style || {}}
                    >
                        <div>
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
                        </div>
                    </th>
                ))}
            </tr>
        </THead>
    )
}
