import React, { Component } from "react";
import Loader from "react-loaders";
import { Divider, Tag } from "antd";
import "loaders.css/src/animations/ball-rotate.scss";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import urls from "../data-layer/urls";
import Layout from "../layout/Layout";
import { tagColor, tagsData, subTagsData } from "./constants";
import { QuestionsList } from "./QuestionList";
import ReactGA from "react-ga";

const getResponse = async (url) => {
  return await fetch(url)
    .then((response) => response.text())
    .then((responseAsText) => responseAsText.split("---"))
    .catch((error) => {
      console.log("Something went wrong fetching questions", error);
      return [];
    });
};

export const SubTagsSelection = ({ subTags, onSelection }) => {
  if (!subTags.length) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div>Popular Searches:</div>
      <div>
        {subTags.map((subTag) => {
          return (
            <Tag
              key={subTag}
              closeIcon={
                <PlusOutlined style={{ fontSize: "12px", color: "white" }} />
              }
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                color: "black",
                userSelect: "none",
                margin: "5px",
              }}
              onClick={() => onSelection(subTag)}
            >
              {subTag}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};
export default class iQuestions extends Component {
  state = {
    react: [],
    css: [],
    javascript: [],
    html: [],
    javascript: [],
    scenario: [],
    workFlow: [],
    selectedTags: [],
    subTags: [],
    selectedSubTags: [],
    UX: [],
    testing: [],
    searchString: "",
  };

  handleTagClick = (tag) => {
    ReactGA.event({
      category: "Tag",
      action: "Tag Added",
      label: tag,
    });
    let selectedTags = [...this.state.selectedTags];
    let subTags = [];
    if (selectedTags.indexOf(tag) > -1) {
      selectedTags = selectedTags.filter((item) => item !== tag);
      subTags = [];
    } else {
      selectedTags = [...selectedTags, tag];
      subTags = subTagsData[tag] || [];
    }
    this.setState(
      {
        selectedTags,
        subTags,
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
    ReactGA.initialize("UA-128732492-1", {
      debug: true,
      titleCase: false,
      gaOptions: {
        userId: 123,
      },
    });
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
    const UX = await getResponse(urls.iQuestions.UXQuestionsURL);
    const testing = await getResponse(urls.iQuestions.testingQuestionsURL);
    this.setState({
      react,
      css,
      javascript,
      scenario,
      workFlow,
      html,
      UX,
      testing,
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

  handleSubTagClick = (subTag) => {
    let subTags = this.state.subTags.filter((each) => each !== subTag);
    this.setState({
      searchString: `${this.state.searchString} ${subTag}`,
      subTags,
    });
  };

  render() {
    const {
      searchString,
      workFlow,
      scenario,
      react,
      html,
      css,
      javascript,
      UX,
      testing,
      selectedTags,
      subTags,
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
                width: "90%",
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
          <SubTagsSelection
            subTags={subTags}
            onSelection={this.handleSubTagClick}
          />
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
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
                      margin: "5px",
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
          <QuestionsList
            questions={react}
            selectedTags={selectedTags}
            searchString={searchString}
          />
          <QuestionsList
            questions={css}
            selectedTags={selectedTags}
            searchString={searchString}
          />
          <QuestionsList
            questions={javascript}
            selectedTags={selectedTags}
            searchString={searchString}
          />
          <QuestionsList
            questions={html}
            selectedTags={selectedTags}
            searchString={searchString}
          />
          <QuestionsList
            questions={UX}
            selectedTags={selectedTags}
            searchString={searchString}
          />
          <QuestionsList
            questions={testing}
            selectedTags={selectedTags}
            searchString={searchString}
          />
          <QuestionsList
            questions={scenario}
            selectedTags={selectedTags}
            searchString={searchString}
          />
          <QuestionsList
            questions={workFlow}
            selectedTags={selectedTags}
            searchString={searchString}
          />
        </div>
      </Layout>
    );
  }
}
