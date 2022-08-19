import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
import styles from './styles.module.scss';

type PostCardProps = {
  uid: string;
  title: string;
  subtitle: string;
  author: string;
  first_publication_date: string;
};

const PostCard = ({
  uid,
  title,
  subtitle,
  author,
  first_publication_date,
}: PostCardProps) => {
  return (
    <article className={styles.article}>
      <Link href="#">
        <a>
          <h2 className={styles.heading}>{title}</h2>
        </a>
      </Link>
      <p className={styles.body}>{subtitle}</p>
      <div className={styles.info}>
        <div className={styles.info}>
          <FiCalendar />
          <p>{first_publication_date}</p>
        </div>
        <div className={styles.info}>
          <FiUser />
          <p>{author}</p>
        </div>
      </div>
    </article>
  );
};

export { PostCard };
