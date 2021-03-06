import React from 'react';
import Vertical from '../components/Vertical';
import Mycard from '../components/Mycard';
import Info from '../components/Info';
import Alert from '@material-ui/lab/Alert';
import {
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  ListItemText,
  Divider,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  addButton: {
    backgroundColor: '#4caf50',
    color: 'white',
    '&:hover': {
      backgroundColor: '#388e3c',
    },
  },
});

const WhatNext = ({ values, setValues, step, setStep }) => {
  const classes = useStyles();

  const [dialogText, setDialogText] = React.useState('');
  const [dialogId, setDialogId] = React.useState(null);
  const [snackbarIsOpen, SetsnackbarIsOpen] = React.useState(false);
  const [formIsOpen, setFormIsOpen] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState('');
  const [severity, setSeverity] = React.useState('');

  const checkActionsLength = () => {
    if (values.actions.length < 1) {
      setErrMsg('Please add at least one action');
      setSeverity('error');
      SetsnackbarIsOpen(true);
    } else {
      setStep(step + 1);
    }
  };

  const clickEdit = (id, text) => {
    setDialogText(text);
    setDialogId(id);
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
                        aria-label="edit"
                        onClick={() => clickEdit(item.id, item.text)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDelete(item.id)}
                      >
                        <DeleteIcon />
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
    setDialogText('');
    setDialogId(null);
    setFormIsOpen(true);
  };

  const handleSave = () => {
    if (!dialogText || /^\s*$/.test(dialogText)) {
      handleClose();
      setErrMsg('Empty input not saved');
      setSeverity('warning');
      SetsnackbarIsOpen(true);
    } else if (dialogId) {
      const objIndex = values.actions.findIndex((obj) => obj.id === dialogId);
      values.actions[objIndex].text = dialogText;
    } else {
      const newObj = { id: uuidv4(), text: dialogText };
      const tempArray = values.actions;
      tempArray.push(newObj);
      setValues({ ...values, actions: tempArray });
    }
    renderList();
    setFormIsOpen(false);
  };

  const handleDelete = (id) => {
    const tempArray = values.actions.filter((item) => item.id !== id);
    setValues({ ...values, actions: tempArray });
    renderList();
  };
  const handleClose = () => {
    setFormIsOpen(false);
  };

  const createDivider = (index) => {
    if (index < values.actions.length - 1) {
      return <Divider />;
    }
  };

  return (
    <Vertical>
      <Mycard>
        <Typography variant="h4">Planning</Typography>
      </Mycard>
      <Mycard>
        <Typography variant="body1">
          What do you need to do next? State the specific actions you’ll need to
          take to reach your goal; be clear and precise. Get clarity on exactly
          what you’ll need to do and how often you’ll need to do it.
        </Typography>
        <Info text="Doing so leaves no room for doubt about what you need to do, and whether you’ve actually done it!" />
      </Mycard>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          className={classes.addButton}
          style={{ borderRadius: '20px' }}
          startIcon={<AddIcon />}
          onClick={() => clickAdd()}
        >
          Add a new action
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
          onClick={() => checkActionsLength()}
        >
          Next
        </Button>
      </Box>

      <Dialog
        open={formIsOpen}
        onClose={() => setFormIsOpen(false)}
        aria-labelledby="add-task"
      >
        <DialogTitle id="add-task">Action step</DialogTitle>
        <DialogContent>
          <DialogContentText>Be clear and precise!</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="item"
            label="Action"
            type="text"
            fullWidth
            value={dialogText}
            onChange={(e) => setDialogText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarIsOpen}
        autoHideDuration={4000}
        onClose={() => SetsnackbarIsOpen(false)}
      >
        <Alert severity={severity}>{errMsg}</Alert>
      </Snackbar>
    </Vertical>
  );
};

export default WhatNext;
