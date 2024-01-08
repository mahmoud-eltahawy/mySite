import { createSignal, For, Show } from "solid-js";
import { Typist } from "./Typist";

const info = {
  title1: "I AM",
  title2: "I can help building",
  name: "Mahmoud Gamal ElTahawy",
  job: "Full stack dev",
  serivces: ["Desktop Apps", "Web Apps"],
};

export function WhoRU() {
  const [name, set_name] = createSignal("");
  const [job, set_job] = createSignal("");
  const services_signals = info.serivces.map((_) => createSignal(""));
  const [title1, set_title1] = createSignal("");
  const [title2, set_title2] = createSignal("");
  const [whoru, set_whoru] = createSignal(false);

  const typist = new Typist();

  const display = () => {
    typist.type(info.title1, set_title1);
    typist.type(info.name, set_name);
    typist.type(info.job, set_job);
    typist.type(info.title2, set_title2);
    const list_lengths: number[] = [];
    for (let i = 0; i < info.serivces.length; i++) {
      list_lengths.push(info.serivces[i].length);
      typist.type(
        info.serivces[i],
        services_signals[i][1],
      );
    }
  };


  return (
  <section class="text-white h-56 bg-slate-700 grid grid-cols-1 grid-rows-6 justify-center justify-items-center auto-rows-max">
    <Show
      when={whoru()}
      fallback={
        <button
          onclick={() => {
            set_whoru(true);
            display();
          }}
        >
          who are you?
        </button>
      }
    >
      <h1 class="text-2xl">{title1()}</h1>
      <h2>{name()}</h2>
      <h2>{job()}</h2>
      <h2 class="text-2xl">{title2()}</h2>
      <ul>
        <For each={info.serivces}>
          {(_, index) => {
            return <li>{services_signals[index()][0]()}</li>;
          }}
        </For>
      </ul>
    </Show>
  </section>  
  );
}
