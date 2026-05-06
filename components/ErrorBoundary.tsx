"use client";

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <section className="py-24 px-4 bg-cyber-dark/30">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-300" role="alert">
              <span className="text-cyber-primary">{'//'}</span> SYSTEM ERROR: COMPONENT FAILED TO LOAD
            </p>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}