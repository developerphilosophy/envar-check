import { expect } from "chai";
import { envCheck, Severity } from "../src/index";

describe("UNIT: Tests DEBUG severity basic functioning", () => {
	function setEnvVar() {
		process.env.TEST = "Test";
	}

	function unsetEnvVar() {
		delete process.env["TEST"];
	}

	it("Should return false for when env variable not set", () => {
		const result = envCheck("TEST", Severity.DEBUG);
		expect(result).to.be.false;
	});

	it("Should return true if env variable set", () => {
		setEnvVar();
		const result = envCheck("TEST", Severity.DEBUG);
		expect(result).to.be.true;
		unsetEnvVar();
	});

	it("Should accept array of env variables to check and return false even if one not set", () => {
		const result = envCheck(["TEST", "TEST1"], Severity.DEBUG);
		expect(result).to.be.false;
	});

	it("Should return true if all env variables in array are set", () => {
		setEnvVar();
		process.env.TEST1 = "something";
		const result = envCheck(["TEST", "TEST1"], Severity.DEBUG);
		expect(result).to.be.true;
		unsetEnvVar();
		delete process.env.TEST1;
	});
});

describe("UNIT: Test WARN severity basic functioning", () => {
	function setEnvVar() {
		process.env.TEST = "Test";
	}

	function unsetEnvVar() {
		delete process.env["TEST"];
	}

	it("Should return false for when env variable not set", () => {
		const result = envCheck("TEST", Severity.WARN);
		expect(result).to.be.false;
	});

	it("Should return true if env variable set", () => {
		setEnvVar();
		const result = envCheck("TEST", Severity.WARN);
		expect(result).to.be.true;
		unsetEnvVar();
	});

	it("Should accept array of env variables to check and return false even if one not set", () => {
		const result = envCheck(["TEST", "TEST1"], Severity.WARN);
		expect(result).to.be.false;
	});

	it("Should return true if all env variables in array are set", () => {
		setEnvVar();
		process.env.TEST1 = "something";
		const result = envCheck(["TEST", "TEST1"], Severity.WARN);
		expect(result).to.be.true;
		unsetEnvVar();
		delete process.env.TEST1;
	});
});

/**
 * Note: Not writing tests for FATAL severity checks as process exists
 * if environment variable not set, the causing the test to fail anyway
 */
