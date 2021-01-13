import React, { useState } from "react"

import { TableFast, TableHeader, TableBody, TableFooter, TableDataTypes, TableMasks } from "react-table-fast"

const containerStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const App = () => {
  const [clickedRowData, setClickedRowData] = useState(null)

  return (
    <div style={containerStyle}>
      <TableFast
        filterable
        style={{ width: 600 }}
        className="highlight"
      >
        <TableHeader
          columns={[
            { name: '#', attr: 'id', style: { width: 30 } },
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
          ]}
          handleRowClick={row => {
            setClickedRowData(row)
          }}
        />

        <TableFooter
          columns={[
            { text: 'TOTAL', colspan: 3 },
            {
              calculate: {
                type: TableDataTypes.SUM,
                attr: 'amount',
                format: TableMasks.currency
              }
            }
          ]}
        />
      </TableFast>

      {clickedRowData && <h4>{`${clickedRowData.name}'s row was clicked!`}</h4>}
    </div>
  )
}

export default App
