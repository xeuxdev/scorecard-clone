import React from "react";
import ReactMarkdown from "react-markdown";
import type { ReactNode } from "react";

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
}) => {
  const customComponents = {
    img: ({ src, alt }: { src?: string; alt?: string }) => (
      <figure className="w-richtext-align-center w-richtext-figure-type-image">
        <div>
          <img src={src} alt={alt} loading="lazy" />
        </div>
        {alt && <figcaption>{alt}</figcaption>}
      </figure>
    ),
  };

  return <ReactMarkdown components={customComponents}>{content}</ReactMarkdown>;
};
