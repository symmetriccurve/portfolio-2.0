import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../markdownViewer/renderers/codeblocks";
import Layout from "../layout/Layout";
import urls from "../data-layer/urls";
import { Skeleton } from "antd";
import localPosts from '../blog/posts/index.json'

export default class Blog extends Component {
  state = {
    post: null,
  };

  componentDidMount() {
    const requestsPostId = this.props.match.params.postId || "1";
    fetch(urls.blog)
      .then((res) => res.json())
      .then((posts) => {

        const [requestedPost] = (process.env.NODE_ENV !== 'production' ? localPosts : posts).filter(
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
        <div className="markdown" style={{margin: '50px', backgroundColor:"white"}}>
        {post ? (
          <ReactMarkdown
            source={post}
            escapeHtml={false}
            renderers={{ code: CodeBlock }}
          />
        ) : (
          <Skeleton />
        )}
        </div>
      </Layout>
    );
  }
}
