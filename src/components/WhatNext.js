import React from 'react';
import Vertical from './Vertical';
import Mycard from './Mycard';
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

  const checkValues = () => {
    if (values.actions.length < 1) {
      Setsnackbar(true);
    } else {
      setStep(step + 1);
    }
  };

  const clickEdit = (e) => {
    // open correct object here
    // set value to the object.text
    // delete from values (because will be added when click save)
  };

  const clickAdd = () => {
    setFormIsOpen(true);
  };

  const handleSave = () => {
    const item = {};
    item.id = uuidv4();
    item.text = newItem;
    const tempArray = values.actions;
    tempArray.push(item);
    setValues({ ...values, actions: tempArray });
    setActionsHasItem(true);
    setFormIsOpen(false);
    setNewItem('');
  };
  const handleDelete = () => {
    // delete from array here

    if (values.actions.length < 1) {
      setActionsHasItem(false);
    }
    setFormIsOpen(false);
    setNewItem('');
  };
  const createDivider = (index) => {
    if (index < values.actions.length - 1) {
      return <Divider />;
    }
  };

  const [actionsHasItem, setActionsHasItem] = React.useState(false);

  return (
    <Vertical>
      <Mycard>
        <Typography variant="body1">
          What do you need to do next? Add as many items as come to mind.
        </Typography>
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

      {actionsHasItem && (
        <Box bgcolor="#fff" border="1px solid #dadce0" borderRadius="8px">
          <List>
            {values.actions.map((item, index) => {
              return (
                <Box key={item.id}>
                  <ListItem>
                    <ListItemText>{item.text}</ListItemText>
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="edit"
                        onClick={(e) => clickEdit(e)}
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
      )}
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
