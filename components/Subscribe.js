import React, { useRef, useState } from "react";

function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <div>
      <form onSubmit={subscribe}>
        <label
          className="block mb-3 text-md font-medium text-gray-900 dark:text-gray-300"
          htmlFor="email-input"
        >
          {"NewsLetter"}
        </label>
        <input
          className="block w-72 h-9 text-sm mb-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="email-input"
          name="email"
          placeholder="  you@awesome.com"
          ref={inputEl}
          required
          type="email"
        />
        <div className="text-xs mb-2">
          {message
            ? message
            : `I'll only send emails when new content is posted. No spam.`}
        </div>
        <button
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          type="submit"
        >
          {"✨ Subscribe 💌"}
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
