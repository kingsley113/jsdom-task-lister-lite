document.addEventListener("DOMContentLoaded", () => {
	const newTaskform = document.getElementById("create-task-form");

	newTaskform.addEventListener("submit", createNewTask);

	// const taskUl = document.getElementById('list');
	// taskUl.addEventListener("click", (e) => {
	// 	if (e.target.nodeName === "BUTTON") {

	// 	}
	// })

});



function createNewTask(event) {
	event.preventDefault();

	// new task setup
	const newTaskText = document.getElementById("new-task-description");
	const newTask = document.createElement("li");

	newTask.innerText = newTaskText.value;


	// createDeleteButton(newTask);

	// append the task to tasks ul
	appendNewTask(newTask);

	// reset the form
	event.target.reset();
};


function appendNewTask(task) {
	document.getElementById("tasks").appendChild(task);
}


function createDeleteButton(task) {
	const deleteBtn = document.createElement("button");

	deleteBtn.innerHTML = "Yeet this task";
	deleteBtn.setAttribute('data-description', task.innerText);
	task.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", deleteTask(task));
	// console.log(task);
}

function deleteTask(task) {
	task.remove();
	console.log('task should be yeeted now');
}


















