import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'  // <-- MAKE SURE THIS LINE EXISTS

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-mc-sky to-mc-grass relative overflow-hidden">
      {/* Animated background blocks */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-mc-stone"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -50,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: window.innerHeight + 50,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10 pt-[50px] pb-[60px]">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-7xl font-bold text-white mb-4 drop-shadow-lg font-minecraft">
              DYNACRAFT
            </h1>
            <p className="text-2xl text-white mb-8 drop-shadow">
              The Ultimate Minecraft MMORPG Experience
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="bg-mc-green hover:bg-green-400 text-black font-bold py-4 px-8 text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                PLAY NOW
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            <div className="bg-black bg-opacity-50 p-6 backdrop-blur-sm">
              <div className="text-mc-diamond text-4xl mb-4">⛏️</div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Classes</h3>
              <p className="text-gray-300">Choose from unique classes with special abilities and playstyles</p>
            </div>
            
            <div className="bg-black bg-opacity-50 p-6 backdrop-blur-sm">
              <div className="text-mc-gold text-4xl mb-4">⚔️</div>
              <h3 className="text-xl font-bold text-white mb-2">Epic Quests</h3>
              <p className="text-gray-300">Embark on thrilling adventures across vast custom worlds</p>
            </div>
            
            <div className="bg-black bg-opacity-50 p-6 backdrop-blur-sm">
              <div className="text-mc-iron text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-2">PvP & Dungeons</h3>
              <p className="text-gray-300">Battle players and conquer challenging dungeon raids</p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer - MAKE SURE THIS LINE EXISTS */}
      <Footer />
    </div>
  )
}

export default App