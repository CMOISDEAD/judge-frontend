export const Output = ({ output, isLoading, passed }) => {
  return (
    <div className="h-[29.9vh] overflow-y-scroll max-w-4xl">
      <div
        className={`w-full text-sm uppercase p-1 ${passed ? "bg-green-500" : "bg-red-500"
          }`}
      >
        Output:
      </div>
      <pre className="output font-mono p-5">
        {isLoading ? "loading..." : output}
      </pre>
    </div>
  );
};
