import React from 'react'

export const currency = (value, currency = 'BRL') => {
    value = value.toFixed(2).replace(/\D/g, '')
    value = Number(value) / 100
    value = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency
    })
    return value
}

export const avatar = (url, size = 40) => (
    <img src={url} alt='' style={{ width: size, height: size }} />
)

export const component = (component) => {
    const Component = component

    return <Component />
}
