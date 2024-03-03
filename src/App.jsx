import { Whoami } from "./Whoami";
import { Skills } from "./Skills";
import { WorkExample } from "./WorkExample";
import { Route, Router } from "@solidjs/router";

function App() {
  return (
    <Router>
      <Route path="/" component={Home}/>
      <Route path="/whoami" component={Whoami}/>
      <Route path="/skills" component={Skills}/>
      <Route path="/example" component={WorkExample}/>
    </Router>
  );
}

function Home(){
  
  return (
    <section class="grid grid-cols-1 justify-center bg-cyan-950 text-lime-400 m-20">
      <a href="/whoami"  class="h-56 w-[100%] text-5xl sm:text-7xl grid grid-cols-1 gap-4 place-content-center place-items-center m-5 border-cyan-400 border-2 rounded-xl">whoami ?</a>
      <a href="/skills"  class="h-56 w-[100%] text-5xl sm:text-7xl grid grid-cols-1 gap-4 place-content-center place-items-center m-5 border-cyan-400 border-2 rounded-xl">What skills does i have?</a>
      <a href="/example" class="h-56 w-[100%] text-5xl sm:text-7xl grid grid-cols-1 gap-4 place-content-center place-items-center m-5 border-cyan-400 border-2 rounded-xl">Example of my previous work</a>
    </section>
    
  )
}

export default App;
