export default function Input({ id, type = "text", placeholder, ...props }) {
    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm"
        {...props}
      />
    );
  }
  