'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { ApiIcon, ExcipientIcon, HerbalIcon, NutraceuticalIcon, ProbioticIcon, RefinedOilIcon } from '@/components/ui/CategoryIcon';

const categories = [
  {
    Icon: ApiIcon,
    labelKey: 'cat_api' as const,
    descKey: 'cat_api_desc' as const,
    href: '/products?category=API',
    gradient: 'from-[#1A365C] to-[#2A5A94]',
    accent: '#2A7BB5',
    accentLight: '#EAF4FB',
    tagColor: 'text-[#2A7BB5]',
    tagBg: 'bg-[#EAF4FB]',
  },
  {
    Icon: ExcipientIcon,
    labelKey: 'cat_excipients' as const,
    descKey: 'cat_excipients_desc' as const,
    href: '/products?category=Excipient',
    gradient: 'from-[#1B4332] to-[#2D6A4F]',
    accent: '#5BB041',
    accentLight: '#EEF8EA',
    tagColor: 'text-[#4A9634]',
    tagBg: 'bg-[#EEF8EA]',
  },
  {
    Icon: HerbalIcon,
    labelKey: 'cat_herbal' as const,
    descKey: 'cat_herbal_desc' as const,
    href: '/products?category=Herbal+Extract',
    gradient: 'from-[#14532D] to-[#166534]',
    accent: '#5BB041',
    accentLight: '#DCFCE7',
    tagColor: 'text-[#166534]',
    tagBg: 'bg-[#DCFCE7]',
  },
  {
    Icon: NutraceuticalIcon,
    labelKey: 'cat_nutra' as const,
    descKey: 'cat_nutra_desc' as const,
    href: '/products?category=Nutraceutical',
    gradient: 'from-[#1E3A5F] to-[#1B4F7A]',
    accent: '#2A7BB5',
    accentLight: '#EAF4FB',
    tagColor: 'text-[#1B4F7A]',
    tagBg: 'bg-[#DBEAFE]',
  },
  {
    Icon: ProbioticIcon,
    labelKey: 'cat_probiotic' as const,
    descKey: 'cat_probiotic_desc' as const,
    href: '/products?category=Probiotic',
    gradient: 'from-[#134E4A] to-[#115E59]',
    accent: '#0D9488',
    accentLight: '#CCFBF1',
    tagColor: 'text-[#0F766E]',
    tagBg: 'bg-[#CCFBF1]',
  },
  {
    Icon: RefinedOilIcon,
    labelKey: 'cat_oils' as const,
    descKey: 'cat_oils_desc' as const,
    href: '/products?category=Refined+Oil',
    gradient: 'from-[#78350F] to-[#92400E]',
    accent: '#D97706',
    accentLight: '#FEF3C7',
    tagColor: 'text-[#92400E]',
    tagBg: 'bg-[#FEF3C7]',
  },
];

export default function CategoriesSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <p className="section-label">{lang === 'id' ? 'Rangkaian Produk' : 'Product Range'}</p>
            <div className="section-divider" />
            <h2 className="section-title">{t('categories_title')}</h2>
            <p className="section-subtitle mt-3">{t('categories_sub')}</p>
          </div>
          <Link href="/products" className="hidden sm:inline-flex items-center gap-1.5 text-brand-navy/60 hover:text-brand-navy text-sm font-semibold transition-colors flex-shrink-0 group">
            {lang === 'id' ? 'Lihat Semua Produk' : 'Browse All Products'}
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ Icon, labelKey, descKey, href, gradient, tagColor, tagBg }, idx) => (
            <Link
              key={labelKey}
              href={href}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-transparent hover:shadow-[0_16px_48px_rgba(12,35,64,0.15)] transition-all duration-300 flex"
            >
              {/* Left accent strip with gradient + icon */}
              <div className={`relative w-28 flex-shrink-0 bg-gradient-to-b ${gradient} flex flex-col items-center justify-center p-5 gap-3`}>
                {/* Subtle grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.06]"
                  style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <Icon size={44} className="text-white drop-shadow-sm" />
                  <span className="text-white/30 text-[10px] font-bold tracking-widest">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Right content */}
              <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
                <div>
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${tagColor} ${tagBg}`}>
                    {t(labelKey)}
                  </span>
                  <p className="text-[13px] text-gray-600 leading-relaxed line-clamp-3">
                    {t(descKey)}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-gray-100">
                  <span className="text-[11.5px] font-semibold text-brand-navy/50 group-hover:text-brand-navy transition-colors duration-200">
                    {lang === 'id' ? 'Lihat produk' : 'View products'}
                  </span>
                  <ArrowRight size={11} className="text-gray-300 group-hover:text-brand-navy group-hover:translate-x-0.5 transition-all duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link href="/products" className="inline-flex items-center gap-2 bg-brand-navy text-white text-sm font-semibold px-7 py-3 rounded-lg transition-colors shadow-sm hover:bg-brand-blue">
            {lang === 'id' ? 'Lihat Semua Produk' : 'Browse All Products'}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
