

export default function Sidebar() {

    return (
      <>
        <div className="lg:w-1/4 md:w-1/2 w-full shadow-white shadow-lg rounded-tl-[40px] bg-inherit-400 mr-2 mt-16 ml-4 border-2  ">
          <div className="text-gray-800 p-5 m-3 text-center">
            <h4 className="text-2xl p-2 tracking-wide text-blue-500">History</h4>
            <p className="text-gray-400">Search last Month data</p>
            <p className="text-gray-400">Last month Sell</p>
            <p className="text-gray-400">Search last Month data</p>
            <p className="text-gray-400">Last month Sell</p>
            <p className="text-gray-400">Last month Sell</p>
          </div>
          <div className="m-3 text-gray-400 p-5 text-center">
            <h4 className="text-2xl p-2 tracking-wide text-blue-500">Suggested Queries</h4>
            <p className="text-gray-400 cursor-pointer ">Search last Month data</p>
            <p className="text-gray-400">Last month Sell</p>
            <p className="text-gray-400">Search last Month data</p>
            <p className="text-gray-400">Last month Sell</p>
            <p className="text-gray-400">Last month Sell</p>
          </div>
        </div>
      </>
    );
  }
  