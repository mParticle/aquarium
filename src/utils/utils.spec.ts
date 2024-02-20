import { getInitials } from "./utils";

describe('Testing getInitials', () => {
    it.each([
        ["Ren & Stimpy", "RS"],
        ["Ren & Stimpy-Wein", "RS"],
        ["Ren", "R"]
    ])('it should take \"%s\" and return \"%s\"', (words, expectedInitials) => {
        // act
        const actualInitials = getInitials(words);

        // assert
        expect(actualInitials).toBe(expectedInitials);
    });
});