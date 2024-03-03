import { createSignal, For  } from "solid-js";
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
      name: "Rust Programming Language",
      page: "rust-lang.org",
    },
    [
      { name: "Actix-web", page: "actix.rs" },
      { name: "Tokio", page: "tokio.rs" },
      { name: "Serde", page: "serde.rs" },
      { name: "Tauri", page: "tauri.app" },
      { name: "Leptos", page: "leptos.dev" },
    ],
  );
  const typescript = new SkillsCollection({
    name: "Javascript/Typescript",
    page: "typescriptlang.org",
  }, [
    { name: "Solidjs", page: "solidjs.com" },
    { name: "React", page: "react.dev" },
    { name: "Tailwindcss", page: "tailwindcss.com" },
    { name: "Css" },
    { name: "Html" },
  ]);

  const typist = new Typist(40);

  
  rust.display(typist);
  typescript.display(typist);
  familiarWith.display(typist);

  return (
    <section class="m-2">
      <section class="grid grid-cols-1 justify-center justify-items-center text-sm sm:text-xl p-20">
        <LanguageComponent language={rust} />
        <LanguageComponent language={typescript} />
        <LanguageComponent language={familiarWith} />
      </section>
    </section>
  );
}

/**
 * @param {Object} param0
 * @param {SkillsCollection} param0.language
 */
function LanguageComponent({ language }) {
  return (
    <div class="w-[50%] m-10 grid grid-cols-1 place-items-center border-cyan-400 border-2 rounded-full p-10">
      <span class="text-xs sm:text-2xl border-cyan-100">
        <A href={language.basic.page}>{"\t"} {language.name_signal[0]()}</A>
      </span>
      <div class="sm:mx-5 grid grid-cols-1 sm:grid-cols-2 ">
        <For each={language.ecosystem}>
          {({ page }, index) => {
            return (
              <span class="m-2">
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
