import React, { useContext, useEffect } from 'react'
import { FiTrash } from 'react-icons/fi'

import { TableContext } from '../../contexts/TableContext'

import { ROTATE } from '../../util/hover-effects'

import { TBody, ActionCell } from './styles'

export default function ({
  data: originalData,
  handleRowClick,
  hoverEffect = ROTATE,
  deletion,
  style = {},
  className = ''
}) {
  const { data, setData, searchedData, headers, setDeletion } =
    useContext(TableContext)

  if (deletion && !deletion.handler) {
    throw new Error('The deletion handler must be have defined.')
  }

  function handleDelete(row) {
    const rowIndex = data.map((d) => d.id).indexOf(row.id)
    document
      .querySelector(`.table-fast tbody tr:nth-child(${rowIndex + 1})`)
      .classList.add(`animate__${deletion.effect || 'fadeOut'}`)

    deletion.handler(row)

    setTimeout(() => {
      setData(data.filter((item) => item.id !== row.id))
    }, 800)
  }

  useEffect(() => {
    setData(originalData)

    setDeletion(deletion)
  }, [originalData])

  return (
    <TBody style={style} className={className} clickable={!!handleRowClick}>
      {searchedData.map((item) => (
        <tr
          key={item.id}
          onClick={() => handleRowClick?.(item)}
          className='animate__animated animate__fast'
        >
          {headers.map((header) => (
            <td key={header.attr}>
              {header.format?.(item[header.attr], item.id) || item[header.attr]}
            </td>
          ))}

          {deletion?.handler && (
            <ActionCell hoverEffect={hoverEffect}>
              <FiTrash
                size={16}
                color='#f44336'
                onClick={() => {
                  item && handleDelete(item)
                }}
              />
            </ActionCell>
          )}
        </tr>
      ))}
    </TBody>
  )
}
