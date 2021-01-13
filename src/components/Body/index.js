import React, { useContext } from 'react'

import TableContext from '../../contexts/TableContext'

import { TBody } from './styles'

export default function ({ data, handleRowClick, style = {}, className = '' }) {
    const { setData, searchedData, headers } = useContext(TableContext)

    setData(data)

    return (
        <TBody style={style} className={className} clickable={!!handleRowClick}>
            {searchedData.map((item) => (
                <tr key={item.id} onClick={() => handleRowClick?.(item)}>
                    {headers.map((header) => (
                        <td key={header.attr}>
                            {header.format?.(item[header.attr]) ||
                                item[header.attr]}
                        </td>
                    ))}
                </tr>
            ))}
        </TBody>
    )
}
