const Modal = ({ toggleModal, successMessage }) => {
  const handleOnClick = () => {
    toggleModal(false);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-[#495670] p-8 rounded flex flex-col justify-center items-center gap-10">
        <div>
          {successMessage ? (
            <p className="text-[#a8b2d1]">Your message was succesfully sent!</p>
          ) : (
            <p className="text-[#4f0000]">
              Your message could not be sent! Please, use a different contact
              method.
            </p>
          )}
        </div>
        <button className="projects-btn" type="submit" onClick={handleOnClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
