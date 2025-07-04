import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import BackButton from "../../../componets/Back";
import Slider from "../Slider";

const PersonalDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailFromState = location.state?.email || "";
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: emailFromState,
    gender: "",
    password: "",
    phone: "",
    referred_by: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "confirmPassword") {
      setConfirmPassword(value);
      setPasswordMatch(formData.password === value);
    } else if (id === "password") {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
      setPasswordMatch(value === confirmPassword);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/register`,
        {
          phone: formData.phone,
          email: formData.email,
          firstname: formData.firstname,
          lastname: formData.lastname,
          gender: formData.gender,
          password: formData.password,
          referred_by: formData.referred_by, // Send referred_by to backend
        }
      );

      if (response.data) {
        navigate("/success");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 md:p-8 p-4 bg-[#f6fceb]">
      <div className="flex flex-col w-full md:w-1/2 md:p-8">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Personal details
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Input your personal details
          </p>

          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="mt-1 w-full p-2 border border-gray bg-input rounded focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                id="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Enter first name"
                className="mt-1 w-full p-2 border border-gray bg-input rounded focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Enter last name"
                className="mt-1 w-full p-2 border border-gray bg-input rounded focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="mt-1 w-full p-2 border border-gray bg-input rounded focus:ring-green-500 focus:border-green-500"
                required
                readOnly
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray bg-input rounded focus:ring-green-500 focus:border-green-500"
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Referred By Field */}
            <div className="mb-4">
              <label
                htmlFor="referred_by"
                className="block text-sm font-medium text-gray-700"
              >
                Referred By (optional)
              </label>
              <input
                type="text"
                id="referred_by"
                value={formData.referred_by}
                onChange={handleChange}
                placeholder="Referral code or name"
                className="mt-1 w-full p-2 border border-gray bg-input rounded focus:ring-green-500 focus:border-green-500"
              />
            </div>
            {/* End referred by */}

            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="mt-1 w-full p-2 border border-gray bg-input rounded focus:ring-green-500 focus:border-green-500"
                required
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="absolute inset-y-0 right-0 top-5 pr-3 flex items-center text-sm leading-5"
                tabIndex={-1}
              >
                {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="mb-6 relative">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={`mt-1 w-full p-2 border ${
                  confirmPassword.length > 0
                    ? passwordMatch
                      ? "border-green-500"
                      : "border-red-500"
                    : "border-gray"
                } bg-input rounded focus:ring-green-500 focus:border-green-500`}
                required
              />
              <button
                type="button"
                onClick={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
                className="absolute inset-y-0 right-0 top-5 pr-3 flex items-center text-sm leading-5"
                tabIndex={-1}
              >
                {isConfirmPasswordVisible ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
              {confirmPassword.length > 0 && !passwordMatch && (
                <span className="text-red-500 text-xs absolute -bottom-5 left-0">
                  Passwords do not match
                </span>
              )}
              {confirmPassword.length > 0 && passwordMatch && (
                <span className="text-green-600 text-xs absolute -bottom-5 left-0">
                  Passwords match
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !passwordMatch}
              className={`w-full py-2 px-4 ${
                loading || !passwordMatch
                  ? "bg-gray-400"
                  : "bg-primary hover:bg-green-600"
              } text-secondary font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-green-500`}
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-green-500 font-medium hover:underline"
            >
              Log in
            </a>
          </p>

          <p className="mt-2 text-center text-xs text-gray-500">
            By continuing to use Skillovia, you agree to our{" "}
            <a
              href="/terms-and-condition"
              className="text-green-500 hover:underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privac-policy" className="text-green-500 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default PersonalDetails;
