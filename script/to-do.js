let todoList = document.querySelector(".js-todo-list");
LoadFromLocalStroage();

let slideroutput;

document
  .querySelector(".js-input-todo")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addToCartMain();
      attachDeleteListner();
      saveToLocalStorage();
    }
  });

document.querySelector(".js-add-button").addEventListener("click", () => {
  addToCartMain();
  attachDeleteListner();
  saveToLocalStorage();
});

function saveToLocalStorage() {
  localStorage.setItem("todoListHTML", JSON.stringify(todoList.innerHTML));
}

function LoadFromLocalStroage() {
  if (todoList === null) {
    todoList.innerHTML = "Please Enter TO_DO";
  } else {
    todoList.innerHTML = JSON.parse(localStorage.getItem("todoListHTML"));
    attachDeleteListner();
    AttachStrikeThrough();
  }
}

function attachDeleteListner() {
  document.querySelectorAll(".delete-button").forEach((element) => {
    element.addEventListener("click", (event) => {
      const elementDeleted = event.target.closest(".full-element");
      elementDeleted.remove();
      saveToLocalStorage();
    });
  });
}

function AttachStrikeThrough() {
  document.querySelectorAll(".To-Do-cheakbox").forEach((element) => {
    element.addEventListener("change", (event) => {
      const todotask = event.target
        .closest(".full-element")
        .querySelector(".To-do-Task");
      if (event.target.checked) {
        todotask.classList.add("strikethrough");
      } else {
        todotask.classList.remove("strikethrough");
      }
    });
  });
}

function addToCartMain() {
  const inputValue = document.querySelector(".js-input-todo");
  const inputTodoTime = document.querySelector(".js-todo-time");
  const sliderInput = document.querySelector(".js-slider-input");
  if (sliderInput.value === "60") {
    slideroutput = "high";
  } else if (sliderInput.value === "30") {
    slideroutput = "medium";
  } else {
    slideroutput = "low";
  }

  todoList = document.querySelector(".js-todo-list");
  todoList.innerHTML += `<div class="full-element"><input type="checkbox"  class="To-Do-cheakbox"><div class="To-do-Task">${inputValue.value}</div> <div> ${inputTodoTime.value}</div><div> ${slideroutput}</div><button class="delete-button"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button></div>`;
  inputValue.value = "";
  AttachStrikeThrough();
}
