import { BrowserRouter } from "react-router-dom";

import { StoryFn } from "@storybook/react";

export const RouterDecorator = (story: () => StoryFn) => (
  <BrowserRouter>{story()}</BrowserRouter>
);
