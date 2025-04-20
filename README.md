# Todo List Application
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Developer:** Emmanuel
**Live Demo:** [https://juniornms.github.io/todo-app/](https://juniornms.github.io/todo-app/)

---

## 📋 Project Overview
A full-stack todo list application with CRUD functionality, built with React and Redux. Features include task management, status filtering, and a contact form.

---

## 🎯 User Stories
1. **Task Management**: As a user, I want to add/remove tasks to organize my workflow
2. **Progress Tracking**: As a user, I want to mark tasks as complete to track progress
3. **Filtering**: As a user, I want to filter tasks by status to focus on priorities
4. **Support**: As a user, I want to submit inquiries via a contact form

---

## 🎨 Wireframes
### Todos View
[Logo] Todos | Contact
[Input Field] [Add Button]
[All][Completed][Incomplete] Filters

☐ Task 1 [Delete]

✓̶ Completed Task [Delete]


### Contact View
[Logo] Todos | Contact
First Name: []
Last Name: []
Email: []
Comments: []
[Submit Button]


---

## 🌳 State Tree
```javascript
{
  todos: [
    { 
      id: 1, 
      text: 'Learn Redux', 
      completed: true 
    },
    { 
      id: 2, 
      text: 'Deploy App', 
      completed: false 
    }
  ],
  visibilityFilter: 'SHOW_ALL',
  contactForm: {
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  }
}🧩 Component Structure
Component	Type	Responsibility
App	Container	Root router configuration
TodoListContainer	Container	Connects Redux to todo list
TodoList	Presentational	Displays filtered todos
TodoItem	Presentational	Renders individual todo tasks
ContactForm	Presentational	Handles form input/validation
NavBar	Presentational	Navigation between views
FilterButtons	Presentational	Manages todo filtering


🛠️ Technologies Used
Frontend: React 18, Redux Toolkit, React Router 7

Styling: CSS (10+ custom rules)

Build Tools: Create React App, GitHub Pages

🚀 Features
CRUD Operations: Add/update/delete todos

Real-time Filtering: All/Completed/Incomplete

Form Validation: Contact form with controlled inputs

Responsive Design: Mobile-friendly layout

▶️ Usage
Add Todo: Type task + click "Add"

Complete Todo: Check checkbox

Delete Todo: Click trash icon

Filter: Use buttons above list

Contact: Navigate to /contact and submit form

🔮 Future Improvements
Add user authentication

Implement due dates/reminders

Add database persistence

Dark mode toggle

Task categories/tags

