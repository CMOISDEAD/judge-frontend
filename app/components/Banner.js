export const Banner = () => {
  return (
    <div className="flex justify-between content-center items-center mx-2">
      <div className="vertical-text font-mono uppercase animate-pulse">
        scroll down
      </div>
      <div className="flex flex-col justify-center content-center items-center min-h-[77vh] p-24 grow">
        <div className="banner">
          <h3 className="text-8xl font-bold uppercase text-transparent bg-gradient-to-tr from-yellow-500 to-blue-400 bg-clip-text">
            Code.
            <span className="text-xs text-neutral-500 font-normal lowercase">
              destroy everyone.
            </span>
          </h3>
          <h3 className="text-8xl font-bold uppercase text-transparent bg-gradient-to-tr from-green-500 to-blue-400 bg-clip-text">
            Conquer.
            <span className="text-xs text-neutral-500 font-normal lowercase">
              All.
            </span>
          </h3>
          <h3 className="text-8xl font-bold uppercase text-transparent bg-gradient-to-tr from-pink-500 to-blue-400 bg-clip-text">
            Again.
            <span className="text-xs text-neutral-500 font-normal lowercase">
              sparse some blood.
            </span>
          </h3>
          <div className="text-xs text-neutral-500 font-normal lowercase text-center">
            and win.
          </div>
        </div>
      </div>
      <div className="vertical-text font-mono uppercase animate-pulse">
        scroll down
      </div>
    </div>
  );
};
