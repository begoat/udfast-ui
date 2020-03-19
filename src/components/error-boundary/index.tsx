/**
 * https://reactjs.org/docs/error-boundaries.html
 * https://github.com/facebook/create-react-app/issues/7148
 */
import React from 'react';
import { Message } from 'rsuite';

const logErrorToMyService = (error?: Error, errorInfo?: React.ErrorInfo) => {
  // TODO: report to Google analytics.
};

interface ErrorBoudnaryProps {

}

interface ErrorBoundaryState {
  error: null | Error;
}

class ErrorBoundary extends React.Component<ErrorBoudnaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoudnaryProps) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  getErrorMessage() {
    const { error } = this.state;
    if (error) {
      return `${error.message}${error.stack}`;
    }

    return '';
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      // You can render any custom fallback UI
      return (
        <Message description={<pre>{this.getErrorMessage()}</pre>} />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
