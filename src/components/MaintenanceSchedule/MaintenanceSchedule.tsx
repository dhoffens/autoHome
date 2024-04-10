import styles from './MaintenanceSchedule.module.scss';
import React from 'react';
import 'react-big-calendar/lib/sass/styles.scss';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'All Day Event',
    start: new Date(2021, 1, 1),
    end: new Date(2021, 1, 1),
  },
];

const MyCalendar = () => (
  <Calendar
    localizer={localizer}
    events={events}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 1000 }}
  />
)

export const MaintenanceSchedule: React.FC = () => {
  return (
    <div>
      <h2 className={styles.title}>Maintenance Schedule</h2>
      <MyCalendar />
    </div>
  );
};