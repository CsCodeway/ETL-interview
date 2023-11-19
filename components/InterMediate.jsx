const InterMediate = ({ updateFileData }) => {
  const handleFileChange = (fieldName, event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Data = reader.result;
        updateFileData(fieldName, base64Data);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="sm:px-20 px-2">
      <div className="py-3 flex flex-col">
        <label>
          10<sup>th</sup> Marksheet*
        </label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange("Marksheet10", e)}
          className="border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          required
        />
      </div>
      <div className="py-3 flex flex-col">
        <label>
          12<sup>th</sup> Marksheet*
        </label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange("Marksheet12", e)}
          className="border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          required
        />
      </div>
      <div className="py-3 flex flex-col">
        <label>Graduation Marksheet*</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange("GraduationMarksheet", e)}
          className="border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          required
        />
      </div>
      <div className="py-3 flex flex-col">
        <label>Post Graduation Marksheet</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange("PostGraduationMarksheet", e)}
          className="border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
        />
      </div>
      <div className="py-3 flex flex-col">
        <label>Offer Letter*</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange("OfferLetter", e)}
          className="border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
        />
      </div>
      <div className="py-3 flex flex-col">
        <label>Salary Slips*</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange("SalarySlips", e)}
          className="border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
        />
      </div>
      <div className="py-3 flex flex-col">
        <label>Bank Statement*</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange("BankStatement", e)}
          className="border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          required
        />
      </div>
      <div className="py-3 flex flex-col">
        <label>Increment Letter (if any)</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange("Increments", e)}
          className="border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
        />
      </div>
      <div className="py-3 flex flex-col">
        <label>Others (if any)</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange("Others", e)}
          className="border border-[#E1E1E1] h-8 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
        />
      </div>
    </div>
  );
};
export default InterMediate;
