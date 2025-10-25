export function Navbar() {
  return (
    <div className="nav_fixed">
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="600"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="nav w-nav"
      >
        <div className="padding-global">
          <div className="container-xlarge">
            <div className="nav_wrapper">
              <div className="nav_inner">
                <a
                  aria-label="Go to Home page"
                  href="/"
                  aria-current="page"
                  className="nav_brand w-nav-brand w--current "
                >
                  <img src="/logo.png" alt="" className="nav_logo" />
                  <div className="nav_logo-mask">
                    <div
                      className="nav_logo-width"
                      style={{ marginTop: "9px", marginLeft: "2px" }}
                    >
                      <svg
                        width="86"
                        height="17"
                        viewBox="0 0 86 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.74404 16.8H4.20809e-05V1.90735e-06H2.08804V14.88H9.74404V16.8ZM22.1376 15H22.7616V16.8H21.6816C20.0496 16.8 19.4976 16.104 19.4736 14.904C18.7056 16.008 17.4816 16.944 15.3696 16.944C12.6816 16.944 10.8576 15.6 10.8576 13.368C10.8576 10.92 12.5616 9.552 15.7776 9.552H19.3776V8.712C19.3776 7.128 18.2496 6.168 16.3296 6.168C14.6016 6.168 13.4496 6.984 13.2096 8.232H11.2416C11.5296 5.832 13.4736 4.416 16.4256 4.416C19.5456 4.416 21.3456 5.976 21.3456 8.832V14.184C21.3456 14.832 21.5856 15 22.1376 15ZM19.3776 11.808V11.208H15.5856C13.8336 11.208 12.8496 11.856 12.8496 13.248C12.8496 14.448 13.8816 15.264 15.5136 15.264C17.9616 15.264 19.3776 13.848 19.3776 11.808ZM37.9305 4.416C40.4745 4.416 42.5625 5.88 42.5625 9.744V16.8H40.5945V9.864C40.5945 7.464 39.5385 6.216 37.6905 6.216C35.6505 6.216 34.4025 7.752 34.4025 10.248V16.8H32.4345V9.864C32.4345 7.464 31.3545 6.216 29.4825 6.216C27.4665 6.216 26.2425 7.896 26.2425 10.344V16.8H24.2745V4.56H25.9785L26.2425 6.24C26.8905 5.352 27.9225 4.416 29.8185 4.416C31.5225 4.416 32.9865 5.184 33.6825 6.744C34.4265 5.424 35.7465 4.416 37.9305 4.416ZM51.255 4.416C54.639 4.416 57.135 6.696 57.135 10.68C57.135 14.424 54.639 16.944 51.255 16.944C49.191 16.944 47.799 16.104 47.055 14.928L46.791 16.8H45.087V1.90735e-06H47.055V6.528C47.871 5.4 49.191 4.416 51.255 4.416ZM51.063 15.192C53.487 15.192 55.119 13.344 55.119 10.68C55.119 8.016 53.487 6.168 51.063 6.168C48.663 6.168 47.031 8.016 47.031 10.632C47.031 13.32 48.663 15.192 51.063 15.192ZM69.0319 6.432V1.90735e-06H70.9999V16.8H69.2959L69.0319 14.832C68.2159 15.96 66.8959 16.944 64.8319 16.944C61.4479 16.944 58.9519 14.664 58.9519 10.68C58.9519 6.936 61.4479 4.416 64.8319 4.416C66.8959 4.416 68.2879 5.256 69.0319 6.432ZM65.0239 15.192C67.4239 15.192 69.0559 13.344 69.0559 10.728C69.0559 8.04 67.4239 6.168 65.0239 6.168C62.5999 6.168 60.9679 8.016 60.9679 10.68C60.9679 13.344 62.5999 15.192 65.0239 15.192ZM84.5048 15H85.1288V16.8H84.0488C82.4168 16.8 81.8648 16.104 81.8408 14.904C81.0728 16.008 79.8488 16.944 77.7368 16.944C75.0488 16.944 73.2248 15.6 73.2248 13.368C73.2248 10.92 74.9288 9.552 78.1448 9.552H81.7448V8.712C81.7448 7.128 80.6168 6.168 78.6968 6.168C76.9688 6.168 75.8168 6.984 75.5768 8.232H73.6088C73.8968 5.832 75.8408 4.416 78.7928 4.416C81.9128 4.416 83.7128 5.976 83.7128 8.832V14.184C83.7128 14.832 83.9528 15 84.5048 15ZM81.7448 11.808V11.208H77.9528C76.2008 11.208 75.2168 11.856 75.2168 13.248C75.2168 14.448 76.2488 15.264 77.8808 15.264C80.3288 15.264 81.7448 13.848 81.7448 11.808Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
                <nav role="navigation" className="nav_menu w-nav-menu">
                  <div className="nav_menu-inner">
                    <ul id="" className="nav_menu-links">
                      {/* <li className="nav_menu-li">
                        <a
                          aria-label="Go to Product page"
                          href="/product"
                          className="nav_menu-link"
                        >
                          Product
                        </a>
                      </li> */}

                      <li className="nav_menu-li">
                        <a
                          aria-label="Go to Resources page"
                          href="/docs"
                          target="_blank"
                          className="nav_menu-link"
                        >
                          Docs
                        </a>
                      </li>
                      <li className="nav_menu-li">
                        <div className="nav_dropdown">
                          <button
                            className="nav_menu-link nav_dropdown-toggle"
                            aria-label="Resources"
                            aria-expanded="false"
                            onClick={(e) => {
                              e.currentTarget.nextElementSibling?.classList.toggle(
                                "nav_dropdown-open"
                              );
                              e.currentTarget.setAttribute(
                                "aria-expanded",
                                e.currentTarget.getAttribute(
                                  "aria-expanded"
                                ) === "false"
                                  ? "true"
                                  : "false"
                              );
                            }}
                          >
                            Resources
                            <span className="nav_dropdown-icon">▼</span>
                          </button>
                          <ul className="nav_dropdown-menu">
                            <li className="nav_dropdown-item">
                              <a href="/blog" className="nav_dropdown-link">
                                Blog
                              </a>
                            </li>
                            <li className="nav_dropdown-item">
                              <a href="/glossary" className="nav_dropdown-link">
                                Glossary
                              </a>
                            </li>
                            <li className="nav_dropdown-item">
                              <a
                                href="/media-kit"
                                className="nav_dropdown-link"
                              >
                                Media Kit
                              </a>
                            </li>
                            <li className="nav_dropdown-item">
                              <a href="/faqs" className="nav_dropdown-link">
                                FAQs
                              </a>
                            </li>
                            <li className="nav_dropdown-item">
                              <a
                                href="/whitepaper"
                                className="nav_dropdown-link"
                              >
                                Whitepaper
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav_menu-li">
                        <a
                          aria-label="Go to About Us page"
                          href="/about-us"
                          className="nav_menu-link"
                        >
                          About us
                        </a>
                      </li>
                      <li className="nav_menu-li">
                        <a
                          aria-label="Go to Careers page"
                          href="/careers"
                          className="nav_menu-link"
                        >
                          Careers
                        </a>
                      </li>
                    </ul>
                    <div className="nav_menu-buttons">
                      <div className="nav_menu-button-wrapper">
                        <a
                          role="button"
                          aria-label="Explore testnet"
                          href=""
                          className="button-secondary w-inline-block"
                        >
                          <span className="button-secondary_bg"></span>
                          <span
                            data-text="Explore testnet"
                            className="button-secondary_inner"
                          >
                            <span className="button-secondary_text">
                              Explore testnet
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="nav_menu-button-wrapper">
                        <a
                          className="button-primary w-inline-block"
                          href="https://app.getscorecard.ai/"
                          aria-label="login"
                          role="button"
                        >
                          <span className="button-primary_bg"></span>
                          <span
                            data-text="login"
                            className="button-primary_inner"
                          >
                            <span className="button-primary_text">
                              read our docs
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
                <div className="nav_menu-button w-nav-button">
                  <div className="nav_menu-button_wrap">
                    <div className="nav_menu-button_line">
                      <div className="nav_menu-button_dot"></div>
                      <div className="nav_menu-button_dot"></div>
                      <div className="nav_menu-button_dot"></div>
                      <div className="nav_menu-button_dot"></div>
                      <div className="nav_menu-button_dot"></div>
                    </div>
                    <div className="nav_menu-button_embed w-embed">
                      <style>
                        {` .nav_menu-button_wrap {
                                                        --nav_menu-button_thickness: 0.1rem;
                                                        --nav_menu-button_gap: 0.5rem;
                                                        --nav_menu-button_rotate: 45;
                                                    }

                                                    .w--open .nav_menu-button_line {
                                                        width: 100%;
                                                        transform: scaleX(0);
                                                    }

                                                    .w--open .nav_menu-button_line:first-child {
                                                        transform: translateY(calc(var(--nav_menu-button_thickness) + var(--nav_menu-button_gap))) rotate(calc(var(--nav_menu-button_rotate) * -1deg));
                                                    }

                                                    .w--open .nav_menu-button_line:last-child {
                                                        transform: translateY(calc(var(--nav_menu-button_thickness) * -1 + var(--nav_menu-button_gap) * -1)) rotate(calc(var(--nav_menu-button_rotate) * 1deg));
                                                    }`}
                      </style>
                    </div>
                    <div className="nav_menu-button_line">
                      <div className="nav_menu-button_dot"></div>
                      <div className="nav_menu-button_dot"></div>
                      <div className="nav_menu-button_dot"></div>
                      <div className="nav_menu-button_dot"></div>
                      <div className="nav_menu-button_dot"></div>
                    </div>
                    <div className="nav_menu-button_line">
                      <div className="nav_menu-button_dot"></div>
                      <div className="nav_menu-button_dot"></div>
                      <div className="nav_menu-button_dot"></div>
                      <div className="nav_menu-button_dot"></div>
                      <div className="nav_menu-button_dot"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav_background"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
