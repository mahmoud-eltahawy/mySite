import { JSXElement } from "solid-js";

export default function A(
  { children, href }: { children: JSXElement; href: string },
) {
  if (href !== "") {
    return <a href={`https://${href}`} target="_blank">{children}</a>;
  } else {
    return <p>{children}</p>;
  }
}
