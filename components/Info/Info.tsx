import {FC} from 'react';
import styles from './Info.module.css';

export const Info: FC = () => {
    const colors = ['#EDEDED', '#ACD5F2', '#7FA8C9', '#527BA0', '#254E77'];
    const tooltipTexts = ['Нет контрибуций', '1-9 контрибуций', '10-19 контрибуций', '20-29 контрибуций', '30+ контрибуций'];

    return (
        <div className={styles.container}>
            <div className={styles.less}>Меньше</div>
            <div className={styles.colors}>
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className={styles.color}
                        style={{backgroundColor: color}}
                    >
                        <div className={styles.tooltip}>{tooltipTexts[index]}</div>
                    </div>
                ))}
            </div>
            <div className={styles.more}>Больше</div>
        </div>
    );
};
