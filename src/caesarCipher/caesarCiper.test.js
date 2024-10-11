import { caesarCipher } from "./caesarCipher";
it("key3",()=>{
    expect(caesarCipher('abc',3)).toBe('def');
});

it("keys1",()=>{
    expect(()=>caesarCipher(123,3)).toThrow("Input type must be string");
    
})
it("key4",()=>{
    expect(caesarCipher('ABC',3)).toBe('DEF')
})
it("keys",()=>{
    expect(caesarCipher('xyz',3)).toBe('abc')
})

it("keys",()=>{
    expect(caesarCipher('XYZ',3)).toBe('ABC')
})

it('keys',()=>{
    expect(caesarCipher('HELLO WORLD!',3)).toBe('KHOOR ZRUOG!')
})