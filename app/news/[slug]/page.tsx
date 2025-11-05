import { blogData } from '@/data/blogData';
import NewsSidebar from '@/components/NewsSidebar';
import { notFound } from 'next/navigation';
import NewsPostDetail from '@/components/NewsPostDetail';

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

const NewsDetailPage = ({ params }: { params: { slug: string } }) => {
  const post = blogData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <main className="lg:col-span-2">
            <NewsPostDetail post={post} />
          </main>

          <aside className="lg:col-span-1">
            <NewsSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
  