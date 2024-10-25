const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  error, // New prop for error state
  success, // New prop for success state
}) => {
  // Determine button styles based on error/success states
  const buttonStyles = error
    ? "bg-red-500 text-white" // Red for errors
    : success
      ? "bg-green-500 text-white" // Green for success
      : backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "border border text-xs border-gray-600  text-black";

  return (
    <button
      className={`flex justify-center items-center hover:shadow-2xl gap-2 px-7 py-4 border text-black font-montserrat text-lg leading-none hover:scale-105 active:scale-95
              ${buttonStyles} rounded-full ${fullWidth && "w-full"}`}
      aria-label={label} // Add aria-label for accessibility
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;
