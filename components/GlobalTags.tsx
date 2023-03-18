import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon-16x16.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon-32x32.png")}
      />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
      <meta name="theme-color" content="#221E1F" />
      <meta name="msapplication-TileColor" content="#221E1F" />

      {
        /*
         * Include fonts
         * tip: It's always better copy fonts to the `/static/fonts` folder than serving from another
         * domain since DNS resolution times can really affect performance.
         */
      }
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'Barlow';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${asset("/fonts/Barlow-Regular.ttf")}) format('ttf');
          }
          @font-face {
            font-family: 'Barlow';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${asset("/fonts/Barlow-Medium.ttf")}) format('ttf');
          }
          @font-face {
            font-family: 'Barlow';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(${asset("/fonts/Barlow-Bold.ttf")}) format('ttf');
          }
          @font-face {
            font-family: "FK Olympikus Upright";
            src: url(${
            asset("/fonts/FKOlympikus-Upright.eot.css")
          }) format("embedded-opentype"),
              url(${
            asset("/fonts/FKOlympikus-Upright.woff2.css")
          }) format("woff2"),
              url(${
            asset("/fonts/FKOlympikus-Upright.woff.css")
          }) format("woff"),
              url(${
            asset("/fonts/FKOlympikus-Upright.ttf.css")
          }) format("truetype"),
              url(${
            asset("/fonts/FKOlympikus-Upright.svg.css#FKOlympikus-Upright")
          }) format("svg");
            font-weight:normal;
            font-style:normal;
          }
      `,
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.isDark = false;
            document.documentElement.classList[window.isDark ? 'add' : 'remove']("dark");
            `,
        }}
      />
    </Head>
  );
}

export default GlobalTags;
