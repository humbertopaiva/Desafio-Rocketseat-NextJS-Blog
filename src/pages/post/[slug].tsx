import { GetStaticPaths, GetStaticProps } from 'next';

import * as prismic from '@prismicio/client';
import sm from '../../../sm.json';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  console.log(post);
  // TODO

  const { first_publication_date, data } = post;

  return (
    <div className={commonStyles.container}>
      <div className={styles.banner}>
        <img src={data.banner.url} alt="banner image" />
      </div>
      <div className={commonStyles.content}>
        <h1>{data.title}</h1>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = prismic.createClient(sm.apiEndpoint);
  const postsResponse = await client.getAllByType('posts');
  const paths = postsResponse.map(post => {
    return {
      params: {
        slug: post.uid,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const client = prismic.createClient(sm.apiEndpoint);
  const post = await client.getByUID('posts', String(slug));

  return {
    props: {
      post,
    },
  };
};
