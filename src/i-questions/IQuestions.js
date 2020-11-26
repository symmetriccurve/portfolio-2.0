import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../markdownViewer/renderers/codeblocks";
import Layout from "../layout/Layout";
import Loader from "react-loaders";
import "loaders.css/src/animations/ball-rotate.scss";
import urls from "../data-layer/urls";
import { Divider, Tag, Radio, Button } from "antd";

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
    visibleTaggedCategory: [
      "ReactJs",
      "CSS",
      "Javascript",
      "Scenario",
      "Work Flow",
      "React Native",
    ],
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
    this.setState({
      visibleTaggedCategory,
    });
  };

  async componentDidMount() {
    const urlParams = this.props.location.search.split("=")[1];
    const searchStr = urlParams ? urlParams.replace(/%20/g, " ") : "";
    this.setState({ searchStr });
    let calls = [];
    let markDown = [];
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
    // debugger;
    // urls.iQuestions.forEach((eachURL) => {
    //   calls.push(fetch(eachURL).then((res) => res.text()));
    // });

    // Promise.all(calls)
    //   .then((topics) => {
    //     topics.forEach((topic) => {
    //       markDown = markDown.concat(topic.split("---"));
    //     });
    //     this.setState(
    //       {
    //         markDown,
    //         filtered: markDown,
    //       },
    //       () => this.handleSearch(searchStr)
    //     );
    //   })
    //   .catch((err) => {
    //     console.log("Error fetching interview questions", err);
    //   });
  }

  handleSearch = ({ target: { value: searchString } }) => {
    this.setState({
      searchString,
    });
    this.props.history.replace(`/interviewQuestions?search=${searchString}`);
    // markDown.forEach((each) => {
    //   if (each.toLowerCase().indexOf(searchStr.toLowerCase()) > -1) {
    //     //each = each.replace(value,`<mark>${ value }</mark>`)
    //     /*
    // 				TO-DO: FIX SEARCH
    // 				This highlight is not highlighting capital case match and replacing
    // 				text with in the code(A BIG NO NO)
    // 			*/
    //     filtered.push(each);
    //   }
    // });
    // this.setState({
    //   filtered,
    // });
  };

  handleFilter = (e) => {
    this.setState({});
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
            <input
              className="markdown__search-bar__input"
              placeholder="Search"
              value={searchString}
              onChange={this.handleSearch}
            />
          </div>
          {/* <Radio.Group
            value="javascript"
            style={{ display: "flex", justifyContent: "center" }}
            onChange={this.handleFilter}
          >
            <Radio.Button value="react">React</Radio.Button>
            <Radio.Button value="reactnNative">React Native</Radio.Button>
            <Radio.Button value="javascript">Javascript</Radio.Button>
            <Radio.Button value="scenario">Scenario</Radio.Button>
            <Radio.Button value="workFlow">Work Flow</Radio.Button>
          </Radio.Group> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <span style={{ margin: 8 }}>Filter By:</span>
            {tagsData.map((tag) => {
              const isSelected = visibleTaggedCategory.indexOf(tag) > -1;
              return (
                <CheckableTag
                  style={{
                    background: isSelected ? tagColor[tag] : "white",
                    padding: " 5px 10px 5px 10px",
                    margin: "10px",
                  }}
                  key={tag}
                  checked={isSelected}
                  onChange={(checked) => this.handleTagClick(tag, checked)}
                >
                  {tag}
                </CheckableTag>
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
          {/* 
          {markDown.length && !filtered.length && (
            <div>
              <span className="center">No Results</span>
            </div>
          )} */}
          {visibleTaggedCategory.indexOf("ReactJs") > -1 && (
            <Questions
              questions={react}
              tags={["ReactJs"]}
              searchString={searchString}
            />
          )}
          {visibleTaggedCategory.indexOf("CSS") > -1 && (
            <Questions
              questions={css}
              tags={["CSS"]}
              searchString={searchString}
            />
          )}
          {visibleTaggedCategory.indexOf("Javascript") > -1 && (
            <Questions
              questions={javascript}
              tags={["Javascript"]}
              searchString={searchString}
            />
          )}
          {visibleTaggedCategory.indexOf("Scenario") > -1 && (
            <Questions
              questions={scenario}
              tags={["Scenario"]}
              searchString={searchString}
            />
          )}
          {visibleTaggedCategory.indexOf("Work Flow") > -1 && (
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
  Javascript: "#f1dd07c9",
  Scenario: "#81cc02c9",
  "Work Flow": "#395dffb0",
  "React Native": "#0f68e7",
};

const Questions = React.memo(({ questions, tags, searchString }) => {
  return (
    <div>
      {questions.map((question) => {
        if (searchString && question.indexOf(searchString) > -1) {
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
