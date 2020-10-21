import chai from "chai";
import { NodeUtils } from "../dist/@pure-function/jsutils.js";

const expect = chai.expect;

describe("NodeUtils tests", () => {
    describe("isWindowAvailable", () => {
        it("no args", () => {
            expect(NodeUtils.isWindowAvailable()).to.be.true;
        });
    });
});
