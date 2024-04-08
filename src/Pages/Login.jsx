import { useForm } from "react-hook-form";
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <div className="flex justify-center items-center h-screen border">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login Your Account</h1>
          <p>
            Thank you for get back to Elite Havern, let accesss our the best
            recommendation for you
          </p>
          <input placeholder="Enter Your Email" {...register("email", { required: true } )} className="w-full border-b-2 py-4  outline-none"/>
          {errors.email && <span className="text-red-600">Enter Email</span>}
          <input placeholder="Enter Your Password" {...register("password", { required: true })} className="w-full border-b-2 py-4 outline-none"/>
          {errors.password && <span className="text-red-600">Enter Password</span>}
          <p className="flex justify-end">Forgot your Password</p>
          <input type="submit" className="btn w-full" />
        </form>
      </div>
    </div>
  );
};

export default Login;
