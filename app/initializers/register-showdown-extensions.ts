import showdown from "showdown";

export function initialize() {
  showdown.extension("truncate-p", function () {
    return [
      {
        type: "html",
        regex: "<p>",
        replace: '<p class="truncate">',
      },
    ];
  });
}

export default {
  name: "register-showdown-extensions",
  initialize,
};
