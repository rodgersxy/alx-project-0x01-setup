// components/common/PostCard.tsx
import React from 'react';

interface PostCardProps {
  title: string;
  description: string;
  date?: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, description, date }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      {date && <span className="text-sm text-gray-500">{date}</span>}
    </div>
  );
};

export default PostCard;