import React from "react";

interface BlogCardProps {
  imageSrc: string;
  blogName: string;
  shortDescription: string;
  updatedDate: string;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  blogName,
  shortDescription,
  updatedDate,
  onClick,
}) => {
  return (
    <div className="blogCard">
      <img src={imageSrc} alt="Blog" className="blogCardImage" />
      <div className="blogCardContents">
        <div className="blogCardTitle">{blogName}</div>
        <div className="blogCardFooter">
          <p>{updatedDate}</p>
          <a className="viewBlog" onClick={onClick}>
            View Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
