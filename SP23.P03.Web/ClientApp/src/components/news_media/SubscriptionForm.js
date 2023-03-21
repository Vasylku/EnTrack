import { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send email to backend or API
    console.log(email);
    // Reset form
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-4">
      <p className="block mb-2 font-bold text-gray-700">Subscribe today to receive flash sales, promotions and special offers by email.</p>
      <div className="flex items-center border-b-2 border-white py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button
          className="flex-shrink-0 px-4 py-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-500"
          type="submit"
        >
          Subscribe
        </button>
      </div>
      <p className="mt-2 text-gray-600">
        Stay up-to-date with our latest flash sales, promotions, and special offers.
      </p>
    </form>
  );
};

export default SubscriptionForm;
