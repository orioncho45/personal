# Website source guide

This is a React site rendered to static HTML by `build.mjs`. The build also bundles one browser script for React interactions, minifies the CSS, copies media, and writes a sitemap when `SITE_URL` is set. Hosting only needs to serve `client/dist/` and its directory `index.html` routes.

## Where to edit

| Need                                       | File or directory                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------ |
| Page copy and layout                       | `src/pages/*.jsx`                                                        |
| Header and footer                          | `src/components/Layout.jsx`                                              |
| Shared headings and calls to action        | `src/components/Section.jsx`                                             |
| Booking embed                              | `src/components/BookingPanel.jsx`, `config.mjs`                          |
| Project cards and interactive media viewer | `src/components/ProjectCard.jsx`, `src/components/ProjectViewer.jsx`     |
| Project detail action buttons              | `src/components/ProjectActions.jsx`                                    |
| Project text, images, Vimeo IDs            | `data/projects.mjs`, `assets/projects/`                                  |
| Paths and SEO titles/descriptions          | `src/routes.jsx`                                                         |
| SEO metadata and structured data           | `src/Document.jsx`                                                       |
| Styles                                     | `styles/*.css` (concatenated in the numbered order shown in `build.mjs`) |
| Build and asset copying                    | `build.mjs`                                                              |
| Google Calendar booking rules              | `../../google-booking/` (separate Google Apps Script project)            |

`src/App.jsx` provides the site shell and scroll effects. `src/client.jsx` hydrates the static HTML so menu and project viewer controls work. `src/server.jsx` exports the pages to the build. The old React code is kept under `client/legacy-react/` for reference and is not loaded.

## Build and preview

From `client/`:

```powershell
npm install
npm run build
npm run verify
npm start
```

The output is `client/dist/`. When publishing, set `SITE_URL` to the final HTTPS origin without a trailing slash. This adds canonical URLs, absolute social images, and `sitemap.xml`. Submit the sitemap in Google Search Console; Google decides whether sitelinks appear.

The public Google Apps Script `/exec` URL is saved in `config.mjs`, so ordinary builds keep the booking form. Set `BOOKING_APP_URL` at build time only to switch deployments. No Google client secret belongs in the public website.

## Add a project

Add an object with a unique `slug` to `data/projects.mjs`. The build generates a project page automatically. Put local media in `assets/projects/`. The reusable viewer supports:

```js
{ type: 'image', src: '/assets/projects/example.png', alt: 'Descriptive preview' }
{ type: 'vimeo', id: '123456789', title: 'Product demonstration' }
{ type: 'vimeo', id: '123456789', hash: 'unlistedHash', title: 'Unlisted demonstration' }
{ type: 'video', src: '/assets/projects/example.mp4', title: 'Product demonstration' }
```

The first image becomes the project's card and social preview. Vimeo embeds load only when selected in the viewer.

To replace the default “Discuss a similar challenge” booking link, add an `actions` array to a project. Each action needs a button label and URL. Set `newTab: true` for links that should open in a new tab:

```js
actions: [{ label: 'Play now', url: 'https://example.com', newTab: true }]
```

Projects without actions keep the booking link.

## Add a main page

Create a React component in `src/pages/`, then add its path, component, title, and description in `src/routes.jsx`. The build writes a complete HTML file for that path and includes it in the sitemap. Keep one visible `<h1>` per page. Use normal links between generated routes and hash links for sections on the homepage.

The homepage portrait is `assets/portrait.jpg`. Replace that file to change the photo while keeping the same path.
