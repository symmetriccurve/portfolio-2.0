import React, { Component } from "react";
import ShowContentsHOC from "../hoc/ShowContent";
import Loader from "react-loaders";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../markdownViewer/renderers/codeblocks";
import Layout from "../layout/Layout";
import urls from "../data-layer/urls";
import { Skeleton } from "antd";
// import post from "./posts/1-Interview Questions.md";
import { Card, Avatar, Row, Col, Divider } from "antd";
import { ReadFilled, SettingFilled } from "@ant-design/icons";
const { Meta } = Card;
export default class Blog extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    //fetch("https://raw.githubusercontent.com/symmetriccurve/portfolio-2.0/master/src/blog/posts/index.json")
    // fetch(urls.blog)
    //   .then((res) => res.json())
    //   .then((posts) => {
    //     // resText.forEach((each) => {
    //     //   fetch(each.download_url)
    //     //     .then((post) => post.text())
    //     //     .then((postAsText) => {
    //     this.setState({
    //       posts,
    //     });
    //   })
    //   //     .catch((err) => {
    //   //       console.log("error", err);
    //   //     });
    //   // });
    //   // })
    //   .catch((err) => {
    //     console.log("error", err);
    //   });
  }

  render() {
    const { posts } = this.state;
    return (
      <Layout>
        <div className="markdown" style={{display:"flex", alignItems: "center",justifyContent: "center", margin:'20px'}}>
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
          <Row style={{display: 'flex', justifyContent: 'center'}}>
            {posts.map((each) => {
              return (
                <Col style={{margin:'15px'}}>
                  <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="post-image" src={each.imageSrc} />}
                  >
                    <Meta
                      title={each.title}
                      description={each.subTitle}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </Layout>
    );
  }
}

// const all_posts_urls = await fetch(urls.blog)
// .then((res) => res.json())
// .then((res) => res)
// .catch((err) => {
//   console.log("error", err);
// });
// debugger;
// const allFetches = [];

// all_posts_urls.forEach((postObj) => {
// allFetches.push(fetch(postObj.download_url));
// });

// const allRequests = all_posts_urls.map((url) =>
// fetch(url)
//   .then((response) => response.json())
//   .then((res) => {
// 	debugger;
// 	return res;
//   })
// );

//const data = Promise.all(allRequests);
//   .then((result) => Promise.all([result[0].json()]))
//   .then((res) => {
//     debugger;
//   })
// .catch((error) => console.log(`Error in promises ${error}`));
// fetch(urls.blog)
//   .then((res) => res.json())
//   .then((resText) => {
//     resText.forEach((each) => {
//       fetch(each.download_url)
//         .then((post) => post.text())
//         .then((postAsText) => {
//           this.setState({
//             postsAsText: [...this.state.postsAsText, postAsText],
//           });
//         })
//         .catch((err) => {
//           console.log("error", err);
//         });
//     });
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });
//}
