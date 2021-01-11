import React, { useContext } from 'react'

import TableContext from '../../contexts/TableContext'

import { TBody } from './styles'

export default function ({ data, style = {}, className = '' }) {
    const { setData, searchedData, headers } = useContext(TableContext)

    setData(data)

    return (
        <TBody style={style} className={className}>
            {searchedData.map((item) => (
                <tr key={item.id}>
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
