import { createSignal, For, Show, Signal } from "solid-js";
import A from "./tiny/A";
import { Typist } from "./Typist";

type LinkedTech = {
  name: string;
  page: string;
};

class Language {
  basic: LinkedTech;
  ecosystem: LinkedTech[];
  ecosystem_signals: Signal<string>[];
  name_signal: Signal<string>;
  constructor(basic: LinkedTech, ecosystem: LinkedTech[]) {
    this.basic = basic;
    this.ecosystem = ecosystem;
    this.ecosystem_signals = ecosystem.map(() => createSignal(""));
    this.name_signal = createSignal("");
  }
  display(typist: Typist) {
    typist.type(this.basic.name, this.name_signal[1]);
    for (let i = 0; i < this.ecosystem.length; i++) {
      typist.type(
        this.ecosystem[i].name,
        this.ecosystem_signals[i][1],
      );
    }
  }
  ecosystem_member = (index: number) => {
    return this.ecosystem_signals[index][0]();
  };
}

export function Skills() {
  const [hidden, set_hidden] = createSignal(true);

  const rust: Language = new Language(
    {
      name: "* Rust",
      page: "rust-lang.org",
    },
    [
      { name: "* Actix-web", page: "actix.rs" },
      { name: "* Tauri", page: "tauri.app" },
      { name: "* Wasm => Leptos", page: "leptos.dev" },
      { name: "... more", page: "" },
    ],
  );
  const typescript: Language = new Language({
    name: "* Javascript/Typescript",
    page: "typescriptlang.org",
  }, [
    { name: "* Solidjs", page: "solidjs.com" },
    { name: "* Tailwindcss", page: "tailwindcss.com" },
    { name: "* Js vanilla", page: "" },
    { name: "#js_for_frontend_only", page: "" },
  ]);

  const typist = new Typist(40);

  return (
    <Show
      when={!hidden()}
      fallback={
        <button
          class="text-white h-56 w-[100%] bg-slate-700 text-7xl"
          onclick={() => {
            set_hidden(false);
            rust.display(typist);
            typescript.display(typist);
          }}
        >
          What skills does i have?
        </button>
      }
    >
      <section class="grid grid-cols-2 grid-rows-1 justify-center justify-items-center h-56 bg-slate-700 text-white  text-xl">
        <LanguageComponent language={rust} />
        <LanguageComponent language={typescript} />
      </section>
    </Show>
  );
}

function LanguageComponent({ language }: { language: Language }) {
  return (
    <div class="mx-5">
      <h2 class="text-2xl">
        <A href={language.basic.page}>{"\t"} {language.name_signal[0]()}</A>
      </h2>
      <div class="mx-5 grid grid-cols-1 justify-left justify-items-left">
        <For each={language.ecosystem}>
          {({ page }, index) => {
            return (
              <span>
                <A href={page}>
                  {"\t"} {language.ecosystem_member(index())}
                </A>
              </span>
            );
          }}
        </For>
      </div>
    </div>
  );
}
