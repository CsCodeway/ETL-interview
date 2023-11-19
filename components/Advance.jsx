const Advance = ({ formData, updateFormData }) => {
  return (
    <div className="sm:px-20 px-2">
      <div className="py-3 flex flex-col">
        <label>
          Tell me about a time were asked to do something you had never done
          before. How did you react? what did you learn?
        </label>
        <textarea
          className="resize-none border border-[#E1E1E1] h-12 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          value={formData.ques1}
          onChange={(e) => updateFormData("ques1", e.target.value, false, true)}
          maxLength="300"
        />

        <p className="text-right text-xs text-gray-400 pt-1">300 word limit</p>
      </div>
      <div className="py-3 flex flex-col">
        <label>
          Tell me about the last time something significant didn't go according
          to plan at work. What was your role? What was the outcome?
        </label>
        <textarea
          className="resize-none border border-[#E1E1E1] h-12 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          value={formData.ques2}
          onChange={(e) => updateFormData("ques2", e.target.value, false, true)}
          maxLength="300"
        />

        <p className="text-right text-xs text-gray-400 pt-1">300 word limit</p>
      </div>
      <div className="py-3 flex flex-col">
        <label>
          What are the three things that are most important to you in a job?
        </label>
        <textarea
          className="resize-none border border-[#E1E1E1] h-12 mt-1 rounded-lg pl-2 outline-[#E1E1E1]"
          value={formData.ques3}
          onChange={(e) => updateFormData("ques3", e.target.value, false, true)}
          maxLength="300"
        />

        <p className="text-right text-xs text-gray-400 pt-1">300 word limit</p>
      </div>
    </div>
  );
};
export default Advance;
