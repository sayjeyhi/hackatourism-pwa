import React from 'react';
import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Close from '@material-ui/icons/Close';
import DatePicker from 'react-modern-calendar-datepicker';
import { withStyles } from '@material-ui/core';

const containerStyles = theme => ({
  container: {
    width: theme.spacing(68),
    padding: 0,
    paddingBottom: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(2),
    paddingTop: 0,
  },
  header: {
    overflow: 'hidden',
    paddingTop: theme.spacing(0.5),
  },
  closeButton: {
    float: 'right',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 2),
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 0),
  },
  icon: {
    margin: theme.spacing(2, 0),
    marginRight: theme.spacing(2),
  },
  textField: {
    width: '100%',
  },
});

class AppointmentFormContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      appointmentChanges: {},
      selectedDay: {
        from: null,
        to: null,
      },
    };

    this.getAppointmentData = () => {
      const { appointmentData } = this.props;
      return appointmentData;
    };
    this.getAppointmentChanges = () => {
      const { appointmentChanges } = this.state;
      return appointmentChanges;
    };

    this.changeAppointment = this.changeAppointment.bind(this);
    this.commitAppointment = this.commitAppointment.bind(this);
  }

  changeAppointment({ field, changes }) {
    const nextChanges = {
      ...this.getAppointmentChanges(),
      [field]: changes,
    };
    this.setState({
      appointmentChanges: nextChanges,
    });
  }

  commitAppointment(type) {
    const { commitChanges } = this.props;
    const appointment = {
      ...this.getAppointmentData(),
      ...this.getAppointmentChanges(),
    };
    if (type === 'deleted') {
      commitChanges({ [type]: appointment.id });
    } else if (type === 'changed') {
      commitChanges({ [type]: { [appointment.id]: appointment } });
    } else {
      commitChanges({ [type]: appointment });
    }
    this.setState({
      appointmentChanges: {},
    });
  }

  render() {
    const {
      classes,
      visible,
      visibleChange,
      appointmentData,
      cancelAppointment,
      target,
      onHide,
    } = this.props;
    const { appointmentChanges } = this.state;

    const displayAppointmentData = {
      ...appointmentData,
      ...appointmentChanges,
    };

    const isNewAppointment = appointmentData.id === undefined;
    const applyChanges = isNewAppointment
      ? () => this.commitAppointment('added')
      : () => this.commitAppointment('changed');

    const textEditorProps = field => ({
      variant: 'outlined',
      onChange: ({ target: change }) =>
        this.changeAppointment({
          field: [field],
          changes: change.value,
        }),
      value: displayAppointmentData[field] || '',
      label: field[0].toUpperCase() + field.slice(1),
    });

    const cancelChanges = () => {
      this.setState({
        appointmentChanges: {},
      });
      visibleChange();
      cancelAppointment();
    };

    return (
      <AppointmentForm.Overlay
        visible={visible}
        target={target}
        onHide={onHide}
      >
        <div>
          <div className={classes.header}>
            <IconButton className={classes.closeButton} onClick={cancelChanges}>
              <Close color="action" />
            </IconButton>
          </div>
          <div className={classes.content}>
            <div className={classes.wrapper}>
              <input type="text" {...textEditorProps('title')} />
            </div>
            <div className={classes.wrapper}>
              <DatePicker
                value={this.state.selectedDay}
                locale="fa"
                onChange={value => this.setState({ selectedDay: value })}
                inputPlaceholder="Select a day"
                style={{
                  display: 'block',
                  borderRadius: 5,
                }}
                shouldHighlightWeekends
              />
            </div>
            <div className={classes.wrapper}>
              <input type="text" {...textEditorProps('location')} />
            </div>
            <div className={classes.wrapper}>
              <textarea {...textEditorProps('notes')} rows="6" />
            </div>
          </div>
          <div className={classes.buttonGroup}>
            {!isNewAppointment && (
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                onClick={() => {
                  visibleChange();
                  this.commitAppointment('deleted');
                }}
              >
                حذف
              </Button>
            )}
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={() => {
                visibleChange();
                applyChanges();
              }}
            >
              {isNewAppointment ? 'ایجاد' : 'ذخیره'}
            </Button>
          </div>
        </div>
      </AppointmentForm.Overlay>
    );
  }
}

export default withStyles(containerStyles)(AppointmentFormContainer);
