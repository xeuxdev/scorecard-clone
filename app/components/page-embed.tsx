import { useEffect, useState } from "react";

export function PageEmbed() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="page-embed w-embed">
      <style>
        {`  @media (max-width: 1279px) {
                        .test-cta_visual {
                            width: 100%;
                        }

                        .test-cta_image {
                            max-width: 100%;
                        }
                    }

                    .data-highlight {
                        text-decoration: underline;
                        text-decoration-thickness: 0.04em;
                        text-underline-offset: 0.1em;
                        text-decoration-color: transparent;
                        /* or a specific color */
                        transition: text-decoration-color 0.6s ease;
                    }

                    .data-highlight.active {
                        text-decoration: underline;
                        text-decoration-thickness: 0.04em;
                        text-underline-offset: 0.1em;
                        text-decoration-color: currentColor;
                    }`}
      </style>
    </div>
  );
}
