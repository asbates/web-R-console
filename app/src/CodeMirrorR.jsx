import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { r } from "@codemirror/legacy-modes/mode/r";
import { tokyoNightStorm } from "@uiw/codemirror-theme-tokyo-night-storm";
import { WebR } from "@r-wasm/webr";
import "./codeMirrorR.css";

const webR = new WebR();
await webR.init();
const shelter = await new webR.Shelter();

export default function CodeMirrorR() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  async function runRCode() {
    const shelterResult = await shelter.captureR(input);
    try {
      const out = shelterResult.output
        .filter((evt) => evt.type == "stdout")
        .map((evt) => evt.data);
      setResult(out.join("\n"));
    } finally {
      shelter.purge();
    }
  }
  return (
    <div className="code-mirror-r">
      <button id="run" onClick={runRCode}>
        Run Code
      </button>
      <div className="container">
        <CodeMirror
          value="
fit <- lm(hp ~ cyl, data = mtcars)
print(summary(fit))"
          height="500px"
          theme={tokyoNightStorm}
          extensions={[StreamLanguage.define(r)]}
          onChange={(value) => setInput(value)}
        />
        <pre id="out">{result}</pre>
      </div>
    </div>
  );
}
