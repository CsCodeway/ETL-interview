import { useState } from "react";

const Final = ({ formData, fileData }) => {
  const [finalFormData, setFinalFormData] = useState({
    location: "",
    interviewDate: "",
    interviewTime: "",
    timeZone: "",
    interviewMedium: "",
  });
  const handleChange = (field, value) => {
    setFinalFormData({
      ...finalFormData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    const completeFormData = {
      ...formData,
      ...fileData,
      ...finalFormData,
    };
    console.log("Complete Form Data:", completeFormData);
    alert("Please check console for the Data")
  };

  return (
    <div className="sm:px-20 px-2">
      <div className="py-3 flex flex-col">
        <label>Location</label>
        <input
          type="search"
          placeholder="Search or enter your location"
          className="border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          value={finalFormData.location}
          onChange={(e) => handleChange("location", e.target.value)}
        />
      </div>
      <div className="py-3 flex flex-col">
        <label>Interview Date</label>
        <input
          type="date"
          placeholder="DD/MM/YY"
          className="min-w-fit max-w-[30%] cursor-pointer border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          value={finalFormData.interviewDate}
          onChange={(e) => handleChange("interviewDate", e.target.value)}
        />
      </div>
      <div className="py-3 flex flex-col">
        <label>Interview Time</label>
        <input
          type="time"
          placeholder="DD/MM/YY"
          className="min-w-fit max-w-[30%] cursor-pointer border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          value={finalFormData.interviewTime}
          onChange={(e) => handleChange("interviewTime", e.target.value)}
        />
      </div>
      <div className="py-3 flex flex-col">
        <label>Time Zone</label>
        <select
          id="timezone"
          className="cursor-pointer border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          value={finalFormData.timeZone}
          onChange={(e) => handleChange("timeZone", e.target.value)}
        >
          <option value="" disabled >
            Select Time Zone
          </option>
          <option value="timezone1">Time Zone 1</option>
          <option value="timezone2">Time Zone 2</option>
        </select>
      </div>

      <div className="pt-3 flex flex-col">
        <label>Interview Medium</label>
        <select
          id="interviewMedium"
          className="cursor-pointer border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          value={finalFormData.interviewMedium}
          onChange={(e) => handleChange("interviewMedium", e.target.value)}
        >
          <option value="" disabled>
            Select Interview Medium
          </option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="gujarati">Gujarati</option>
        </select>
      </div>

      <div className="text-right w-full pt-6">
        <button
          className="bg-blue-500 rounded-full text-white px-3 py-1"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Final;
