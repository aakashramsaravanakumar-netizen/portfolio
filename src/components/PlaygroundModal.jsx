import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  X,
  Sparkles,
  Gamepad2,
  Brain,
  Activity,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Eye,
  Sliders,
  Flame,
  Award
} from 'lucide-react';

export default function PlaygroundModal({ isOpen, onClose, initialTab = 'number-game' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  // Sync initial tab when changed externally
  useEffect(() => {
    if (initialTab) {
      if (initialTab === 'agro-ai') setActiveTab('agro-ai');
      else if (initialTab === 'talent-track') setActiveTab('talent-track');
      else setActiveTab('number-game');
    }
  }, [initialTab]);

  // ================= NUMBER GUESSING GAME STATE =================
  const [targetNumber, setTargetNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [userGuess, setUserGuess] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(7);
  const [guessHistory, setGuessHistory] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing' | 'won' | 'lost'
  const [feedback, setFeedback] = useState('Guess a number between 1 and 100!');

  const resetNumberGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setUserGuess('');
    setAttemptsLeft(7);
    setGuessHistory([]);
    setGameStatus('playing');
    setFeedback('Game reset! Guess a number between 1 and 100.');
  };

  const handleGuessSubmit = (e) => {
    e?.preventDefault();
    if (gameStatus !== 'playing') return;

    const num = parseInt(userGuess, 10);
    if (isNaN(num) || num < 1 || num > 100) {
      setFeedback('⚠️ Please enter a valid number between 1 and 100.');
      return;
    }

    if (guessHistory.includes(num)) {
      setFeedback(`⚠️ You already guessed ${num}! Try a different number.`);
      return;
    }

    const diff = Math.abs(num - targetNumber);
    const newHistory = [...guessHistory, num];
    setGuessHistory(newHistory);
    setUserGuess('');

    if (num === targetNumber) {
      setGameStatus('won');
      setFeedback(`🎉 BINGO! You correctly guessed ${targetNumber}!`);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
      return;
    }

    const newAttempts = attemptsLeft - 1;
    setAttemptsLeft(newAttempts);

    if (newAttempts <= 0) {
      setGameStatus('lost');
      setFeedback(`💀 Game Over! The secret number was ${targetNumber}.`);
      return;
    }

    // Dynamic hints
    let hint = num < targetNumber ? '📈 Higher!' : '📉 Lower!';
    if (diff <= 5) {
      hint = `🔥 BOILING HOT! Very close (${num < targetNumber ? 'Go slightly higher' : 'Go slightly lower'})`;
    } else if (diff <= 12) {
      hint = `🌶️ Warm! (${num < targetNumber ? 'Try higher' : 'Try lower'})`;
    } else if (diff >= 35) {
      hint = `❄️ Freezing Cold! (${num < targetNumber ? 'Way higher' : 'Way lower'})`;
    }
    setFeedback(hint);
  };

  // ================= AGROAI VISION SCANNER STATE =================
  const leafSamples = [
    {
      id: 'tomato',
      name: 'Tomato Leaf Sample #104',
      disease: 'Early Blight (Alternaria solani)',
      accuracy: '96.4%',
      severity: 'Medium (32% surface lesion)',
      treatment: 'Apply copper-based organic fungicide & prune lower infected foliage.',
      previewColor: '#65A30D',
      spots: [
        { top: '35%', left: '40%' },
        { top: '48%', left: '55%' },
        { top: '60%', left: '38%' },
      ],
    },
    {
      id: 'corn',
      name: 'Corn Leaf Sample #218',
      disease: 'Common Rust (Puccinia sorghi)',
      accuracy: '94.8%',
      severity: 'High (45% surface pustules)',
      treatment: 'Apply azoxystrobin fungicide and ensure adequate spacing for airflow.',
      previewColor: '#84CC16',
      spots: [
        { top: '25%', left: '50%' },
        { top: '40%', left: '45%' },
        { top: '65%', left: '52%' },
        { top: '80%', left: '48%' },
      ],
    },
    {
      id: 'healthy-potato',
      name: 'Potato Leaf Sample #082',
      disease: 'Healthy Specimen (No Pathogen Detected)',
      accuracy: '98.9%',
      severity: 'None (0% lesion)',
      treatment: 'Continue routine organic irrigation and pest monitoring schedule.',
      previewColor: '#10B981',
      spots: [],
    },
  ];

  const [selectedLeaf, setSelectedLeaf] = useState(leafSamples[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const runVisionScan = () => {
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanResult(selectedLeaf);
    }, 1600);
  };

  // ================= TALENT TRACK MOTION SIMULATOR STATE =================
  const [velocity, setVelocity] = useState(8.4);
  const [cadence, setCadence] = useState(182);
  const [kneeAngle, setKneeAngle] = useState(45);

  const calculateFatigue = () => {
    const fatigue = Math.min(Math.round((velocity * 1.5 + cadence * 0.2 + (kneeAngle - 30) * 0.4) / 1.5), 100);
    return fatigue;
  };

  const calculateFormScore = () => {
    const optimalAngleDiff = Math.abs(kneeAngle - 45);
    const score = Math.max(70, Math.min(98, Math.round(98 - optimalAngleDiff * 0.8)));
    return score;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0B101E] border border-cyan-500/40 p-5 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 text-slate-100 scrollbar-thin"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
                  <span>AI & Code Playground</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    LIVE DEMO
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Interact with playable mini-apps and computer vision simulators
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Module Switcher Tabs */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveTab('number-game')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'number-game'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-white/5'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Number Guessing Game</span>
            </button>

            <button
              onClick={() => setActiveTab('agro-ai')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'agro-ai'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-white/5'
              }`}
            >
              <Brain className="w-4 h-4" />
              <span>AgroAI Vision Scanner</span>
            </button>

            <button
              onClick={() => setActiveTab('talent-track')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'talent-track'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-white/5'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Talent Track Pose Lab</span>
            </button>
          </div>

          {/* TAB 1: NUMBER GUESSING GAME */}
          {activeTab === 'number-game' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 text-center">
                <span className="text-xs font-mono text-cyan-400">VANILLA JAVASCRIPT LOGIC</span>
                <p className="text-sm text-slate-300 mt-1">
                  I have selected a secret number from <strong>1 to 100</strong>. Can you guess it in 7 attempts or fewer?
                </p>

                {/* Feedback Banner */}
                <div className="mt-4 p-3 rounded-xl bg-slate-800/90 border border-cyan-500/30 text-sm font-mono font-semibold text-cyan-200">
                  {feedback}
                </div>
              </div>

              {/* Game Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#080D18] border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="text-center px-3 py-1.5 rounded-xl bg-slate-800 border border-white/10">
                    <span className="text-[10px] font-mono text-slate-400 block">ATTEMPTS LEFT</span>
                    <span
                      className={`text-xl font-bold font-mono ${
                        attemptsLeft <= 2 ? 'text-rose-400 animate-pulse' : 'text-emerald-400'
                      }`}
                    >
                      {attemptsLeft} / 7
                    </span>
                  </div>

                  <button
                    onClick={resetNumberGame}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
                    title="Restart Game"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Input & Submit */}
                <form onSubmit={handleGuessSubmit} className="flex items-center gap-2 w-full sm:w-auto">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    placeholder="Enter 1-100"
                    value={userGuess}
                    disabled={gameStatus !== 'playing'}
                    onChange={(e) => setUserGuess(e.target.value)}
                    className="w-full sm:w-36 px-4 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/40 text-slate-100 placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={gameStatus !== 'playing'}
                    className="px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all disabled:opacity-50"
                  >
                    Guess
                  </button>
                </form>
              </div>

              {/* Guess History */}
              {guessHistory.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-xs font-mono text-slate-400 block mb-2">GUESS TRAIL:</span>
                  <div className="flex flex-wrap gap-2">
                    {guessHistory.map((g, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border ${
                          g === targetNumber
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : 'bg-slate-800 text-slate-300 border-white/5'
                        }`}
                      >
                        #{idx + 1}: {g}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 2: AGROAI VISION SCANNER */}
          {activeTab === 'agro-ai' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Sample Selector */}
              <div>
                <label className="text-xs font-mono text-cyan-400 block mb-2">
                  CHOOSE FIELD CROP SPECIMEN FOR CNN INFERENCE:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {leafSamples.map((sample) => (
                    <button
                      key={sample.id}
                      onClick={() => {
                        setSelectedLeaf(sample);
                        setScanResult(null);
                      }}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        selectedLeaf.id === sample.id
                          ? 'bg-cyan-500/15 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                          : 'bg-slate-900/70 border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <p className="text-xs font-bold font-mono">{sample.name}</p>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">{sample.disease}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Scanner Screen Box */}
              <div className="relative rounded-2xl bg-black/60 border border-cyan-500/30 p-6 flex flex-col items-center justify-center min-h-[220px] overflow-hidden">
                {/* Simulated Leaf SVG graphic */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <path
                      d="M 50 10 C 20 25 15 70 50 90 C 85 70 80 25 50 10 Z"
                      fill={selectedLeaf.previewColor}
                      fillOpacity="0.4"
                      stroke={selectedLeaf.previewColor}
                      strokeWidth="2"
                    />
                    <path
                      d="M 50 15 L 50 85 M 50 35 L 30 50 M 50 55 L 70 40 M 50 65 L 35 75"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* Leaf lesion spots */}
                  {selectedLeaf.spots.map((spot, i) => (
                    <span
                      key={i}
                      className="absolute w-3.5 h-3.5 rounded-full bg-amber-600/80 border border-amber-300/60 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                      style={{ top: spot.top, left: spot.left }}
                    />
                  ))}

                  {/* Laser Scanning Line */}
                  {isScanning && (
                    <motion.div
                      initial={{ top: '0%' }}
                      animate={{ top: '100%' }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute left-0 right-0 h-1 bg-cyan-400 shadow-[0_0_15px_#06B6D4]"
                    />
                  )}
                </div>

                {/* Scan Status overlay */}
                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={runVisionScan}
                    disabled={isScanning}
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50 flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{isScanning ? 'Executing CNN Tensor Pass...' : 'Run Vision Inference'}</span>
                  </button>
                </div>
              </div>

              {/* Inference Results */}
              {scanResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/40 space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400">CLASSIFICATION TARGET</span>
                      <h4 className="text-base font-bold text-emerald-300">{scanResult.disease}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-slate-400">CNN CONFIDENCE</span>
                      <p className="text-lg font-bold font-mono text-cyan-400">{scanResult.accuracy}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="p-2.5 rounded-lg bg-slate-800/60 border border-white/5">
                      <span className="text-slate-400 block font-mono">SEVERITY INDEX:</span>
                      <span className="text-slate-200 font-semibold">{scanResult.severity}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-800/60 border border-white/5">
                      <span className="text-slate-400 block font-mono">ORGANIC REMEDY RECOMMENDATION:</span>
                      <span className="text-emerald-300 font-semibold">{scanResult.treatment}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* TAB 3: TALENT TRACK MOTION SIMULATOR */}
          {activeTab === 'talent-track' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-purple-500/30 text-center">
                <span className="text-xs font-mono text-purple-400">
                  COMPUTER VISION SKELETON POSE ANALYSIS
                </span>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Adjust athlete biomechanical variables to see real-time fatigue calculations and movement efficiency ratings.
                </p>
              </div>

              {/* Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#080D18] border border-white/5">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-400">Velocity (m/s)</span>
                    <span className="text-cyan-400 font-bold">{velocity} m/s</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="11"
                    step="0.1"
                    value={velocity}
                    onChange={(e) => setVelocity(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-400">Cadence (SPM)</span>
                    <span className="text-emerald-400 font-bold">{cadence}</span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="210"
                    step="1"
                    value={cadence}
                    onChange={(e) => setCadence(parseInt(e.target.value, 10))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-400">Knee Angle (°)</span>
                    <span className="text-purple-400 font-bold">{kneeAngle}°</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="70"
                    step="1"
                    value={kneeAngle}
                    onChange={(e) => setKneeAngle(parseInt(e.target.value, 10))}
                    className="w-full accent-purple-400 cursor-pointer"
                  />
                </div>
              </div>

              {/* Live Metric Meters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-slate-400 block">FORM SCORE</span>
                  <span className="text-2xl font-bold font-mono text-cyan-400">
                    {calculateFormScore()}%
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-slate-400 block">FATIGUE INDEX</span>
                  <span className="text-2xl font-bold font-mono text-emerald-400">
                    {calculateFatigue()}%
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-slate-400 block">CONTACT TIME</span>
                  <span className="text-2xl font-bold font-mono text-purple-400">96 ms</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-slate-400 block">INJURY RISK</span>
                  <span className="text-2xl font-bold font-mono text-teal-400">
                    {calculateFatigue() > 75 ? 'Moderate' : 'Low'}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

