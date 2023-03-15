const Errors = ({ errors }) => {
    if (!errors || Object.keys(errors).length === 0) {
      return null;
    }
  
    return (
      <div className="bg-red-500 text-white p-2">
        {Object.values(errors).map((error, index) => (
          <p key={index}>{error}</p>
        ))}
      </div>
    );
  };
  export default Errors;