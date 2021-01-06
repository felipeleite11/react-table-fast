import React, { useContext } from 'react'

import TableContext from '../../contexts/TableContext'

export default function ({ data }) {
  const { setData, searchedData, headers } = useContext(TableContext)

  setData(data)

  return (
    <tbody>
      {searchedData.map((item) => (
        <tr key={item.id}>
          {headers.map((header) => (
            <td key={header.attr}>{item[header.attr]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
