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

export interface ComponentsDynamic extends Struct.ComponentSchema {
  collectionName: 'components_components_dynamics';
  info: {
    displayName: 'dynamic';
  };
  attributes: {
    title: Schema.Attribute.String;
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

export interface ComponentsTotSection extends Struct.ComponentSchema {
  collectionName: 'components_components_tot_sections';
  info: {
    displayName: 'tot_section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsTotSectionsTot extends Struct.ComponentSchema {
  collectionName: 'components_components_tot_sections_tots';
  info: {
    displayName: 'tot_sections_tot';
  };
  attributes: {
    tot_sections: Schema.Attribute.Component<'components.tot-section', true>;
  };
}

export interface FooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'link';
  };
  attributes: {};
}

export interface FooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'social links';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
  };
}

export interface FooterSocialLinksFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links_footers';
  info: {
    displayName: 'social_links_footer';
  };
  attributes: {
    facebook: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://facebook.com'>;
    instagram: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://instagram.com'>;
    x: Schema.Attribute.String & Schema.Attribute.DefaultTo<'https://x.com'>;
  };
}

export interface HomeLogos extends Struct.ComponentSchema {
  collectionName: 'components_home_logos';
  info: {
    displayName: 'logos';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title_section: Schema.Attribute.String;
  };
}

export interface HomeRatingSection extends Struct.ComponentSchema {
  collectionName: 'components_home_rating_sections';
  info: {
    displayName: 'rating_section';
  };
  attributes: {
    ratings: Schema.Attribute.Relation<'oneToMany', 'api::rating.rating'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeTotSection extends Struct.ComponentSchema {
  collectionName: 'components_home_tot_sections';
  info: {
    description: '';
    displayName: 'TOT section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title_section: Schema.Attribute.String;
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

export interface SectionsHeroBlogs extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_blogs';
  info: {
    description: '';
    displayName: 'HeroBlogs';
  };
  attributes: {
    background: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Blogs This is page all blogs'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Blogs This is page all blogs'>;
  };
}

export interface SectionsHeroDiplomas extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_diplomas';
  info: {
    description: '';
    displayName: 'HeroDiplomas';
  };
  attributes: {
    background: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Diplomas This is page all diplomas'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Diplomas This is page all diplomas'>;
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

export interface SectionsRegister extends Struct.ComponentSchema {
  collectionName: 'components_sections_registers';
  info: {
    displayName: 'register';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Register now'>;
  };
}

export interface SectionsSoon extends Struct.ComponentSchema {
  collectionName: 'components_sections_soons';
  info: {
    displayName: 'soon';
  };
  attributes: {
    diploma: Schema.Attribute.Relation<'oneToOne', 'api::diploma.diploma'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SectionsTeam extends Struct.ComponentSchema {
  collectionName: 'components_sections_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    teams: Schema.Attribute.Relation<'oneToMany', 'api::team.team'>;
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
      'components.dynamic': ComponentsDynamic;
      'components.links': ComponentsLinks;
      'components.links-list': ComponentsLinksList;
      'components.question': ComponentsQuestion;
      'components.social-section': ComponentsSocialSection;
      'components.tot-section': ComponentsTotSection;
      'components.tot-sections-tot': ComponentsTotSectionsTot;
      'footer.link': FooterLink;
      'footer.social-links': FooterSocialLinks;
      'footer.social-links-footer': FooterSocialLinksFooter;
      'home.logos': HomeLogos;
      'home.rating-section': HomeRatingSection;
      'home.tot-section': HomeTotSection;
      'sections.about-section': SectionsAboutSection;
      'sections.blogs': SectionsBlogs;
      'sections.faqs': SectionsFaqs;
      'sections.hero-blogs': SectionsHeroBlogs;
      'sections.hero-diplomas': SectionsHeroDiplomas;
      'sections.projects': SectionsProjects;
      'sections.register': SectionsRegister;
      'sections.soon': SectionsSoon;
      'sections.state': SectionsState;
      'sections.team': SectionsTeam;
      'slider.button': SliderButton;
      'slider.slider': SliderSlider;
    }
  }
}
