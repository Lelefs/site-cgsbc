import Head from 'next/head';

export default function SEO({
  title,
  description,
  shouldExcludeTitleSufix = false,
  shouldIndexPage = true,
}) {
  const pageTitle = `${title} ${!shouldExcludeTitleSufix ? ' | CGSBC' : ''}`;

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}
      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}

      <meta name="referrer" content="no-referrer-when-downgrade" />
    </Head>
  );
}
