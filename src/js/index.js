const input = document.querySelector(".presentation-input");
const button = document.querySelector(".presentation-commencer");

if (input && button) {
  input.addEventListener("input", () => {
    if (input.value.trim().length >= 3) {
      button.classList.add("active");

      localStorage.setItem("userName", input.value);
    } else {
      button.classList.remove("active");
    }
  });
}

const userName = localStorage.getItem("userName");
const user = document.querySelector(".user-name");
if (user) {
  user.textContent = userName;
}

const quizzes = document.querySelectorAll(".quiz");
const finishButton = document.querySelector(".test-finir");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal-title");
const modalScore = document.querySelector(".modal-score");
const modalText = document.querySelector(".modal-text");

let score = 0;

// ================= TEST =================

quizzes.forEach((quiz) => {
  const inputs = quiz.querySelectorAll("input");
  const message = quiz.querySelector(".wrong-message");

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      inputs.forEach((i) => {
        i.disabled = true;
      });

      inputs.forEach((i) => {
        if (i.value === "true") {
          i.parentElement.classList.add("correct");
        }
        if (i.value === "false") {
          i.parentElement.classList.add("wrong");
        }
      });

      if (input.value === "true") {
        score++;

        message.classList.add("green");
      } else {
        message.classList.add("red");
      }

      message.style.display = "block";
    });
  });
});

// ================= BUTTON =================

finishButton.addEventListener("click", (e) => {
  e.preventDefault();

  let answered = 0;

  quizzes.forEach((quiz) => {
    if (quiz.querySelector("input:checked")) {
      answered++;
    }
  });

  if (answered < 8) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  modal.classList.add("show");

  modalTitle.textContent = `Félicitations ${userName}!`;

  modalScore.textContent = `${score}/8 (${Math.round((score / 8) * 100)}%)`;

  // результат

  if (score <= 3) {
    modalText.textContent = "Je sais que vous pouvez faire mieux!";
  } else if (score <= 6) {
    modalText.textContent =
      "Pas mal ! Mais votre objectif est encore devant vous!";
  } else {
    modalText.textContent = "Félicitations ! Votre objectif est accompli!";
  }
});
