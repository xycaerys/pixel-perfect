import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Overlay that slides away on load */}
      <motion.div
        className="fixed inset-0 bg-background z-50 pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        style={{ transformOrigin: "top" }}
      />
      
      {/* Gold accent line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 pointer-events-none"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1, opacity: [1, 1, 0] }}
        transition={{ 
          scaleX: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
          opacity: { duration: 0.3, delay: 0.8 }
        }}
        style={{ transformOrigin: "left" }}
      />
      
      {children}
    </motion.div>
  );
};

export default PageTransition;
