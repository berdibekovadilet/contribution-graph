import { FC } from 'react';
import styles from './Weekdays.module.css';

export const Weekdays: FC = () => {
    const days = ['Пн', 'Ср', 'Пт'];

    return (
        <div className={styles.container}>
            {days.map((day, index) => (
                <div key={index} className={styles.day}>
                    {day}
                </div>
            ))}
        </div>
    );
};
