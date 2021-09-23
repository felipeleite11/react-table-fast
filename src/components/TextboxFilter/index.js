import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'

import { TableContext } from '../../contexts/TableContext'

import { Container } from './styles'

export default function ({
  style = {},
  className = '',
  position = 'left',
  placeholder = 'Search...'
}) {
  const { setSearch } = useContext(TableContext)

  return (
    <Container position={position}>
      <input
        type='text'
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        style={style}
        className={className}
      />
      <FaSearch size={14} />
    </Container>
  )
}
