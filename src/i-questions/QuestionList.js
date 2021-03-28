import { Skeleton } from "antd";
import React from "react";
import { QuestionCard } from "./QuestionCard";
import { parseContentAndTags } from "./utils/contentParser";

const shouldShowQuestion = (
  parsedContent,
  parsedTags,
  selectedTags,
  searchString
) => {
  if (!searchString) {
    if (selectedTags.length === 0) {
      return true;
    } else {
      return selectedTags.every((val) => parsedTags.includes(val));
      // Below line will make the tags work as in OR condition while above line works and AND
      //return parsedTags.some((tag) => selectedTags.includes(tag));
    }
  } else {
    if (selectedTags.length === 0) {
      return parsedContent.toLowerCase().indexOf(searchString.toLowerCase()) > -1
    } else {
      return (
        parsedTags.some((tag) => selectedTags.includes(tag)) &&
        parsedContent.toLowerCase().indexOf(searchString.toLowerCase()) > -1
      );
    }
  }
};

export const QuestionsList = React.memo(
  ({ questions, selectedTags, searchString }) => {

    if(!questions.length){
      return <Skeleton className="markdown__card" style={{borderRadius: '10px', border: 'none', marginBottom: '35px'}} />
    }
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
  }
);
