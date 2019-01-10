import { storiesOf } from "@storybook/preact";
import { h } from "preact";
import { Control, Field, HorizontalGroup, Select, Textarea, TextInput } from "../../src/forms";
import { Input } from "../../src/forms/singles";

storiesOf("Forms", module)
  .addDecorator(story => (
    <section className="section">
      <div className="container">
        <form>{story()}</form>
      </div>
    </section>
  ))
  .add("Horizontal form", () => (
    <div class="container">
      <HorizontalGroup label="From">
        <Input placeholder="John Doe" iconsLeft="fas fa-user" />
        <Input type="email" placeholder="john@doe.com" iconsLeft="fas fa-envelope" />
      </HorizontalGroup>
      <HorizontalGroup label=" ">
        <Field expanded hasAddons>
          <Control>
            <a class="button is-static">+44</a>
          </Control>
          <Control expanded>
            <TextInput type="tel" placeholder="6 43 32 21 10" />
          </Control>
        </Field>
      </HorizontalGroup>
      <HorizontalGroup label="Department">
        <Control>
          <Select options={["Business development", "Marketing", "Sales"]} />
        </Control>
      </HorizontalGroup>
      <HorizontalGroup label="Already a member?">
        <Field narrow>
          <Control>
            <label className="radio">
              <input type="radio" name="member" /> Yes
            </label>
          </Control>
          <Control>
            <label className="radio">
              <input type="radio" name="member" /> No
            </label>
          </Control>
        </Field>
      </HorizontalGroup>
      <HorizontalGroup label="Subject">
        <Input
          color="danger"
          placeholder="eg. Partnership opportunity"
          help="This field is required"
          helpColor="danger"
        />
      </HorizontalGroup>
      <HorizontalGroup label="Body">
        <Field>
          <Control>
            <Textarea placeholder="Explain how we can help you" />
          </Control>
        </Field>
      </HorizontalGroup>
      <HorizontalGroup label=" ">
        {" "}
        {/* Empty label to preserve alignment */}
        <Field hasAddons>
          <Control>
            <input class="button is-outlined is-primary" type="submit" value="Submit" />
          </Control>
          <Control>
            <input class="button is-outlined" type="reset" value="Reset" />
          </Control>
        </Field>
      </HorizontalGroup>
    </div>
  ));
