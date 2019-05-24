/* eslint func-names: 0 */
import { helper } from "@ember/component/helper";
import { htmlSafe } from "@ember/string";
import showdown from "showdown";

export default helper(function textTitle(texts) {
  const text = texts.firstObject;
  const converter = new showdown.Converter();
  const title = text.markdownName || text.name;
  return htmlSafe(
    converter
      .makeHtml(title)
      .replace(/^<p>/, "")
      .replace(/<\/p>$/, "")
  );
});
