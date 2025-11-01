export function BlogCard({
  post,
}: {
  post: {
    id: number;
    url: string;
    image: string;
    title: string;
    date: string;
    readTime: number;
    category: string;
  };
}) {
  return (
    <div
      role="listitem"
      key={post.url}
      className="blog-gallery_item w-dyn-item"
    >
      <div className="blog-card">
        <a
          href={`/blog/${post.url}`}
          className="blog-card_thumb w-inline-block min-h-60! max-h-60!"
        >
          <img
            src={post.image}
            loading="lazy"
            alt=""
            sizes="(max-width: 676px) 100vw, 676px"
            className="cover-image"
          />
        </a>
        <div className="blog-card_content">
          <div className="blog-card_info">
            <div fs-list-field="category" className="blog-card_category">
              {post.category}
            </div>
            <div className="blog-card_date-read">
              <div className="blog-card_info-text text-color-secondary">
                {post.date}
              </div>
              <div className="blog-card_info-text">
                —{post.readTime} min read
              </div>
              <div className="blog-card_read-info">
                <div className="blog-card_info-text"></div>
                <div className="blog-card_info-text">min read</div>
              </div>
            </div>
          </div>
          <div className="blog-card_copy">
            <a
              fs-list-field="title"
              href={`/blog/${post.url}`}
              className="blog-card_title heading-style-h4"
            >
              {post.title}
            </a>
            <p className="blog-card_blurb text-label"></p>
          </div>
          <div className="blog-card_cta">
            <a
              className="button-primary w-inline-block"
              href={`/blog/${post.url}`}
              aria-label="Read Article"
              role="button"
            >
              <span className="button-primary_bg"></span>
              <span data-text="Read Article" className="button-primary_inner">
                <span className="button-primary_text">Read More</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
