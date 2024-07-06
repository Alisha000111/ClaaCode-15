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
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand2 = brand;
        this.model2 = model;
        this.year2 = year;
    }
    Car.prototype.displayDetails = function () {
        return "Brand ".concat(this.brand2, " Model ").concat(this.model2, " Year ").concat(this.year2);
    };
    return Car;
}());
var myCar = new Car("Honda", "Civic", 2024);
console.log(myCar.displayDetails());
