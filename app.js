const imageInput =
    document.getElementById("imageInput");

const preview =
    document.getElementById("preview");

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {
        return;
    }

    const imageURL =
        URL.createObjectURL(file);

    preview.src = imageURL;

    preview.style.display = "block";
});


function analyze() {

    const dice =
        Number(
            document.getElementById("dice").value
        );

    const color =
        document.getElementById("playerColor").value;

    const result =
        document.getElementById("result");

    if (!imageInput.files.length) {

        result.innerHTML =
            "❌ Please upload a board screenshot.";

        return;
    }

    if (dice < 1 || dice > 6) {

        result.innerHTML =
            "❌ Dice must be between 1 and 6.";

        return;
    }

    result.innerHTML = `

        <h3>Board received ✓</h3>

        <p>
            Your colour:
            <strong>${color}</strong>
        </p>

        <p>
            Dice:
            <strong>${dice}</strong>
        </p>

        <p>
            🔍 Board analysis will go here.
        </p>

        <p>
            The next version will detect the
            pieces automatically.
        </p>

    `;
}
