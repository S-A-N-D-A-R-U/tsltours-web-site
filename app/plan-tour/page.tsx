"use client"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  arrivalDate: z.string(),
  departureDate: z.string(),
  adults: z.number().min(1, "Number of adults is required"),
  children: z.string().optional(),
  travelInterests: z.array(z.string()).optional(),
  accommodation: z.string().optional(),
  budget: z.string().optional(),
  additionalServices: z.array(z.string()).optional(),
  specificLocations: z.string().optional(),
  specialNeeds: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const CustomTourRequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/api/sendTourRequest", data);
      alert("Tour request submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit tour request.");
    }
  };

  return (
  <div className="max-w-xl m-auto mt-20" >
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Personal Information */}
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            {...register("fullName")}
            className="input-field"
          />
          <p className="error-text">{errors.fullName?.message}</p>
        </div>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            {...register("email")}
            className="input-field"
          />
          <p className="error-text">{errors.email?.message}</p>
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            {...register("phoneNumber")}
            className="input-field"
          />
          <p className="error-text">{errors.phoneNumber?.message}</p>
        </div>

        {/* Travel Details */}
        <div>
          <label>Arrival Date:</label>
          <input
            type="date"
            {...register("arrivalDate")}
            className="input-field"
          />
        </div>
        <div>
          <label>Departure Date:</label>
          <input
            type="date"
            {...register("departureDate")}
            className="input-field"
          />
        </div>
        <div>
          <label>Number of Adults:</label>
          <input
            type="number"
            {...register("adults", { valueAsNumber: true })}
            className="input-field"
          />
          <p className="error-text">{errors.adults?.message}</p>
        </div>
        <div>
          <label>Number of Children (with ages):</label>
          <input type="text" {...register("children")} className="input-field" />
        </div>

        {/* Travel Interests */}
        <div className="col-span-2">
          <label>Travel Interests:</label>
          <div className="grid grid-cols-2 gap-2">
            {/* Map through options for travel interests */}
            {["Nature & Scenic Beauty", "History & Culture", "Beach & Relaxation"].map((interest) => (
              <label key={interest} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={interest}
                  {...register("travelInterests")}
                />
                <span>{interest}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="col-span-2">
          <label>Message:</label>
          <textarea {...register("message")} className="input-field"></textarea>
        </div>

        <button type="submit" className="submit-button">
          Submit Request
        </button>
      </div>
    </form>
  </div>
    
  );
};

export default CustomTourRequestForm;
