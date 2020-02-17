import React, { Fragment } from 'react';
import Logo from './images/Logo';

function Layout({ title, h, locals, children }) {
  return (
    <Fragment>
      <head>
        <title>{`${title} | ${h.siteName}`}</title>
        <link rel="stylesheet" href="/dist/style.css" />
        <link rel="shortcut·icon" type="image/png" href="/images/icons/doughnut.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {/* HEADER */}
        <header className="top">
          <nav className="nav">
            <div className="nav__section nav__section--pages">
              <li className="nav__item">
                <a href="/" className="nav__link nav__link--logo">
                  <Logo />
                </a>
              </li>
              {h.menu.map((item) => (
                <li className="nav__item">
                  <a className="nav__link" href={item.slug}>
                    {/* <SVG src={h.icon(item.icon)} /> */}
                    <img src={`/images/icons/${item.icon}.svg`} />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </div>
          </nav>
        </header>

        {/* MESSAGES */}
        {/* {locals.flashes && (
          <div className="inner inner--flashes">
            <div className="flash-messages">
              {Object.keys(locals.flashes).map(category => {

              })}
            </div>
          </div>
        )} */}

        {/* CONTENT */}
        {children}

        {/* SCRIPTS */}
        <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`} />
        <script src="/dist/App.bundle.js" />
      </body>
    </Fragment>
  );
}

export default Layout;
