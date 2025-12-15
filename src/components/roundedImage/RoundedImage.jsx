export default function RoundedImage({ src, alt = "", size = 120 }) {
  return (
    <div
      className="overflow-hidden rounded-full flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
