import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import _sortBy from "lodash/sortBy";

export default class ContributorListComponent extends Component {
  @tracked contributorsList;

  constructor(...args) {
    super(...args);
    if (this.args.contributors) {
      this.contributorsList = _sortBy(
        this.args.contributors.map(user => {
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
    }
  }
}
