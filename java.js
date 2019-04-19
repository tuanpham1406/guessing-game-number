// tím kiếm tuyến tính
let arr = [1,25,50,75,82,100];

function linear() {
    let number  = parseInt(prompt("Enter the number: "));

    for (let i = 0; i < arr.length; i++) {
        if (number === 82) {
            console.log("correct");
        } else if (number < 82) {
            console.log("to low");
        } else console.log("to high");
        return;
    }
}