import { GetStaticProps } from 'next';
import { PostCard } from '../components/PostCard';
import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import * as prismic from '@prismicio/client';
import sm from '../../sm.json';
// import { getPrismicClient } from '../services/prismic';

interface Post {
  id?: string;
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string | null;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  console.log(postsPagination);
  return (
    <main className={commonStyles.container}>
      <ul className={commonStyles.content}>
        {postsPagination.results.map((post, index) => {
          const { uid, first_publication_date, data } = post;
          return (
            <li key={index}>
              <PostCard
                uid={uid}
                title={data.title}
                subtitle={data.subtitle}
                author={data.author}
                first_publication_date={first_publication_date}
              />
            </li>
          );
        })}
        <button className={styles.button}>Carregar mais posts</button>
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = prismic.createClient(sm.apiEndpoint);
  const postsResponse = await client.getByType('posts', {
    pageSize: 3,
    orderings: {
      field: 'last_publication_date',
      direction: 'desc',
    },
  });

  const results = postsResponse?.results || [];
  const next_page = postsResponse?.next_page || null;

  const postsPagination = {
    results,
    next_page,
  };

  return {
    props: { postsPagination },
  };
};
