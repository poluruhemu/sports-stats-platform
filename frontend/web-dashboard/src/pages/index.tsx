import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sports Stats Platform</title>
        <meta name="description" content="Real-time sports statistics and analytics" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Sports Stats Platform
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Live Scores</h2>
            <p className="text-gray-600">Real-time cricket, football, and F1 updates</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Player Stats</h2>
            <p className="text-gray-600">Comprehensive player analytics and ratings</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Card Game</h2>
            <p className="text-gray-600">Interactive sports card battles</p>
          </div>
        </div>
      </main>
    </>
  );
}