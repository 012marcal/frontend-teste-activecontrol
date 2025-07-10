export default function Button({ children, type = "button", className = "", ...props }) {
    return (
      <button
        type={type}
        className={`bg-black text-white py-2 px-4 rounded-lg text-sm hover:opacity-90 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  