import { expect } from "chai";
import "mocha";
import { Shodan } from "../../lib/searcher";

describe("Shodan", () => {
  describe("#searchByURL", () => {
    it("should return URL", () => {
      const shodan = new Shodan();
      expect(shodan.searchByText("urlscan.io")).to.equal("https://www.shodan.io/search?query=urlscan.io");
    });
  });
});
