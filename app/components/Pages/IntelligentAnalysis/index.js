/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  AppointmentForm,
  Scheduler,
  Toolbar,
  DateNavigator,
  MonthView,
  WeekView,
  ViewSwitcher,
  Appointments,
  AppointmentTooltip,
  DragDropProvider,
  EditRecurrenceMenu,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import { Input, Textarea } from '@snappmarket/ui';
import { connectProps } from '@devexpress/dx-react-core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';

import 'resources/styles/DatePicker.css';
import ChooseDateButton from './partials/ChooseDateButton';
import DeleteConfirm from './partials/DeleteConfirm';

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
});

class AppointmentFormContainerBasic extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      appointmentChanges: {},
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
      id: field,
      onChange: ({ target: change }) =>
        this.changeAppointment({
          field: [field],
          changes: change.value,
        }),
      value: displayAppointmentData[field] || '',
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
        className="height-overflow "
      >
        <div className="dir-rtl">
          <div className={classes.header}>
            <h3 className="text-large d-inline-block mr-1 mt-1 mb-0">
              درج برنامه
            </h3>
            <IconButton
              className={`${classes.closeButton} pull-left`}
              style={{
                marginLeft: 6,
                marginTop: 7,
              }}
              onClick={cancelChanges}
            >
              <Close color="action" />
            </IconButton>
          </div>
          <hr className="nice-hr" />
          <div className={classes.content}>
            <div className={classes.wrapper}>
              <Input label="عنوان برنامه" {...textEditorProps('title')} />
            </div>
            <div className={classes.wrapper}>
              <Input
                label="محل یا موضوع"
                type="text"
                {...textEditorProps('location')}
              />
            </div>
            <div className={classes.wrapper}>
              <Textarea
                label="یه شرح مختصر"
                {...textEditorProps('notes')}
                rows="6"
              />
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
              className={`${classes.button} ml-0`}
              onClick={() => {
                visibleChange();
                applyChanges();
              }}
            >
              {isNewAppointment ? 'بساز‌!' : 'ذخیره'}
            </Button>
          </div>
        </div>
      </AppointmentForm.Overlay>
    );
  }
}

const AppointmentFormContainer = withStyles(containerStyles, {
  name: 'AppointmentFormContainer',
})(AppointmentFormContainerBasic);

const styles = theme => ({
  addButton: {
    position: 'absolute',
    bottom: theme.spacing(1) * 3,
    right: theme.spacing(1) * 4,
  },
});

/* eslint-disable-next-line react/no-multi-comp */
class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    today = `${yyyy}-${mm}-${dd}`;
    this.state = {
      data: [
        {
          title: 'سفر به شمال',
          startDate: new Date(2020, 1, 31, 10, 0),
          endDate: new Date(2018, 2, 3, 14, 30),
          id: 38,
          location: 'Room 2',
        },
        {
          title: 'Customer Workshop',
          startDate: new Date(2020, 2, 1),
          endDate: new Date(2018, 2, 2),
          allDay: true,
          id: 39,
          location: 'Room 1',
        },
      ],
      currentDate: today,
      currentViewName: 'weekly',
      confirmationVisible: false,
      editingFormVisible: false,
      deletedAppointmentId: undefined,
      editingAppointment: undefined,
      previousAppointment: undefined,
      addedAppointment: {},
      startDayHour: 6,
      endDayHour: 24,
      isNewAppointment: false,
      dayOfWeek: 6,
    };

    this.toggleConfirmationVisible = this.toggleConfirmationVisible.bind(this);
    this.commitDeletedAppointment = this.commitDeletedAppointment.bind(this);
    this.toggleEditingFormVisibility = this.toggleEditingFormVisibility.bind(
      this,
    );

    this.currentViewNameChange = currentViewName => {
      this.setState({ currentViewName });
    };
    this.currentDateChange = currentDate => {
      if (currentDate instanceof Date) {
        this.setState({ dayOfWeek: currentDate.getDay() });
      }
      this.setState({ currentDate });
    };
    this.commitChanges = this.commitChanges.bind(this);
    this.onEditingAppointmentChange = this.onEditingAppointmentChange.bind(
      this,
    );
    this.onAddedAppointmentChange = this.onAddedAppointmentChange.bind(this);
    this.appointmentForm = connectProps(AppointmentFormContainer, () => {
      const {
        editingFormVisible,
        editingAppointment,
        data,
        addedAppointment,
        isNewAppointment,
        previousAppointment,
      } = this.state;

      const currentAppointment =
        data.filter(
          appointment =>
            editingAppointment && appointment.id === editingAppointment.id,
        )[0] || addedAppointment;
      const cancelAppointment = () => {
        if (isNewAppointment) {
          this.setState({
            editingAppointment: previousAppointment,
            isNewAppointment: false,
          });
        }
      };

      return {
        visible: editingFormVisible,
        appointmentData: currentAppointment,
        commitChanges: this.commitChanges,
        visibleChange: this.toggleEditingFormVisibility,
        onEditingAppointmentChange: this.onEditingAppointmentChange,
        cancelAppointment,
      };
    });
  }

  componentDidUpdate() {
    this.appointmentForm.update();
  }

  onEditingAppointmentChange(editingAppointment) {
    this.setState({ editingAppointment });
  }

  onAddedAppointmentChange(addedAppointment) {
    this.setState({ addedAppointment });
    const { editingAppointment } = this.state;
    if (editingAppointment !== undefined) {
      this.setState({
        previousAppointment: editingAppointment,
      });
    }
    this.setState({ editingAppointment: undefined, isNewAppointment: true });
  }

  setDeletedAppointmentId(id) {
    this.setState({ deletedAppointmentId: id });
  }

  toggleEditingFormVisibility() {
    const { editingFormVisible } = this.state;
    this.setState({
      editingFormVisible: !editingFormVisible,
    });
  }

  toggleConfirmationVisible() {
    const { confirmationVisible } = this.state;
    this.setState({ confirmationVisible: !confirmationVisible });
  }

  commitDeletedAppointment() {
    this.setState(state => {
      const { data, deletedAppointmentId } = state;
      const nextData = data.filter(
        appointment => appointment.id !== deletedAppointmentId,
      );

      return { data: nextData, deletedAppointmentId: null };
    });
    this.toggleConfirmationVisible();
  }

  commitChanges({ added, changed, deleted }) {
    this.setState(state => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment,
        );
      }
      if (deleted !== undefined) {
        this.setDeletedAppointmentId(deleted);
        this.toggleConfirmationVisible();
      }
      return { data, addedAppointment: {} };
    });
  }

  render() {
    const {
      currentDate,
      data,
      confirmationVisible,
      currentViewName,
      editingFormVisible,
      startDayHour,
      endDayHour,
    } = this.state;

    const viewName =
      currentViewName === 'weekly'
        ? 'شیش هفت'
        : currentViewName === 'monthly'
        ? 'یه ماهه'
        : 'ده‌روزه';

    const DateNavigatorNavigationButton = props => (
      <DateNavigator.NavigationButton
        className="navigation-button"
        {...props}
      />
    );
    return (
      <Paper elevation0={0} style={{ background: '#f7f7f7' }}>
        <Scheduler
          firstDayOfWeek={this.state.dayOfWeek}
          data={data}
          height={500}
          locale="fa-IR"
        >
          <div>
            <h2 className="mr-1 pt-1 dir-rtl text-large text-center">
              <span style={{ color: '#e53844' }}>کوله‌پشتی</span>‌تو برا یه سفر{' '}
              <span style={{ color: '#e040fb' }}>{viewName}</span> روزه آماده
              کن!
            </h2>
          </div>
          <ViewState
            currentDate={currentDate}
            currentViewName={currentViewName}
            onCurrentViewNameChange={this.currentViewNameChange}
            onCurrentDateChange={this.currentDateChange}
          />
          <EditingState
            onCommitChanges={this.commitChanges}
            onEditingAppointmentChange={this.onEditingAppointmentChange}
            onAddedAppointmentChange={this.onAddedAppointmentChange}
          />

          {/* Views */}
          <WeekView
            start
            displayName="برنامه‌ریزی هفتگی"
            name="weekly"
            intervalCount={1}
            startDayHour={startDayHour}
            endDayHour={endDayHour}
          />
          <WeekView
            start
            displayName="برنامه‌ریزی ده‌روزه"
            name="two-weekly"
            intervalCount={1.4}
            startDayHour={startDayHour}
            endDayHour={endDayHour}
          />
          <MonthView displayName="برنامه‌ریزی ماهانه" name="monthly" />

          <EditRecurrenceMenu />
          <Appointments />
          <AppointmentTooltip showOpenButton showCloseButton showDeleteButton />

          {/* Toolbar */}
          <Toolbar />
          <TodayButton
            messages={{
              today: ' از امروز',
            }}
          />
          <ViewSwitcher />
          <DateNavigator
            navigationButtonComponent={DateNavigatorNavigationButton}
            openButtonComponent={ChooseDateButton({
              currentDate: this.state.currentDate,
              currentView: this.state.currentViewName,
              dateChange: this.currentDateChange,
              viewChange: this.currentViewNameChange,
            })}
          />
          <AppointmentForm
            overlayComponent={this.appointmentForm}
            visible={editingFormVisible}
            onVisibilityChange={this.toggleEditingFormVisibility}
          />
          <DragDropProvider />
        </Scheduler>

        <DeleteConfirm
          commitDeletedAppointment={this.commitDeletedAppointment}
          toggleConfirmationVisible={this.toggleConfirmationVisible}
          confirmationVisible={confirmationVisible}
          cancelDelete={this.cancelDelete}
        />
      </Paper>
    );
  }
}

export default withStyles(styles, { name: 'EditingDemo' })(Demo);
