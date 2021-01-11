import styled, { css } from 'styled-components'

export const THead = styled.thead`
    background-color: #0002;

    th {
        padding: 16px;

        ${(props) =>
            props.sortable &&
            css`
                cursor: pointer;

                svg {
                    margin: 0 8px;
                }
            `}

        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`
