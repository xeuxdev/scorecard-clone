export function GlobalEmbed() {
  return (
    <div className="global-css w-embed">
      <style>
        {`/* Make text look crisper and more legible in all browsers */
                    body {
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        font-smoothing: antialiased;
                        text-rendering: optimizeLegibility;
                    }

                    /* Focus state style for keyboard navigation for the focusable elements */
                    *[tabindex]:focus-visible, input[type="file"]:focus-visible {
                        outline: 0.125rem solid #4d65ff;
                        outline-offset: 0.125rem;
                    }

                    /* Set color style to inherit */
                    .inherit-color * {
                        color: inherit;
                    }

                    /* Get rid of top margin on first element in any rich text element */
                    .w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {
                        margin-top: 0 !important;
                    }

                    /* Get rid of bottom margin on last element in any rich text element */
                    .w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {
                        margin-bottom: 0 !important;
                    }

                    /* Make sure containers never lose their center alignment */
                    .container-medium,.container-small, .container-large {
                        margin-right: auto !important;
                        margin-left: auto !important;
                    }

                    /* 
Make the following elements inherit typography styles from the parent and not have hardcoded values. 
Important: You will not be able to style for example "All Links" in Designer with this CSS applied.
Uncomment this CSS to use it in the project. Leave this message for future hand-off.
*/
                    /*
a,
.w-input,
.w-select,
.w-tab-link,
.w-nav-link,
.w-dropdown-btn,
.w-dropdown-toggle,
.w-dropdown-link {
  color: inherit;
  text-decoration: inherit;
  font-size: inherit;
}
*/
                    /* Apply "..." after 3 lines of text */
                    .text-wrap-3lines {
                        display: -webkit-box;
                        overflow: hidden;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                    }

                    /* Apply "..." after 2 lines of text */
                    .text-wrap-2lines {
                        display: -webkit-box;
                        overflow: hidden;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }

                    /* These classes are never overwritten */
                    .hide {
                        display: none !important;
                    }

                    @media screen and (max-width: 991px) {
                        .hide, .hide-tablet {
                            display: none !important;
                        }
                    }

                    @media screen and (max-width: 767px) {
                        .hide-mobile-landscape {
                            display: none !important;
                        }
                    }

                    @media screen and (max-width: 479px) {
                        .hide-mobile {
                            display: none !important;
                        }
                    }

                    .margin-0 {
                        margin: 0rem !important;
                    }

                    .padding-0 {
                        padding: 0rem !important;
                    }

                    .spacing-clear {
                        padding: 0rem !important;
                        margin: 0rem !important;
                    }

                    .margin-top {
                        margin-right: 0rem !important;
                        margin-bottom: 0rem !important;
                        margin-left: 0rem !important;
                    }

                    .padding-top {
                        padding-right: 0rem !important;
                        padding-bottom: 0rem !important;
                        padding-left: 0rem !important;
                    }

                    .margin-right {
                        margin-top: 0rem !important;
                        margin-bottom: 0rem !important;
                        margin-left: 0rem !important;
                    }

                    .padding-right {
                        padding-top: 0rem !important;
                        padding-bottom: 0rem !important;
                        padding-left: 0rem !important;
                    }

                    .margin-bottom {
                        margin-top: 0rem !important;
                        margin-right: 0rem !important;
                        margin-left: 0rem !important;
                    }

                    .padding-bottom {
                        padding-top: 0rem !important;
                        padding-right: 0rem !important;
                        padding-left: 0rem !important;
                    }

                    .margin-left {
                        margin-top: 0rem !important;
                        margin-right: 0rem !important;
                        margin-bottom: 0rem !important;
                    }

                    .padding-left {
                        padding-top: 0rem !important;
                        padding-right: 0rem !important;
                        padding-bottom: 0rem !important;
                    }

                    .margin-horizontal {
                        margin-top: 0rem !important;
                        margin-bottom: 0rem !important;
                    }

                    .padding-horizontal {
                        padding-top: 0rem !important;
                        padding-bottom: 0rem !important;
                    }

                    .margin-vertical {
                        margin-right: 0rem !important;
                        margin-left: 0rem !important;
                    }

                    .padding-vertical {
                        padding-right: 0rem !important;
                        padding-left: 0rem !important;
                    }

                    /* Button Primary Styles */
                    .button-primary {
                        --elastic-ease-out: linear( 0, 0.5737 7.6%, 0.8382 11.87%, 0.9463 14.19%, 1.0292 16.54%, 1.0886 18.97%, 1.1258 21.53%, 1.137 22.97%, 1.1424 24.48%, 1.1423 26.1%, 1.1366 27.86%, 1.1165 31.01%, 1.0507 38.62%, 1.0219 42.57%, 0.9995 46.99%, 0.9872 51.63%, 0.9842 58.77%, 1.0011 81.26%, 1 );
                        --smooth-ease: cubic-bezier(.32, .72, 0, 1);
                        --color-ease: cubic-bezier(.215, .61, .355, 1);
                        transition: transform .45s var(--elastic-ease-out);
                    }

                    /* font color transition */
                    .button-primary {
                        color: var(--_color-themes---primary-button--font-default) !important;
                        transition: color 0.4s var(--color-ease);
                    }

                    .button-primary:hover {
                        color: var(--_color-themes---primary-button--font-hover) !important;
                    }

                    /* background color transition */
                    .button-primary .button-primary_bg {
                        background-color: var(--_color-themes---primary-button--background-default);
                        border-color: var(--_color-themes---primary-button--border-default);
                        transition: background-color 0.4s var(--color-ease), border-color 0.4s var(--color-ease);
                    }

                    .button-primary:hover .button-primary_bg {
                        background-color: var(--_color-themes---primary-button--background-hover);
                        border-color: var(--_color-themes---primary-button--border-hover);
                    }

                    /* animated dots */
                    .button-primary .button-primary_dot {
                        background-color: var(--_color-themes---primary-button--font-default) !important;
                        opacity: 1 !important;
                        transition: background-color 0.4s var(--color-ease), scale 0.4s var(--smooth-ease), translate 0.45s var(--smooth-ease);
                    }

                    .button-primary:hover .button-primary_dot {
                        background-color: var(--_color-themes---primary-button--font-hover) !important;
                    }

                    /* first dot is hidden by default */
                    .button-primary_icon:first-child .button-primary_dot {
                        scale: 0;
                    }

                    /* hover dot animations for 2 .button-primary_dot elements */
                    @media (hover: hover) and (pointer: fine) {
                        .button-primary:is(:hover, :focus-visible) .button-primary_icon:last-child .button-primary_dot {
                            scale: 0;
                            translate: 0.5625rem 0 0;
                            transition-delay: calc(var(--index) * 0.04s);
                        }

                        .button-primary:is(:hover, :focus-visible) .button-primary_icon:first-child .button-primary_dot {
                            scale: 1;
                            translate: 0.5625rem 0 0;
                            transition-delay: calc((var(--index) * 0.04s) + (var(--index-parent) * 0.07s));
                        }
                    }

                    /* touch device pressed style (background only) */
                    @media (hover: none) or (pointer: coarse) {
                        .button-primary:active .button-primary_bg {
                            background-color: var(--_color-themes---primary-button--background-hover);
                            border-color: var(--_color-themes---primary-button--border-hover);
                            transition-duration: 0s;
                        }
                    }

                    /* Button Secondary Styles */
                    .button-secondary {
                        --elastic-ease-out: linear( 0, 0.5737 7.6%, 0.8382 11.87%, 0.9463 14.19%, 1.0292 16.54%, 1.0886 18.97%, 1.1258 21.53%, 1.137 22.97%, 1.1424 24.48%, 1.1423 26.1%, 1.1366 27.86%, 1.1165 31.01%, 1.0507 38.62%, 1.0219 42.57%, 0.9995 46.99%, 0.9872 51.63%, 0.9842 58.77%, 1.0011 81.26%, 1 );
                        --smooth-ease: cubic-bezier(.32, .72, 0, 1);
                        --color-ease: cubic-bezier(.215, .61, .355, 1);
                        transition: transform .45s var(--elastic-ease-out);
                    }

                    /* font color transition */
                    .button-secondary {
                        color: var(--_color-themes---secondary-button--font-default) !important;
                        transition: color 0.4s var(--color-ease);
                    }

                    .button-secondary:hover {
                        color: var(--_color-themes---secondary-button--font-hover) !important;
                    }

                    /* background color transition */
                    .button-secondary .button-secondary_bg {
                        background-color: var(--_color-themes---secondary-button--background-default);
                        border-color: var(--_color-themes---secondary-button--border-default);
                        transition: background-color 0.4s var(--color-ease), border-color 0.4s var(--color-ease);
                    }

                    .button-secondary:hover .button-secondary_bg {
                        background-color: var(--_color-themes---secondary-button--background-hover);
                        border-color: var(--_color-themes---secondary-button--border-hover);
                    }

                    /* animated dots */
                    .button-secondary .button-secondary_dot {
                        background-color: var(--_color-themes---secondary-button--font-default) !important;
                        opacity: 1 !important;
                        transition: background-color 0.4s var(--color-ease), scale 0.4s var(--smooth-ease), translate 0.45s var(--smooth-ease);
                    }

                    .button-secondary:hover .button-secondary_dot {
                        background-color: var(--_color-themes---secondary-button--font-hover) !important;
                    }

                    /* first dot is hidden by default */
                    .button-secondary_icon:first-child .button-secondary_dot {
                        scale: 0;
                    }

                    /* hover dot animations for 2 .button-primary_dot elements */
                    @media (hover: hover) and (pointer: fine) {
                        .button-secondary:is(:hover, :focus-visible) .button-secondary_icon:last-child .button-secondary_dot {
                            scale: 0;
                            translate: 0.5625rem 0 0;
                            transition-delay: calc(var(--index) * 0.04s);
                        }

                        .button-secondary:is(:hover, :focus-visible) .button-secondary_icon:first-child .button-secondary_dot {
                            scale: 1;
                            translate: 0.5625rem 0 0;
                            transition-delay: calc((var(--index) * 0.04s) + (var(--index-parent) * 0.07s));
                        }
                    }

                    /* touch device pressed style (background only) */
                    @media (hover: none) or (pointer: coarse) {
                        .button-secondary:active .button-secondary_bg {
                            background-color: var(--_color-themes---secondary-button--background-hover);
                            border-color: var(--_color-themes---secondary-button--border-hover);
                            transition-duration: 0s;
                        }
                    }

                    .form_component {
                        display: flex !important;
                    }

                    /* Nav Styles */
                    @media (min-width: 992px) {
                        .nav.is-scrolled .nav_inner {
                            padding-right: 2rem;
                            padding-left: 2rem;
                        }
                    }

                    @media (max-width: 991px) {
                        .nav.is-scrolled .nav_wrapper {
                            margin-top: 0rem;
                        }
                    }

                    .nav.is-scrolled .nav_wrapper {
                        padding-right: 0rem;
                        padding-left: 0rem;
                    }

                    .nav.is-scrolled .nav_logo-mask {
                        grid-template-columns: 0fr;
                    }

                    .nav.is-scrolled .nav_background, .nav:has(.w--open) .nav_background {
                        opacity: 1;
                    }

                    /* Trim Text On Headlines */
                    h1, h2, h3, h4, h5, h6, .text-size-xlarge, .text-size-large, .text-size-medium {
                        text-box: trim-both cap alphabetic;
                    }

                    /* Text Underline */
                    .text-style-underline {
                        text-decoration: underline;
                        text-decoration-thickness: 0.04em;
                        text-underline-offset: 0.1em;
                        text-decoration-color: currentColor;
                    }

                    /* Parallax Image Styles */
                    [parallax-image] {
                        height: 120%;
                    }

                    /* Text Indentation */
                    [text-indent]::before {
                        content: "";
                        display: inline-block;
                        width: 40%;
                        height: 1em;
                        visibility: hidden;
                    }

                    /* Tablet: Width becomes 20% */
                    @media (max-width: 991px) {
                        [text-indent]::before {
                            width: 20%;
                        }
                    }

                    /* Mobile Portrait: Width becomes 2.5rem */
                    @media (max-width: 479px) {
                        [text-indent]::before {
                            width: 2.5rem;
                        }
                    }

                    /* Blog Card Styles */
                    .blog-card .blog-card_cta {
                        display: none;
                        visibility: hidden;
                    }

                    .blog-card .blog-card_title {
                        font-size: var(--_typography---heading-size-h5--text-size);
                    }

                    .blog-card .blog-card_info {
                        display: contents;
                    }

                    .blog-card .blog-card_blurb {
                        display: none;
                        visibility: hidden;
                    }

                    @container (min-width: 620px) {
                        .blog-card .blog-card_cta {
                            display: flex;
                            visibility: visible;
                        }

                        .blog-card .blog-card_title {
                            font-size: var(--_typography---heading-size-h4--text-size);
                        }

                        .blog-card .blog-card_info {
                            display: flex;
                        }

                        .blog-card .blog-card_blurb {
                            display: block;
                            visibility: visible;
                        }
                    }

                    .blog-card .cover-image {
                        transform: scale(1);
                        transition: transform 0.8s cubic-bezier(.32, .72, 0, 1);
                    }

                    .blog-card:hover .cover-image {
                        transform: scale(1.05);
                    }`}
      </style>
    </div>
  );
}
