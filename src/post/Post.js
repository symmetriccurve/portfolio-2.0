import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../markdownViewer/renderers/codeblocks";
import Layout from "../layout/Layout";
import urls from "../data-layer/urls";
import { Skeleton } from "antd";
export default class Blog extends Component {
  state = {
    posts: null,
  };

  componentDidMount() {
    const requestsPostId = this.props.match.params.postId || "1";
    fetch(urls.blog)
      .then((res) => res.json())
      .then((posts) => {
        const [requestedPost] = posts.filter(
          (post) => post.id == requestsPostId
        );
        fetch(requestedPost.link)
          .then((res) => res.text())
          .then((post) => {
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
        {post ? (
          <ReactMarkdown
            source={post}
            escapeHtml={false}
            renderers={{ code: CodeBlock }}
          />
        ) : (
          <Skeleton />
        )}
      </Layout>
    );
  }
}
