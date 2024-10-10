import { reverseString } from "./reverseString";
it("test1",()=>{
    expect(reverseString("hello")).toBe("olleh");
});

it("test2",()=>{
    expect(reverseString(12)).toBe(null);
})