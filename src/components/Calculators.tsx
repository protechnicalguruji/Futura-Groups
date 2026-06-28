import { useState } from "react";
import { motion } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function Calculators() {
  const [price, setPrice] = useState(10000000);
  const [downPayment, _setDownPayment] = useState(2000000);
  const [interest, _setInterest] = useState(8.5);
  const [tenure, _setTenure] = useState(20);

  const loanAmount = price - downPayment;
  const monthlyInterest = interest / 12 / 100;
  const emi = (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, tenure * 12)) / (Math.pow(1 + monthlyInterest, tenure * 12) - 1);
  const totalPayment = emi * tenure * 12;

  const data = [
    { name: "Principal", value: loanAmount },
    { name: "Interest", value: totalPayment - loanAmount },
  ];
  const COLORS = ["#0B1F33", "#D4AF37"];

  return (
    <section className="py-12 md:py-24 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-5xl lg:text-4xl font-display font-bold text-primary mb-10 md:mb-16 lg:mb-12 text-center">Financial Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-6">
          <motion.div whileHover={{ y: -5 }} className="bg-[#F8F6F2] p-6 md:p-8 lg:p-6 rounded-[28px] border border-white shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-xl md:text-2xl lg:text-xl font-bold mb-4 md:mb-6 lg:mb-4">EMI Calculator</h3>
            <label className="block mb-3 md:mb-4 lg:mb-3 text-sm md:text-base lg:text-sm">Property Cost: ₹ {price.toLocaleString()}</label>
            <input type="range" min="1000000" max="50000000" step="100000" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full mb-6 lg:mb-4 accent-accent" />
            
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 lg:gap-6 items-center">
              <div className="flex-1 text-center sm:text-left">
                <div className="text-xs md:text-sm lg:text-xs text-gray-500">Monthly EMI</div>
                <div className="text-2xl md:text-3xl lg:text-2xl font-bold text-primary">₹ {Math.round(emi).toLocaleString()}</div>
              </div>
              <div className="h-32 w-32 md:h-40 md:w-40 lg:h-32 lg:w-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={data} innerRadius={30} outerRadius={50} md:innerRadius={40} md:outerRadius={60} paddingAngle={5} dataKey="value">
                      {data.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="bg-[#F8F6F2] p-6 md:p-8 rounded-[28px] border border-white shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">ROI Calculator</h3>
            <div className="space-y-3 md:space-y-4 text-gray-600 text-sm md:text-base">
                <div className="flex justify-between"><span>Total Investment</span><span className="font-bold text-primary">₹ {price.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Est. Appreciation (5y)</span><span className="font-bold text-accent">₹ {(price * 0.4).toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Net Profit</span><span className="font-bold text-primary">₹ {(price * 0.4).toLocaleString()}</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
