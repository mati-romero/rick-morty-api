export default function Loading({ size = 60 }) {
  return (
    <div className="
        fixed inset-0 
        bg-black/40 
        flex flex-col justify-center items-center 
        z-50
    ">
      <img
        src={"img/loading.png"}
        alt="loading"
        style={{ width: size }}
        className="animate-spin mb-4"
      />
      <p className="text-white text-lg font-medium tracking-wide">
        Loading...
      </p>
    </div>
  );
}