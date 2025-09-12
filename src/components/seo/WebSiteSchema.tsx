import React from 'react';
import Script from 'next/script';

interface WebSiteSchemaProps {
  data: {
    name: string;
    url: string;
    searchUrl: string;
  };
}

const WebSiteSchema: React.FC<WebSiteSchemaProps> = ({ data }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.name,
    url: data.url,
    // potentialAction: {
    //   '@type': 'SearchAction',
    //   target: `${data.searchUrl}?q={search_term_string}`,
    //   'query-input': 'required name=search_term_string',
    // },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default WebSiteSchema;
