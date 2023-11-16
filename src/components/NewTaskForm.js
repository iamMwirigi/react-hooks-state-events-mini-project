import { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { text, category };
    onTaskFormSubmit(newTask);
    setText('');
    setCategory(categories[0]);
  };

  const categoryOptions = categories
    .filter((category) => category !== 'All')
    .map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ));

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label htmlFor="text-input">Task:</label>
      <input
        id="text-input"
        type="text"
        value={text}
        onChange={handleTextChange}
        required
      />

      <label htmlFor="category-select">Category:</label>
      <select
        id="category-select"
        value={category}
        onChange={handleCategoryChange}
        required
      >
        {categoryOptions}
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}
export default NewTaskForm