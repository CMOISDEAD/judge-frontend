import { RxDotFilled } from "react-icons/rx";

const Spinner = () => {
  return (
    <div className="inline-flex content-center items-center gap-1">
      <div className="animate-ping">
        <RxDotFilled />
      </div>
      processing data...
    </div>
  );
};

export const Output = ({ output, isLoading, passed }) => {
  return (
    <div className="h-full overflow-y-scroll max-w-4xl border border-neutral-900">
      <div
        className={`w-full text-sm uppercase p-1 ${passed ? "bg-green-500" : "bg-red-500"
          }`}
      >
        Output:
      </div>
      <pre className="output font-mono p-5">
        {isLoading ? <Spinner /> : output}
      </pre>
    </div>
  );
};
