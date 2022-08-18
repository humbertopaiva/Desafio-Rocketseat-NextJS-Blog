import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
import styles from './styles.module.scss';

const PostCard = () => {
  return (
    <article className={styles.article}>
      <Link href="#">
        <a>
          <h2 className={styles.heading}>
            Email Marketing: Como funciona a entregabilidade e como garantir sua
            eficiência
          </h2>
        </a>
      </Link>
      <p className={styles.body}>
        Confira dicas para driblar os desafios do email marketing (como falha no
        envio e recebimento) e mensurar a entregabilidade
      </p>
      <div className={styles.info}>
        <div className={styles.info}>
          <FiCalendar />
          <p>15 MAR 2022</p>
        </div>
        <div className={styles.info}>
          <FiUser />
          <p>Humberto Paiva</p>
        </div>
      </div>
    </article>
  );
};

export { PostCard };
