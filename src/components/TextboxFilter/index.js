import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'

import TableContext from '../../contexts/TableContext'

import { Container } from './styles'

export default function () {
  const { setSearch } = useContext(TableContext)

  return (
    <Container>
      <input
        type='text'
        placeholder='Buscar...'
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <FaSearch size={14} />
    </Container>
  )
}
