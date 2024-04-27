import type { Schema, Attribute } from '@strapi/strapi';

export interface TopicsContent extends Schema.Component {
  collectionName: 'components_topics_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    input: Attribute.RichText;
    output: Attribute.RichText;
  };
}

export interface TopicsTopic extends Schema.Component {
  collectionName: 'components_topics_topics';
  info: {
    displayName: 'Topics';
    description: '';
  };
  attributes: {
    Topic: Attribute.String;
    Content: Attribute.Component<'topics.content', true>;
  };
}

export interface VideoTopicsVideoTopics extends Schema.Component {
  collectionName: 'components_video_topics_video_topics';
  info: {
    displayName: 'VideoTopics';
  };
  attributes: {
    name: Attribute.String;
    desctiption: Attribute.RichText;
    videoUrl: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'topics.content': TopicsContent;
      'topics.topic': TopicsTopic;
      'video-topics.video-topics': VideoTopicsVideoTopics;
    }
  }
}
