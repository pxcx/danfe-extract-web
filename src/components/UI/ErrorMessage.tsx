interface ErrorMessageProps {
  error?: string;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <p
      className={`${
        error ? "block" : "hidden"
      } p-3 w-1/2 mx-auto my-5 border-2 border-solid border-red-500 rounded-xl bg-red-100 text-red-600`}
    >
      <b>Error:</b> {error}
    </p>
  );
}
