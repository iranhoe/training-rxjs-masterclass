import { test } from "../src/scripts/debugger";

describe("debugger test", function() {
    it("test some functions", function() {
        const value = test();

        expect(value).toBe(1);
    })

})