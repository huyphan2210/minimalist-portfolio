import type { Schema, Struct } from '@strapi/strapi';

export interface UrlNavigation extends Struct.ComponentSchema {
  collectionName: 'components_url_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'link';
  };
  attributes: {
    displayName: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'url.navigation': UrlNavigation;
    }
  }
}
