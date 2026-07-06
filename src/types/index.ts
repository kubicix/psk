import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  icon: IconDefinition;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface GoogleReview {
  initial: string;
  bgColor: 'bg-purple' | 'bg-teal';
  authorName: string;
  score: string;
  time: string;
  text: string;
}

export interface ContactItem {
  icon: IconDefinition;
  title: string;
  content: string;
  href?: string;
  isHtml?: boolean;
}

export interface SocialLink {
  icon: IconDefinition;
  href: string;
  label: string;
}
