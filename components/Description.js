export const Description = () => {
  return (
    <div className="h-full px-7 py-5 overflow-y-auto max-h-[96.4vh]">
      <h3 className="text-3xl font-bold my-5">Palindrome Number</h3>
      <hr />
      <div className="my-2">
        Given an integer x, return true if x is a palindrome , and false
        otherwise.
      </div>
      <div className="my-2 font-bold">Example 1 </div>
      <code className="text-sm">
        <pre className="my-2 bg-neutral-800 rounded px-5 py-2">
          <strong>Input</strong>: x = 121{`\n`}
          <strong>Output</strong>: true{`\n`}
          <strong>Explanation</strong>: 121 reads as 121 from left to right and
          from.
        </pre>
      </code>
      <div className="my-2 font-bold">Example 2</div>
      <code className="text-sm">
        <pre className="my-2 bg-neutral-800 rounded px-5 py-2">
          <strong>Input</strong>: x = -121{`\n`}
          <strong>Output</strong>: false{`\n`}
          <strong>Explanation</strong>: 121 reads as 121 from left to right and
          from.
        </pre>
      </code>
      <div className="my-2 font-bold">Example 3</div>
      <code className="text-sm">
        <pre className="my-2 bg-neutral-800 rounded px-5 py-2">
          <strong>Input</strong>: x = 10{`\n`}
          <strong>Output</strong>: false{`\n`}
          <strong>Explanation</strong>: 121 reads as 121 from left to right and
          from.
        </pre>
      </code>
      <div className="my-2">
        Your task is to write a function that takes a string and return a new
        string with all vowels removed.
      </div>
    </div>
  );
};
