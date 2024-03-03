import { createSignal, For } from "solid-js";
import { Typist } from "./Typist";

const whyThisProject = [
  "1 - it is a desktop app but uses a web technoloy so it covers web and desktop development skills",
  "2 - it uses leptos as frontend framework which is similar to solidjs framwork so it covers my skills in both framworks",
  "3 - it uses rust for backend and for frontend which proofs that i have good grasp of the language skills",
  "4 - it depends on api written in rust and a database which is postgresql",
  "5 - i build the sever of this project by myself using nixos for the company that uses this software on a private server",
];

const projectFeatures = [
  "1 - it designed to be configerable to read json format then organize them into sheets and export it to excel format",
  "2 - sheets is searchable by name or the date the sheet was inserted in",
  "3 - program config can include special features like collaping sheet rows if they have common column and do special operations on each columns",
  "4 - the program can be distributed to very differant workflow by changing config sheet designs and any number of sheet types can be added",
];

export function WorkExample() {
  const typist = new Typist(10);
  const [title3, set_title3] = createSignal("");
  const [title4, set_title4] = createSignal("");
  const [title5, set_title5] = createSignal("");
  const [projectName, setProjectName] = createSignal("");
  const projectFeaturesSignals = projectFeatures.map(() => createSignal(""));
  const whyThisProjectSignals = whyThisProject.map(() => createSignal(""));

  /**
   * @param {number} time
   */
  function scroll_by(time) {
    setTimeout(() => {
      scrollBy(0, 400);
    }, time);
  }

  typist.type("why this project", set_title4);
  typist.type("Project name", set_title5);
  typist.type("Private Excel Network", setProjectName);
  for (let i = 0; i < whyThisProject.length; i++) {
    scroll_by(typist.type(whyThisProject[i], whyThisProjectSignals[i][1]));
  }
  typist.type("Project Features", set_title3);
  for (let i = 0; i < projectFeatures.length; i++) {
    scroll_by(typist.type(projectFeatures[i], projectFeaturesSignals[i][1]));
  }

  return (
    <section class="border-cyan-400 rounded-xl">
      <section class="grid grid-cols-2">
        <video width="100%" controls>
          <source src="toggle_list.webm" type="video/webm"/>
          Your browser does not support the video tag.
        </video>
        <video width="100%" controls>
          <source src="search.webm" type="video/webm"/>
          Your browser does not support the video tag.
        </video>
      </section>
      <a  class="mx-10 my-5 p-5 border-2 rounded-full hover:text-2xl" href ="https://github.com/mahmoud-eltahawy/excel-network">
        click for the Source code
      </a>
      <section class="grid grid-cols-2 mx-20 border-2 border w-[90%] p-10 rounded-full">
            <h3>{title5()}</h3>
            <h3>{projectName()}</h3>
            <h3 class="my-20">{title4()}</h3>
            <ol class="my-5">
              <For each={whyThisProjectSignals}>
                {(item, _) => <li>{item[0]()}</li>}
              </For>
            </ol>
      </section>
      <section class="mx-20 my-10 border-2 p-10 rounded-full">
        <h1>{title3()}</h1>
        <ol class="mx-10">
          <For each={projectFeaturesSignals}>
            {(item, _) => <li>{item[0]()}</li>}
          </For>
        </ol>
      </section>
    </section>
  );
}
