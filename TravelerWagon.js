// let totalFoodVar = 0
class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true


    }
    hunt() {
        // Wagon.totalFood += 
        this.food += 2
        console.log(this.name + " went out and found food, Ya'll! But you'll have to get your own I'm afraid.")
        // console.log(this.food)
    }
    eat() {
        // this.food -= 1
        if (this.food < 1) {
            return this.isHealthy = false
            // console.log(this.isHealthy)
        } else {
            this.food -= 1
            // return this.isHealthy = false
        }
        // this.food -= 1
    }

}
class Wagon {
    constructor(seats) {
        this.capacity = seats
        this.groupOfPilgrims = []
    }
    //push traveller into .passengers
    getAvailableSeatCount() {
        return this.capacity - this.groupOfPilgrims.length
    }
    join(defNotTheDonnerParty) {
        if (this.getAvailableSeatCount() <= 0) {
            console.log("Sorry, but the wagon's full, pilgrim. Best wait fer another.")
            return "Full Up."
        }
        else {
            this.groupOfPilgrims.push(defNotTheDonnerParty)
        }
        // let defNotTheDonnerParty = []
        // this.capacity -= 1
        // console.log(this.name)
        // console.log("Sorry, but the wagon's full, pilgrim. Best wait fer another.")
        // console.log(defNotTheDonnerParty.name)
    }
    shouldQuarantine() {
        const verySick = this.groupOfPilgrims.some(defNotTheDonnerParty => defNotTheDonnerParty.isHealthy === false)
        // for (let i of this.passengers) {
        if (verySick === true) {
            return true
        }
        else {
            return false
        }
        // console.log(this.isHealthy)
        //             if (this.isHealthy === false) {
        //                 return true
    }
    totalFood() {
        // for(var i = 0; i < this.passengers.length; i++){
        //     console.log(this.passengers[i]);
        // }
        // console.log(this.food)
        let allFood = 0
        for (let index = 0; index < this.groupOfPilgrims.length; index += 1) {
            allFood += this.groupOfPilgrims[index].food
        }
        return allFood
        // ::make array of passengers and their food. add food.
    }
}