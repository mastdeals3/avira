'use client';

import Link from 'next/link';
import { Atom, TestTube as TestTube2, Sprout, Pill, Microscope, Droplets, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const categories = [
  {
    icon: Atom,
    labelKey: 'cat_api' as const,
    descKey: 'cat_api_desc' as const,
    href: '/products?category=API',
    bg: 'bg-brand-navy/5',
    iconColor: 'text-brand-navy',
    hoverBorder: 'hover:border-brand-navy/25',
    dot: 'bg-brand-navy',
    image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
  },
  {
    icon: TestTube2,
    labelKey: 'cat_excipients' as const,
    descKey: 'cat_excipients_desc' as const,
    href: '/products?category=Excipient',
    bg: 'bg-brand-blue/6',
    iconColor: 'text-brand-blue',
    hoverBorder: 'hover:border-brand-blue/30',
    dot: 'bg-brand-blue',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
  },
  {
    icon: Sprout,
    labelKey: 'cat_herbal' as const,
    descKey: 'cat_herbal_desc' as const,
    href: '/products?category=Herbal+Extract',
    bg: 'bg-brand-green/6',
    iconColor: 'text-brand-green-dark',
    hoverBorder: 'hover:border-brand-green/30',
    dot: 'bg-brand-green',
    image: 'https://images.pexels.com/photos/4004168/pexels-photo-4004168.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
  },
  {
    icon: Pill,
    labelKey: 'cat_nutra' as const,
    descKey: 'cat_nutra_desc' as const,
    href: '/products?category=Nutraceutical',
    bg: 'bg-brand-navy/5',
    iconColor: 'text-brand-navy',
    hoverBorder: 'hover:border-brand-navy/25',
    dot: 'bg-brand-navy',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
  },
  {
    icon: Microscope,
    labelKey: 'cat_probiotic' as const,
    descKey: 'cat_probiotic_desc' as const,
    href: '/products?category=Probiotic',
    bg: 'bg-brand-blue/6',
    iconColor: 'text-brand-blue',
    hoverBorder: 'hover:border-brand-blue/30',
    dot: 'bg-brand-blue',
    image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
  },
  {
    icon: Droplets,
    labelKey: 'cat_oils' as const,
    descKey: 'cat_oils_desc' as const,
    href: '/products?category=Refined+Oil',
    bg: 'bg-brand-green/6',
    iconColor: 'text-brand-green-dark',
    hoverBorder: 'hover:border-brand-green/30',
    dot: 'bg-brand-green',
    image: 'https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
  },
];

export default function CategoriesSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-14 lg:py-18 bg-white">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <p className="section-label">{lang === 'id' ? 'Rangkaian Produk' : 'Product Range'}</p>
            <div className="section-divider" />
            <h2 className="section-title">{t('categories_title')}</h2>
            <p className="section-subtitle">{t('categories_sub')}</p>
          </div>
          <Link href="/products" className="hidden sm:inline-flex items-center gap-1.5 text-brand-navy/70 hover:text-brand-navy text-sm font-semibold transition-colors flex-shrink-0">
            {lang === 'id' ? 'Lihat Semua' : 'View All'}
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(({ icon: Icon, labelKey, descKey, href, bg, iconColor, hoverBorder, dot, image }) => (
            <Link
              key={labelKey}
              href={href}
              className={`group bg-white border border-gray-200 ${hoverBorder} rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:shadow-[0_8px_32px_rgba(12,35,64,0.12)]`}
            >
              <div className="relative h-28 overflow-hidden">
                <img
                  src={image}
                  alt={t(labelKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className={`absolute top-3 left-3 w-8 h-8 rounded-lg ${bg} backdrop-blur-sm bg-white/80 flex items-center justify-center`}>
                  <Icon size={16} className={iconColor} strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className={`w-4 h-0.5 ${dot} rounded-full mb-2 opacity-60`} />
                <h3 className="font-semibold text-brand-navy text-[12.5px] mb-1 leading-snug">{t(labelKey)}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2 flex-1">{t(descKey)}</p>
                <div className="flex items-center gap-1 mt-2.5">
                  <span className="text-[10.5px] text-brand-navy/50 font-medium group-hover:text-brand-navy transition-colors">
                    {lang === 'id' ? 'Lihat produk' : 'View products'}
                  </span>
                  <ArrowRight size={10} className="text-gray-300 group-hover:text-brand-navy group-hover:translate-x-0.5 transition-all duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
