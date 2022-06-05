const deleteBtn = document.querySelectorAll(".btn--delete");
const updateBtn = document.querySelectorAll(".btn--update");

deleteBtn.forEach((item) => {
  item.addEventListener("click", () => {
    const result = confirm("Bạn có chắc muốn xóa sinh viên này ?");
    if (result) {
      const id = item.getAttribute("data-id");
      window.location.href = "student/delete/" + id;
    }
  });
});

updateBtn.forEach((item) => {
  item.addEventListener("click", () => {
    const id = item.getAttribute("data-id");
    window.location.href = "student/update/" + id;
  });
});
