import * as React from 'react';
import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';

const Form = ({addTodo}) => {
    const [text, setText] = useState(null)
    const [id, setId] = useState(0)

    const addText = () => {
        const todoObj = {text, id}
        setId(id + 1)
        addTodo(todoObj)
        document.getElementById('textField').value = ''
    }

  return (
    <Container maxWidth='xs'>
        <header style={{textAlign: 'center', color: '#fff'}}>
            <h1>TODO LIST</h1>
        </header>
        <hr style={{width: '200px', color:'#54FE87'}}/>
        <div style={{display: 'flex', flexDirection:'column', marginTop:'1em'}}>
            <TextField 
            sx={{my: 1, backgroundColor: '#fff'}} 
            id='textField'
            placeholder='Tarefa' 
            variant='outlined'
            onChange={(e) => setText(e.target.value)}
            />

            <Button 
            sx={{p: 1}} 
            color='success' 
            variant='contained'
            onClick={() => addText()}
            >
                ADICIONAR
            </Button>
        </div>
    </Container>
  )
}

export default Form
