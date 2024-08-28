import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import { Form, Formik, FormikHelpers } from "formik";
import Input from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log(values);

    actions.resetForm();
  };

  return (
    <Card className="max-w-[350px] w-full">
      <CardHeader>
        <CardTitle className="text-center">Open Planet Admin</CardTitle>
        <CardDescription className="text-center font-bold">
          Login
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-4">
            <div>
              <Label htmlFor="email">Your email address</Label>
              <Input name="email" id="email" />
            </div>
            <div>
              <Label htmlFor="password">Your password</Label>
              <Input name="password" id="password" />
            </div>
            <Button type="submit" className="mt-4">
              Login
            </Button>
          </Form>
        </Formik>
      </CardContent>
      <CardFooter>
        <p className="mt-4 mx-auto font-medium text-sm text-center">
          {`Don't have an account?`}{" "}
          <Link to="/registration" className="text-blue-400 underline">
            Register here
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
