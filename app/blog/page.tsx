import { Metadata } from 'next';
import Link from 'next/link';

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
    // headers: {
    //   'Cache-Control': 'no-store', //может повысить нагрузку на сервер
    // },
    // headers: {
    //    'Cache-Control': 'public, max-age=3600', //Этот вариант кеширует данные на стороне клиента и прокси-серверов, что может улучшить производительность и снизить нагрузку на сервер.
    // },
  });

  const allPosts = await response.json();
  const firstFivePosts = allPosts.slice(0, 20);
  return firstFivePosts;
}

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <h1>Blog page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
