import { AlertModalProps } from "../lib/models";

export default function AlertModal(props: AlertModalProps) {
  return (
    <div className="p-2 absolute top-3 right-5">
      <div className="inline-flex items-center bg-white leading-none text-violet-800 rounded-full p-2 shadow text-teal text-sm">
        <span className="inline-flex rounded-full h- justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <span className="inline-flex px-2">{props.message}</span>
      </div>
    </div>
  );
}
