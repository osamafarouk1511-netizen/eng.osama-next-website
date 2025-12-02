'use client';

import { motion } from 'framer-motion';
import { Database, Server, Globe, ShoppingCart, Code2, Cloud, Shield } from 'lucide-react';
import { AnimatedServiceCard } from '../ui/animated-service-card';
import CurvedBackground from '../ui/curved-background';

const services = [
  {
    title: 'نظام ERP متكامل لإدارة الأعمال',
    description:
      'نظام موحّد يدير المبيعات، المخزون، المحاسبة والمالية من لوحة تحكم واحدة. تقارير مالية دقيقة وتكامل جاهز مع أنظمتك الحالية لخفض الأخطاء وتسريع العمليات.',
    icon: Database,
    tech: ['نُسخة خفيفة (ERP Lite)', 'نُسخة متقدمة', 'تقارير مالية متعددة'],
  },
  {
    title: 'نظام إدارة الموارد البشرية',
    description:
      'لوحة شاملة لإدارة الموظفين: الحضور، الرواتب، الإجازات، وسجلات الأداء مع تقارير قابلة للتصدير ودعم قوانين الرواتب المحلية.',
    icon: Server,
    tech: ['سجلات الموظفين', 'الحضور والانصراف', 'حساب الرواتب'],
  },
  {
    title: 'الفاتورة الإلكترونية (متوافق مع المصلحة)',
    description:
      'إصدار وإدارة الفواتير الإلكترونية متوافق مع مصلحة الضرائب المصرية، مع توقيع رقمي وأرشفة آمنة لتبسيط المحاسبة والامتثال.',
    icon: Globe,
    tech: ['تكامل ضريبي', 'توقيع رقمي', 'أرشفة وتقارير فورية'],
  },
  {
    title: 'نظام نقاط البيع (POS) سريع ومرن',
    description:
      'واجهة كاشير سريعة تدير عمليات البيع والدفع وتزامن المخزون لحظيًا. مناسب للمحلات والمتاجر مع تقارير مبيعات مفصلة.',
    icon: ShoppingCart,
    tech: ['نقاط بيع (POS)', 'مزامنة المخزون', 'تقارير مبيعات فورية'],
  },
  {
    title: 'تطوير برمجيات حسب الطلب',
    description:
      'بناء تطبيقات ويب، موبايل أو مكتبية مخصّصة لعملياتك، مع تسليم مرحلي، اختبارات قبول عملاء وضمان جودة برمجية.',
    icon: Code2,
    tech: ['تطبيقات ويب', 'تطبيقات موبايل', 'حلول مكتبية'],
  },
  {
    title: 'حلول سحابية مُدارة',
    description:
      'نقل وتشغيل تطبيقاتك على سحابات موثوقة مع إعداد بنية قابلة للتوسع، نسخ احتياطي وإستراتيجيات استعادة الطوارئ.',
    icon: Cloud,
    tech: ['استضافة سحابية', 'تكامل الأنظمة', 'نسخ احتياطي واستعادة'],
  },
  {
    title: 'الأمن السيبراني وإدارة المخاطر',
    description:
      'حماية متكاملة: فحوصات ثغرات دورية، اختبار اختراق، وتشفير البيانات لضمان استمرارية العمل وامتثال المعايير.',
    icon: Shield,
    tech: ['تدقيق أمني', 'اختبار اختراق', 'تشفير وامتثال'],
  },
];


export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-black">
      <CurvedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">خدماتنا</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            في CSS نقدم حلولاً تقنية متكاملة تدعم نمو أعمالك وتواكب أحدث التطورات الرقمية.
          </p>
        </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <AnimatedServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
