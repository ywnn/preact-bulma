import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Tabs, { ALIGNMENT } from "../../src/components/Tabs";

storiesOf("Components", module)
  .addDecorator(withKnobs)
  .add("Tabs", () => {
    const hasIcons = boolean("Icons", true);
    return (
      <Tabs.Tabs align={select("Align", Object.keys(ALIGNMENT), "center")}>
        <Tabs.Tab onClick={action("click[Documents]")} icon={hasIcons && "far fa-file-alt"}>
          Documents
        </Tabs.Tab>
        <Tabs.Tab onClick={action("click[Music]")} icon={hasIcons && "fas fa-music"}>
          Music
        </Tabs.Tab>
        <Tabs.Tab onClick={action("click[Pictures]")} active icon={hasIcons && "fas fa-image"}>
          Pictures
        </Tabs.Tab>
        <Tabs.Tab onClick={action("click[Videos]")} icon={hasIcons && "fas fa-film"}>
          Videos
        </Tabs.Tab>
      </Tabs.Tabs>
    );
  });
