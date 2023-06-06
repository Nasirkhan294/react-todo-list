import { useState } from "react";
import InputTodo from "./InputTodo";
import Todoslist from "./Todoslist";
import { v4 as uuidv4 } from "uuid";



const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTodos([
      ...todos.filter((todo) => { return todo.id !== id})
    ]
    )
  }

  const delTodo = (id) => {
    console.log('deleted', id);
  }

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <InputTodo addTodoItem={addTodoItem}/>
      <Todoslist
        todosProps={todos}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    </>
  )
}

export default TodosLogic