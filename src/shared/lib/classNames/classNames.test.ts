import { classNames } from "shared/lib/classNames/classNames";

describe('classNames', () => {
    test('classNames with 1 param', () => {
        expect(classNames("SomeClass", {}, [])).toBe("SomeClass");
    })

    test('classNames with additional', () => {
        const expected = 'class1 class2 class3'
        expect(classNames('class1', {}, ['class2 class3'])).toBe(expected)
    })

    test('classNames with Mode', () => {
        const expected = 'class1 class2 class3 hover focus'
        expect(classNames('class1', {hover:true, focus: true}, ['class2 class3'])).toBe(expected)
    })

    test('classNames with Mode = false', () => {
        const expected = 'class1 class2 class3 hover'
        expect(classNames('class1', {hover:true, focus: false}, ['class2 class3'])).toBe(expected)
    })
})