//========= INDEX.................

const input = document.querySelector("#name");
const error = document.querySelector("#error-message");
const btn = document.querySelector("#button-link");
const userName = document.querySelector(".user-name");
if (userName) {
  userName.textContent = localStorage.getItem("userName");
}

const handleWriteChecking = (event) => {
  const value = event.target.value.trim();

  if (value.length >= 3) {
    btn.classList.add("active");
    error.classList.remove("show");
  } else {
    btn.classList.remove("active");
    error.classList.add("show");
  }
};
if (input) {
  input.addEventListener("input", handleWriteChecking);
}

const handleClickChecking = (event) => {
  const value = input.value.trim();

  if (value.length < 3) {
    event.preventDefault();
    error.classList.add("show");
  } else {
    localStorage.setItem("userName", input.value);

    error.classList.remove("show");
  }
};

if (btn) {
  btn.addEventListener("click", handleClickChecking);
}
//========= MATHS.................
