import { getQueryParams } from "./addQueryParams"

describe('addQueryParams', () => {
    test('With 1 param', () => {
        const params = getQueryParams({
            query: 'car',
        })

        expect(params).toBe('?query=car')
    })
    test('With 2 params', () => {
        const params = getQueryParams({
            query: 'car',
            view: 'list'
        })

        expect(params).toBe('?query=car&view=list')
    })

    test('With undefined', () => {
        const params = getQueryParams({
            query: 'car',
            view: undefined
        })

        expect(params).toBe('?query=car')
    })
})