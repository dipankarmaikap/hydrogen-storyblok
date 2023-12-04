export default function FallbackComponent({blok}) {
  return (
    <div className="max-w-screen-lg mx-auto bg-red-100 m-4 p-4 rounded text-xl shadow-sm">
      <p>
        Component <span className="font-medium">{blok?.component}</span> does'nt
        exist. You have to code it.
      </p>
    </div>
  );
}
