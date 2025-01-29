'use client';
export default function Admin() {
    return (
      <html
        lang="en"
        dangerouslySetInnerHTML={{
          __html: `
          <!doctype html>
            <html>
            <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Content Manager</title>
            <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </head>
            <body>
            <!-- Include the script that builds the page and powers Decap CMS -->
            <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
            </body>
            </html>
            `,
        }}
      />
    );
  }
