import { createSignal, For, Show } from "solid-js";
import A from "./tiny/A";
import { Typist } from "./Typist";

class SkillsCollection {
  /**
   * @type {import("./types").LinkedTech} basic
   */
  basic;
  /**
   * @type {import("./types").LinkedTech[]} ecosystem
   */
  ecosystem;
  /**
   * @type {import("solid-js").Signal<string>[]} ecosystem_signals
   */
  ecosystem_signals;
  /**
   * @type {import("solid-js").Signal<string>} name_signal
   */
  name_signal;
  /**
   * @param {import("./types").LinkedTech}basic
   * @param {import("./types").LinkedTech[]}ecosystem
   */
  constructor(basic, ecosystem) {
    this.basic = basic;
    this.ecosystem = ecosystem;
    this.ecosystem_signals = ecosystem.map(() => createSignal(""));
    this.name_signal = createSignal("");
  }
  /**
   * @param {import("./Typist").Typist}typist
   */
  display(typist) {
    typist.type(this.basic.name, this.name_signal[1]);
    for (let i = 0; i < this.ecosystem.length; i++) {
      typist.type(
        this.ecosystem[i].name,
        this.ecosystem_signals[i][1],
      );
    }
  }
  /**
   * @param {number}index
   */
  ecosystem_member = (index) => {
    return this.ecosystem_signals[index][0]();
  };
}

export function Skills() {
  const [hidden, set_hidden] = createSignal(true);

  const familiarWith = new SkillsCollection(
    {
      name: "Familiar With",
    },
    [
      { name: "Linux" },
      { name: "Docker", page: "www.docker.com" },
      { name: "Postgresql", page: "www.postgresql.org" },
    ],
  );

  const rust = new SkillsCollection(
    {
      name: "* Rust {backend oriented}",
      page: "rust-lang.org",
    },
    [
      { name: "* Actix-web", page: "actix.rs" },
      { name: "* Tokio", page: "tokio.rs" },
      { name: "* Tauri", page: "tauri.app" },
      { name: "* Wasm => Leptos", page: "leptos.dev" },
      { name: "... more" },
    ],
  );
  const typescript = new SkillsCollection({
    name: "* Javascript/Typescript {frontend oriented}",
    page: "typescriptlang.org",
  }, [
    { name: "* Solidjs", page: "solidjs.com" },
    { name: "* Tailwindcss", page: "tailwindcss.com" },
    { name: "* Css" },
    { name: "* Html" },
  ]);

  const typist = new Typist(40);

  return (
    <section class="m-2 border-cyan-400 border-2 rounded-xl">
      <Show
        when={!hidden()}
        fallback={
          <button
            class="h-56 w-[100%] text-3xl ms:text-7xl"
            onclick={() => {
              set_hidden(false);
              rust.display(typist);
              typescript.display(typist);
              familiarWith.display(typist);
            }}
          >
            What skills does i have?
          </button>
        }
      >
        <section class="grid grid-cols-3 grid-rows-1 justify-center justify-items-center h-56 text-sm sm:text-xl">
          <LanguageComponent language={rust} />
          <LanguageComponent language={typescript} />
          <LanguageComponent language={familiarWith} />
        </section>
      </Show>
    </section>
  );
}

/**
 * @param {Object} param0
 * @param {SkillsCollection} param0.language
 */
function LanguageComponent({ language }) {
  return (
    <div class="mx-5">
      <h2 class="text-xs sm:text-2xl">
        <A href={language.basic.page}>{"\t"} {language.name_signal[0]()}</A>
      </h2>
      <ol class="mx-5 justify-center justify-items-center">
        <For each={language.ecosystem}>
          {({ page }, index) => {
            return (
              <li>
                <A href={page}>
                  {"\t"} {language.ecosystem_member(index())}
                </A>
              </li>
            );
          }}
        </For>
      </ol>
    </div>
  );
}
