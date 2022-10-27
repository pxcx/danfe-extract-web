interface BoxProps {
  children?: React.ReactNode;
  className?: string;
}

export function Box({ children, className }: BoxProps) {
  return (
    <div
      className={`p-10 my-10 mx-10 xl:mx-auto xl:max-w-7xl bg-white shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
