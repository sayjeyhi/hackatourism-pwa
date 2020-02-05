import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const DeleteConfirm = ({
  confirmationVisible,
  cancelDelete,
  toggleConfirmationVisible,
  commitDeletedAppointment,
}) => (
  <Dialog
    style={{ minWidth: '45%' }}
    maxWidth="xl"
    open={confirmationVisible}
    onClose={cancelDelete}
  >
    <DialogTitle className="text-huge text-bold">حذف برنامه</DialogTitle>
    <DialogContent>
      <DialogContentText className="text-medium">
        میخوای این برنامه رو حذف کنی؟
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={toggleConfirmationVisible}
        color="primary"
        variant="outlined"
        style={{ marginLeft: 5 }}
        size="medium"
      >
        نه!
      </Button>{' '}
      <Button
        onClick={commitDeletedAppointment}
        color="secondary"
        variant="outlined"
        size="medium"
      >
        آره :(
      </Button>
    </DialogActions>
  </Dialog>
);

DeleteConfirm.propTypes = {
  confirmationVisible: PropTypes.bool,
  cancelDelete: PropTypes.func,
  toggleConfirmationVisible: PropTypes.func,
  commitDeletedAppointment: PropTypes.func,
};

export default DeleteConfirm;
