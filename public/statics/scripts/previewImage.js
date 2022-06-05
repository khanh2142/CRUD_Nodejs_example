const inputFile = document.getElementById("formFile");
const previewImage = document.getElementById("previewImage");

previewImage.style.display = "none";

inputFile.onchange = () => {
  const [file] = inputFile.files;
  if (file) {
    previewImage.style.display = "block";
    previewImage.style.backgroundImage =
      "url(" + URL.createObjectURL(file) + ")";
  } else {
    previewImage.style.display = "none";
  }
};
