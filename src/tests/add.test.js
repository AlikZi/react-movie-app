

const addTwo = (a, b) => (a+b);

test("Add two numbers", () =>{
    const num = addTwo(2,3);
    expect(num).toBe(5);
})