import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function Calculators() {
  const [price, setPrice] = useState(10000000);
  const [downPayment, setDownPayment] = useState(2000000);
  const [interest, setInterest] = useState(8.5);
  const [tenure, setTenure] = useState(20);

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
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-display font-bold text-primary mb-16 text-center">Financial Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-[28px] border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">EMI Calculator</h3>
            <label className="block mb-4">Property Cost: ₹ {price.toLocaleString()}</label>
            <input type="range" min="1000000" max="50000000" step="100000" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full mb-6 accent-accent" />
            
            <div className="flex gap-8 items-center">
              <div className="flex-1">
                <div className="text-sm text-gray-500">Monthly EMI</div>
                <div className="text-3xl font-bold text-primary">₹ {Math.round(emi).toLocaleString()}</div>
              </div>
              <div className="h-40 w-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={data} innerRadius={40} outerRadius={60} paddingAngle={5} dataKey="value">
                      {data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[28px] border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">ROI Calculator</h3>
            <div className="space-y-4 text-gray-600">
                <div className="flex justify-between"><span>Total Investment</span><span className="font-bold text-primary">₹ {price.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Est. Appreciation (5y)</span><span className="font-bold text-accent">₹ {(price * 0.4).toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Net Profit</span><span className="font-bold text-primary">₹ {(price * 0.4).toLocaleString()}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
