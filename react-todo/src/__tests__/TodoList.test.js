// src/__tests__/TodoList.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {

  // Test if the TodoList renders correctly
  test('renders TodoList component', () => {
    render(<TodoList />);
    const todoHeading = screen.getByText(/todo list/i);
    expect(todoHeading).toBeInTheDocument();
  });

  // Test if the initial todos are rendered correctly
  test('displays initial todos', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3);  // Check for initial 3 todos
  });

  // Test adding a new todo
  test('adds a new todo', () => {
    render(<TodoList />);
    const inputField = screen.getByPlaceholderText(/add a new todo/i);
    const addButton = screen.getByText(/add/i);
    
    fireEvent.change(inputField, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
    
    const newTodo = screen.getByText(/new todo/i);
    expect(newTodo).toBeInTheDocument();
  });

  // Test toggling a todo's completion status
  test('toggles a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/learn react/i);
    fireEvent.click(todoItem);
    
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  // Test deleting a todo
  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/delete/i)[0];
    
    fireEvent.click(deleteButton);
    const todoItem = screen.queryByText(/learn react/i);
    expect(todoItem).toBeNull();
  });

});

