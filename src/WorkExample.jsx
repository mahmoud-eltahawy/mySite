import { createEffect, createSignal, For, Show} from "solid-js";
import { Typist } from "./Typist";

const info = {
    title1 : "Hints of project look",
    title2 : "Description",
    title3 : "Project Features",
    // @ts-ignore
    descriptionTable : new Map([
        ["Project name",["Private Excel Network"]],
        ["why this project",[
            "it is a desktop app but uses a web technoloy so it covers web and desktop development skills",
            "it uses leptos as frontend framework which is similar to solidjs framwork so it covers my skills in both framworks",
            "it uses rust for backend and for frontend which proofs that i have good grasp of the language skills",
            "it depends on api written in rust and a database which is postgresql",
            "i build the sever of this project by myself using nixos for the company that uses this software on a private server",
        ]],
    ]),
    projectFeatures : [
        "it designed to be configerable to read json format then organize them into sheets and export it to excel format",
        "sheets is searchable by name or the date the sheet was inserted in",
        "program config can include special features like collaping sheet rows if they have common column and do special operations on each columns",
        "the program can be distributed to very differant workflow by changing config sheet designs and any number of sheet types can be added",
    ]
};

function signalize(info) {
    const info_signals = {};
    for (const k in info) {
        if (typeof info[k] === 'string') {
            info_signals[k] = createSignal("");
        } else if(Array.isArray(info[k])) {
            const list = [];
            for(let i = 0; i < info[k].length; i++) {
                list.push(createSignal(""))
            }
            info_signals[k] = list;
        
        // @ts-ignore
        } else if(info[k] instanceof Map) {
            const list = new Array();
            for(let i = 0; i < info[k].size; i++) {
                list.push([(createSignal("")), (createSignal(""))])
            }
            // @ts-ignore
            info_signals[k] = new Map(list);
        }
    }
    return info_signals;
}

const info_signals = signalize(info);
console.log(info_signals)

export function WorkExample() {
    const [hidden, set_hidden] = createSignal(true);
    createEffect(() => {
        if (!hidden()) {
            scroll({ top: 1000 });
        }
    });

    const typist = new Typist(140);

    const display = () => {
        typist.type(info.title1,info_signals.title1[1])
        typist.type(info.title2,info_signals.title2[1])
        typist.type(info.title3,info_signals.title3[1])
        for(let i = 0; i < info.projectFeatures.length; i++) {
            typist.type(info.projectFeatures[i],info_signals.projectFeatures[i][1])
        }
    };

    return (
        <Show
            when={!hidden()}
            fallback={<button
                class="h-56 w-[100%] text-7xl"
                onclick={() => {
                    set_hidden(false);
                    display();
                }}
            >
                Example of my previous work
            </button>}
        >
            <h1 class="mx-20">{info_signals.title1[0]()}</h1>
            <section class="grid grid-cols-2">
                <video width="100%" controls>
                    <source src="toggle_list.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <video width="100%" controls>
                    <source src="search.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </section>
            <h1>{info_signals.title2[0]()}</h1>
            <table class="mx-20 border-separate border-spacing-2 border border-slate-500 w-[90%]">
                <tbody>
                    <tr>
                        <td>Project name</td>
                        <td>Private Excel Network</td>
                    </tr>
                    <tr>
                        <td>why this project</td>
                        <td>
                            <ol class="list-decimal">
                                <li>it is a desktop app but uses a web technoloy so it covers web and desktop development skills</li>
                                <li>it uses leptos as frontend framework which is similar to solidjs framwork so it covers my skills in both framworks</li>
                                <li>it uses rust for backend and for frontend which proofs that i have good grasp of the language skills</li>
                                <li>it depends on api written in rust and database which is postgresql</li>
                                <li>i build the sever of this project by myself using nixos for the company that uses this software on a private server</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
            <section>
                <h1>{info_signals.title3[0]()}</h1>
                <ol class="my-5 mx-20 list-decimal">
                    <For each={info_signals.projectFeatures}>
                        {
                            (item,_) => <li>{item[0]()}</li> 
                        }
                    </For>
                </ol>
            </section>
            <button onclick={() => {
                const a = document.createElement("a");
                a.href = "https://github.com/mahmoud-eltahawy/excel-network";
                a.click();
                a.remove();
            }} class="border-lime-400">click for the Source code</button>
        </Show>
    );
}
