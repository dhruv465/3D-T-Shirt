import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        id=""
        cols="30"
        rows="5"
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <>
              <CustomButton
                type="filled"
                title="AI Full"
                handleClick={() => handleSubmit("logo")}
                customStyles="text-xs"
              />
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
