export class Product {
    constructor(public productId: number,public productName: string,public productCode: string,
        public releaseDate: string,public description: Description,public price: number,
        public starRating: number,public imageUrl?: string,public emailId?: string) {
            // this.productId = productId;
            // this.productName = productName;
            // this.productCode = productCode;

    }
    // productId: number;
    // productName: string;
    // productCode: string;
    // releaseDate: string;
    // description: Description
    // price: number;
    // starRating: number;
    // imageUrl: string;
    // emailId: string;
}

//Product prd = new Product{productId:1,productName:'Test'};
//prd.productId=1;
//



export class Description {
    constructor(public descText: string,public mfdYear: number){

    }
    
}

function Test() {
    // let prod1:Product = new Product{productId:1,productName:'Test'};
    // let prod1 = new Product(1,'Test','');
    let prod2 = new Product(1,'Test','Test','28 May 2019',
                    new Description('Test',2017),234.45,5);
}


export const products: Product[] = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": {
            'descText': "Leaf Rake Description",
            "mfdYear": 2018
        },
        "price": 19.95,
        "starRating": 3,
        "imageUrl": "https://www.harrodhorticultural.com/uploads/images/products/GGT-886_Sneeboer_Leaf_Rakes_1.jpg",
        "emailId": "test@test.com"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": {
            'descText': "15 gallon capacity rolling garden cart",
            "mfdYear": 2013
        },
        "price": 32.99,
        "starRating": 4,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
        "emailId": "test@test.com"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": {
            'descText': "Curved claw steel hammer",
            "mfdYear": 2014
        },
        "price": 8.9,
        "starRating": 6,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
        "emailId": "test@test.com"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": {
            'descText': "15-inch steel blade hand saw",
            "mfdYear": 2017
        },
        "price": 11.55,
        "starRating": 1,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
        "emailId": "test@test.com"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": {
            'descText': "Standard two-button video game controller",
            "mfdYear": 2017
        },
        "price": 35.95,
        "starRating": 5,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png",
        "emailId": "test@test.com"
    }
];