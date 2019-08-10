import { ProductService } from "./product.service";
import { Product } from "../models/product-api";

describe("Testing Product Service",()=>{
    let ps:ProductService;
    let mockLogging;
    beforeEach(()=>{
        mockLogging = jasmine.createSpyObj("xyz",["log"]);
        ps = new ProductService(mockLogging);
    });
    describe("Get Products method",()=>{
        it("Should be returning 5 elements",()=>{
            //Arrange
            // I do not have any arrange here, because I have already arranged everything required in the BeforeEach Function

            //Act
            let result = ps.GetProducts();

            //Assert
            expect(result.length).toBe(5);
        });
    });

    describe("Get Product Details method",()=>{
        it("Should be Product Name equals to Leaf Rake",()=>{
            //Arrange
            // I do not have any arrange here, because I have already arranged everything required in the BeforeEach Function
            
            //Act
            let result = ps.GetProductDetails(1);

            //Assert
            // expect(result.productName).toBe("Leaf Rake 1"); 
            expect(result.productName).toBe("Leaf Rake"); 
        });
    });

    describe("Remove Product method",()=>{
        it("Should be Length of 4",()=>{
            //Arrange
            // I do not have any arrange here, because I have already arranged everything required in the BeforeEach Function
            //Act
            ps.RemoveProduct(2);

            //Assert
            expect(ps.productsList.length).toBe(4);
        });
    });
});


//Testing Product Service Get Products Method Should be returning 5 elements