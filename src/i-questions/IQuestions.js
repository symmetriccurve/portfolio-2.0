import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../markdownViewer/renderers/codeblocks";
import Layout from "../layout/Layout";
import Loader from "react-loaders";
import "loaders.css/src/animations/ball-rotate.scss";
import urls from "../data-layer/urls";
import { Divider, Tag, Radio, Button } from "antd";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";

const { CheckableTag } = Tag;

const tagsData = [
  "ReactJs",
  "React Native",
  "CSS",
  "Javascript",
  "Scenario",
  "Work Flow",
];

const getResponse = async (url) => {
  return await fetch(url)
    .then((response) => response.text())
    .then((responseAsText) => responseAsText.split("---"))
    .catch((error) => {
      console.log("Something went long fetching questions", error);
      return [];
    });
};
export default class iQuestions extends Component {
  state = {
    markDown: [],
    visibleTaggedCategory: [],
    react: [],
    css: [],
    javascript: [],
    scenario: [],
    workFlow: [],
    searchString: "",
    filtered: [],
  };

  handleTagClick = (tag) => {
    let visibleTaggedCategory = [...this.state.visibleTaggedCategory];
    if (visibleTaggedCategory.indexOf(tag) > -1) {
      visibleTaggedCategory = visibleTaggedCategory.filter(
        (item) => item !== tag
      );
    } else {
      visibleTaggedCategory = [...visibleTaggedCategory, tag];
    }
    this.setState(
      {
        visibleTaggedCategory,
      },
      () => this.updateURL()
    );
  };

  updateURL = () => {
    const { searchString, visibleTaggedCategory } = this.state;
    const searchStringParam = searchString ? `search=${searchString}` : "";
    const tagsParam = !visibleTaggedCategory.length
      ? ""
      : `tags=${visibleTaggedCategory.join(",")}`;

    this.props.history.replace(
      `/interviewQuestions?${searchStringParam}&${tagsParam}`
    );
  };

  async componentDidMount() {
    // TODO: Cleanup URL param parsing
    let paramString = this.props.location.search.split("?")[1] || "";
    let [searchStringParams = "", tagParams = ""] = paramString
      .replace(/%20/g, " ")
      .split("&");
    if (searchStringParams) {
      searchStringParams = searchStringParams.split("=")[1];
    }

    if (tagParams) {
      if (tagParams.split("=")[1]) {
        tagParams = tagParams.split("=")[1];
        if (tagParams) {
          tagParams = tagParams.split(",");
        }
      } else {
        tagParams = [];
      }
    } else {
      tagParams = [];
    }

    this.setState({
      searchString: searchStringParams,
      visibleTaggedCategory: tagParams,
    });
    const react = await getResponse(urls.iQuestions.reactQuestionsURL);
    const css = await getResponse(urls.iQuestions.cssQuestionsURL);
    const javascript = await getResponse(
      urls.iQuestions.javascriptQuestionsURL
    );
    const scenario = await getResponse(urls.iQuestions.scenarioQuestionsURL);
    const workFlow = await getResponse(urls.iQuestions.workFlowQuestionsURL);
    this.setState({
      react,
      css,
      javascript,
      scenario,
      workFlow,
    });
  }

  handleSearch = ({ target: { value: searchString } }) => {
    this.setState(
      {
        searchString,
      },
      () => this.updateURL()
    );
  };

  handleFilter = (e) => {
    this.setState({});
  };

  shouldRender = (category) => {
    const { visibleTaggedCategory } = this.state;
    return (
      visibleTaggedCategory.length == 0 ||
      visibleTaggedCategory.indexOf(category) > -1
    );
  };

  render() {
    const {
      markDown,
      searchString,
      filtered,
      workFlow,
      scenario,
      react,
      html,
      css,
      javascript,
      visibleTaggedCategory,
    } = this.state;
    return (
      <Layout>
        <div className="markdown">
          <div className="markdown__search-bar">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "white",
                borderRadius: "25px",
                alignItems: "center",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "white",
                  borderRadius: "25px",
                  justifyContent: "flex-start",
                  marginLeft: "15px",
                }}
              >
                {visibleTaggedCategory.map((tag) => {
                  return (
                    <Tag
                      key={tag}
                      closeIcon={<CloseOutlined style={{ fontSize: "12px" }} />}
                      style={{
                        padding: "5px 10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        userSelect: "none",
                      }}
                      closable
                      color={tagColor[tag]}
                      onClose={() => this.handleTagClick(tag)}
                      onClick={() => this.handleTagClick(tag)}
                    >
                      {tag}
                    </Tag>
                  );
                })}
              </div>
              <input
                placeholder="Search"
                value={searchString}
                onChange={this.handleSearch}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {!(visibleTaggedCategory.length === tagsData.length) && (
              <span style={{ margin: 8 }}>Add Tags:</span>
            )}
            {tagsData.map((tag) => {
              const isSelected = visibleTaggedCategory.indexOf(tag) > -1;
              return (
                !isSelected && (
                  <Tag
                    key={tag}
                    closeIcon={
                      <PlusOutlined
                        style={{ fontSize: "12px", color: "white" }}
                      />
                    }
                    style={{
                      padding: "5px 10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      color: "white",
                      userSelect: "none",
                    }}
                    closable
                    color={tagColor[tag]}
                    onClose={() => this.handleTagClick(tag)}
                    onClick={() => this.handleTagClick(tag)}
                  >
                    {tag}
                  </Tag>
                )
              );
            })}
          </div>
          {(!react.length ||
            !css.length ||
            !javascript.length ||
            !scenario.length ||
            !workFlow.length) && (
            <div>
              <Loader className="markdown__loader" type="ball-rotate" />
            </div>
          )}
          {this.shouldRender("ReactJs") && (
            <Questions
              questions={react}
              tags={["ReactJs"]}
              searchString={searchString}
            />
          )}
          {this.shouldRender("CSS") && (
            <Questions
              questions={css}
              tags={["CSS"]}
              searchString={searchString}
            />
          )}
          {this.shouldRender("Javascript") && (
            <Questions
              questions={javascript}
              tags={["Javascript"]}
              searchString={searchString}
            />
          )}
          {this.shouldRender("Scenario") && (
            <Questions
              questions={scenario}
              tags={["Scenario"]}
              searchString={searchString}
            />
          )}
          {this.shouldRender("Work Flow") && (
            <Questions
              questions={workFlow}
              tags={["Work Flow"]}
              searchString={searchString}
            />
          )}
        </div>
      </Layout>
    );
  }
}

const tagColor = {
  ReactJs: "#2db7f5",
  CSS: "#f52df1bf",
  Javascript: "#fa8a06",
  Scenario: "#81cc02c9",
  "Work Flow": "#395dffb0",
  "React Native": "#0f68e7",
};

const Questions = React.memo(({ questions, tags, searchString }) => {
  return (
    <div>
      {questions.map((question) => {
        if (
          searchString &&
          question.toLowerCase().indexOf(searchString.toLowerCase()) > -1
        ) {
          return <QuestionCard content={question} key={question} tags={tags} />;
        } else if (!searchString) {
          return <QuestionCard content={question} key={question} tags={tags} />;
        }
        return null;
      })}
    </div>
  );
});

const QuestionCard = ({ content, tags }) => {
  return (
    <div className="markdown__card">
      <Divider />
      <ReactMarkdown
        source={content}
        escapeHtml={false}
        renderers={{ code: CodeBlock }}
      />
      <Divider orientation="right">
        {tags.map((tag) => (
          <Tag key={tag} color={tagColor[tag]}>
            {tag}
          </Tag>
        ))}
      </Divider>
    </div>
  );
};
