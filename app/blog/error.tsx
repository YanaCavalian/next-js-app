'use client';

export default function ErrorComponent({ error }: { error: Error }) {
  return <h1>Oops! {error.message}</h1>;
}
