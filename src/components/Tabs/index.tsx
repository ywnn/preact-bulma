import { h, RenderableProps } from "preact";
import classnames from "classnames";

interface ITabsProps {
  align?: "centered" | "right";
}

export function Tabs(props: RenderableProps<ITabsProps>) {
  const classes = classnames("tabs", {
    [`is-${props.align}`]: !!props.align
  });
  return (
    <div class={classes}>
      <ul>{props.children}</ul>
    </div>
  );
}

interface ITabsTabProps {
  active?: boolean;
  icon?: string;
  onClick?(ev: MouseEvent): void;
}

export function TabsTab(props: RenderableProps<ITabsTabProps>) {
  return (
    <li class={classnames({ "is-active": props.active })}>
      <a onClick={ev => props.onClick && props.onClick(ev)}>
        {props.icon && (
          <span class="icon is-small">
            <i class={props.icon} />
          </span>
        )}
        <span>{props.children}</span>
      </a>
    </li>
  );
}

export default {
  Tabs: Tabs,
  Tab: TabsTab
}