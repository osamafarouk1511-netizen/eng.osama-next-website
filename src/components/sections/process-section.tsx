'use client';

import { motion } from 'framer-motion';
import { SearchCode, GitBranch, Code2, TestTube2, Rocket, HeadphonesIcon } from 'lucide-react';

const processSteps = [
  {
    number: "01",
    title: "تحليل الاحتياجات",
    description: "نبدأ بفهم عميق لاحتياجات وأهداف عملك لضمان توافق الحلول مع متطلباتك.",
    icon: SearchCode
  },
  {
    number: "02",
    title: "وضع الاستراتيجية",
    description: "نضع خطة تقنية متكاملة تناسب متطلباتك وتحقق أهدافك.",
    icon: GitBranch
  },
  {
    number: "03",
    title: "التطوير",
    description: "ننفذ الحلول باستخدام أحدث التقنيات وبأعلى درجات الدقة والاحترافية.",
    icon: Code2
  },
  {
    number: "04",
    title: "الاختبار والجودة",
    description: "نقوم باختبارات دقيقة لضمان أداء الحلول بكفاءة في بيئة العمل الحقيقية.",
    icon: TestTube2
  },
  {
    number: "05",
    title: "التنفيذ والتدريب",
    description: "ننفذ الحلول بسلاسة دون توقف الأعمال، مع تدريب كامل للفريق.",
    icon: Rocket
  },
  {
    number: "06",
    title: "الدعم الفني",
    description: "دعم وصيانة مستمرة لضمان استمرار الحلول بأفضل أداء.",
    icon: HeadphonesIcon
  }
];

export default function ProcessSection() {

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative background line (CSS only for performance) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">خطوات العمل</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            منهجية دقيقة لضمان أفضل النتائج لعملك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/5 sm:backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full group hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-white/20 to-gray-500/20 bg-clip-text text-transparent group-hover:from-white/30 group-hover:to-gray-500/30 transition-colors">
                    {step.number}
                  </span>
                  <div className="icon-float">
                    <step.icon className="w-8 h-8 text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}