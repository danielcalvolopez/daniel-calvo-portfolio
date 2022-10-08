const Modal = ({ toggleModal, alertMessage }) => {
  const handleOnClick = () => {
    toggleModal(false);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-[#233554] p-8 rounded flex flex-col justify-center items-center gap-10">
        <div className="text-[#CCD6F9]">{alertMessage}</div>
        <button className="projectsBtn" type="submit" onClick={handleOnClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
