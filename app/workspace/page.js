import { Description } from "../../components/Description";
import { CodeEditor } from "../../components/Editor";

export default function Workspace() {
  return (
    <main className="flex">
      <div className="w-5/12 max-xl:hidden">
        <Description />
      </div>
      <div className="grow">
        <CodeEditor />
      </div>
    </main>
  );
}
