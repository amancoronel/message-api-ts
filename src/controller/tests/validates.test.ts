import validate from "../validate";

test('validate message Hello', () => {
    expect(validate("Hello, I’m John")).toBe("Welcome to StationFive.");
});

test('validate message Goodbye', () => {
    expect(validate("Goodbye John")).toBe("Thank you, see you around.");
});