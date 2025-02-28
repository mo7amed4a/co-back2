import type { Schema, Struct } from '@strapi/strapi';

export interface AboutSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_about_social_links';
  info: {
    displayName: 'social-links';
    icon: 'chartBubble';
  };
  attributes: {
    links: Schema.Attribute.Component<'components.button', true>;
  };
}

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'button';
    icon: 'calendar';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<
      ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ComponentsLinks extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    icon: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsLinksList extends Struct.ComponentSchema {
  collectionName: 'components_components_links_lists';
  info: {
    displayName: 'links-list';
  };
  attributes: {
    listLinks: Schema.Attribute.Component<'components.button', true>;
  };
}

export interface ComponentsQuestion extends Struct.ComponentSchema {
  collectionName: 'components_components_questions';
  info: {
    displayName: 'question';
    icon: 'alien';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ComponentsSocialSection extends Struct.ComponentSchema {
  collectionName: 'components_components_social_sections';
  info: {
    displayName: 'SocialSection';
  };
  attributes: {
    links: Schema.Attribute.Component<'components.links', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'AboutSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    state: Schema.Attribute.Component<'sections.state', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBlogs extends Struct.ComponentSchema {
  collectionName: 'components_home_blogs';
  info: {
    description: '';
    displayName: 'blogs';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaqs extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    questions: Schema.Attribute.Component<'components.question', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProjects extends Struct.ComponentSchema {
  collectionName: 'components_sections_diplomas';
  info: {
    description: '';
    displayName: 'diplomas';
    icon: 'chartBubble';
  };
  attributes: {
    diplomas: Schema.Attribute.Relation<'oneToMany', 'api::diploma.diploma'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsState extends Struct.ComponentSchema {
  collectionName: 'components_sections_states';
  info: {
    description: '';
    displayName: 'State';
  };
  attributes: {
    description: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SliderButton extends Struct.ComponentSchema {
  collectionName: 'components_slider_buttons';
  info: {
    description: '';
    displayName: 'button';
  };
  attributes: {
    link: Schema.Attribute.String;
  };
}

export interface SliderSlider extends Struct.ComponentSchema {
  collectionName: 'components_slider_sliders';
  info: {
    description: '';
    displayName: 'slider';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'components.button', true>;
    description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.social-links': AboutSocialLinks;
      'components.button': ComponentsButton;
      'components.links': ComponentsLinks;
      'components.links-list': ComponentsLinksList;
      'components.question': ComponentsQuestion;
      'components.social-section': ComponentsSocialSection;
      'sections.about-section': SectionsAboutSection;
      'sections.blogs': SectionsBlogs;
      'sections.faqs': SectionsFaqs;
      'sections.projects': SectionsProjects;
      'sections.state': SectionsState;
      'slider.button': SliderButton;
      'slider.slider': SliderSlider;
    }
  }
}
