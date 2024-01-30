import React from "react";
import Link from "next/link";
const Spinners = () => {
  return (
    <div className="flex  flex-col items-center gap-y-3">
      <div role="status ">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 45 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_13421)">
            <path
              d="M44.5 22C44.5 34.1503 34.6503 44 22.5 44C10.3497 44 0.5 34.1503 0.5 22C0.5 9.84974 10.3497 0 22.5 0C34.6503 0 44.5 9.84974 44.5 22ZM4.46 22C4.46 31.9632 12.5368 40.04 22.5 40.04C32.4632 40.04 40.54 31.9632 40.54 22C40.54 12.0368 32.4632 3.96 22.5 3.96C12.5368 3.96 4.46 12.0368 4.46 22Z"
              fill="#04656B"
            />
            <path
              d="M22.5 42.02C22.5 43.1135 23.3883 44.0092 24.4773 43.911C26.6886 43.7114 28.8608 43.1779 30.919 42.3254C33.5882 41.2197 36.0135 39.5992 38.0564 37.5564C40.0992 35.5135 41.7197 33.0882 42.8253 30.419C43.6779 28.3608 44.2114 26.1886 44.411 23.9774C44.5092 22.8883 43.6135 22 42.52 22C41.4265 22 40.5512 22.8891 40.4314 23.976C40.2451 25.6668 39.8203 27.326 39.1668 28.9036C38.2602 31.0923 36.9314 33.081 35.2562 34.7562C33.581 36.4314 31.5923 37.7602 29.4036 38.6668C27.826 39.3203 26.1668 39.7451 24.476 39.9314C23.3891 40.0512 22.5 40.9265 22.5 42.02Z"
              fill="#00B7C3"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_13421">
              <rect
                width="44"
                height="44"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
      <div className="flex flex-col gap-y-[60px]">
        <div>
          <p className="text-xl    font-bold   text-[#000000]">
            Drafting Email
          </p>
        </div>
        <button
          type="button"
          className="ml-2 w-[170px] text-lg font-normal  text-[#242424] leading-5 py-[5px] px-[12px]"
        >
          <Link href="/EmailComponent"> Cancel</Link>
        </button>
      </div>
    </div>
  );
};
export default Spinners