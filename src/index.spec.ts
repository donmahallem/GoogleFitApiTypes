/*!
 * Source https://github.com/donmahallem/TrapezeApiTypes
 */

import { expect } from "chai";
import "mocha";
import * as index from "./index";

describe("index", () => {
    it("should contain FlowApiValidator", () => {
        expect(index).to.not.equal(undefined);
    });
});
