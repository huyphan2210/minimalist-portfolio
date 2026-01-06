import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectProjectBriefInfo extends Struct.ComponentSchema {
  collectionName: 'components_project_project_brief_infos';
  info: {
    displayName: 'ProjectBriefInfo';
  };
  attributes: {
    projectDescription: Schema.Attribute.Text;
    projectName: Schema.Attribute.String;
    projectRelativeCtaContent: Schema.Attribute.String;
    projectRelativeURL: Schema.Attribute.String;
    projectThumbnailURL: Schema.Attribute.String;
  };
}

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
      'project.project-brief-info': ProjectProjectBriefInfo;
      'url.navigation': UrlNavigation;
    }
  }
}
