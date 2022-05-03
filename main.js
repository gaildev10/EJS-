// Write a class Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

// Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.

// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

class Vec {
    constructor (x,y) {
        this.x = x,
        this.y = y
    }
    plus (v2){
        let addX = this.x + v2.x
        let addY = this.y + v2.y
        return new Vec (addX,addY)
        
    }
    minus (v2){
        let subX = this.x - v2.x
        let subY = this.y - v2.y
        return new Vec (subX,subY)

    }
    get length () {
        return Math.sqrt(this.x**2 + this.y**2)
    }
}



// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vector{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vector{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5