import { Divider, Tag } from "antd";
import React from "react";
import ReactMarkdown from "react-markdown";

import { tagColor } from "./constants";
export const QuestionCard = React.memo(({ content, tags }) => {
  return (
    <div
      className="markdown__card"
      style={{ borderRadius: "10px", border: "none", marginBottom: "35px" }}
    >
      <Divider orientation="right">
        {tags.map((tag) => (
          <Tag key={tag} color={tagColor[tag]}>
            {tag}
          </Tag>
        ))}
      </Divider>
      <ReactMarkdown escapeHtml={false}>{content}</ReactMarkdown>
      <Divider />
    </div>
  );
});
