import "./styles.css";

document.getElementById("app").innerHTML = `
`;

const onClickAdd = () => {
  // get a value from textbox and delete it
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = null;

  // getnerate li
  const li = document.createElement("li");

  // generate div
  const div = document.createElement("div");
  div.className = "list-row";

  // generate p
  const p = document.createElement("p");
  p.className = "one-todo";
  p.innerText = inputText;

  // generate completed button
  const completeButton = document.createElement("button");
  completeButton.innerText = "completed";

  completeButton.addEventListener("click", () => {
    //delete "delete" and "completed" button
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();
  });

  // generate delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  deleteButton.addEventListener("click", () => {
    // add a delete function
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-area").removeChild(deleteTarget);
  });

  // liタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-area").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);

// abc