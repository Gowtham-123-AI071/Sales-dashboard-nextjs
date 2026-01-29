export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 relative overflow-hidden">
      
      {/* Top Right Credit */}
      <div className="absolute top-6 right-6">
        <a
          href="mailto:gowthammysonrgr@gmail.com"
          className="bg-white/30 backdrop-blur-md text-white text-sm px-4 py-2 rounded-full shadow hover:bg-white/40 transition"
        >
          Presented by Gowtham R
        </a>
      </div>

      {/* Background Glow Circles */}
      <div className="absolute w-96 h-96 bg-pink-500 opacity-30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Card */}
      <div className="relative backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-12 max-w-xl text-center text-white">

        <h1 className="text-5xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
          Sales Analytics Dashboard
        </h1>

        <p className="text-white/90 mb-10 text-lg leading-relaxed">
          Visualize yearly sales, discover insights, and monitor business growth
          with stunning interactive charts and analytics.
        </p>

        <a
          href="/dashboard"
          className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 hover:bg-indigo-100 transition duration-300"
        >
          Explore Dashboard →
        </a>

      </div>
    </main>
  );
}
