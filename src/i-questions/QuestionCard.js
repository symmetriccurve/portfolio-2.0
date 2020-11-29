import { Divider, Tag } from "antd";
import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../markdownViewer/renderers/codeblocks";
import { tagColor } from "./constants";
export const QuestionCard = React.memo(({ content, tags }) => {
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
