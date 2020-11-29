export const parseContentAndTags = (content) => {
  let tags = [];
  if (content.split("#####").length > 1) {
    tags = content.split("#####")[1].trim().split(",");
  }
  return { parsedTags: tags, parsedContent: content.split("#####")[0] };
};
