import { useForm } from "react-hook-form";

export function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger, // ✅ This enables validation onBlur
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        {/* Full Name */}
        <label className="font-semibold">Full Name</label>
        <input
          type="text"
          className="border p-2 rounded"
          {...register("fullName", {
            required: "Full name is required",
            minLength: { value: 3, message: "Must be at least 3 characters" },
          })}
          onBlur={() => trigger("fullName")} // ✅ Validate on blur
        />
        {errors.fullName && (
          <p className="text-red-500">{errors.fullName.message}</p>
        )}

        {/* Subject */}
        <label className="font-semibold">Subject</label>
        <input
          type="text"
          className="border p-2 rounded"
          {...register("subject", {
            required: "Subject is required",
            minLength: { value: 3, message: "Must be at least 3 characters" },
          })}
          onBlur={() => trigger("subject")} // ✅ Validate on blur
        />
        {errors.subject && (
          <p className="text-red-500">{errors.subject.message}</p>
        )}

        {/* Email */}
        <label className="font-semibold">Email</label>
        <input
          type="email"
          className="border p-2 rounded"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email address",
            },
          })}
          onBlur={() => trigger("email")} // ✅ Validate on blur
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Message */}
        <label className="font-semibold">Message</label>
        <textarea
          className="border p-2 rounded"
          rows="4"
          {...register("body", {
            required: "Message is required",
            minLength: { value: 3, message: "Must be at least 3 characters" },
          })}
          onBlur={() => trigger("body")} // ✅ Validate on blur
        />
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
