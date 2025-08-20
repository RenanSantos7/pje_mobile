import styles from './styles.module.css';
import logo from '../../assets/pje2-branco.png'

interface HeaderProps {
	title: string;
}

export default function Header({ title }: HeaderProps) {
	return (
		<header className={styles.header}>
            <div className={styles.headerContent}>
                <img
                    src={logo}
                    alt=''
                    className={styles.logo}
                />
                <span className={styles.text}>{title}</span>
            </div>
			<div>Menu</div>
		</header>
	);
}
