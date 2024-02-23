import Card from '@/components/Cards';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Next App',
};

export default function Home() {
  return (
    <div className="card-container">
      <Card title="course 1" content="Content for course 1" />
      <Card title="course 2" content="Content for course 2" />
      <Card title="course 3" content="Content for course 3" />
      <Card title="course 4" content="Content for course 4" />
    </div>
  );
}
