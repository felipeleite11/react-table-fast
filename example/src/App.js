import React from "react"

import { Table, TableHeader, TableBody, TableFooter, TableDataTypes, TableMasks } from "react-table-fast"

const App = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Table
        filterable
        style={{ width: 600 }}
        className="highlight"
      >
        <TableHeader
          columns={[
            { name: 'Name', attr: 'name' },
            { name: 'Age', attr: 'age' },
            { name: 'Amount', attr: 'amount', format: TableMasks.currency }
          ]}
        />

        <TableBody
          data={[
            { id: 1, name: 'Felipe', age: 31, amount: 1280.45 },
            { id: 2, name: 'Ana', age: 24, amount: 1470.13 },
            { id: 3, name: 'João', age: 32, amount: 2170.77 },
            { id: 4, name: 'Pedro', age: 29, amount: 1421.8 }
          ]} />

          <TableFooter
            columns={[
              { text: 'TOTAL', colspan: 2 },
              {
                calculate: {
                  type: TableDataTypes.SUM,
                  attr: 'amount',
                  format: TableMasks.currency
                }
              }
            ]}
          />
      </Table>
    </div>
  )
}

export default App
