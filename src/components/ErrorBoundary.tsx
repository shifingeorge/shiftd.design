// src/components/ErrorBoundary.tsx
import { Component, type ErrorInfo, type ReactNode } from 'react';
import Icon from './AppIcon';

declare global {
  interface Window {
    __COMPONENT_ERROR__?: (error: Error, info: ErrorInfo) => void;
  }
}

type Props = {
  children: ReactNode;
  fallback?: ReactNode; // Optional custom fallback UI
};

type State = {
  hasError: boolean;
  error?: Error;
  info?: ErrorInfo;
};

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // Preserve DhiWise/rocket instrumentation
    (error as any).__ErrorBoundary = true;
    window.__COMPONENT_ERROR__?.(error, info);
    this.setState({ info });
  }

  private handleReload = () => {
    if (typeof window !== 'undefined') window.location.reload();
  };

  private handleGoHome = () => {
    if (typeof window !== 'undefined') window.location.href = '/';
  };

  private handleBack = () => {
    if (typeof window !== 'undefined') {
      if (window.history && window.history.length > 1) window.history.back();
      else window.location.href = '/';
    }
  };

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined, info: undefined });
  };

  render(): ReactNode {
    const { hasError, error, info } = this.state;
    const { fallback, children } = this.props;

    if (!hasError) return children;

    if (fallback) return fallback;

    return (
      <div className="min-h-screen grid place-items-center bg-background text-foreground px-4" role="alert">
        <div className="max-w-lg text-center">
          <div className="mb-4 select-none">
            <h1 className="font-display text-2xl md:text-3xl font-semibold">
              <span className="gradient-text">Something went wrong</span>
            </h1>
          </div>
          <p className="text-foreground/70 mb-6">
            An unexpected error occurred. You can reload the page, go back, or return home.
          </p>

          {import.meta.env.DEV && (
            <details className="text-left whitespace-pre-wrap text-sm bg-white/5 rounded-lg p-4 border border-white/10 mb-6">
              <summary className="cursor-pointer mb-2 text-foreground/80">Error details (dev only)</summary>
              {error && <div className="text-red-300">{String(error)}</div>}
              {info?.componentStack && (
                <div className="text-foreground/70 mt-2">{info.componentStack}</div>
              )}
            </details>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className="btn-primary inline-flex items-center gap-2" onClick={this.handleReload}>
              <Icon name="RefreshCw" size={18} color="#fff" />
              Reload
            </button>
            <button className="btn-secondary inline-flex items-center gap-2" onClick={this.handleBack}>
              <Icon name="ArrowLeft" size={18} />
              Back
            </button>
            <button className="btn-secondary inline-flex items-center gap-2" onClick={this.handleGoHome}>
              <Icon name="Home" size={18} />
              Home
            </button>
            <button className="btn-secondary inline-flex items-center gap-2" onClick={this.handleReset}>
              <Icon name="RotateCcw" size={18} />
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }
}