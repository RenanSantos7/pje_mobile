import { ReactNode } from "react";

import Header from "@components/Header";

import styles from "./styles.module.css";

interface PageContainerProps {
    title: string;
    children: ReactNode;
};

export default function PageContainer(props: PageContainerProps) {
    return (
        <div className={styles.container}>
            <Header title={props.title} />
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
};