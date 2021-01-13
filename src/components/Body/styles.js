import styled, { css } from 'styled-components'

export const TBody = styled.tbody`
    ${(props) =>
        props.clickable &&
        css`
            cursor: pointer;
        `}

    td {
        padding: 16px;
    }
`
