import { motion } from "framer-motion";

interface ArabianDividerProps {
  className?: string;
}

const ArabianDivider = ({ className = "" }: ArabianDividerProps) => {
  return (
    <motion.div 
      className={`flex items-center justify-center gap-4 py-2 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-gold/60" />
      <div className="flex items-center gap-2">
        <span className="text-gold/40 text-xs">✦</span>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-gold"
        >
          <path 
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" 
            fill="currentColor" 
            opacity="0.6"
          />
        </svg>
        <span className="text-gold/40 text-xs">✦</span>
      </div>
      <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-gold/60" />
    </motion.div>
  );
};

export default ArabianDivider;
