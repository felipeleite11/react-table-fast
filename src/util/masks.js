export const currency = (value, currency = 'R$ ') =>
    `${currency} ${value.toFixed(2).replace('.', ',')}`
