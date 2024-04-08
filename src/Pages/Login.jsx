import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const {login}=useAuth()
  const onSubmit = (data) =>{
    login(data.email, data.password)
  };
  const [isHide, setIsHide] = useState(false);
  const handleHide = () => {
    setIsHide(!isHide);
  };
  return (
    <div className="flex justify-center mt-10">
      <div className=" rounded-xl p-6 w-2/3 xl:w-1/3 mx-auto shadow-xl border-t">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-4xl font-bold mt-12">Login Your Account.</h1>
          <p className="font-medium mt-6 opacity-70">
            Thank you for get back to Elite Havern, let accesss our the best
            recommendation for you
          </p>
          <input
            placeholder="Enter Your Email"
            {...register("email", { required: true })}
            className="w-full border-b-2 py-4  outline-none mt-10"
          />
          {errors.email && <span className="text-red-600">Enter Email</span>}
          <div className="relative">
            <input
              type={isHide ? "text" : "password"}
              placeholder="Enter Your Password"
              {...register("password", { required: true })}
              className="w-full border-b-2 py-4 outline-none mt-6"
            />
            <p className="absolute right-5 top-11 hover:cursor-pointer" onClick={handleHide}>
              {isHide ? (
                <span className="material-symbols-outlined">
                  visibility_off
                </span>
              ) : (
                <span className="material-symbols-outlined">
                  visibility
                </span>
              )}
            </p>
          </div>
          {errors.password && (
            <span className="text-red-600">Enter Password</span>
          )}
          <p className="flex justify-end text-blue-500 font-bold my-8">
            Forgot your Password ?
          </p>
          <input
            type="submit"
            value="Sign In"
            className="btn w-full bg-blue-500 text-white text-lg"
          />
        </form>
        <p className="text-center mt-6 mb-28 font-medium opacity-80 text-lg">
          <span className="opacity-80">Do not have an account?</span>{" "}
          <Link to="/registration"><span className="text-blue-500 font-bold">Register Here</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
