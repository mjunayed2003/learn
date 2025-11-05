// app/news/page.tsx
import { blogData } from '@/data/blogData';
import NewsSidebar from '@/components/NewsSidebar';
import NewsPostCard from '@/components/NewsPostCard'; // নতুন কম্পোনেন্ট ইম্পোর্ট করুন

const NewsListPage = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-light text-gray-700">News</h1>
          <p className="text-gray-500">Premium WordPress Themes & Website Templates.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-2 space-y-6">
            {blogData.map(post => (
              // এখানে নতুন কম্পোনেন্ট ব্যবহার করা হয়েছে
              <NewsPostCard key={post.slug} post={post} />
            ))}
          </main>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <NewsSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsListPage;


