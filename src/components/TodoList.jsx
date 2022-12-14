import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Paper } from '@mui/material';
import EditTodo from './EditTodo';

export default function TodoList({todo, deleteTodo, editTodo}) {
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const dialogHandler = () => {
    setDialogOpen(!dialogOpen)
  }

  return (
    <Container maxWidth='xs'>
        <EditTodo todo={todo} open={dialogOpen} editTodo={editTodo} dialogHandler={dialogHandler} />
        <Paper sx={{my: 1, backgroundColor:'#264BC7'}}>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={() => deleteTodo(todo.id)}>
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                  />
                </ListItemIcon>
                <ListItemText onClick={() => dialogHandler()} primary={todo.text} />
              </ListItemButton>
            </ListItem>
        </Paper>
    </Container>
  );
}