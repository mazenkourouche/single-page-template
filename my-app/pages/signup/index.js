import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [validFormData, setValidFormData] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showMatchingPasswordError, setShowMatchingPasswordError] =
    useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  function ValidateEmail(mail) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    );
  }

  useEffect(() => {
    console.log(formData);
    setValidFormData(ValidateEmail(email) && name != "");
  }, [formData]);

  function validateForm() {
    const validPassword = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
    const shouldShowMatchingError =
      validPassword && confirmPassword != "" && confirmPassword != password;

    setShowPasswordError(!validPassword);
    setShowMatchingPasswordError(shouldShowMatchingError);
    console.log(validPassword);
  }

  function handleSubmit() {
    event.preventDefault();

    console.log("submit");
    validateForm();
  }

  return (
    <>
      <div className="flex min-h-screen bg-white">
        <div className="flex flex-1 flex-col justify-starß py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-12 text-3xl font-bold tracking-tight text-gray-900">
                Generate thousands of words in seconds
              </h2>
            </div>

            <div className="mt-8">
              <div>
                <div>
                  <div className="mt-6 grid grid-cols-1 gap-3">
                    <SignInWithAppleButton />
                    <SignInWithGoogleButton />
                  </div>
                </div>

                <div className="relative mt-6">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FullNameInput onChange={handleChange} />
                  <EmailInput onChange={handleChange} />
                  <PasswordInput
                    onChange={handleChange}
                    show={validFormData}
                    showError={showPasswordError}
                  />
                  <ConfirmPasswordInput
                    onChange={handleChange}
                    show={validFormData}
                    showError={showMatchingPasswordError}
                  />

                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign up
                  </button>
                </form>
              </div>
              <div className="relative flex justify-center text-sm mt-5">
                <span className="bg-white px-2 text-gray-500">
                  Already have an account?{" "}
                  <span className="text-indigo-500 font-semibold">
                    <a href="/login">Sign in</a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* right image */}
        <FeaturedImage />
      </div>
    </>
  );
}

const FullNameInput = ({ onChange }) => {
  return (
    <div className="space-y-1">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Full name
      </label>
      <div className="mt-1">
        <input
          id="full-name"
          name="name"
          type="text"
          autoComplete="current-password"
          required
          onChange={onChange}
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-slate-800"
        />
      </div>
    </div>
  );
};

const EmailInput = ({ onChange }) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email address
      </label>
      <div className="mt-1">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="example@copywriter.com"
          onChange={onChange}
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-slate-800"
        />
      </div>
    </div>
  );
};

const PasswordInput = ({ show, showError, onChange }) => {
  return (
    <div className={`space-y-1 ${show ? "" : "hidden"}`}>
      <label
        htmlFor="password"
        className={`block text-sm font-medium text-gray-700 `}
      >
        Password
      </label>
      <div className="mt-1">
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="password"
            name="password"
            id="password"
            className={`block w-full rounded-md ${
              showError
                ? "border-red-300 pr-10 text-red-900 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 text-slate-900"
            }  placeholder-gray-300  focus:outline-none  sm:text-sm`}
            placeholder="Enter Password"
            //   defaultValue="adamwathan"
            onChange={onChange}
            aria-invalid="true"
            aria-describedby="email-error"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className={` h-5 w-5 text-red-500 ${showError ? "" : "hidden"}`}
              aria-hidden="true"
            />
          </div>
        </div>
        <p
          className={`mt-2 text-sm text-red-600 ${showError ? "" : "hidden"}`}
          id="email-error"
        >
          Your password must be 8 characters and contain a letter and number.
        </p>
      </div>
    </div>
  );
};

const ConfirmPasswordInput = ({ show, showError, onChange }) => {
  return (
    <div className={`space-y-1 ${show ? "" : "hidden"}`}>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700"
      >
        Confirm Password
      </label>
      <div className="mt-1">
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className={`block w-full rounded-md ${
              showError
                ? "border-red-300 pr-10 text-red-900 focus:border-red-500 focus:ring-red-500"
                : " border-gray-300 text-slate-900"
            }  placeholder-gray-300  focus:outline-none  sm:text-sm`}
            placeholder="Re-enter password"
            //   defaultValue="adamwathan"
            onChange={onChange}
            aria-invalid="true"
            aria-describedby="email-error"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className={` h-5 w-5 text-red-500 ${showError ? "" : "hidden"}`}
              aria-hidden="true"
            />
          </div>
        </div>
        <p
          className={`mt-2 text-sm text-red-600 ${showError ? "" : "hidden"}`}
          id="email-error"
        >
          Your passwords are not matching.
        </p>
      </div>
    </div>
  );
};

const SignInWithAppleButton = () => {
  return (
    <div>
      <a
        href="#"
        className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
      >
        <svg
          className="w-4 h-4 mr-2 -ml-1"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_13183_29163)">
            <path
              d="M18.6574 15.5863C18.3549 16.2851 17.9969 16.9283 17.5821 17.5196C17.0167 18.3257 16.5537 18.8838 16.1969 19.1936C15.6439 19.7022 15.0513 19.9627 14.4168 19.9775C13.9612 19.9775 13.4119 19.8479 12.7724 19.585C12.1308 19.3232 11.5412 19.1936 11.0021 19.1936C10.4366 19.1936 9.83024 19.3232 9.18162 19.585C8.53201 19.8479 8.00869 19.985 7.60858 19.9985C7.00008 20.0245 6.39356 19.7566 5.78814 19.1936C5.40174 18.8566 4.91842 18.2788 4.33942 17.4603C3.71821 16.5863 3.20749 15.5727 2.80738 14.4172C2.37887 13.1691 2.16406 11.9605 2.16406 10.7904C2.16406 9.45009 2.45368 8.29407 3.03379 7.32534C3.4897 6.54721 4.09622 5.9334 4.85533 5.4828C5.61445 5.03219 6.43467 4.80257 7.31797 4.78788C7.80129 4.78788 8.4351 4.93738 9.22273 5.2312C10.0081 5.52601 10.5124 5.67551 10.7335 5.67551C10.8988 5.67551 11.4591 5.5007 12.4088 5.15219C13.3069 4.82899 14.0649 4.69517 14.6859 4.74788C16.3685 4.88368 17.6327 5.54699 18.4734 6.74202C16.9685 7.65384 16.2241 8.93097 16.2389 10.5693C16.2525 11.8454 16.7154 12.9074 17.6253 13.7506C18.0376 14.1419 18.4981 14.4444 19.0104 14.6592C18.8993 14.9814 18.7821 15.29 18.6574 15.5863V15.5863ZM14.7982 0.400358C14.7982 1.40059 14.4328 2.3345 13.7044 3.19892C12.8254 4.22654 11.7623 4.82035 10.6093 4.72665C10.5947 4.60665 10.5861 4.48036 10.5861 4.34765C10.5861 3.38743 11.0041 2.3598 11.7465 1.51958C12.1171 1.09416 12.5884 0.740434 13.16 0.458257C13.7304 0.18029 14.2698 0.0265683 14.7772 0.000244141C14.7921 0.133959 14.7982 0.267682 14.7982 0.400345V0.400358Z"
              fill="currentColor"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_13183_29163">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.5)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
        <p className="">Sign in with Apple</p>
      </a>
    </div>
  );
};

const SignInWithGoogleButton = () => {
  return (
    <div>
      <a
        href="#"
        className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
      >
        <svg
          className="w-4 h-4 mr-2 -ml-1"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        <p className="">Sign in with Google</p>
      </a>
    </div>
  );
};

const FeaturedImage = () => {
  return (
    <div className="relative hidden w-0 flex-1 lg:block p-8 overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt=""
      />
    </div>
  );
};
