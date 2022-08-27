import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading";
import { Icon } from "@iconify/react";
// import useToken from "../../Hooks/useToken";

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // const [token] = useToken(user || gUser);

  const navigate = useNavigate();

  let signUpError;

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError) {
    signUpError = (
      <p className="text-primary">
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  // if (user || gUser) {
  //   console.log(user || gUser);
  // }

  if (user || gUser) {
    navigate("/");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
  };
  return (
    <div className="flex justify-center items-center text-secondary">
      <div className="shadow-md p-16 justify-center">
        <div>
          <h2 className="text-center uppercase text-2xl font-thin font-serif animate__animated animate__heartBeat">
            Sign <span className="text-primary">Up</span>
            <span className="divider bg-primary h-[3px] w-1/4 mx-auto mt-1"></span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs animate__animated animate__fadeIn animate__delay-1s mt-5">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input outline-none border border-primary rounded px-2 py-2 w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label>
                {errors.name?.type === "required" && (
                  <span className="text-primary">{errors.name.message}</span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs animate__animated animate__fadeIn animate__delay-2s  mt-5">
              <label>
                <span>Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input outline-none border border-primary rounded px-2 py-2 w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="animate__animated animate__fadeIn animate__delay-1s">
                {errors.email?.type === "required" && (
                  <span className="text-primary">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-primary">{errors.email.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs animate__animated animate__fadeIn animate__delay-3s mt-5">
              <label>
                <span>Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input outline-none border border-primary rounded px-2 py-2 w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 8,
                    message: "Must be 8 characters or longer",
                  },
                })}
              />
              <label className="animate__animated animate__fadeIn animate__delay-1s">
                {errors.password?.type === "required" && (
                  <span className="text-primary">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-primary">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {signUpError}
            <input
              className="w-full max-w-xs hover:bg-primary ease-in duration-300 hover:text-white py-2 rounded cursor-pointer border border-primary mt-8 animate__animated animate__fadeIn animate__delay-4s"
              type="submit"
              value="Sign up"
            />
          </form>
          <div
            className="animate__animated animate__fadeIn animate__delay-5s
animate__animated animate__fadeIn animate__delay-5s"
          >
            <p className="mt-2">
              <small>
                Already have an account?{" "}
                <Link className="text-primary" to="/login">
                  Please login
                </Link>
              </small>
            </p>
            <div className="flex gap-x-2 align-middle mt-5">
              <div className="h-1 w-full bg-secondary"></div>
              <div className="mt-[-10px]">OR</div>
              <div className="h-1 bg-secondary w-full"></div>
            </div>

            <button
              onClick={() => signInWithGoogle()}
              className="mt-5 w-full py-2 border border-primary rounded hover:bg-primary hover:text-white ease-in duration-300 flex justify-center align-middle"
            >
              <span className="pr-3">Continue with Google </span>
              <Icon className="w-6 h-6" icon="akar-icons:google-fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
