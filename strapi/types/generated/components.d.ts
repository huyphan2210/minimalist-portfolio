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

export interface ProjectProjectFullInfo extends Struct.ComponentSchema {
  collectionName: 'components_project_project_full_infos';
  info: {
    displayName: 'ProjectFullInfo';
  };
  attributes: {
    projectBackgroundDescription: Schema.Attribute.Text;
    projectBackgroundTitle: Schema.Attribute.String;
    projectCategories: Schema.Attribute.Component<'utilities.string', true>;
    projectCtaContent: Schema.Attribute.String;
    projectDescription: Schema.Attribute.Text;
    projectHeroImgURL: Schema.Attribute.String;
    projectLiveURL: Schema.Attribute.String;
    projectPreviewImgURLs: Schema.Attribute.Component<'utilities.string', true>;
    projectStaticPreviewsTitle: Schema.Attribute.String;
    projectTechnologies: Schema.Attribute.Component<'utilities.string', true>;
    projectTitle: Schema.Attribute.String;
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

export interface UtilitiesString extends Struct.ComponentSchema {
  collectionName: 'components_utilities_strings';
  info: {
    displayName: 'String';
  };
  attributes: {
    content: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.project-brief-info': ProjectProjectBriefInfo;
      'project.project-full-info': ProjectProjectFullInfo;
      'url.navigation': UrlNavigation;
      'utilities.string': UtilitiesString;
    }
  }
}
