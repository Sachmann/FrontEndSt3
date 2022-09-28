let ele = document.getElementById("submitBtn");
ele.addEventListener("click", () => {
  sessionStorage.setItem("Name", document.getElementById("name").value);
  sessionStorage.setItem("Age", document.getElementById("age").value);
  sessionStorage.setItem("RollNo", document.getElementById("RollNo").value);
  console.log("done");
});