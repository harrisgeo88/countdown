import { secondsToHHMMSS, timerToSeconds } from ".";

describe("given timerToSeconds function", () => {
  describe("when given 30s string", () => {
    it("should return int 30", () => {
      const timer = "30s";
      expect(timerToSeconds(timer)).toEqual(30);
    });
  });
  describe("when given 30m30s string", () => {
    it("should return int 30", () => {
      const timer = "30m30s";
      expect(timerToSeconds(timer)).toEqual(1830);
    });
  });
  describe("when given 3h30m30s string", () => {
    it("should return int 30", () => {
      const timer = "3h30m30s";
      expect(timerToSeconds(timer)).toEqual(12630);
    });
  });
  describe("when given invalid string", () => {
    it('should return "invalid format"', () => {
      const timer = "20";
      expect(timerToSeconds(timer)).toEqual("Invalid date");
    });
  });
});

describe("given secondsToHHMMSS", () => {
  describe("when entering a seconds value", () => {
    it("should convert it HH:MM:SS format", () => {
      const timer = "20";
      expect(secondsToHHMMSS(timer)).toEqual("00:00:20");
    });
  });
  describe("when entering a minutes value", () => {
    it("should convert it HH:MM:SS format", () => {
      const timer = "130";
      expect(secondsToHHMMSS(timer)).toEqual("00:02:10");
    });
  });
  describe("when entering a hour value", () => {
    it("should convert it HH:MM:SS format", () => {
      const timer = "3710";
      expect(secondsToHHMMSS(timer)).toEqual("01:01:50");
    });
  });
});
