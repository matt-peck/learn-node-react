import React, { Fragment } from "react";
import Icon from "./components/Icon";

const Layout = ({ title, user, currentPath, flashes, children }) => {
  const menu = [
    { slug: "/stores", title: "Stores", icon: "store" },
    { slug: "/tags", title: "Tags", icon: "tag" },
    { slug: "/top", title: "Top", icon: "top" },
    { slug: "/add", title: "Add", icon: "add" },
    { slug: "/map", title: "Map", icon: "map" },
  ];

  return (
    <Fragment>
      <head>
        <title>{`${title} | "Now That's Delicious!"`}</title>
        <link rel="stylesheet" href="/dist/style.css" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/images/icons/doughnut.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header className="top">
          <nav className="nav">
            <div className="nav__section nav__section--pages">
              <li className="nav__item">
                <a href="/" className="nav__link nav__link--logo">
                  <Icon icon="logo" />
                </a>
              </li>

              {menu.map((item) => (
                <li key={item.title} className="nav__item">
                  <a
                    className={
                      currentPath.startsWith(item.slug)
                        ? "nav__link nav__link--active"
                        : "nav__link"
                    }
                    href={item.slug}
                  >
                    <Icon icon={item.icon} />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </div>

            <div className="nav__section nav__section--search">
              <div className="search">
                <input
                  type="text"
                  className="search__input"
                  placeholder="Coffee, beer..."
                  name="search"
                />
                <div className="search__results" />
              </div>
            </div>

            <div className="nav__section nav__section--user">
              {user ? (
                <Fragment>
                  <li className="nav__item">
                    <a
                      href="/hearts"
                      className={
                        currentPath.startsWith("/hearts")
                          ? "nav__link nav__link--active"
                          : "nav__link"
                      }
                    >
                      <Icon icon="heart" />
                      <span className="heart-count">
                        {user.hearts && user.hearts.length}
                      </span>
                    </a>
                  </li>
                  <li className="nav__item">
                    <a
                      href="/logout"
                      className={
                        currentPath.startsWith("/logout")
                          ? "nav__link nav__link--active"
                          : "nav__link"
                      }
                    >
                      <Icon icon="logout" />
                      <span>Logout</span>
                    </a>
                  </li>
                  <li className="nav__item">
                    <a
                      href="/account"
                      className={
                        currentPath.startsWith("/account")
                          ? "nav__link nav__link--active"
                          : "nav__link"
                      }
                    >
                      <img
                        src={`${user.gravatar}d=retro`}
                        alt="gravater"
                        className="avatar"
                      />
                    </a>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li className="nav__item">
                    <a
                      href="/register"
                      className={
                        currentPath.startsWith("/register")
                          ? "nav__link nav__link--active"
                          : "nav__link"
                      }
                    >
                      <span>Register</span>
                    </a>
                  </li>
                  <li className="nav__item">
                    <a
                      href="/login"
                      className={
                        currentPath.startsWith("/login")
                          ? "nav__link nav__link--active"
                          : "nav__link"
                      }
                    >
                      <span>Login</span>
                    </a>
                  </li>
                </Fragment>
              )}
            </div>
          </nav>
        </header>

        {/* MESSAGES */}
        {flashes && (
          <div className="inner inner--flashes">
            <div className="flash-messages">
              {Object.keys(flashes).map((category) => {
                return flashes[category].map((message) => {
                  return (
                    <div
                      className={`flash flash--${category}`}
                      dangerouslySetInnerHTML={{
                        __html: `
                      <p class="flash__text">${message}</p>
                      <button class="flash__remove" onClick="this.parentElement.remove()">
                        &times;
                      </button>
                      `,
                      }}
                    />
                  );
                });
              })}
            </div>
          </div>
        )}

        {/* CONTENT */}
        {children}

        {/* SCRIPTS */}
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
        />
        <script src="/dist/App.bundle.js" />
      </body>
    </Fragment>
  );
};

export default Layout;
