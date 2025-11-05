import Image from 'next/image';
import { Clock, User } from 'lucide-react';
import { Post } from '@/data/blogData';

type NewsPostDetailProps = {
  post: Post;
};

const NewsPostDetail = ({ post }: NewsPostDetailProps) => {
  return (
    <article className="border p-6 rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{post.title}</h1>

      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center">
          <Clock size={14} className="mr-1.5 text-yellow-500" /> {post.date}
        </div>
        <div className="flex items-center">
          <User size={14} className="mr-1.5 text-yellow-500" /> {post.author}
        </div>
      </div>

      <Image
        src={post.imageUrl}
        alt={post.title}
        width={800}
        height={450}
        className="w-full object-cover mb-6 rounded-md"
      />

      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p>{post.content}</p>
      </div>
    </article>
  );
};

export default NewsPostDetail;
