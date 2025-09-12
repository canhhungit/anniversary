import React from 'react';
import Script from 'next/script';

interface BreadcrumbItem {
  '@type': 'ListItem';
  position: number;
  name: string;
  item: string;
}

interface BreadcrumbListSchemaProps {
  itemListElement: BreadcrumbItem[];
}

const BreadcrumbListSchema: React.FC<BreadcrumbListSchemaProps> = ({
  itemListElement,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default BreadcrumbListSchema;
