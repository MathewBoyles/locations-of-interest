import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Navbar } from "./navbar.component";
import { HashRouter } from "react-router-dom";

export default {
  title: "Navbar",
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

export const Default: ComponentStory<typeof Navbar> = () =>
  <HashRouter>
    <Navbar onAboutClick={action("onAboutClick")} />
  </HashRouter>;
