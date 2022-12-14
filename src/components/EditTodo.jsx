import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function EditTodo({todo, open, dialogHandler, editTodo}) {
    const [editedTodo, setEditedTodo] = React.useState(todo.text)

    const newTodo = () => {
        editTodo(todo.id, editedTodo)
        dialogHandler()
    }

  return (
    <div>
      <Dialog
        open={open}
        onClose={dialogHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Editar tarefa!"}
        </DialogTitle>
        <DialogContent>
         <TextField onChange={(e) => setEditedTodo(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dialogHandler()}>Disagree</Button>
          <Button onClick={() => newTodo()} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}