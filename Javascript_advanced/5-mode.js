function changeMode(size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const paragraph = document.createElement("p");
  paragraph.textContent = "Welcome Holberton!";
  document.body.appendChild(paragraph);

  const buttSpooky = document.createElement("button");
  buttSpooky.textContent = "Spooky";
  document.body.appendChild(buttSpooky);
  buttSpooky.addEventListener("click", spooky);

  const buttDarkMode = document.createElement("button");
  buttDarkMode.textContent = "Dark mode";
  document.body.appendChild(buttDarkMode);
  buttDarkMode.addEventListener("click", darkMode);

  const buttScreamMode = document.createElement("button");
  buttScreamMode.textContent = "Scream mode";
  document.body.appendChild(buttScreamMode);
  buttScreamMode.addEventListener("click", screamMode);
}

const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

main();
