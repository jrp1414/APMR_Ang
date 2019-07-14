export class Student{
    StudentId: number;
    FirstName: string;
    LastName: string;
    MobileNo: string;
    EmailId:string;
    Address:Address; 
}

export class Address{
    AddressId: number;
    AddLine1: string;
    AddLine2: string;
    AddLine3: string;
    City: string;
    State: string;
}