import { useTranslation } from 'react-i18next';
import styles from './Skills.module.css'

const Skills = () => {
  const [t] = useTranslation();
    return (
        <ol className={[styles['hoverable-list'], styles.red].join(' ')}>
            <li className={styles['with-padding']}>
                <span> 🎵 { t('aboutMe.skills.sharp.header') } </span>
                <ul className={[styles['hoverable-list'], styles.green].join(' ')}>
                    <li> <span> ASP.NET Core </span> </li>
                    <li> <span> EF Core </span> </li>
                </ul>
            </li>

            <li className={styles['with-padding']}>
                <span> 🐍 { t('aboutMe.skills.python.header') } </span>
                <ul className={[styles['hoverable-list'], styles.green].join(' ')}>
                    <li> <span> fastapi/aiohttp </span> </li>
                    <li> <span> ML (pyTorch and openCV) </span> </li>
                </ul>
            </li>
            <li className={styles['with-padding']}>
                <span> ☕ JS </span>
                <ul className={[styles['hoverable-list'], styles.green].join(' ')}>
                    <li> <span> React </span> </li>
                    <li> <span> Vue </span> </li>
                </ul>
            </li>
            <li className={styles['with-padding']}>
                <span> 🛠 { t('aboutMe.skills.arch.header') }  </span>
                <ul className={[styles['hoverable-list'], styles.green].join(' ')}>
                    <li> <span> DDD </span> </li>
                    <li> <span> CQS/CQRS, Microservices </span> </li>
                    <li> <span> Event Sourcing </span></li>
                </ul>
            </li>
        </ol>
    );
}

export default Skills;