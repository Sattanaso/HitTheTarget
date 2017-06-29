const expect = require("chai").expect;

describe("2 + 2", function () {
	it("return 4", function () {
		let result = 2 + 2;

		let expected = 4;
		
		expect(expected).to.eql(result);
	});
});