declare module '@tawk.to/tawk-messenger-react' {
  import * as React from 'react';

  export interface TawkMessengerReactProps {
    propertyId: string;
    widgetId: string;
    onLoad?: () => void;
  }

  export default class TawkMessengerReact extends React.Component<TawkMessengerReactProps> {
    // Add any methods if you know them, e.g.:
    // maximize(): void;
    // minimize(): void;
    // toggle(): void;
  }
}
