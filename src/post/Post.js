import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../markdownViewer/renderers/codeblocks";
import Layout from "../layout/Layout";
import urls from "../data-layer/urls";
import { Skeleton } from "antd";
import localPosts from "../blog/posts/index.json";

export default class Blog extends Component {
  state = {
    post: null,
  };

  componentDidMount() {
    const requestsPostId = this.props.match.params.postId || "1";
    debugger;
    fetch(urls.blog)
      .then((res) => res.json())
      .then((posts) => {
        debugger;
        const [requestedPost] = (
          process.env.NODE_ENV !== "production" ? localPosts : posts
        ).filter((post) => post.id === Number(requestsPostId));
        debugger;
        fetch(requestedPost.link)
          .then((res) => res.text())
          .then((post) => {
            debugger;
            this.setState({
              post,
            });
          })
          .catch((err) => {
            console.log("error", err);
          });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  render() {
    const { post } = this.state;
    return (
      <Layout>
        <div
          className="markdown"
          style={{ margin: "50px", backgroundColor: "white" }}
        >
          {post ? (
            <ReactMarkdown escapeHtml={false} renderers={{ code: CodeBlock }}>
              {post}
            </ReactMarkdown>
          ) : (
            <Skeleton />
          )}
        </div>
      </Layout>
    );
  }
}
