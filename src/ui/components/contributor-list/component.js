import Component from "@ember/component";
import { computed } from "@ember-decorators/object";
import _sortBy from "lodash/sortBy";

export default class ContributorListComponent extends Component {
  elementId = "contributor-list";

  @computed("contributors")
  get contributorsList() {
    if(this.contributors){
      return _sortBy(
        this.contributors.map(user => {
          user.count *= -1;
          return user;
        }),
        ["count", "lastname"]
      )
        .map((user, i) => {
          let name;
          if (i === 0) {
            name = `${user.lastname}, ${user.firstname}`;
          } else if (i === this.contributors.length - 1) {
            name = `and ${user.firstname} ${user.lastname}`;
          } else {
            name = `${user.firstname} ${user.lastname}`;
          }

          return name;
        })
        .join(", ");
    } else {
      return "";
    }
  }
}
