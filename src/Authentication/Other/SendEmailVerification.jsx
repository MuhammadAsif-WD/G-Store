import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";
import { toast, ToastContainer } from "react-toastify";
import SendMail from "../../Assets/SVG/SendMail.svg";

const SendEmailVerification = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification] = useSendEmailVerification(auth);
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="text-center flex flex-wrap">
        <div className="w-[45vw] mx-auto">
          <img src={SendMail} alt="" />
        </div>
        <div className="w-[35vw] shadow-lg m-16 pt-28 p-5">
          <div className="text-center">
            <h3 className="pb-2 mx-auto text-4xl font-bold text-primary">
              Verify your account
            </h3>
            <h3 className="pb-2 mx-auto text-xl font-bold text-secondary mt-5">
              Your account has not been verified yet. Please verify your account
              and then continue our Website.
            </h3>
          </div>
          <button
            className="bg-primary text-white px-16 py-4 mt-5 rounded-md"
            onClick={async () => {
              await sendEmailVerification();
              toast.success("Send verification Link");
            }}
          >
            Send Verification
          </button>
        </div>
        <ToastContainer />
      </div>
    );
  }

  return children;
};

export default SendEmailVerification;
