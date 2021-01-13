import React, { useState } from "react"

import { TableFast, TableHeader, TableBody, TableFooter, TableAggregationFunctions, TableMasks, TableHoverEffects } from "react-table-fast"

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
            { id: 1, name: 'Luiz Araujo Pereira', age: 31, amount: 1280.45 },
            { id: 2, name: 'Mariana Cavalcanti Pereira', age: 24, amount: 1470.13 },
            { id: 3, name: 'Gabriela Aranda das Dores', age: 32, amount: 2170.77 },
            { id: 4, name: 'Helena Alexa Beltrão', age: 29, amount: 553.8 },
            { id: 5, name: 'Cristóvão Mário Vasques', age: 29, amount: 1683.8 },
            { id: 6, name: 'Malena Serrano Vega', age: 29, amount: 778.8 },
            { id: 7, name: 'Joana Beatriz Prado Sobrinho', age: 29, amount: 344.8 }
          ]}
          // handleRowClick={row => {
          //   setClickedRowData(row)
          // }}
          deletion={{
            handler: row => {
              console.log(`Deleting ${row?.name}'s row...`)
            },
            effect: 'fadeOutRight' // Accept any Animate.CSS animation
          }}
          hoverEffect={TableHoverEffects.SCALE}
        />

        <TableFooter
          columns={[
            { text: 'TOTAL', colspan: 3 },
            {
              calculate: {
                type: TableAggregationFunctions.SUM,
                attr: 'amount',
                format: TableMasks.currency
              },
              colspan: 2
            }
          ]}
        />
      </TableFast>

      {clickedRowData && <h4>{`${clickedRowData.name}'s row was clicked!`}</h4>}
    </div>
  )
}

export default App
