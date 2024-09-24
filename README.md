This React-based to-do list app allows users to create, edit, complete, and delete tasks.
Add Tasks: Users can add new tasks to the to-do list using a form. Each task is stored in the browser's local storage, so the list persists even after the page is reloaded.
Mark Complete: Clicking on a task marks it as complete, visually indicated by strikethrough text and reduced opacity.
Edit Tasks: Users can click the edit icon next to any task to update its text.
Delete Tasks: The app includes a delete icon to remove tasks from the list.
Local Storage Integration: The app stores tasks locally, ensuring persistence across sessions.
Responsive Design: The app is styled with CSS to ensure responsiveness and an intuitive user interface, including a modern, clean look with smooth gradients.

The App have 3 components:
TodoForm: Handles task creation and editing.
Todo: Manages the display of tasks, including marking them as complete, editing, and deleting.
TodoList: Integrates the overall logic, rendering the list of tasks and handling CRUD operations.
