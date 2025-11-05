import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const categories = [
  'Academics', 'Advancement', 'Business', 'Campus Life', 'Design', 'Government', 'School'
];

const tags = ['Course', 'post', 'school', 'theme', 'wordpress', 'teacher'];

const NewsSidebar = () => {
  return (
    <aside className="space-y-6">
      {/* Search */}
      <div className="border p-4">
        <div className="relative">
          <Input placeholder="Search site" className="pr-10 rounded-none border-gray-300" />
          <Button
            type="submit"
            variant="outline"
            className="absolute right-0 top-0 h-full px-3 rounded-none border-l-0"
          >
            <Search className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      </div>

      {/* Advertisement */}
      <div className="border">
        <Image src="/blogs/ad.png" alt="Advertisement" width={300} height={250} className="w-full" />
      </div>

      {/* Categories */}
      <div className="border p-4">
        <h3 className="text-lg font-semibold mb-3 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-yellow-400">
          Categories
        </h3>
        <ul className="space-y-1">
          {categories.map(cat => (
            <li key={cat}>
              <Link href="#" className="text-gray-600 hover:text-black">{cat}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="border p-4">
        <h3 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-yellow-400">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Badge key={tag} variant="outline" className="hover:bg-gray-200 cursor-pointer">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default NewsSidebar;
