import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import { Control, Field, Select } from "../../src/forms";

const OPTIONS = makeObject([
  "",
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
]);

function makeObject<T>(arr: T[]): Record<string, T> {
  let i = 0;
  return arr.reduce((acc, v) => ({ ...acc, [(i++).toFixed()]: v }), {});
}

const COLORS = {
  None: "",
  Primary: "primary",
  Light: "light",
  Dark: "dark",
  Info: "info",
  Warning: "warning",
  Danger: "danger"
};

storiesOf("Forms", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <form onSubmit={ev => ev.preventDefault()}>{story()}</form>)
  .add("Select", () => (
    <Field label={text("label", "Field Label")} help={text("help", "Field help text")}>
      <Control iconsLeft={text("Icon left", "fas fa-globe")} iconsRight={text("Icon right", "")}>
        <Select
          options={OPTIONS}
          color={select("Color", COLORS, "None")}
          multiple={boolean("Multiple", false)}
          rounded={boolean("Rounded", false)}
          fullWidth={boolean("Full width", false)}
          loading={boolean("Loading", false)}
          disabled={boolean("Disabled", false)}
          value={text("Value", "")}
          onChange={action("onChange")}
          onFocus={action("onFocus")}
          onBlur={action("onBlur")}
        />
      </Control>
    </Field>
  ));
