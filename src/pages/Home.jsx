import { List } from '@mui/material'
import React, { Fragment, useState } from 'react'
import Form from '../components/Form'
import TodoList from '../components/TodoList'

const Home = () => {
    const data = localStorage.getItem('todo')
    const [todos, setTodos] = useState(
      data? JSON.parse(data) : []
    )

    const addTodo = (item) => {
        const newArray = [...todos, item] 
        setTodos(newArray)
        localStorage.setItem('todo', JSON.stringify(newArray))
    }

    const deleteTodo = (ID) => {
        const newArray = todos.filter(item => item.id !== ID)
        setTodos(newArray)
        localStorage.setItem('todo', JSON.stringify(newArray))
    }

    const editTodo = (ID, newText) => {
      const newArray = [...todos]
      newArray.splice(ID, 1, {id: ID, text: newText})
      setTodos(newArray)
      localStorage.setItem('todo', JSON.stringify(newArray))
    }

  return (
    <Fragment>
      <Form addTodo={addTodo} />
      <List>
        {todos.map((todo, key) => {
            return <TodoList key={key} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
        })}
      </List>
    </Fragment>
  )
}

export default Home
