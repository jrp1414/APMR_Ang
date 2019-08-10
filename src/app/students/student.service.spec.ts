import { StudentService } from "./student.service";
import { of } from "rxjs";
import { Student } from "./student";

describe("Testing Student Service", () => {
    let ss: StudentService;
    let mockHttp;
    beforeEach(() => {
        mockHttp = jasmine.createSpyObj("http", ["get", "post", "put", "delete"]);
        ss = new StudentService(mockHttp);
    });

    describe("GetStudents Method", () => {
        it("Should be returning an Observable", () => {
            mockHttp.get.and.returnValue(of(10));

            let result = ss.GetStudents();

            expect(result.value).toBe(10);
        });
    });

    describe("AddStudent Method", () => {
        it("Should Have Been Called with http://localhost:51529/AddStudent/ and an Object", () => {
            mockHttp.post.and.returnValue(of(true));
            let student:Student = {
                StudentId: 1,
                FirstName: "fdsf",
                LastName: "sfddsf",
                MobileNo: "sfsdf",
                EmailId: "sfdsf",
                Address: {
                    AddressId: 1,
                    AddLine1: "fdf",
                    AddLine2: "dfdsf",
                    AddLine3: "ssdf",
                    City: "sdfdsf",
                    State: "fdsf"
                }
            };
            let result = ss.AddStudent(student);

            expect(mockHttp.post).toHaveBeenCalledWith("http://localhost:51529/AddStudent/",jasmine.any(Object));
        });
    });
});