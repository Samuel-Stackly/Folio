function Button({ children, className = "" }) {
  return (
    <button
      className={`h-16 rounded-2xl bg-[#252547] px-10 text-lg font-semibold text-white transition duration-300 hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;