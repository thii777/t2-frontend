import Image from "next/image";

interface DetailsProps {
  partner: string;
  value: any;
  installments: number;
  imageLink: any;
  fees: string;
}

export default function Details(props: DetailsProps) {
  function formatValue(value) {
    const numberFormat = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

    return numberFormat;
  }

  return (
    <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <a href="#" >
        <Image src={props.imageLink} alt="" />
      </a>
      <div className="p-1">
        <h5 className="mt-3 mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          {props.partner}
        </h5>
        <div className="flex items-baseline text-gray-700 dark:text-white">
          <span className="text-5xl font-extrabold tracking-tight">
            {" "}
            {formatValue(props.value)}
          </span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"></span>
        </div>
        <ul role="list" className="my-7 space-y-5">
          <li className="flex space-x-3">
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-orange-600 dark:text-orange-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {`${props.installments}x`} {formatValue(props.value / 12)}
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5 text-orange-600 dark:text-orange-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {`Juros ${props.fees} a.m.`}
            </span>
          </li>
        </ul>
        <button
          type="button"
          className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline focus:ring-orange-300 dark:focus:ring-orange-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Peça agora
        </button>
      </div>
    </div>
  );
}
