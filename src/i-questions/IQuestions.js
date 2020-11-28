import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../markdownViewer/renderers/codeblocks";
import Layout from "../layout/Layout";
import Loader from "react-loaders";
import "loaders.css/src/animations/ball-rotate.scss";
import urls from "../data-layer/urls";
import { Divider, Tag } from "antd";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";

const { CheckableTag } = Tag;

const tagsData = [
  "ReactJs",
  "React Native",
  "CSS",
  "Javascript",
  "HTML",
  "Scenario",
  "Work Flow",
  "Frequently Asked",
  "Webpack",
  "Redux",
  "Agile",
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
    selectedTags: [],
    react: [],
    css: [],
    javascript: [],
    html: [],
    javascript: [],
    scenario: [],
    workFlow: [],
    searchString: "",
    filtered: [],
  };

  handleTagClick = (tag) => {
    let selectedTags = [...this.state.selectedTags];
    if (selectedTags.indexOf(tag) > -1) {
      selectedTags = selectedTags.filter((item) => item !== tag);
    } else {
      selectedTags = [...selectedTags, tag];
    }
    this.setState(
      {
        selectedTags,
      },
      () => this.updateURL()
    );
  };

  updateURL = () => {
    const { searchString, selectedTags } = this.state;
    const searchStringParam = searchString ? `search=${searchString}` : "";
    const tagsParam = !selectedTags.length
      ? ""
      : `tags=${selectedTags.join(",")}`;

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
      selectedTags: tagParams,
    });
    const react = await getResponse(urls.iQuestions.reactQuestionsURL);
    const css = await getResponse(urls.iQuestions.cssQuestionsURL);
    const javascript = await getResponse(
      urls.iQuestions.javascriptQuestionsURL
    );
    const scenario = await getResponse(urls.iQuestions.scenarioQuestionsURL);
    const workFlow = await getResponse(urls.iQuestions.workFlowQuestionsURL);
    const html = await getResponse(urls.iQuestions.htmlQuestionsURL);
    this.setState({
      react,
      css,
      javascript,
      scenario,
      workFlow,
      html,
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
    const { selectedTags } = this.state;
    return selectedTags.length == 0 || selectedTags.indexOf(category) > -1;
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
      selectedTags,
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
                {selectedTags.map((tag) => {
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
            {!(selectedTags.length === tagsData.length) && (
              <span style={{ margin: 8 }}>Add Tags:</span>
            )}
            {tagsData.map((tag) => {
              const isSelected = selectedTags.indexOf(tag) > -1;
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
          <Questions
            questions={react}
            selectedTags={selectedTags}
            searchString={searchString}
          />
          <Questions
            questions={css}
            selectedTags={selectedTags}
            searchString={searchString}
          />
          <Questions
            questions={javascript}
            selectedTags={selectedTags}
            searchString={searchString}
          />
          <Questions
            questions={html}
            selectedTags={selectedTags}
            searchString={searchString}
          />
          <Questions
            questions={scenario}
            selectedTags={selectedTags}
            searchString={searchString}
          />
          <Questions
            questions={workFlow}
            selectedTags={selectedTags}
            searchString={searchString}
          />
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
  "Frequently Asked": "#ef0404c7",
  Webpack: "#026abe",
  Redux: "#764abc",
  Agile: "#02804bc7",
  HTML: "#f06529",
};
const shouldShowQuestion = (
  parsedContent,
  parsedTags,
  selectedTags,
  searchString
) => {
  if (searchString === "") {
    if (selectedTags.length === 0) {
      return true;
    } else {
      return selectedTags.every((val) => parsedTags.includes(val));
      // Below line will make the tags work as in OR condition while above line works and AND
      //return parsedTags.some((tag) => selectedTags.includes(tag));
    }
  } else {
    if (selectedTags.length === 0) {
      return selectedTags.every((val) => parsedTags.includes(val));
      // return (
      //   parsedContent.toLowerCase().indexOf(searchString.toLowerCase()) > -1
      // );
    } else {
      return (
        parsedTags.some((tag) => selectedTags.includes(tag)) &&
        parsedContent.toLowerCase().indexOf(searchString.toLowerCase()) > -1
      );
    }
  }
};

const Questions = React.memo(({ questions, selectedTags, searchString }) => {
  return (
    <div>
      {questions.map((question) => {
        const { parsedContent, parsedTags } = parseContentAndTags(question);
        if (
          shouldShowQuestion(
            parsedContent,
            parsedTags,
            selectedTags,
            searchString
          )
        ) {
          return (
            <QuestionCard
              content={parsedContent}
              key={`${parsedContent}+${parsedTags.join(",")}`}
              tags={parsedTags}
            />
          );
        }
        return null;
      })}
    </div>
  );
});

const QuestionCard = React.memo(({ content, tags }) => {
  return (
    <div className="markdown__card">
      <Divider orientation="right">
        {tags.map((tag) => (
          <Tag key={tag} color={tagColor[tag]}>
            {tag}
          </Tag>
        ))}
      </Divider>
      <ReactMarkdown
        source={content}
        escapeHtml={false}
        renderers={{ code: CodeBlock }}
      />
      <Divider />
    </div>
  );
});

const parseContentAndTags = (content) => {
  let tags = [];
  if (content.split("#####").length > 1) {
    tags = content.split("#####")[1].trim().split(",");
  }
  return { parsedTags: tags, parsedContent: content.split("#####")[0] };
};
