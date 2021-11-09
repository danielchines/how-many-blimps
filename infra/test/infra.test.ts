import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
} from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import { WebsiteStack } from "../lib/blimps-stack";

test("Empty Stack", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new WebsiteStack(app, "BlimpsStack", {});
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT
    )
  );
});
