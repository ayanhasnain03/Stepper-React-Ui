import { useState } from "react";
import { FaCheckCircle, FaRegAddressCard, FaUser } from "react-icons/fa";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Define the steps with icons and titles
  const steps = [
    { id: 1, title: "Profile", icon: <FaUser size={24} /> },
    { id: 2, title: "Details", icon: <FaRegAddressCard size={24} /> },
    { id: 3, title: "Confirmation", icon: <FaCheckCircle size={24} /> },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
        Stepper
      </h2>
      <div className="flex items-center justify-between relative mb-6">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center relative">
            {/* Step Icon */}
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                currentStep >= step.id
                  ? "border-indigo-500 bg-indigo-500 text-white"
                  : "border-gray-300 bg-white text-gray-500 hover:border-indigo-300"
              }`}
            >
              {step.icon}
            </div>

            {/* Step Title */}
            <p
              className={`ml-2 font-medium text-lg transition-colors duration-300 ${
                currentStep >= step.id ? "text-gray-800" : "text-gray-500"
              }`}
            >
              {step.title}
            </p>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div
                className={`h-1 transition-colors duration-300 ${
                  currentStep > step.id ? "bg-indigo-500" : "bg-gray-300"
                }`}
                style={{
                  width: "100%", // Set width to 100% for full length
                  height: "6px",
                  position: "absolute",
                  top: "50%", // Center vertically
                  left: "calc(100% + 10px)", // Position to the right of the step icon
                  transform: "translateY(-50%)", // Adjust vertical alignment
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Current Step Display */}
      <div className="text-center mb-4 text-lg font-semibold text-gray-600">
        Current Step: {currentStep}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          className="bg-gray-200 px-4 py-2 rounded-full text-gray-700 font-semibold hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50"
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-indigo-500 px-4 py-2 rounded-full text-white font-semibold hover:bg-indigo-600 transition-colors duration-200 disabled:opacity-50"
          disabled={currentStep === steps.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
