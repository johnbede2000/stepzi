import React from 'react';
import Vertical from '../components/Vertical';
import Mycard from '../components/Mycard';
import Info from '../components/Info';
import {
  Typography,
  Box,
  Button,
  Snackbar,
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  ListItemText,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { v4 as uuidv4 } from 'uuid';

const WhatNext = ({ values, setValues, step, setStep }) => {
  const [newItem, setNewItem] = React.useState('');
  const [snackbar, Setsnackbar] = React.useState(false);
  const [formIsOpen, setFormIsOpen] = React.useState(false);
  const [editId, setEditId] = React.useState(null);

  const checkValues = () => {
    if (values.actions.length < 1) {
      Setsnackbar(true);
    } else {
      setStep(step + 1);
    }
  };

  const clickEdit = (id, text) => {
    const tempArray = values.actions.filter((item) => item.id !== id); // instead of delete it, just modify it! So the edit form would need to load up its existing id not create a new one! see line 87
    setValues({ ...values, actions: tempArray });
    // open correct object
    setNewItem(text);
    setFormIsOpen(true);
  };

  const renderList = () => {
    if (values.actions.length === 0) {
      return null;
    } else {
      return (
        <Box bgcolor="#fff" border="1px solid #dadce0" borderRadius="8px">
          <List>
            {values.actions.map((item, index) => {
              return (
                <Box key={index}>
                  <ListItem>
                    <ListItemText>{item.text}</ListItemText>
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="edit"
                        onClick={() => clickEdit(item.id, item.text)}
                      >
                        <EditIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  {createDivider(index)}
                </Box>
              );
            })}
          </List>
        </Box>
      );
    }
  };

  const clickAdd = () => {
    setFormIsOpen(true);
  };

  const handleSave = () => {
    const item = {};
    item.id = editId || uuidv4();
    item.text = newItem;
    const tempArray = values.actions;
    tempArray.push(item);
    setValues({ ...values, actions: tempArray });
    renderList();
    setFormIsOpen(false);
    setNewItem('');
    setEditId(null);
  };

  const handleDelete = () => {
    renderList();
    setFormIsOpen(false);
    setNewItem('');
  };

  const createDivider = (index) => {
    if (index < values.actions.length - 1) {
      return <Divider />;
    }
  };

  return (
    <Vertical>
      <Mycard>
        <Typography variant="body1">
          What do you need to do next? State the specific steps/actions you’ll
          need to take to reach your goal. Be clear and precise. Clarity on
          exactly what you’ll need to do and how often you’ll need to do it, to
          make the goal happen.
        </Typography>
        <Info text="Doing so leaves no room for doubt about what you need to do/how often, or whether you’ve actually done it!" />
      </Mycard>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          style={{ borderRadius: '20px' }}
          startIcon={<AddIcon />}
          onClick={() => clickAdd()}
        >
          Add a new task
        </Button>
      </Box>

      {renderList()}
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Button variant="contained" onClick={() => setStep(step - 1)}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => checkValues()}
        >
          Next
        </Button>
      </Box>

      <Dialog
        open={formIsOpen}
        onClose={() => setFormIsOpen(false)}
        aria-labelledby="add-task"
      >
        <DialogTitle id="add-task">Add/Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Put some handy tips here about adding actions.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="item"
            label="Action"
            type="text"
            fullWidth
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} color="primary">
            Delete
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => Setsnackbar(false)}
      >
        <Alert onClose={() => Setsnackbar(false)} severity="error">
          Please add at least one action!
        </Alert>
      </Snackbar>
    </Vertical>
  );
};

export default WhatNext;
