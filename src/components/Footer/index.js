import React, { useContext } from 'react'

import TableContext from '../../contexts/TableContext'

import { TFoot } from './styles'

export default function ({ columns }) {
  const { searchedData, dataTypes } = useContext(TableContext)

  function calculate(params) {
    if (!params) {
      return ''
    }

    const { type, attr } = params

    switch (type) {
      case dataTypes.SUM:
        return searchedData.reduce((result, item) => result + item[attr], 0)

      default:
        return ''
    }
  }

  return (
    <TFoot>
      <tr>
        {columns.map((item, index) => (
          <td key={index} colSpan={item.colspan || 1}>
            {item.text || (item.calculate ? calculate(item.calculate) : '')}
          </td>
        ))}
      </tr>
    </TFoot>
  )
}
