import styled, { css } from 'styled-components'

import { ROTATE, OPACITY, SCALE } from '../../util/hover-effects'

function getEffect(effect) {
  switch (effect) {
    case ROTATE:
      return css`
        transform: scale(1.08) rotateZ(360deg);
      `
    case OPACITY:
      return css`
        opacity: 0.8;
      `
    case SCALE:
      return css`
        transform: scale(1.15);
      `
    default:
      return null
  }
}

export const TBody = styled.tbody`
  ${(props) =>
    props.clickable &&
    css`
      cursor: pointer;
    `}

  td {
    padding: 16px;

    &.action svg {
      cursor: pointer;
      transition: 300ms;

      &:hover {
        stroke-width: 3px;
      }
    }
  }
`

export const ActionCell = styled.td.attrs({
  className: 'action delete'
})`
  svg {
    &:hover {
      ${(props) => getEffect(props.hoverEffect)}
    }
  }
`
