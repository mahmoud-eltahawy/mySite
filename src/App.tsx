import { JSXElement } from "solid-js";
import { WhoRU } from "./WhoRU";
import { Skills } from "./Skills";

function App() {
  return (
    <>
      <WhoRU />
      <Skills />
    </>
  );
}

export function A({ children, href }: { children: JSXElement; href: string }) {
  return <a href={`https://${href}`} target="_blank">{children}</a>;
}

export default App;
