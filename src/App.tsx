import React from 'react';

function App() {
  const totalDebt = 230169;
  const debtRemaining = 32200;
  const currentProgress = totalDebt - debtRemaining;
  const progressValue = (currentProgress / totalDebt) * 100;

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-9 mb-32">Herb's Garden Debt Free Countdown</h1>

      <div className="max-w-[1200px] w-full mb-32">
        <div className="mb-3 relative">
          <svg
            className="w-full block h-28 bottom-0 absolute"
            style={{ left: `${progressValue}%` }}
          >
            <line
              className="stroke-white"
              strokeWidth="224"
              x1="0"
              x2="4"
              y1="0"
            />
          </svg>
          <svg
            className="block h-12 rounded-full rounded-r-none absolute"
            style={{ width: `${progressValue}%` }}
          >
            <line
              className="stroke-green-40"
              strokeWidth="96"
              x1="0"
              x2="9999"
              y1="0"
            />
          </svg>
          <svg className="w-full block h-12 rounded-full">
            <line
              className="stroke-gray-20"
              strokeWidth="96"
              x1="0"
              x2="9999"
              y1="0"
            />
          </svg>
          <div
            className="absolute -top-[68px]"
            style={{ right: `${101 - progressValue}%` }}
          >
            <p className="text-3 m-0 leading-none">Remaining</p>
            <p className="text-8 m-0  font-semibold">
              {debtRemaining.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>

        <div className="flex justify-between px-6">
          <div>
            <p className="text-3 m-0 leading-none">Total</p>
            <p className="text-8 m-0  font-semibold">$230,169</p>
          </div>
          <div>
            <p className="text-3 m-0 leading-none">Goal</p>
            <p className="text-8 m-0  font-semibold">$0</p>
          </div>
        </div>
      </div>

      <p className="m-0">
        Herb's Garden has two team members on baby step 2. We will be a
        debt-free squad in October of this year.
      </p>
      <p className="m-0">
        If you'd like to help us push that date up sooner, then consider giving
        like no one else so we can all live like no one else.
      </p>
    </div>
  );
}

export { App };
