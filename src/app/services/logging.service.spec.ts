import { LoggingService } from "./logging.service";

describe("Logging Service",()=>{
    it("Log Method Test",()=>{
        let ls = new LoggingService(); // Arrange
        let sampleLogMessage = "Test Log";
        ls.log(sampleLogMessage); // Act

        expect(sampleLogMessage).toBe("Test Log");
        expect(ls).toBeDefined();
    });
});