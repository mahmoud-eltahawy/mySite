export function BooringCv() {
    return (
      <section class="grid grid-cols-4 m-4">
        <div class="grid col-span-1 bg-cyan-900 justify-items-center justify-content-center text-white">
          <img
            loading="eager"
            src="me.jpg"
            alt="profile"
            class="w-[15%] rounded-full mt-32"
          />
          <h2 class="font-bold text-xl my-2">Mahmoud Eltahawy</h2>
          <p class="mb-4">Full stack developer</p>
          <h3 class="font-bold text-xl">Details</h3>
          <div class="grid grid-cols-5 mb-4">
            <img src="/home_icon.png" class="size-4 my-1"/>
            <span class="col-span-4">Cairo, Egypt</span>
          </div>
          <div class="grid grid-cols-5 mb-4">
            <img src="/phone_icon.png" class="size-4 my-1"/>
            <span class="col-span-4">01100323375</span>
          </div>
          <div class="grid grid-cols-9 mb-4">
            <img src="/gmail_icon.png" class="size-4 my-1"/>
            <span class="col-span-8">gemmy9300@gmail.com</span>
          </div>
          <h3 class="font-bold text-xl mb-3">skills</h3>
          <ol class="ms-8 mb-8">
            <li>html 5</li>
            <li>sql</li>
            <li>css</li>
            <li>git</li>
            <li>React</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Rust</li>
            <li>Solidjs</li>
            <li>Actix</li>
            <li>Axum</li>
            <li>Docker</li>
            <li>PostgreSql</li>
          </ol>
          <h3 class="font-bold text-xl mb-4">Links</h3>
          <div class="grid grid-cols-5 mb-4 ms-4 gap-2">
            <img src="/src/assets/icon.svg.png" class="size-4 my-1"/>
            <a href="https://eltahawystack.netlify.app" class="col-span-4">my website</a>
          </div>
          <div class="grid grid-cols-5 mb-8 ms-4 gap-2">
            <img src="/github_icon.png" class="size-4 my-1"/>
            <a href="https://github.com/mahmoud-eltahawy" class="col-span-4">github</a>
          </div>
        </div>
        <div class="col-span-3 bg-cyan-50 text-black">
          <section class="m-10">
            <h2 class="font-bold ">Profile</h2>
            <section class="ms-5 indent-8">
            web and desktop developer with two years of experience.familiar with auto deployment methods and the classical ones using nixos.
            knowledgeble in user interfaces, the server responsabilities and the debuging process.able to effectively self-managed during independant projects
            as well as collaborate in a team setting
            </section>
            <h2 class="font-bold mt-10">Employment History</h2>
            <p class="opacity-50">web & desktop freelance developer</p>
            <p class="ms-4 opacity-25">September 2022 - March 2024</p>
            <ol class="ms-4 list-disc">
              <li>created desktop apps using tauri</li>
              <li>created web apis using Actix and Axum</li>
              <li>designed the user interface using react ,solid and leptos</li>
              <li>stored data using posgresql</li>
            </ol>
          </section>
        </div>
      </section>
    );
}
