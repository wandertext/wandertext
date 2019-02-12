import { setApplication } from "@ember/test-helpers";
import { start } from "ember-qunit";
import Application from "../src/main";
import config from "../config/environment";

setApplication(Application.create(config.APP));

start();
