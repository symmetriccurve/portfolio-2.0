import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../layout/Layout";
import { Skeleton } from "antd";
import urls from "../data-layer/urls";
export default class MyInterview extends Component {
  state = {
    markdown: "",
  };

  componentDidMount() {
    fetch(urls.myInterview)
      .then((res) => res.text())
      .then((resText) => {
        this.setState({
          markdown: resText,
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  render() {
    const { markdown } = this.state;
    return (
      <Layout>
        <div className="my-interview">
          {!markdown && <Skeleton />}
          <ReactMarkdown escapeHtml={false}>{markdown}</ReactMarkdown>
        </div>
      </Layout>
    );
  }
}
