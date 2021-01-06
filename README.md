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

```jsx
import React, { Component } from 'react'

import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableDataTypes
} from 'react-table-fast'

const App = () => {
  render() {
    return
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
            { id: 1, name: 'Elvis', age: 31 },
            { id: 2, name: 'Ana', age: 24 },
            { id: 3, name: 'John', age: 32 },
            { id: 4, name: 'Will', age: 29 }
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
  }
}

export default App
```

Expected result:

|  Name 	| Age 	|
|:-----:	|:---:	|
| Elvis 	|  31 	|
|  Ana  	|  24 	|
|  John 	|  32 	|
| Will  	| 29  	|
| Total 	| 116 	|

## License

MIT © [felipeleite11](https://github.com/felipeleite11)
