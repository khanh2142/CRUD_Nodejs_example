const image = document.querySelector(".image--preview");
const close = document.getElementById("preview--close");
const inputFile = document.querySelector(".input--file");
const imageFile = document.getElementById("formFile");
const previewImage = document.getElementById("preview--image");

close.addEventListener("click", () => {
  inputFile.classList.toggle("hide");
  image.classList.toggle("hide");
});

imageFile.onchange = () => {
  console.log("Image file changed");
  const [file] = imageFile.files;
  console.log(file, previewImage, URL.createObjectURL(file));
  if (file) {
    image.classList.remove("hide");
    previewImage.style.backgroundImage =
      "url(" + URL.createObjectURL(file) + ")";
    close.classList.add("hide");
  }
};
