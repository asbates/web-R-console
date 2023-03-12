import "./App.css";
import CodeMirrorR from "./CodeMirrorR";

function App() {
  return (
    <div className="App">
      <h1>Welcome to webR!</h1>
      <p>
        <a href="https://www.tidyverse.org/blog/2023/03/webr-0-1-0/">webR </a>
        just had their first release! If you don't know, <code>webR</code> is a
        project to bring R to web browsers. It is a compilation of R to
        <a href="https://webassembly.org/"> Web Assembly</a> (WASM). What this
        means is we can now run in in a web browser. No need to have R installed
        or to set up a server.
      </p>
      <p>
        This site is an experiment for me to learn how to use webR. Type your R
        code in the left box and the result will display in the right. Note
        there are only a few packages available right now because they need to
        be compiled. You can find a list of available packages in the{" "}
        <a href="https://github.com/r-wasm/webr-repo/blob/main/repo-packages">
          webr-repo
        </a>{" "}
        repository. To use any of these packages run{" "}
        <code>webr::install("package-name")</code>, then you can load it with
        <code> library("package-name")</code> like usual.
      </p>
      <p>
        As this is experimental, it's not quite polished. In particular, note
        following.
        <ul>
          <li>
            Before the first run, make a small change. (e.g. remove and replace
            a ')')
          </li>
          <li>
            Unlike a typical R console, you need to <code>print</code> an object
            manually.
          </li>
        </ul>
      </p>
      <p>
        The code for this site is available at
        <a href="https://github.com/asbates/web-R-console">
          {" "}
          https://github.com/asbates/web-R-console
        </a>
        .
      </p>
      <CodeMirrorR />
    </div>
  );
}

export default App;
