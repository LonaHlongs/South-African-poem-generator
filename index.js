function generatePoetry(event) {
  event.preventDefault();

  new Typewriter("#poetry", {
    strings: "Imvelo Yinhle (Nature is Beautiful)",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poetryFormElement = document.querySelector("#poetry-generator-form");
poetryFormElement.addEventListener("submit", generatePoetry);
