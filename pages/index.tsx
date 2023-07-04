import {useEffect, useState} from "react";
import {getContributions} from "../lib/api";
import type {NextPage} from 'next'
import Head from 'next/head'
import {ContributionGrid} from "../components/ContributionGrid"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    const [data, setData] = useState<Record<string, number>>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const contributions = await getContributions();
                let contributionsData: Record<string, number> = {};
                const currentDate = new Date();
                const oneYearAgo = new Date();
                oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
                for (let day = new Date(oneYearAgo); day <= currentDate; day.setDate(day.getDate() + 1)) {
                    contributionsData[day.toISOString().slice(0, 10)] = 0;
                }
                for (let date in contributions) {
                    if (contributionsData.hasOwnProperty(date)) {
                        contributionsData[date] = contributions[date];
                    }
                }
                setData(contributionsData);
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
            <h1 className={styles.title}>Contribution Graph App</h1>
            <ContributionGrid data={data}/>
        </div>
    )
}

export default Home
