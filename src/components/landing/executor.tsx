import { useEffect, useState } from 'react';
import { Terminal, CheckCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExecutorProps {
  className?: string;
}

const EXECUTION_STEPS = [
  { text: 'Initializing core...', duration: 800 },
  { text: 'Bypassing security protocols...', duration: 1200 },
  { text: 'Injecting payload...', duration: 1000 },
  { text: 'System compromised.', duration: 500 },
];

export function Executor({ className }: ExecutorProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (stepIndex < EXECUTION_STEPS.length) {
      const currentStep = EXECUTION_STEPS[stepIndex];
      
      // Reset progress
      setProgress(0);
      
      // Animate progress bar for this step
      const startTime = Date.now();
      progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / currentStep.duration) * 100, 100);
        setProgress(newProgress);
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          timeout = setTimeout(() => {
            setStepIndex(prev => prev + 1);
          }, 200); // Small pause between steps
        }
      }, 50);
    } else {
      setIsComplete(true);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(progressInterval);
    };
  }, [stepIndex]);

  const handleReset = () => {
    setStepIndex(0);
    setIsComplete(false);
    setProgress(0);
  };

  return (
    <div 
      className={cn(
        "group relative mt-6 w-full max-w-md mx-auto overflow-hidden rounded-lg border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-green-500/30",
        className
      )}
      onClick={isComplete ? handleReset : undefined}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-3 py-2">
        <div className="flex items-center gap-2">
          <Terminal className="h-3 w-3 text-green-500" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
            Executor_v2.4
          </span>
        </div>
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-red-500/20" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/20" />
          <div className="h-2 w-2 rounded-full bg-green-500/20" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 font-mono text-xs">
        <div className="space-y-1.5">
          {EXECUTION_STEPS.slice(0, stepIndex + 1).map((step, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {idx < stepIndex ? (
                <CheckCircle className="h-3 w-3 shrink-0 text-green-500" />
              ) : idx === stepIndex && !isComplete ? (
                <Loader2 className="h-3 w-3 shrink-0 animate-spin text-green-500" />
              ) : (
                <CheckCircle className="h-3 w-3 shrink-0 text-green-500" />
              )}
              <span 
                className={cn(
                  "transition-colors duration-300",
                  idx < stepIndex ? "text-gray-400" : "text-green-400",
                  idx === stepIndex && !isComplete && "animate-pulse"
                )}
              >
                {step.text}
              </span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        {!isComplete && (
          <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div 
              className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
        
        {isComplete && (
          <div className="mt-3 text-center text-[10px] text-gray-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            Click to restart sequence
          </div>
        )}
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-px -z-10 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}
