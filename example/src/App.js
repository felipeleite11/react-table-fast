import React from 'react'
import { TableFast, TableHeader, TableBody, TableFooter, TableAggregationFunctions, TableFormats, TableHoverEffects } from 'react-table-fast'

import Hits from './Hits'

const containerStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const App = () => {
  // const [clickedRowData, setClickedRowData] = useState(null)

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
            { name: '', attr: 'avatar', format: TableFormats.avatar },
            { name: 'Name', attr: 'name' },
            { name: 'Hits', attr: 'hits', format: TableFormats.component },
            { name: 'Amount', attr: 'amount', format: TableFormats.currency }
          ]}
        />

        <TableBody
          data={[
            { id: 1, avatar: 'https://avatars.dicebear.com/api/human/a.svg', name: 'Luiz Araujo Pereira', age: 31, amount: 1280.45, hits: Hits },
            { id: 2, avatar: 'https://avatars.dicebear.com/api/human/b.svg', name: 'Mariana Cavalcanti Pereira', age: 24, amount: 1470.13, hits: Hits },
            { id: 3, avatar: 'https://avatars.dicebear.com/api/human/c.svg', name: 'Gabriela Aranda das Dores', age: 32, amount: 2170.77, hits: Hits },
            { id: 4, avatar: 'https://avatars.dicebear.com/api/human/d.svg', name: 'Helena Alexa Beltrão', age: 29, amount: 553.8, hits: Hits },
            { id: 5, avatar: 'https://avatars.dicebear.com/api/human/e.svg', name: 'Cristóvão Mário Vasques', age: 29, amount: 1683.8, hits: Hits },
            { id: 6, avatar: 'https://avatars.dicebear.com/api/human/f.svg', name: 'Malena Serrano Vega', age: 29, amount: 778.8, hits: Hits },
            { id: 7, avatar: 'https://avatars.dicebear.com/api/human/g.svg', name: 'Joana Beatriz Prado Sobrinho', age: 29, amount: 344.8, hits: Hits }
          ]}
          // handleRowClick={row => {
          //   setClickedRowData(row)
          // }}
          deletion={{
            handler: row => {
              console.log(`Deleting ${row?.name}'s row...`)
            },
            effect: 'fadeOutRight' // Accept any Animate.CSS animations
          }}
          hoverEffect={TableHoverEffects.ROTATE}
        />

        <TableFooter
          columns={[
            { text: 'TOTAL', colspan: 4 },
            {
              calculate: {
                type: TableAggregationFunctions.SUM,
                attr: 'amount',
                format: TableFormats.currency
              },
              colspan: 2
            }
          ]}
        />
      </TableFast>

      {/* {clickedRowData && <h4>{`${clickedRowData.name}'s row was clicked!`}</h4>} */}
    </div>
  )
}

export default App
