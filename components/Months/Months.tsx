import { FC } from 'react';
import styles from './Months.module.css';

export const Months: FC = () => {
    const months = ['Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек', 'Янв', 'Фев', 'Март'];

    return (
        <div className={styles.container}>
            {months.map((month, index) => (
                <div key={index} className={styles.month}>
                    {month}
                </div>
            ))}
        </div>
    );
};
