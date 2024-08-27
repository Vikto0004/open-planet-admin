import { cn } from "@/lib/utils";
import { Field } from "formik";

interface Props {
  name: string;
  id: string;
  type?: string;
  className?: string;
}

const Input: React.FC<Props> = ({ name, id, type, className }) => {
  return (
    <Field
      name={name}
      id={id}
      as={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    />
  );
};

export default Input;
