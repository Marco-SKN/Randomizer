const tagsEl = document.querySelector(".tags");
const textArea = document.getElementById("textarea");
const rerollBtn = document.getElementById("reroll");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 50);

    randomize();
    return;
  }

  createTags(e.target.value);
});

rerollBtn.addEventListener("click", () => {
  randomize();
});

// Creating span tag
function createTags(input) {
  const tagArr = input
    .split(",")
    .filter((text) => text.trim() !== "")
    .map((word) => word.trim());

  tagsEl.innerHTML = "";
  tagArr.forEach((tag) => {
    const tagSpan = document.createElement("span");
    tagSpan.classList.add("tag");
    tagSpan.innerText = tag;

    tagsEl.appendChild(tagSpan);
  });
}

// Choosing random choice
function randomize() {
  const allTags = document.querySelectorAll(".tag");
  if (allTags.length === 0) return;

  let times = 20;
  const choosing = setInterval(() => {
    const num = Math.floor(Math.random() * allTags.length);
    highlight(allTags[num]);
    times--;

    if (times === 0) {
      clearInterval(choosing);
      setTimeout(() => {
        const newNum = Math.floor(Math.random() * allTags.length);
        allTags[newNum].classList.add("highlight");
      }, 50);
    }
  }, 50);
}

// Highlighting the span tag
function highlight(element) {
  element.classList.add("highlight");

  setTimeout(() => {
    element.classList.remove("highlight");
  }, 50);
}

const btn = document.getElementById("skills");

btn.addEventListener("click", (e) => {
  e.preventDefault();
});
