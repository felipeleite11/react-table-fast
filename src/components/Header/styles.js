import styled, { css } from 'styled-components'

export const THead = styled.thead`
  background-color: pink;

  th {
    ${(props) =>
      props.sortable &&
      css`
        cursor: pointer;

        svg {
          margin-left: 8px;
        }
      `}
  }
`
