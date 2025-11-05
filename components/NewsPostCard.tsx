import Image from 'next/image';
import Link from 'next/link';
import { Clock, User } from 'lucide-react';
import { Post } from '@/data/blogData';

type NewsPostCardProps = {
  post: Post;
};

const NewsPostCard = ({ post }: NewsPostCardProps) => {
  return (
    <div className="grid sm:grid-cols-3 gap-6 border p-4 rounded-lg hover:shadow-md transition-shadow">
      <div className="sm:col-span-1">
        <Link href={`/news/${post.slug}`}>
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={250}
            height={180}
            className="w-full object-cover"
          />
        </Link>
      </div>

      <div className="sm:col-span-2">
        <p className="text-sm text-gray-500 mb-1">{post.category}</p>
        <h2 className="text-xl font-semibold text-gray-800 hover:text-yellow-500">
          <Link href={`/news/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-gray-600 my-2 text-sm">{post.excerpt}</p>

        <div className="flex items-center space-x-4 text-xs text-gray-500">
          <div className="flex items-center">
            <Clock size={14} className="mr-1.5 text-yellow-500" /> {post.date}
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1.5 text-yellow-500" /> {post.author}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPostCard;
