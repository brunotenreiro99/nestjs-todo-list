# Restful API for a TODO List

- [x] The app needs to allow the user to authenticate in the system
- [x] The user should be able to create an account
- [] Each user will have his own todo list
- [] A user can have multiple todo lists
- [] A todo list is only associated to a user
- [] A user can update the todo list item from pending to done
- [] A user can create a new todo list
- [] A user can create a new todo list item
- [] A user can delete a todo list
- [] A user can delete a todo list item
- [] The user can view how many todo lists his has
- [] The user can view how many uncompleted todo list items he has
- [] The user can logout
- [] The user can update the title of a todo list
- [] The user can update the title of a todo item


- User:
  - email
  - password

- Todolist
  - title
  - user
  - todo[]
  - createdAt
  - updatedAt

- Todo
  - title
  - status (Completed | Pending)
  - createdAt
  - updatedAt