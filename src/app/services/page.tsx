'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Code2, Cloud, Laptop, Brush, ChartBar, Shield, Server, Lightbulb, ArrowRight, ChevronLeft, ChevronRight, Database, ShoppingCart, Globe } from 'lucide-react';
import ServiceAccordion from '@/components/ui/ServiceAccordion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'منصة لوحة تحكم الوكلاء العاجلة',
    category: 'إدارة النظم',
    images: [
      '/case-studies/testing.jpg',
      '/case-studies/testing.jpg'
    ]
  },
  {
    id: 2,
    title: 'نظام إدارة مستشفيات لايف لاين',
    category: 'مشروع ترحيل سحابي',
    images: [
      '/case-studies/testing.jpg',
      '/case-studies/testing.jpg',
      '/case-studies/testing.jpg',
      '/case-studies/testing.jpg'
    ]
  },
  {
    id: 3,
    title: 'موقع CSS',
    category: 'تطوير الويب',
    images: [
      '/case-studies/testing.jpg',
      '/case-studies/testing.jpg',
      '/case-studies/testing.jpg',
      '/case-studies/testing.jpg'
    ]
  }
];

const services = [
  {
    id: 'focus-erp',
    icon: Database,
    title: 'Focus ERP — نظام إدارة متكامل',
    description:
      'نظام Focus ERP هو حل ذكي ومتكامل لتخطيط موارد المؤسسات، صُمم خصيصًا لتلبية احتياجات الشركات من مختلف الأحجام والقطاعات. يوفر النظام إدارة كاملة ومرنة لجميع أقسام العمل مثل المبيعات، المشتريات، الحسابات، المخازن، الإنتاج، والموارد البشرية – كل ذلك في منصة واحدة مترابطة وسهلة الاستخدام. بفضل دعمه لتعدد الفروع والعملات والتقارير الذكية، يضمن Focus ERP تحسين الكفاءة التشغيلية، تقليل الأخطاء، واتخاذ قرارات أسرع وأكثر دقة بناءً على بيانات واقعية.',
    features: [
      // 1. Sales & Procurement
      'تحكم شامل في دورة البيع والشراء من البداية للنهاية.',
      'إدارة العملاء والمندوبين وعروض الأسعار والفواتير.',
      'متابعة أوامر التوريد والتسليم وربطها بالمخزون والإنتاج.',
      'إدارة الموردين وطلبات الشراء وأوامر الشراء سواء محلية أو استيرادية.',
      'تقارير تحليلية لمتابعة المبيعات والمشتريات والمديونيات.',
      // 2. Accounting & Cost Control
      'نظام محاسبي متكامل وتحليل مالي دقيق.',
      'دليل حسابات ومراكز تكلفة شجري غير محدود.',
      'قيود محاسبية تلقائية من كل العمليات.',
      'إدارة إيصالات الدفع والتحصيل والشيكات.',
      'إعداد الميزانيات، قائمة الدخل، والتدفقات النقدية بسهولة.',
      // 3. Inventory & Manufacturing
      'تحكم كامل في المخزون وسير العمليات الإنتاجية.',
      'إنشاء عدد لا محدود من المخازن وتعريف المنتجات بوحدات متنوعة.',
      'تسويات وجرد المخزون وربطه بالحسابات.',
      'أوامر تشغيل لإنتاج المنتجات، تتبع الخامات والهدر.',
      'تخطيط الإنتاج وربطه بالطلبات ومراقبة التكاليف.',
      // 4. HR & Payroll
      'نظام مرن لإدارة الموظفين والحضور والمرتبات.',
      'احتساب تلقائي للمرتبات والضرائب والتأمينات.',
      'دعم أجهزة البصمة وتنظيم الورديات.',
      'تسجيل الحوافز، الخصومات، والإجازات.',
      'تقارير مفصلة للرواتب والحضور والانصراف.',
      // 5. Attendance automation
      'ربط مباشر مع أجهزة البصمة لتنظيم الحضور والانصراف بدقة.',
      'متابعة الحضور اليومي للموظفين.',
      'احتساب التأخيرات والانصراف المبكر تلقائيًا.',
      'دعم الورديات وتخصيصها حسب كل قسم أو موظف.',
      // 6. Payroll & Rewards
      'نظام مرن لحساب المرتبات، الاستحقاقات، والخصومات.',
      'دعم مرتبات أساسية وإضافية.',
      'احتساب المرتب شهريًا أو يوميًا.',
      'إدخال المكافآت والجزاءات يدوياً أو تلقائياً.',
      // 7. Employee Reports
      'إمكانية استخراج تقارير شاملة ودقيقة.',
      'تقرير مفصل لمرتبات الموظفين شهريًا.',
      'تقارير الحضور والانصراف حسب الإدارات.',
      'إشعارات مرتبات فردية أو جماعية.',
      // 8. Legal compliance
      'التزام كامل بقوانين العمل والضرائب والتأمينات.',
      'احتساب الضريبة على كسب العمل بدقة.',
      'احتساب حصة الشركة والعامل في التأمينات الاجتماعية.',
      'دعم السياسات الضريبية المختلفة داخل النظام.'
    ],
    color: 'from-blue-600/20 to-cyan-400/20',
    ctaLabel: 'تحميل دليل Focus ERP',
    ctaHref: '/downloads/focus-erp-features.pdf'
  },
  {
    id: 'hr-system',
    icon: Server,
    title: 'نظام إدارة الموارد البشرية',
    description:
      'برنامج الموارد البشرية هو نظام شامل لإدارة شؤون الموظفين داخل المؤسسة بكفاءة عالية. يتيح تعريف جميع بنود الاستحقاقات والاستقطاعات مع تحديد سياسات الحوافز، الضرائب، والتأمينات. يدعم النظام تسجيل الحضور والانصراف وربطه بأجهزة البصمة، إضافة إلى إدارة الإجازات، القروض، والسلف بدقة. يمكن تخصيص السياسات لكل موظف، وإنشاء إدارات وفروع مختلفة بصلاحيات مرنة. كما يوفر تقارير تفصيلية ومتابعة مستمرة لكل ما يتعلق بالموارد البشرية في بيئة عمل منظمة وآمنة.',
    features: [
      // أهم المميزات والوظائف
      'إضافة وتعريف بنود الاستحقاقات والاستقطاعات مع تحديد طريقة احتسابها.',
      'جدول مرن لقوانين العمل والضرائب والتأمينات يمكن تعديله.',
      'احتساب الحوافز بناءً على الحضور، التقييم، الجزاءات، والتأخيرات.',
      'تسجيل المكافآت، الخصومات، القروض، والسلف بدقة وسهولة.',
      'إدارة الإجازات والمتغيرات الشهرية وتسجيل قرارات الترقية أو الإحالة للمعاش.',
      // إدارة الوقت والحضور
      'ربط مباشر مع أجهزة البصمة بمختلف أنواعها.',
      'استخراج الحضور اليومي تلقائيًا.',
      'وضع سياسات خاصة بالتأخير، الغياب، والإضافي والانصراف المبكر.',
      'مرونة في هيكلة الورديات وتوقيتات العمل.',
      // الصلاحيات والتقسيم الإداري
      'إمكانية إنشاء إدارات وفروع وربطها معًا.',
      'دعم تعدد المستخدمين مع تحديد صلاحيات دقيقة لكل مستخدم.',
      'إنشاء سياسات ضريبية ومالية مستقلة لكل موظف أو قسم.',
      'دعم تعدد العملات داخل النظام.'
    ],
    color: 'from-emerald-600/20 to-teal-400/20',
    ctaLabel: 'تحميل دليل نظام الموارد البشرية',
    ctaHref: '/downloads/hr-system-features.pdf'
  },
  {
    id: 'erplite',
    icon: Cloud,
    title: 'ERPLite — ERP خفيف للشركات الصغيرة',
    description:
      'ERP Lite هو نظام تخطيط موارد المؤسسات مصمم خصيصًا لتلبية احتياجات الشركات الصغيرة والمتوسطة بطريقة مرنة وخفيفة. يوفّر النظام أدوات متكاملة لإدارة المبيعات، المخازن، المشتريات، الحسابات، والعملاء في واجهة سهلة الاستخدام. يتميز بسرعة التنفيذ، وانخفاض التكلفة مقارنة بأنظمة ERP التقليدية. يدعم ERP Lite التكامل بين الأقسام المختلفة، مما يعزز كفاءة العمليات ويقلل من الأخطاء. كما يتيح تقارير تحليلية ذكية تساعد في اتخاذ قرارات دقيقة ومدروسة.',
    features: [
      'إنشاء فواتير متعددة الأنواع (نقدية، آجلة، مردودات).',
      'تحديد حدود ائتمانية وأسعار بيع بحدود دنيا وعليا.',
      'تنبيهات ذكية عند تجاوز الكميات أو الأسعار.',
      'إدارة تحصيل المدفوعات وربطها بالفواتير.',
      'ربط أوامر الشراء بالفواتير والشيكات والمدفوعات.',
      'متابعة مواعيد استحقاق الفواتير ومردودات الشراء.',
      'تكامل كامل مع الحسابات لضمان شفافية العمليات.',
      'إمكانية إنشاء عدد غير محدود من المخازن.',
      'تحويل البضائع بين المخازن وتتبع الكميات.',
      'جرد وتسويات دقيقة، مع دعم تواريخ الإنتاج والانتهاء.',
      'التعامل مع المخازن كنقطة بيع مباشرة.',
      'ترحيل تلقائي لجميع الحركات (بيع، شراء، مرتبات...).',
      'مراجعة سريعة وإغلاق آمن للسنة المالية.',
      'تقارير ذكية قابلة للتخصيص حسب احتياجات الشركة.',
      'نظام صلاحيات دقيق وتعدد المستخدمين.',
      'دعم النسخ الاحتياطي الدوري واسترجاع البيانات.',
      'واجهات احترافية سهلة الاستخدام.',
      'التوافق مع أجهزة الباركود وأنظمة الحضور والانصراف.',
      'ربط فروع الشركة تلقائيًا بغض النظر عن الموقع الجغرافي.'
    ],
    color: 'from-purple-600/20 to-pink-400/20',
    ctaLabel: 'تحميل دليل ERPLite',
    ctaHref: '/downloads/erplite-features.pdf'
  },
  {
    id: 'e-invoicing',
    icon: Globe,
    title: 'الفاتورة الإلكترونية والتقارير الضريبية',
    description:
      'برنامج الفاتورة الإلكترونية هو حل ذكي ومتكامل لإدارة الفواتير والمستندات التجارية بكل سهولة واحترافية. يتيح لك تسجيل الفواتير، تكويد الأصناف، وإدارة بيانات العملاء وفقًا لمعايير مصلحة الضرائب المصرية. يدعم النظام التوقيع الإلكتروني المعتمد، مع إمكانية إرسال الفواتير مباشرة إلى بوابة الضرائب للتحقق والاعتماد. كما يتيح استيراد وتصدير البيانات من خلال ملفات Excel لتسهيل عملية الدمج مع أي نظام محاسبي آخر.',
    features: [
      // Integration with tax authority
      'تسجيل الفواتير الإلكترونية بأنواعها (مبيعات، خصم، إضافة).',
      'التوافق التام مع المعايير الرسمية.',
      'دعم التوقيع الإلكتروني المعتمد.',
      'إرسال ومراجعة الفواتير واعتمادها عبر المنظومة.',
      // Customers & items
      'تسجيل بيانات العملاء: الاسم، النشاط، العنوان، الاتصال.',
      'تكويد الأصناف وفق EGS أو GS1.',
      'إدارة الأصناف والوحدات بكود الضرائب دون تغيير الباركود.',
      // Import/Export
      'استيراد/تصدير الفواتير والعملاء عبر ملفات Excel.',
      'تسهيل رفع البيانات ومزامنتها مع المنظومة.',
      'إمكانية الربط مع أنظمة ERP أخرى.',
      // Support & setup
      'تدريب متكامل على استخدام النظام.',
      'إعدادات الربط مع الـ API والمصادقة.',
      'مرونة التخصيص حسب احتياجات النشاط التجاري.',
      // e-signature
      'التكامل مع التوقيع الإلكتروني المعتمد.',
      'التأكد من صحة ومطابقة الفاتورة.',
      'اعتماد الفواتير بعد التحقق من قبل مصلحة الضرائب.',
      // Usability
      'واجهة بسيطة وسهلة التعامل.',
      'اختيار وإرسال فواتير فردية أو متعددة.',
      'مراجعة الفاتورة قبل الإرسال بسهولة.'
    ],
    color: 'from-red-600/20 to-rose-400/20',
    ctaLabel: 'تفعيل الفاتورة الإلكترونية',
    ctaHref: '/contact?service=e-invoicing'
  }
];

// JSON-LD structured data for the main products
const jsonLd = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Focus ERP',
    'description': 'Powerful, fully-integrated ERP covering sales, inventory, manufacturing, accounting and HR.',
    'brand': 'CSS',
    'url': 'https://yourdomain/services#focus-erp'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'ERPLite',
    'description': 'Lightweight ERP for SMEs focused on quick deployment and essential modules.',
    'brand': 'CSS',
    'url': 'https://yourdomain/services#erplite'
  }
]);

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
    >
      <div className="relative h-56 md:h-64 overflow-hidden bg-black">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            fill
            className="w-full h-full object-cover"
            priority={false}
          />
        </motion.div>
        
        {/* Navigation Buttons */}
        {project.images.length > 1 && (
          <>
            <motion.button
              onClick={prevImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              onClick={nextImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </>
        )}

        {/* Image Counter */}
        {project.images.length > 1 && (
          <motion.div
            key={`counter-${currentImageIndex}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-2 right-2 bg-black/60 px-3 py-1 rounded-full text-sm text-white"
          >
            {currentImageIndex + 1} / {project.images.length}
          </motion.div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-4 sm:p-6">
        <p className="text-primary text-sm font-semibold mb-2">{project.category}</p>
        <h3 className="text-lg sm:text-xl font-semibold text-white">{project.title}</h3>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const router = useRouter();
  return (
  <main className="flex flex-col min-h-screen overflow-x-hidden text-white">
  {/* JSON-LD for products */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* Hero Section */}
  <section className="py-12 md:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-40" />
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">خدماتنا</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                حلول تقنية شاملة مُصممة لتحويل عملك.
                من الفكرة إلى التنفيذ، نقدم التميز في كل خطوة.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
  <section className="py-8 sm:py-12 md:py-24 bg-black">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`bg-gradient-to-br ${service.color} p-1 rounded-2xl`}>
                  <ServiceAccordion
                    title={service.title}
                    description={service.description}
                    items={service.features}
                    icon={service.icon}
                    ctaLabel={service.ctaLabel}
                    ctaHref={service.ctaHref}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
  <section className="py-12 md:py-24 bg-black relative overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl sm:max-w-2xl md:max-w-4xl mx-auto text-center"
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">هل أنت مستعد لتحويل عملك؟</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-8">
              دعنا نناقش كيف يمكن لخدماتنا أن تساعدك في تحقيق أهدافك.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                noHover
                variant="white"
                onClick={() => router.push('/contact?scroll=form')}
                className="px-8 py-6 rounded-xl text-lg font-medium"
              >
                احجز استشارة <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Showcase Section - Placeholder for future content */}
  <section className="py-12 md:py-24 bg-black">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">بعض مشاريعنا</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl sm:max-w-2xl mx-auto">
              اكتشف كيف ساعدنا الشركات على تحقيق أهدافها من خلال حلول تقنية مبتكرة.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}