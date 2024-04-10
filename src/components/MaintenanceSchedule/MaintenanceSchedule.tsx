import styles from './MaintenanceSchedule.module.scss';
import React from 'react';
import 'react-big-calendar/lib/sass/styles.scss';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

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
];

export const MaintenanceSchedule: React.FC = () => {
  return (
    <div>
      <h2 className={styles.title}>Maintenance Schedule</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ 
          height: 1000,
          background: 'gray'

         }}
      />
    </div>
  );
};