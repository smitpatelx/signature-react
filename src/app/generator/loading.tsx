const LoadingSection = () => <div className="flex-1 h-full flex flex-col">Loading...</div>;
const LoadingConfiguration = () => (
  <div className="flex flex-col items-center border-b border-zinc-800">Loading...</div>
);

export default function Loading() {
  return (
    <div className="flex-1 h-full flex flex-col">
      <LoadingConfiguration />

      <div className="flex-1 h-full flex flex-row flex-nowrap gap-4 container mx-auto">
        <LoadingSection />

        <div className="inline-block w-px bg-zinc-800" />

        <LoadingSection />
      </div>
    </div>
  );
}
