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
  <Dialog open={confirmationVisible} onClose={cancelDelete}>
    <DialogTitle>Delete Appointment</DialogTitle>
    <DialogContent>
      <DialogContentText>میخوای این برنامه رو حذف کنی؟</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={toggleConfirmationVisible}
        color="primary"
        variant="outlined"
      >
        لغو
      </Button>
      <Button
        onClick={commitDeletedAppointment}
        color="secondary"
        variant="outlined"
      >
        حذف
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
