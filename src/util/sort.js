export const comparisonFunction = (attrName, sortDirection = 'asc') => {
    return (a, b) => {
        const A = a[attrName]
        const B = b[attrName]

        if (A > B) {
            return sortDirection === 'asc' ? 1 : -1
        }

        if (A < B) {
            return sortDirection === 'asc' ? -1 : 1
        }

        return 0
    }
}
