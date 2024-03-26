function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
            return "License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}

function main() {
    const speed = parseFloat(prompt("Enter the speed of the car (in km/h):"));

    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a valid speed.");
    } else {
        const result = calculateDemeritPoints(speed);
        console.log(result);
    }
}

// Run the main function
main();
