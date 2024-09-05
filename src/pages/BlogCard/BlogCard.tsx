import React from "react";

interface BlogCardProps {
  imageSrc: string;
  blogName: string;
  shortDescription: string;
  updatedDate: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  blogName,
  shortDescription,
  updatedDate,
}) => {
  return (
    <div className="blogCard">
      <img src={imageSrc} alt="Blog" className="blogCardImage" />
      <div className="blogCardContents">
        <div className="blogCardTitle">{blogName}</div>
        {/* <div className="blogCardDescription">{shortDescription}</div> */}
        <div className="blogCardFooter">
          <p>{updatedDate}</p>
          <a href="#" className="viewBlog">
            View Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
