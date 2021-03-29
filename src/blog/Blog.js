import React, { Component } from "react";
import Layout from "../layout/Layout";
import urls from "../data-layer/urls";
import { Card, Avatar, Row, Col, Divider } from "antd";
import { Link } from "react-router-dom";
import localPosts from '../blog/posts/index.json'
const { Meta } = Card;
export default class Blog extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch(urls.blog)
      .then((res) => res.json())
      .then((posts) => {
        this.setState({
          posts: process.env.NODE_ENV !== 'production' ? localPosts : posts 
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <Layout>
        <div
          className="markdown"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          {!posts.length && (
            <Row>
              <Col>
                <Card loading style={{ width: 300 }} />
              </Col>
              <Col>
                <Card loading style={{ width: 300 }} />
              </Col>
              <Col>
                <Card loading style={{ width: 300 }} />
              </Col>
              <Col>
                <Card loading style={{ width: 300 }} />
              </Col>
            </Row>
          )}
          <Row style={{ display: "flex", justifyContent: "center" }}>
            {posts.map((each) => {
              return (
                <Link
                  to={`/post&postId=${each.id}`}
                  params={{ postId: each.id }}
                  key={each.id}
                >
                  <Col style={{ margin: "15px" }}>
                    <Card
                      hoverable
                      style={{ width: 300 }}
                      cover={<img alt="post-image" src={each.imageSrc} style={{maxWidth:'300px'}}/>}
                    >
                      <Meta title={each.title} description={each.subTitle} />
                    </Card>
                  </Col>
                </Link>
              );
            })}
          </Row>
        </div>
      </Layout>
    );
  }
}
