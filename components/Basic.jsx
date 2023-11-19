const Basic = ({ formData, updateFormData }) => {
  return (
    <div className="sm:px-20 px-2">
      <div className="py-3 flex flex-col">
        <label>Name*</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          required
          value={formData.name}
          onChange={(e) => updateFormData("name", e.target.value)}
        />
      </div>
      <div className="py-3 flex flex-col">
        <label>Email*</label>
        <input
          type="email"
          placeholder="Example userid@gmail.com"
          className="border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          required
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
        />
      </div>
      <div className="py-3 flex flex-col">
        <label>Date of Birth</label>
        <input
          type="date"
          placeholder="DD/MM/YY"
          className="min-w-fit max-w-[30%] cursor-pointer border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          value={formData.dob}
          onChange={(e) => updateFormData("dob", e.target.value)}
        />
      </div>
      <div className="py-3 flex flex-col">
        <label>Contact no</label>
        <input
          type="number"
          placeholder="Enter your 10 digit contact no"
          className="border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          value={formData.contact}
          onChange={(e) => updateFormData("contact", e.target.value)}
          minLength={10}
          maxLength={10}
        />
      </div>
    </div>
  );
};
export default Basic;
