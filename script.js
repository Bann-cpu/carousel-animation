const imgs = document.getElementById("images");
const img = document.querySelectorAll(" img");
const button = document.querySelector("button")

let idx = 0;

function run() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

button.addEventListener("click", () => {
    setInterval(run, 2000);
    document.body.style.backgroundColor = "grey"
})

