//interface CarType {
    //brand:string;
    //model:string;
    //year:number;
//};
//class Car implements CarType {
//brand = "Toyota";
//model = "Corolla";
//year = 2024;
//}
//let myCar = new Car()
//console.log(myCar);
//const myCar = {
    //brand: "Toyota",
    //model: "Corolla",
    //year: 2024
//}
//function displayDetails(){
    //return `Brand ${myCar.brand} model ${myCar.model} year ${myCar.year}`
//}
//console.log(displayDetails());
//class Car {
   //public brand = "Toyota"
   //public model: "Corolla"
   //public year: 2024
   //public displayDetails(){
    //    return `Brand ${this.brand} Model ${this.model} year ${this.year}`
   // }
//}
//let myCar = new Car()
//console.log(myCar.model)
class Car{
    brand2: string;
    model2: string;
    year2: number;
    constructor(brand: string, model: string, year: number){
        this.brand2=brand;
        this.model2=model;
        this.year2=year;
    }
    displayDetails(){
        return `Brand ${this.brand2} Model ${this.model2} Year ${this.year2}`;
    }
}
let myCar = new Car("Honda", "Civic", 2024);
console.log(myCar.displayDetails());


