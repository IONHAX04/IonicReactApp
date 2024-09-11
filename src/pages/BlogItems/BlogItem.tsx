import React from "react";

interface BlogItemProps {
  imageSrc: string;
  blogName: string;
  shortDescription: string;
  updatedDate: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  imageSrc,
  blogName,
  shortDescription,
  updatedDate,
}) => {
  return (
    <div className="BlogItem">
      <img src={imageSrc} alt="Blog" className="BlogItemImage" />
      <div className="BlogItemContents">
        <div className="BlogItemTitle">{blogName}</div>
        {/* <div className="BlogItemDescription">{shortDescription}</div> */}
        <div className="BlogItemFooter">
          <p>{updatedDate}</p>
          <a href="#" className="viewBlog">
            View Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
