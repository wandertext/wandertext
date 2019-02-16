import { setApplication } from "@ember/test-helpers";
import Application from "../src/main";
import config from "../config/environment";

setApplication(Application.create(config.APP));
