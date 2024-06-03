declare module 'react-vertical-timeline-component' {
    import * as React from 'react';
  
    export class VerticalTimeline extends React.Component {}
    export class VerticalTimelineElement extends React.Component<{
      className?: string;
      contentStyle?: React.CSSProperties;
      contentArrowStyle?: React.CSSProperties;
      date?: string;
      iconStyle?: React.CSSProperties;
      icon?: React.ReactNode;
    }> {}
  }
  