document.querySelector("#btn").addEventListener("click", () => {
    let value = document.querySelector(".text").value;
    check(value);
})

function check(value) {
    let text = value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let length = text.length;
    let half = Math.floor(length / 2);
    let output = document.querySelector("#output");

    for (let i = 0; i < half; i++) {
        if (text[i] !== value[length - 1 - i]) {
            output.innerHTML = "It is not a Palindrome";
            return;
        }
        output.innerHTML = "It is a Palindrome";
    }
}