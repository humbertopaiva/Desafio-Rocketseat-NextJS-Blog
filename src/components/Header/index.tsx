import commomStyles from '../../styles/common.module.scss';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={commomStyles.container}>
      <div className={styles.content}>
        <img src="/logo.svg" alt="logo" />
      </div>
    </header>
  );
}
