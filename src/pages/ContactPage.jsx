import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "../components/CSS/borderStyles.module.css";
import buttonStyles from "../components/CSS/buttonStyles.module.css/";

export function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    setMessage("Form submitted successfully! ✅");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <label className="font-semibold">Full Name</label>
        <input
          type="text"
          className={`${styles.input} h-10 p-2`}
          {...register("fullName", {
            required: "Full name is required",
            minLength: { value: 3, message: "Must be at least 3 characters" },
          })}
          onBlur={() => trigger("fullName")}
        />
        {errors.fullName && (
          <p className="text-red-500">{errors.fullName.message}</p>
        )}

        <label className="font-semibold">Subject</label>
        <input
          type="text"
          className={`${styles.input} h-10 p-2`}
          {...register("subject", {
            required: "Subject is required",
            minLength: { value: 3, message: "Must be at least 3 characters" },
          })}
          onBlur={() => trigger("subject")}
        />
        {errors.subject && (
          <p className="text-red-500">{errors.subject.message}</p>
        )}

        <label className="font-semibold">Email</label>
        <input
          type="email"
          className={`${styles.input} h-10 p-2`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email address",
            },
          })}
          onBlur={() => trigger("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <label className="font-semibold">Message</label>
        <textarea
          className={`${styles.input} p-2`}
          rows="4"
          {...register("body", {
            required: "Message is required",
            minLength: { value: 3, message: "Must be at least 3 characters" },
          })}
          onBlur={() => trigger("body")}
        />
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}

        <button
          type="submit"
          className={`${buttonStyles.buttonBase} ${buttonStyles.neutral}`}
        >
          Submit
        </button>
      </form>
      {message && <p className="text-black font-bold mt-4">{message}</p>}
    </div>
  );
}
