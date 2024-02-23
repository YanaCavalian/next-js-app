import { Metadata } from 'next';

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
      // headers: {
      //   'Cache-Control': 'no-store', //может повысить нагрузку на сервер
      // },
      // headers: {
      //    'Cache-Control': 'public, max-age=3600', //Этот вариант кеширует данные на стороне клиента и прокси-серверов, что может улучшить производительность и снизить нагрузку на сервер.
      // },
    }
  );

  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
