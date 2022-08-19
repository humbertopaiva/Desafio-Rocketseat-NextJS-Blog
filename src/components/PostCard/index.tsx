import Link from 'next/link';
import { useState } from 'react';
import { FiCalendar, FiUser } from 'react-icons/fi';
import styles from './styles.module.scss';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

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
  const dateObj = new Date(first_publication_date);
  const date = format(dateObj, 'dd MMM yyy', { locale: ptBR });

  return (
    <article className={styles.article}>
      <Link href={`post/${uid}`}>
        <a>
          <h2 className={styles.heading}>{title}</h2>
        </a>
      </Link>
      <p className={styles.body}>{subtitle}</p>
      <div className={styles.info}>
        <div className={styles.info}>
          <FiCalendar />
          <p>{date}</p>
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
