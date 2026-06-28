import { motion, AnimatePresence } from "motion/react";
import { X, Check, Minus } from "lucide-react";

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: any[];
  onRemove: (project: any) => void;
}

export default function CompareModal({ isOpen, onClose, projects, onRemove }: CompareModalProps) {
  if (!isOpen) return null;

  const specs = [
    { label: "Category", key: "category" },
    { label: "Location", key: "location" },
    { label: "Price", key: "price" },
    { label: "Area", key: "area" },
    { label: "Configuration", key: "configuration" },
    { label: "Status", key: "status" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white w-full max-w-5xl rounded-[32px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-center bg-background">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">Compare Properties</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow overflow-auto p-6 md:p-8">
            <div className="min-w-[800px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left font-display text-gray-500 w-1/4">Spec</th>
                    {projects.map(p => (
                      <th key={p.id} className="p-4 text-center w-1/4 min-w-[200px]">
                        <div className="relative group">
                          <div className="h-32 rounded-2xl overflow-hidden mb-4">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                          </div>
                          <button 
                            onClick={() => onRemove(p)}
                            className="absolute -top-2 -right-2 p-1.5 bg-red-500 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Minus size={14} />
                          </button>
                          <div className="font-bold text-primary leading-tight">{p.name}</div>
                        </div>
                      </th>
                    ))}
                    {projects.length < 4 && [...Array(4 - projects.length)].map((_, i) => (
                      <th key={`empty-${i}`} className="p-4 text-center w-1/4">
                        <div className="h-32 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-300 italic">
                          Empty Slot
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {specs.map((spec) => (
                    <tr key={spec.key} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 font-semibold text-gray-600 bg-background/50">{spec.label}</td>
                      {projects.map(p => (
                        <td key={p.id} className="p-4 text-center text-gray-800">
                          {p[spec.key]}
                        </td>
                      ))}
                      {projects.length < 4 && [...Array(4 - projects.length)].map((_, i) => (
                        <td key={`empty-td-${i}`} className="p-4 text-center text-gray-300">—</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-6 bg-background border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 mb-4">You can compare up to 4 properties at a time.</p>
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all"
            >
              Close Comparison
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
