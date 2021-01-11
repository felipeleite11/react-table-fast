import React, { useContext } from 'react'

import TableContext from '../../contexts/TableContext'

import { TFoot } from './styles'

export default function ({ columns, style = {}, className = '' }) {
    const { searchedData, dataTypes } = useContext(TableContext)

    function calculate(params) {
        if (!params) {
            return ''
        }

        const { type, attr, format } = params

        switch (type) {
            case dataTypes.SUM:
                const sum = searchedData.reduce(
                    (result, item) => result + item[attr],
                    0
                )
                return format?.(sum) || sum

            case dataTypes.AVG:
                const avg =
                    searchedData.reduce(
                        (result, item) => result + item[attr],
                        0
                    ) / searchedData.length
                return format?.(avg) || avg

            default:
                return ''
        }
    }

    return (
        <TFoot style={style} className={className}>
            <tr>
                {columns.map((item, index) => (
                    <td key={index} colSpan={item.colspan || 1}>
                        {item.text ||
                            (item.calculate ? calculate(item.calculate) : '')}
                    </td>
                ))}
            </tr>
        </TFoot>
    )
}
