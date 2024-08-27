import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
