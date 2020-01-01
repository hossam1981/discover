import Car from './car'

class Convertible extends Car { // create sub class of car
    constructor(make, model, door){
        super(make, model)
        this.door
    }
    getDoor(){
        return this.doors
     }
}

export default Convertible


