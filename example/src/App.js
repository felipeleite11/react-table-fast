import React from "react"

import { Table, TableHeader, TableBody, TableFooter, TableDataTypes } from "react-table-fast"

const App = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Table
        filterable
        style={{ width: 600 }}
      >
        <TableHeader
          columns={[
            { name: 'Nome', attr: 'name' },
            { name: 'Idade', attr: 'age' }
          ]}
        />

        <TableBody
          data={[
            { id: 1, name: 'Felipe', age: 31 },
            { id: 2, name: 'Ana', age: 24 },
            { id: 3, name: 'João', age: 32 },
            { id: 4, name: 'Pedro', age: 29 }
          ]} />

          <TableFooter
            columns={[
              { text: 'TOTAL', colspan: 1 },
              {
                calculate: {
                  type: TableDataTypes.SUM,
                  attr: 'age'
                }
              }
            ]}
          />
      </Table>
    </div>
  )
}

export default App
