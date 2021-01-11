import styled from 'styled-components'

export const Container = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: ${(props) =>
        props.position === 'left' ? 'flex-start' : 'flex-end'};

    input {
        padding: 0 8px !important;
        border-radius: 4px;
        outline: none;
        border: solid 1px grey;
    }

    svg {
        margin-left: 8px;
    }
`
