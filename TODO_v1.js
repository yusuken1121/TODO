import "./styles.css";

document.getElementById("app").innerHTML = `
`;

const onClickAdd = () => {
  // get a value from textbox and delete it
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = null;

  createIncompleteTodo(inputText);
};

//create a todo from the inputed incomplete stuff
const createIncompleteTodo = (todo) => {
  // getnerate li
  const li = document.createElement("li");

  // generate div
  const div = document.createElement("div");
  div.className = "list-row";

  // generate p
  const p = document.createElement("p");
  p.className = "one-todo";
  p.innerText = todo;

  // generate completed button
  const completeButton = document.createElement("button");
  completeButton.innerText = "completed";

  // the function when the completed button is pressed
  completeButton.addEventListener("click", () => {
    //delete "delete" and "completed" button
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    //generate "back" button
    const backButton = document.createElement("button");
    backButton.innerText = "Back";
    backButton.addEventListener("click", () => {
      //get the todo and add the incompletearea
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      backButton.closest("li").remove();
    });
    moveTarget.firstElementChild.appendChild(backButton);

    //move "todo" & "back"button
    const completeArea = document.getElementById("completed-area");
    completeArea.appendChild(moveTarget);
  });

  // generate delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  // the function of deleteButton
  deleteButton.addEventListener("click", () => {
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
