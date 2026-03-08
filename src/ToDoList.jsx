import React, { useState } from "react";

function ToDoList() {
<<<<<<< HEAD
	const [tasks, setTasks] = useState([
		"Wake up at 6:30 AM",
		"Exercise for 30 minutes",
		"Check emails and messages",
	]);
=======
	const [tasks, setTasks] = useState(["shdfu", "jshdygf", "sfhgjew"]);
>>>>>>> 5d019087effd31ef61c52e6b35a0a56ffdf6030a
	const [newTask, setNewTask] = useState("");

	function handleInputChange(event) {
		setNewTask(event.target.value);
	}
	function addTask() {
		if (newTask.trim() !== "") {
			setTasks([...tasks, newTask]);
			setNewTask("");
		}
	}
	function deleteTask(index) {
		const upadtedTask = tasks.filter((e, i) => i !== index);
		setTasks(upadtedTask);
	}
	function moveTaskUp(index) {
		if (index > 0) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index - 1]] = [
				updatedTasks[index - 1],
				updatedTasks[index],
			];
			setTasks(updatedTasks);
		}
	}

	function moveTaskDown(index) {
		if (index < tasks.length - 1) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index + 1]] = [
				updatedTasks[index + 1],
				updatedTasks[index],
			];
			setTasks(updatedTasks);
		}
	}

	return (
		<>
			<div className="to-do-list">
				<h1>To-Do-List</h1>

				<div>
					<input
						type="text"
						placeholder="Enter a task..."
						value={newTask}
						onChange={handleInputChange}
					/>

					<button className="add-button" onClick={addTask}>
						Add
					</button>
					<ol>
						{tasks.map((task, index) => (
							<li key={index}>
								<span className="text">{task}</span>

								<button
									className="delete-button"
									onClick={() => deleteTask(index)}
								>
									Delete
								</button>

								<button
									className="move-button"
									onClick={() => moveTaskUp(index)}
								>
									⬆️
								</button>

								<button
									className="move-button"
									onClick={() => moveTaskDown(index)}
								>
									⬇️
								</button>
							</li>
						))}
					</ol>
				</div>
			</div>
		</>
	);
}
export default ToDoList;
