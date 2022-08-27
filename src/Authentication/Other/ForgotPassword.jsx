import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";
import forgotPassword from "../../Assets/SVG/ForgotPassword.svg";

const ForgotPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    await sendPasswordResetEmail(email);
    alert("Sent your email");
    if (alert) {
      return alert("Your password reset was sent successfully");
    }
  };

  if (error) {
    return toast.error(error?.massage);
  }
  if (sending) {
    return <Loading />;
  }

  return (
    <div className="w-full grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 mx-auto xl:p-32 lg:p-32 lg:pt-5 md:p-5 p-5 pt-0">
      <div>
        <img src={forgotPassword} alt="" />
      </div>

      <div className="xl:pt-36 lg:pt-24 md:pt-0 pt-0">
        <form action="#" onSubmit={handleResetPassword}>
          <div className="grid grid-cols-1 p-4 pt-5 mx-auto xl:w-1/4 xl:p-0">
            <h1 className="text-center text-secondary mb-5 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-2xl text-xl font-bold">
              Forgot your password
            </h1>
            <label className="text-black" htmlFor="email">
              Email Address
            </label>
            <input
              className="p-2 outline-none border border-primary rounded"
              type="email"
              name="email"
              id=""
              placeholder="Email"
              required
            />
            <input
              className="mt-5 btn button border border-primary text-secondary ease-in duration-300 cursor-pointer mx-auto hover:bg-primary hover:text-white w-40 rounded-md justify-center py-4"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ForgotPassword;
