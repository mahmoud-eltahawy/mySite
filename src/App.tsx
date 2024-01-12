import { WhoRU } from "./WhoRU";
import { Skills } from "./Skills";
import { Show, createSignal } from "solid-js";
import A from "./tiny/A";

function App() {
  return (
    <>
      <WhoRU />
      <Skills />
      <WorkExample/>
    </>
  );
}

function WorkExample() {
  const [hidden,set_hidden] = createSignal(true);
  return (
    <Show 
      when={!hidden()}
      fallback={
        <button
          class="text-white h-56 w-[100%] bg-slate-700 text-7xl"
          onclick={() => {
            set_hidden(false);
          }}
        >
          Example of my previous work
        </button>
    }
      >
      <section class="grid grid-cols-2 grid-rows-1 justify-center justify-items-center h-56 bg-slate-700 text-white  text-xl">
        <A 
          href="github.com/mahmoud-eltahawy/excel-network"
        >Unimplemented yet example</A>
      </section>
    </Show>
  )
}

export default App;
