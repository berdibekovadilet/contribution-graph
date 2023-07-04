import {useEffect, useState} from "react";
import {getContributions} from "../lib/api";
import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    const [data, setData] = useState<Record<string, number> | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const contributions = await getContributions();
                setData(contributions);
            } catch (error) {
                console.error('Непредвиденная ошибка в момент получения данных.', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className={styles.container}>
            <Head>
                <title>Adilet | Contribution Graph</title>
                <meta name="description" content="Adilet Berdibekov | Contribution Graph App"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <div>
                {data
                    ? Object.entries(data).map(([date, count], index) => (
                        <div key={index}>
                            <span>Date: {date}, </span>
                            <span>Contributions: {count}</span>
                        </div>
                    ))
                    : 'Загрузка...'
                }
            </div>
        </div>
    )
}

export default Home
