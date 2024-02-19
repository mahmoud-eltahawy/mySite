/**
 * @param {Object} param0
 * @param {import("solid-js").JSXElement} param0.children
 * @param {string} [param0.href]
 */
export default function A({ children, href }) {
  if (href) {
    return <a href={`https://${href}`} target="_blank">{children}</a>;
  } else {
    return <p>{children}</p>;
  }
}
