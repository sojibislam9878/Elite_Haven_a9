import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
const UpdateProfile = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { updateUser } = useAuth();

  const onSubmit = (data) => {
    const { updatePhoto, updateName } = data;
    updateUser(updateName, updatePhoto);
    location.reload();
  };

  return (
    <div className="bg-slate-50 mt-12">
      <div className="container mx-auto p-">
      <div className="lg:flex justify-center gap-16 py-20">
      <div className=" bg-blue-50 rounded-b-none lg:rounded-b-xl rounded-xl overflow-hidden shadow-xl lg:w-1/2">
        <div className="">
          <div className="flex justify-center items-center bg-blue-600">
            <div className="bg-blue-600 -mb-10 mt-10 p-1 w-36 h-36 rounded-full">
              <img
                src={user?.photoURL || "https://i.ibb.co/4SrK9pD/profile.jpg"}
                alt="photo"
                className=" overflow-hidden border-4 rounded-full h-full object-cover"
              />
            </div>
          </div>
          <div className=" w-full mx-auto mt-12 p-4">
            <p className="text-lg font-medium text-center">Hello!</p>
            <h1 className="text-2xl font-bold text-center">
              {user?.displayName || "Unknown"}
            </h1>
            <h1 className="text-lg font-medium mt-4">Your email:</h1>
            <h3 className="text-xl font-bold opacity-80 mt-1">
              {user?.email || "Not Found"}
            </h3>
            <h1 className="text-lg font-medium mt-4">Your Photo URL:</h1>
            <h3 className="text-xl font-bold opacity-80 mt-1">
              {user?.photoURL || "Not Found"}
            </h3>
          </div>
        </div>
      </div>
      <div className="divider lg:divider-horizontal divider-info hidden lg:flex"></div> 
      {/* update part */}
      <div className="p-4 bg-blue-50 shadow-lg rounded-t-none lg:rounded-t-xl rounded-xl lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-4xl font-bold lg:mt-12 border-t-2 pt-4 lg:p-0 lg:border-none">Update Your Profile :</h1>
            <input
              placeholder="Enter Your Name"
              {...register("updateName", { required: true })}
              className="w-full border-b-2 py-4  outline-none mt-6 bg-transparent border-gray-400"
            />
            {errors.updateName && (
              <span className="text-red-600">Give Your New Name</span>
            )}
            <input
              placeholder="Enter Your Photo URL"
              {...register("updatePhoto", { required: true })}
              className="w-full border-b-2 py-4  outline-none mt-6 bg-transparent border-gray-400"
            />
            {errors.updatePhoto && (
              <span className="text-red-600">Give Your Photo URL</span>
            )}

            <input
              type="submit"
              value="Update Youn Information"
              className="btn w-full bg-blue-500 text-white text-lg mt-10"
            />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UpdateProfile;
