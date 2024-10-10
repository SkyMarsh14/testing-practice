import { capitalize } from "./capitalize";

it('test1',()=>{
    expect(capitalize('apple')).toBe('Apple');
});

it('test2',()=>{
    expect(capitalize('linux')).toBe('Linux');
});

it('test3',()=>{
    expect(capitalize('^$*hello')).toBe('^$*Hello')
});
it('test4',()=>{
    expect(capitalize('GOOD')).toBe('GOOD');
});