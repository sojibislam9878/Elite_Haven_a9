import { useForm } from "react-hook-form";
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" rounded-xl p-6 w-2/3 lg:w-1/3 mx-auto shadow-xl border-t">
        <form onSubmit={handleSubmit(onSubmit)} >
          <h1 className="text-4xl font-bold mt-12">Login Your Account.</h1>
          <p className="font-medium mt-6 opacity-70">
            Thank you for get back to Elite Havern, let accesss our the best
            recommendation for you
          </p>
          <input placeholder="Enter Your Email" {...register("email", { required: true } )} className="w-full border-b-2 py-4  outline-none mt-10"/>
          {errors.email && <span className="text-red-600">Enter Email</span>}
          <input placeholder="Enter Your Password" {...register("password", { required: true })} className="w-full border-b-2 py-4 outline-none mt-6"/>
          {errors.password && <span className="text-red-600">Enter Password</span>}
          <p className="flex justify-end text-blue-500 font-bold my-8">Forgot your Password ?</p>
          <input type="submit" value="Sign In" className="btn w-full bg-blue-500 text-white text-lg" />
        </form>
        <p className="text-center mt-6 mb-28 font-medium opacity-80 text-lg"><span className="opacity-80">Do not have an account?</span> <span className="text-blue-500 font-bold">Register Here</span></p>
      </div>
    </div>
  );
};

export default Login;
 