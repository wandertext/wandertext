/* eslint no-console: "off" */

import { skip } from "qunit";
import {
  setupApplicationTest,
  setupRenderingTest,
  setupTest,
} from "ember-qunit";
import { setupMirage } from "ember-cli-mirage/test-support";
import ENV from "wandertext/config/environment";

// This logic could be anything, but in this case...
// if @ignore, then return skip (for backwards compatibility)
// if have annotations in config, then only run those that have a matching annotation
function checkAnnotations(annotations) {
  // If ignore is set then we want to skip for backwards compatibility
  if (annotations.ignore) {
    return ignoreIt;
  }

  // If have annotations set in config, the only run those that have a matching annotation
  if (ENV.annotations && ENV.annotations.length >= 0) {
    for (const annotation in annotations) {
      if (ENV.annotations.includes(annotation)) {
        // Have match, so test it
        return "testIt"; // Return something other than a function
      }
    }

    // No match, so don't run it
    return logIt;
  }
}

// Call back functions
function ignoreIt(testElement) {
  skip(`${testElement.title}`, (/* assert */) => {});
}

function logIt(testElement) {
  console.info(`Not running or skipping: "${testElement.title}"`);
}

// exported functions
function runFeature(annotations) {
  return checkAnnotations(annotations);
}

function runScenario(featureAnnotations, scenarioAnnotations) {
  return checkAnnotations(scenarioAnnotations);
}

// Setup tests
// you can override these function to add additional setup setups, or handle new setup related annotations
function setupFeature(featureAnnotations) {
  return setupYaddaTest(featureAnnotations);
}

function setupScenario(featureAnnotations, scenarioAnnotations) {
  const setupFn = setupYaddaTest(scenarioAnnotations);
  if (
    setupFn &&
    (featureAnnotations.setupapplicationtest ||
      featureAnnotations.setuprenderingtest ||
      featureAnnotations.setuptest)
  ) {
    throw new Error(
      "You must not assign any @setupapplicationtest, @setuprenderingtest or @setuptest annotations to a scenario as well as its feature!"
    );
  }

  return setupFn;
}

function setupYaddaTest(annotations) {
  if (annotations.setupapplicationtest) {
    return function (hooks) {
      setupApplicationTest(hooks);
      setupMirage(hooks);
    };
  }

  if (annotations.setuprenderingtest) {
    return setupRenderingTest;
  }

  if (annotations.setuptest) {
    return setupTest;
  }
}

export { runFeature, runScenario, setupFeature, setupScenario };
