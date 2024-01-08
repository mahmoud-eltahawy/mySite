import { A } from "./App";

export function Skills() {
  return (
    <>
      <h1 class="w-1/2 mx-auto">Skills</h1>
      <section class="flex">
        <div class="w-2/5 mx-auto">
          <h1>Apps types</h1>
          <ol class="mx-5">
            <li>Desktop</li>
            <li>Web</li>
          </ol>
        </div>
        <div class="w-2/5 mx-auto">
          <h1>Techs</h1>
          <ol class="mx-5">
            <li>
              <h2>
                <A href="rust-lang.org">Rust</A>
              </h2>
              <ul class="mx-5">
                <li>
                  <A href="actix.rs">Actix-web</A>
                </li>
                <li>
                  <A href="tauri.app">tauri</A>
                </li>
                <li>
                  <A href="leptos.dev">leptos</A>
                </li>
              </ul>
            </li>
            <li>
              <h2>
                <A href="typescriptlang.org">javascript/typescript</A>
              </h2>
              <ul class="mx-5">
                <li>vanilla js</li>
                <li>
                  <A href="solidjs.com">solid</A>
                </li>
                <li>
                  <A href="tailwindcss.com">tailwindcss</A>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
