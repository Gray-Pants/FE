import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // 에러 발생 시 상태 변경 및 에러 로깅 등 처리
    this.setState({ hasError: true });
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 에러 발생 시 보여줄 대체 UI 반환
      return <h1>Something went wrong.</h1>;
    } else {
      // 정상적인 경우 자식 컴포넌트 렌더링
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
