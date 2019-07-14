function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw");
        }
    }
}

console.log(createCircle(1))

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}

console.log(new Circle(1)) // Constructor Function
