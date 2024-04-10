import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
const UpdateProfile = () => {
  const {user} =useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 const {updateUser}=useAuth()

  const onSubmit = (data) => {
    const{ updatePhoto , updateName}= data
         updateUser(updateName,updatePhoto )
          location.reload()
  };

  return (
    <div className="container mx-auto p-4">
      <div className=" bg-slate-200 rounded-xl overflow-hidden shadow-xl ">
        <div className="flex justify-center items-center bg-blue-600">
          <div className="bg-blue-600 -mb-10 mt-10 p-1 w-36 h-36 rounded-full">
            <img
              src={user?.photoURL || "https://i.ibb.co/4SrK9pD/profile.jpg"}
              alt="photo"
              className=" overflow-hidden border-4 rounded-full h-full object-cover"
            />
          </div>
        </div>
        <div className=" text-center mt-12">
          <p className="text-lg font-medium">Hello!</p>
          <h1 className="text-2xl font-bold">{user?.displayName || "Unknown"}</h1>
          <h3 className="text-xl font-bold opacity-80">{user?.email || "Not Found"}</h3>
        </div>
        {/* update section */}
        <div className="p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-4xl font-bold mt-12">Update Your Profile :</h1>
          <input
            placeholder="Enter Your Name"
            {...register("updateName", { required: true })}
            className="w-full border-b-2 py-4  outline-none mt-6 bg-transparent border-gray-400"
          />
          {errors.updateName && <span className="text-red-600">Give Your New Name</span>}
          <input
            placeholder="Enter Your Photo URL"
            {...register("updatePhoto", { required: true })}
            className="w-full border-b-2 py-4  outline-none mt-6 bg-transparent border-gray-400"
          />
          {errors.updatePhoto && <span className="text-red-600">Give Your Photo URL</span>}
          
          <input
            type="submit"
            value="Update Youn Information"
            className="btn w-full bg-blue-500 text-white text-lg mt-6"
          />
        </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
