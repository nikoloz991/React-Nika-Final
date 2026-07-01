import { Component } from "react";
import styles from "./ErrorBoundary.module.scss";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className={styles.fallback}>Something went wrong.</div>
        )
      );
    }
    return this.props.children;
  }
}
