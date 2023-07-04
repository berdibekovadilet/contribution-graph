import {FC} from 'react';
import styles from './ContributionGrid.module.css'

type ContributionGridProps = {
    data: Record<string, number>;
};

export const ContributionGrid: FC<ContributionGridProps> = ({data}) => {
    return (
        <div className={styles.grid}>
            {Object.entries(data).map(([date, count], index) => (
                <div key={index} className={styles.cell} data-count={count}>
                    <div className={styles.contributions}>{count}</div>
                    <div className={styles.tooltip}>{date}</div>
                </div>
            ))}
        </div>
    );
}
