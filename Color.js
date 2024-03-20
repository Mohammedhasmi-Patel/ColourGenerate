let colors = document.querySelectorAll(".button");
let content = document.querySelector(".cntent");
console.log(content);

colors.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.id === "grey") {
      document.body.style.backgroundColor = event.target.id;
      content.style.visibility = "visible";
      content.innerHTML = "Colour Name is " + event.target.id;
    } else if (event.target.id === "yellow") {
      document.body.style.backgroundColor = event.target.id;
      content.innerHTML = "Colour Name is " + event.target.id;
    } else if (event.target.id === "white") {
      document.body.style.backgroundColor = event.target.id;
      content.innerHTML = "Colour Name is " + event.target.id;
    } else if (event.target.id === "blue") {
      document.body.style.backgroundColor = event.target.id;
      content.innerHTML = "Colour Name is " + event.target.id;
    } else if (event.target.id === "pink") {
      document.body.style.backgroundColor = event.target.id;
      content.innerHTML = "Colour Name is " + event.target.id;
    }
  });
});
