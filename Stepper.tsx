import { FaCheckCircle, FaRegAddressCard, FaUser } from "react-icons/fa";

const Stepper = ({ currentStep = 1 }) => {
  // Define the steps with icons and titles
  const steps = [
    { id: 1, title: "Profile", icon: <FaUser size={24} /> },
    { id: 2, title: "Details", icon: <FaRegAddressCard size={24} /> },
    { id: 3, title: "Confirmation", icon: <FaCheckCircle size={24} /> },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">Stepper</h2>
      <div className="flex items-center justify-between relative mb-6">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center relative">
            {/* Step Icon */}
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                currentStep > step.id
                  ? "border-indigo-500 bg-indigo-500 text-white"
                  : currentStep === step.id
                  ? "border-indigo-500 bg-indigo-500 text-white"
                  : "border-gray-300 bg-white text-gray-500 hover:border-indigo-300"
              }`}
            >
              {currentStep > step.id ? (
                <FaCheckCircle className="text-white" size={20} />
              ) : (
                step.icon
              )}
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
    </div>
  );
};

export default Stepper;
