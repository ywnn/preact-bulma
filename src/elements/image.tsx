import classnames from "classnames";
import { h, JSX, RenderableProps } from "preact";

interface IImageProps extends JSX.HTMLAttributes {
  src: string;
  alt: string;
  size?: 16 | 24 | 32 | 48 | 64 | 96 | 128;
  ratio?:
    | "square"
    | "1by1"
    | "5by4"
    | "4by3"
    | "3by2"
    | "5by3"
    | "16by9"
    | "2by1"
    | "3by1"
    | "4by5"
    | "3by4"
    | "2by3"
    | "3by5"
    | "9by16"
    | "1by2"
    | "1by3";
}

export default function Image({ src, alt, size, ratio, class: klass, children: _, ...props }: RenderableProps<IImageProps>) {
  return (
    <figure {...props}
            class={classnames("image", {
              [`is-${ratio}`]: !!ratio,
              [`is-${size}x${size}`]: !!size
            }, klass)}
    >
      <img src={src} alt={alt}/>
    </figure>
  );
}
