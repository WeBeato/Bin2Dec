document.getElementById("convertBtn").addEventListener("click", () => {
    let binaryInput = document.getElementById("binaryInput").value;
    let result = document.getElementById("result");
    let binaryRegex = /^[01]+$/;

    if (binaryInput.length > 32) {
        result.style.color = "red";
        result.textContent = "Input too long. Maximum 32 bits allowed.";
    } else if (binaryInput.length < 4) {
        result.style.color = "red";
        result.textContent = "Input too short. Minimum 4 bits allowed.";
    } else {
        if (binaryRegex.test(binaryInput)) {
            let decimal = parseInt(binaryInput, 2);
            result.style.color = "#00ffcc";
            result.textContent = decimal;
        } else {
            result.style.color = "red";
            result.textContent = "Input is not valid.";
        }
    }
});
