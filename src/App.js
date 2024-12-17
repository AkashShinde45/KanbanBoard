import React from 'react';
import { Container, TextField, Fab } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from './features/tasks/tasksSlice';
import Board from './components/Board';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <TextField className='input-field'
        label="Search tasks here..." 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        onChange={(e) => dispatch(setSearchQuery(e.target.value))} 
      />
      <Board />
      <Fab color="primary" aria-label="add" onClick={handleOpen} className="fab">
        Add
      </Fab>
      <TaskForm open={open} handleClose={handleClose} />
     
    </Container>
  );
}

export default App;

