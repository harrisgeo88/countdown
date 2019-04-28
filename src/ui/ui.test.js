import { position, spacer, getDiff } from ".";

describe("given position function", () => {
  describe("when given vertical input", () => {
    it("should return 50% of the terminal height", () => {
      const yAxis = process.stdout.rows / 2;
      expect(position()).toEqual(yAxis);
    });
  });
  describe("when given non vertical input", () => {
    it("should return 50% of the terminal width", () => {
      const xAxis = process.stdout.columns / 2;
      expect(position(false)).toEqual(xAxis);
    });
  });
});

describe("given spacer function", () => {
  describe("when given vertical input", () => {
    it("should return a space character", () => {
      expect(spacer(false)).toEqual(" ");
    });
  });
  describe("when given non vertical input", () => {
    it("should return new line", () => {
      expect(spacer()).toEqual("\n");
    });
  });
});

describe("given getDiff function", () => {
  describe("when given vertical input", () => {
    it("should return 3", () => {
      expect(getDiff()).toEqual(3);
    });
  });
  describe("when given non vertical input", () => {
    it("should return 20", () => {
      expect(getDiff(false)).toEqual(20);
    });
  });
  describe("when given non vertical input and 3600 seconds", () => {
    it("should return 25", () => {
      expect(getDiff(false, 3600)).toEqual(25);
    });
  });
});
