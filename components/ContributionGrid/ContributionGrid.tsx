import {FC, useState} from 'react';
import styles from './ContributionGrid.module.css'

type ContributionGridProps = {
    data: Record<string, number>;
};

export const ContributionGrid: FC<ContributionGridProps> = ({data}) => {
    const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
    const getCellColor = (count: number) => {
        switch (true) {
            case count === 0:
                return '#EDEDED';
            case count < 10:
                return '#ACD5F2';
            case count < 20:
                return '#7FA8C9';
            case count < 30:
                return '#527BA0';
            default:
                return '#254E77';
        }
    }

    return (
        <div className={styles.grid}>
            {Object.entries(data).map(([date, count], index) => (
                <div
                    key={index}
                    className={styles.cell}
                    data-count={count}
                    style={{backgroundColor: getCellColor(count)}}
                    onClick={() => setActiveTooltip(activeTooltip === index ? null : index)}
                >
                    <div className={styles.contributions}>{count}</div>
                    {activeTooltip === index && <div className={styles.tooltip}>
                        <div>
                            {count} контрибуций
                        </div>
                        <div className={styles.date}>{date}</div>
                    </div>}
                </div>
            ))}
        </div>
    );
}
