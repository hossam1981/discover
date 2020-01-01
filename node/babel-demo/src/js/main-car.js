import Car from './car'

import Convertible from './convertible'

let car1 = new Car('honda','accord');

let con = new Convertible('honda','accord','2door');

console.log(car1.getMake())
console.log(con.getDoor())