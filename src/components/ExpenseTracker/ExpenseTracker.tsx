import styles from './ExpenseTracker.module.scss';
import React from 'react';

export const ExpenseTracker: React.FC = () => {
  return <div>
    <h2 className={styles.title}>Expense Tracker</h2>
  </div>;
};