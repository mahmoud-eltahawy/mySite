import { createSignal, For, Show } from "solid-js";
import { Typist } from "./Typist";

const info = {
  title1: "Services : ",
  name: "Name : Mahmoud Gamal Eltahawy",
  job: "Job : Fullstack Developer",
  serivces: ["- Desktop Apps", "- Web Apps"],
};

export function WhoRU() {
  const [name, set_name] = createSignal("");
  const [job, set_job] = createSignal("");
  const services_signals = info.serivces.map((_) => createSignal(""));
  const [title1, set_title1] = createSignal("");
  const [hidden, set_hidden] = createSignal(false);

  const typist = new Typist(50);

  const display = () => {
    typist.type(info.name, set_name);
    typist.type(info.job, set_job);
    typist.type(info.title1, set_title1);
    for (let i = 0; i < info.serivces.length; i++) {
      typist.type(
        info.serivces[i],
        services_signals[i][1],
      );
    }
  };

  return (
    <section class="m-2 border-cyan-400 border-2 rounded-xl">
      <Show
        when={hidden()}
        fallback={
          <button
            class="h-56 w-[100%] text-5xl sm:text-7xl"
            onclick={() => {
              scroll({ top: 0 });
              set_hidden(true);
              display();
            }}
          >
            Who am i?
          </button>
        }
      >
        <div class="flex">
          <img
            src="me.jpg"
            alt="profile"
            class="opacity-0 img-animated inline-block w-[30%] object-contain rounded-full"
          />
          <section class="text-sm sm:text-3xl w-[85%] h-56 grid grid-cols-1 grid-rows-5 justify-left justify-items-left auto-rows-max">
            <span class="m-2 sm:mt-5">{name()}</span>
            <span class="m-2 sm:mt-5">{job()}</span>
            <span class="m-2 sm:mt-5">{title1()}</span>
            <ol class="text-base sm:text-xl sm:mt-5">
              <For each={info.serivces}>
                {(_, index) => {
                  return (
                    <li class="sm:text-xl mx-10 sm:mt-5">
                      {services_signals[index()][0]()}
                    </li>
                  );
                }}
              </For>
            </ol>
          </section>
        </div>
      </Show>
    </section>
  );
}
