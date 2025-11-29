import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          🚧 Under Maintenance
        </h1>

        <p className="text-gray-600 mb-6">
          Our website is currently undergoing scheduled maintenance.
          <br />
          We’ll be back shortly. Thank you for your patience!
        </p>

        <div className="animate-pulse text-gray-500 text-sm">
          Checking system status…
        </div>
      </div>
    </main>
  );
}
