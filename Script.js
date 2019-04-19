// tìm kiếm nhị phân
let arr1 = [1,25,50,75,82,100];

arr1.sort(function (a, b) {
    return a - b;
});

function binary() {
    let number  = parseInt(prompt("Enter the number: "));

    for (let i = 0; i < arr1.length; i++) {
        if (number === 82) {
            console.log("correct");
        } else if (number < 82) {
            console.log("to low");
        } else console.log("to high");
        return;
    }
}