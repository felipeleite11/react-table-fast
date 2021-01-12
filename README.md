# react-table-fast

> A library to render HTML tables with advanced features.

[![NPM](https://img.shields.io/npm/v/react-table-fast.svg)](https://www.npmjs.com/package/react-table-fast) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-table-fast
```
or
```bash
yarn add react-table-fast
```

## Usage

1. Create a container to position the table
2. In the header, associate the column names to the data attributes
3. In the body, just set the data to show
4. In the footer (optional), you can apply aggregation function as SUM, AVG or CNT (count)

```jsx
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
```

Expected result:

<p align="center">
	<img src="https://user-images.githubusercontent.com/54327441/104172845-a96b5f80-53e3-11eb-89f5-33d0ebb59c58.gif" height="300" width="460" alt="Demo screen" />
</p>

## License

MIT © [felipeleite11](https://github.com/felipeleite11)
