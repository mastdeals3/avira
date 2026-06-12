'use client';

import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import type { Product } from '@/src/data/products';
import { getProductName } from '@/src/data/products';
import { getDisplayDescription } from '@/components/products/productContent';
import { getCategoryLabel, getEnquiryMessage } from '@/components/products/displayLabels';
import { CategoryIcon } from '@/components/ui/CategoryIcon';

type Props = { products: Product[] };

const categoryConfig: Record<string, { gradient: string; badgeClass: string; iconColor: string }> = {
  'API':                { gradient: 'from-[#1A365C] to-[#2A5A94]', badgeClass: 'bg-[#EAF4FB] text-[#1A365C] border-blue-200', iconColor: 'text-white' },
  'Excipient':          { gradient: 'from-[#1B4332] to-[#2D6A4F]', badgeClass: 'bg-[#EEF8EA] text-[#1B4332] border-green-200', iconColor: 'text-white' },
  'Herbal Extract':     { gradient: 'from-[#14532D] to-[#166534]', badgeClass: 'bg-[#DCFCE7] text-[#14532D] border-green-300', iconColor: 'text-white' },
  'Nutraceutical':      { gradient: 'from-[#1E3A5F] to-[#1B4F7A]', badgeClass: 'bg-[#DBEAFE] text-[#1E3A5F] border-blue-200', iconColor: 'text-white' },
  'Cosmetic Ingredient':{ gradient: 'from-[#4A1942] to-[#6B2D6B]', badgeClass: 'bg-[#FAE8FF] text-[#4A1942] border-purple-200', iconColor: 'text-white' },
  'Refined Oil':        { gradient: 'from-[#78350F] to-[#92400E]', badgeClass: 'bg-[#FEF3C7] text-[#78350F] border-amber-200', iconColor: 'text-white' },
  'Probiotic':          { gradient: 'from-[#134E4A] to-[#115E59]', badgeClass: 'bg-[#CCFBF1] text-[#134E4A] border-teal-200', iconColor: 'text-white' },
};

export default function FeaturedProducts({ products }: Props) {
  const { t, lang } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-[#F4F7FA]">
      <div className="container-main">
        <div className="flex items-end justify-between mb-12 gap-4">
          <div>
            <p className="section-label">{lang === 'id' ? 'Katalog' : 'Catalog'}</p>
            <div className="section-divider" />
            <h2 className="section-title">{t('featured_title')}</h2>
            <p className="section-subtitle mt-3">{t('featured_sub')}</p>
          </div>
          <Link href="/products" className="hidden md:inline-flex items-center gap-1.5 text-brand-navy/60 hover:text-brand-navy text-sm font-semibold transition-colors flex-shrink-0 group">
            {t('view_all')} <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
          {products.map((product) => {
            const name = getProductName(product, lang);
            const description = getDisplayDescription(product, lang);
            const config = categoryConfig[product.category] || categoryConfig['API'];
            const waMessage = getEnquiryMessage(name, lang);
            return (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-2xl hover:shadow-[0_12px_40px_rgba(12,35,64,0.14)] hover:border-gray-300 transition-all duration-300 flex-shrink-0 w-[260px] flex flex-col snap-start overflow-hidden"
              >
                {/* Icon header */}
                <div className={`relative h-32 bg-gradient-to-br ${config.gradient} flex items-center justify-center overflow-hidden`}>
                  {/* Dot grid overlay */}
                  <div className="absolute inset-0 opacity-[0.07]"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '14px 14px' }} />
                  {/* Category icon */}
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <CategoryIcon category={product.category} size={48} className={config.iconColor} />
                  </div>
                  {/* Origin badge bottom-right */}
                  {product.origin && (
                    <div className="absolute bottom-2.5 right-3 flex items-center gap-1 bg-white/15 backdrop-blur-sm rounded-full px-2 py-0.5">
                      <MapPin size={9} className="text-white/80" />
                      <span className="text-[10px] text-white/90 font-medium">{product.origin}</span>
                    </div>
                  )}
                  {/* Category badge bottom-left */}
                  <div className="absolute bottom-2.5 left-3">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${config.badgeClass}`}>
                      {getCategoryLabel(product.category, lang)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-brand-navy text-[13.5px] leading-snug mb-0.5">{name}</h3>
                  {product.inn && <p className="text-[11.5px] text-gray-400 italic mb-2">{product.inn}</p>}
                  <p className="text-[12px] text-gray-500 leading-relaxed flex-1 line-clamp-2">{description}</p>
                </div>

                <div className="px-4 pb-4 flex gap-2 border-t border-gray-100 pt-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 text-center border border-gray-200 text-gray-600 hover:border-brand-navy hover:text-brand-navy text-[12px] font-semibold py-2 px-2 rounded-lg transition-colors duration-200"
                  >
                    {t('view_details')}
                  </Link>
                  <a
                    href={`https://wa.me/6285888600999?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-brand-navy hover:bg-brand-blue text-white text-[12px] font-semibold py-2 px-2 rounded-lg transition-colors duration-200"
                  >
                    {t('enquire')}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center md:hidden">
          <Link href="/products" className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue text-white text-sm font-semibold px-7 py-3 rounded-lg transition-colors shadow-sm">
            {t('view_all')} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
