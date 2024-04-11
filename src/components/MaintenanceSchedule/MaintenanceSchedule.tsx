import React from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/sass/styles.scss';
import styles from './MaintenanceSchedule.module.scss';

const localizer = momentLocalizer(moment);
const events = [
  {
    title: 'HVAC maintenance',
    start: new Date(2024, 3, 2),
    end: new Date(2024, 3, 2),
  },
  {
    title: 'Gutter cleaning',
    start: new Date(2024, 3, 8),
    end: new Date(2024, 3, 8),
  },
  {
    title: 'Lawn care',
    start: new Date(2024, 3, 14),
    end: new Date(2024, 3, 14),
  },
  {
    title: 'Grass cut',
    start: new Date(2024, 3, 12),
    end: new Date(2024, 3, 12),
  },
];

export const MaintenanceSchedule: React.FC = () => {
  return (
    <div>
      <h2 className={styles.title}>Maintenance Schedule</h2>
      <div className={styles.calendarContainer}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          className={styles.calendar}
        />
      </div>
    </div>
  );
};