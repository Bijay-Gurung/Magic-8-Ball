function myFunction() {
    let number = document.getElementById("ball_num_display");
    let response = document.getElementById("response");
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = randomNumber;

    if (eightBall === 0) {
        number.textContent = randomNumber;
        response.textContent = "It is Certain";
    } else if (eightBall === 1) {
        number.textContent = randomNumber;
        response.textContent = "It is decidedly So";
    } else if (eightBall === 2) {
        number.textContent = randomNumber;
        response.textContent = "Reply hazy try again";
    } else if (eightBall === 3) {
        number.textContent = randomNumber;
        response.textContent = "Cannot predict now";
    } else if (eightBall === 4) {
        number.textContent = randomNumber;
        response.textContent = "Do not count on it";
    } else if (eightBall === 5) {
        number.textContent = randomNumber;
        response.textContent = "My sources say no";
    } else if (eightBall === 6) {
        number.textContent = randomNumber;
        response.textContent = "Outlook not so Great";
    } else if (eightBall === 7) {
        number.textContent = randomNumber;
        response.textContent = "Signs point to yes";
    }
}
