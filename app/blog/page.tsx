'use client';
import { PostSearch } from '@/components/PostSearch';
import { Posts } from '@/components/Posts';
import { getAllPosts } from '@/services/getPosts';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';

const metadata: Metadata = {
  title: 'Blog | Next App',
};

export default async function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
}
