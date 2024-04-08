import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Registion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const [isHide, setIsHide] = useState(false);
  const handleHide = () => {
    setIsHide(!isHide);
  };
  return (
    <div className="flex justify-center mt-10">
      <div className=" rounded-xl p-6 w-2/3 xl:w-1/3 mx-auto shadow-xl border-t">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-4xl font-bold mt-12">Register New Account.</h1>
          <p className="font-medium mt-6 opacity-70">
            Let get you all set up so you can verify your personal account and begin settion up your profile
          </p>
          <input
            placeholder="Enter Your Full Name"
            {...register("name", { required: true })}
            className="w-full border-b-2 py-4  outline-none mt-10"
          />
          {errors.name && <span className="text-red-600">Enter Your Full Name</span>}
          <input
            placeholder="Enter Your Photo URL"
            {...register("photo", { required: true })}
            className="w-full border-b-2 py-4  outline-none mt-6"
          />
          {errors.photo && <span className="text-red-600">Give Your Photo URL</span>}
          <input
            placeholder="Enter Your Email"
            {...register("email", { required: true })}
            className="w-full border-b-2 py-4  outline-none mt-6"
          />
          {errors.email && <span className="text-red-600">Enter Email</span>}
          <div className="relative">
            <input
              type={isHide ? "text" : "password"}
              placeholder="Enter Your Password"
              {...register("password", { required: true })}
              className="w-full border-b-2 py-4 outline-none mt-6"
            />
            <p
              className="absolute right-5 top-11 hover:cursor-pointer"
              onClick={handleHide}
            >
              {isHide ? (
                <span className="material-symbols-outlined">
                  visibility_off
                </span>
              ) : (
                <span className="material-symbols-outlined">visibility</span>
              )}
            </p>
          </div>
          {errors.password && (
            <span className="text-red-600">Enter Password</span>
          )}
          <input
            type="submit"
            value="Create Account"
            className="btn w-full bg-blue-500 text-white text-lg mt-6"
          />
        </form>
        <p className="text-center mt-6 mb-28 font-medium opacity-80 text-lg">
          <span className="opacity-80">Already have an account?</span>{" "}
          <Link to="/login"><span className="text-blue-500 font-bold">Login</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Registion;
