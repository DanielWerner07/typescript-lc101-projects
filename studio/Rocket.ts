import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: [];
    astronauts: [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let totalSum: number;
        for (let i = 0; i < items.length; i++) {
            totalSum += items[i];
        }
        return totalSum;
    }

    currentMassKg(): number {
        return this.sumMass;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean{
        if (this.canAdd = true) {
            cargo += this.cargoItems
            return true
        } else {
            return false
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd = true) {
            astronaut += this.astronauts
            return true
        } else {
            return false
        }
    }
 }