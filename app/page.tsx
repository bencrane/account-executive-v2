export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FAF9F6]">
      <main className="flex flex-1 w-full flex-col items-center justify-center p-4 pt-20">
        <div className="bg-transparent border-4 border-blue-600 rounded-none px-12 py-8 shadow-none max-w-full overflow-hidden">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-blue-600 text-center break-all sm:break-normal">
            AccountExecutive.com
          </h1>
        </div>
      </main>
      <footer className="w-full text-center pb-4 pt-2 text-[10px] text-gray-400">
        &copy; 2026 AccountExecutive.com All rights reserved.
      </footer>
    </div>
  );
}
