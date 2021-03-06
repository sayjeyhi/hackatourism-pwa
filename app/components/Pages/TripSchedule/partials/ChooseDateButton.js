import React, { useState } from 'react';
import jalaali from 'jalaali-js';
import DatePicker from 'react-modern-calendar-datepicker';

import { persianNumber } from '@snappmarket/helpers';

const ChooseDateButton = ({
  dateChange,
  viewChange,
  currentDate,
  currentView,
}) => () => {
  const dateFromInstance = new Date(currentDate);
  const dateToInstance = new Date(currentDate);
  let daysBetween = 8;
  if (currentView === 'two-weekly') {
    daysBetween = 10;
  } else if (currentView === 'monthly') {
    daysBetween = 29;
  }
  dateToInstance.setDate(dateToInstance.getDate() + daysBetween);

  const fromDateJalaali = jalaali.toJalaali(dateFromInstance);
  const toDateJalaali = jalaali.toJalaali(dateToInstance);
  const [value, setValue] = useState({
    from: {
      year: fromDateJalaali.jy,
      month: fromDateJalaali.jm,
      day: fromDateJalaali.jd,
    },
    to: {
      year: toDateJalaali.jy,
      month: toDateJalaali.jm,
      day: toDateJalaali.jd,
    },
  });

  // generate showed text
  let showedString = `از ${value.from.year}/${value.from.month}/${value.from.day} `;
  if (value.to) {
    showedString += `تا ${value.from.year}/${value.to.month}/${value.to.day}`;
  }

  const handleChooseDate = value => {
    const gregorianFirstDay = jalaali.toGregorian(
      value.from.year,
      value.from.month,
      value.from.day,
    );
    const dateInstance = new Date(
      `${gregorianFirstDay.gy}-${gregorianFirstDay.gm}-${gregorianFirstDay.gd}`,
    );

    /**
     * Apply changes when user choose range
     */
    if (value.to) {
      /**
       * If weekly show is not possible to this view
       */
      if (value.to.day - value.from.day < 8) {
        viewChange('weekly');
      } else if (value.to.day - value.from.day >= 8) {
        viewChange('two-weekly');
      } else if (value.to.day - value.from.day > 13) {
        viewChange('monthly');
      }
      dateChange(dateInstance);
    }
    setValue(value);
  };
  return (
    <DatePicker
      locale="fa"
      value={value}
      onChange={handleChooseDate}
      style={{
        display: 'block',
        borderRadius: 5,
      }}
      renderInput={({ ref }) => (
        <input
          readOnly
          ref={ref}
          placeholder="انتخاب تاریخ"
          type="button"
          value={persianNumber(showedString)}
          style={{
            textAlign: 'center',
            background: '#f7f7f7',
            padding: '0.7rem 1.5rem',
            marginLeft: 3,
            fontSize: '1.5rem',
            border: '1px solid rgba(0, 0, 0, 0.23)',
            minWidth: 200,
            borderRadius: '5px',
            outline: 'none',
          }}
          className="dir-rtl"
        />
      )}
      shouldHighlightWeekends
    />
  );
};

export default ChooseDateButton;
