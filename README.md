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

import { TableFast, TableHeader, TableBody, TableFooter, TableAggregationFunctions, TableFormats } from "react-table-fast"

const App = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <TableFast
        filterable
        style={{ width: 600 }}
        className="highlight"
      >
        <TableHeader
          columns={[
            { name: 'Name', attr: 'name' },
            { name: 'Age', attr: 'age' },
            { name: 'Amount', attr: 'amount', format: TableFormats.currency }
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
                  type: TableAggregationFunctions.SUM,
                  attr: 'amount',
                  format: TableFormats.currency
                }
              }
            ]}
          />
      </TableFast>

    </div>
  )
}

export default App
```

Expected result:

<p align="center">
	<img src="https://user-images.githubusercontent.com/54327441/104172845-a96b5f80-53e3-11eb-89f5-33d0ebb59c58.gif" height="300" width="460" alt="Demo screen" />
</p>

It's possible to define an action by clicking on a table row using the **handleRowClick** attribute being passed to the **TableBody** component, as below:

```jsx
<TableBody
  data={[
    { id: 1, name: 'Name 1', age: 31, amount: 1280.45 },
    { id: 2, name: 'Name 2', age: 24, amount: 1470.13 },
    { id: 3, name: 'Name 3', age: 32, amount: 2170.77 },
    { id: 4, name: 'Name 4', age: 29, amount: 553.8 },
    { id: 5, name: 'Name 5', age: 43, amount: 1683.8 },
    { id: 6, name: 'Name 6', age: 20, amount: 778.8 },
    { id: 7, name: 'Name 7', age: 56, amount: 344.8 }
  ]}
  handleRowClick={row => {
    console.log(`${row.name}'s row has clicked!`)
  }}
/>
```
<br/>

## API Reference

<font size="4">`<TableFast>`</font>

It is a wrapper, containing all other components.

|  Attribute 	| Default 	|   Type  	|
|:----------:	|:-------:	|:-------:	|
| filterable 	|  false  	| boolean 	|
|  className 	|    ''   	|  string 	|
|    style   	|    {}   	|  object 	|

<br/><font size="4">`<TableBody>`</font>

Contains all the data to be listed.

|     Attribute    	|  Default  	|   Type   	|
|:----------------:	|:---------:	|:--------:	|
| data             	|    null   	|   array  	|
| handleRowClick   	| undefined 	| function 	|
| deletion         	| undefined 	|    {}    	|
| deletion.handler 	| undefined 	| function 	|
| deletion.effect  	| undefined 	| fadeOut  	|

<br/><font size="4">`<TableHeader>`</font>

Contains table headings, with parameterized titles and sorting action.

| Attribute 	|  Default  	|   Type  	|
|:---------:	|:---------:	|:-------:	|
|  columns  	| undefined 	|  array  	|
|  sortable 	|    true   	| boolean 	|
|   style   	|     {}    	|  object 	|
| className 	|     ''    	|  string 	|

<br/><font size="4">`<TableFooter>`</font>

It can display the sum of a given numeric column, the total number of records or an arithmetic mean, through the aggregation functions available in the **TableAggregationFunctions** component.

| Attribute 	|  Default  	|  Type  	|
|:---------:	|:---------:	|:------:	|
|  columns  	| undefined 	|  array 	|
|   style   	|     {}    	| object 	|
| className 	|     ''    	| string 	|

<br/><font size="4">`TableAggregationFunctions`</font>

Provides some aggregation functions to be used in conjunction with the TableFooter component.

| Constant 	|                 Implements                 	|
|:--------:	|:------------------------------------------:	|
|    AVG   	| Arithmetic mean over the specified column. 	|
|    SUM   	| The summation over the specified column.   	|
|    CNT   	| The total number of rows.                 	|

<br/><font size="4">`TableHoverEffects`</font>

Provides some hover effects for action icons.

|  Effect 	|
|:-------:	|
|  ROTATE 	|
|  SCALE  	|
| OPACITY 	|

<br/><font size="4">`TableFormats`</font>

It must be used within the objects contained in the date, passed to the **THeader** component. It provides some common masks that will be applied to all values in the specified column.

|  Mask   	|
|:-------:	|
| currency 	|
| avatar   	|
| component	|

<br/>

## License

MIT © [felipeleite11](https://github.com/felipeleite11)
