import { getTranslations } from 'next-intl/server';
import { getPersonalInfo } from '@/services/profileService';

export default async function PersonalInfo() {
  const [t, data] = await Promise.all([
    getTranslations('Home.personalInfo'),
    getPersonalInfo(),
  ]);

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 px-6 py-6">
      <h3 className="text-lg font-semibold text-white">{t('title')}</h3>
      <p className="mt-2 text-sm text-slate-300">{t('description')}</p>
      <dl className="mt-6 space-y-3 text-sm text-slate-200">
        <div className="flex items-center justify-between">
          <dt className="text-slate-400">{t('fields.name')}</dt>
          <dd className="font-medium text-white">{data.name}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-slate-400">{t('fields.role')}</dt>
          <dd className="font-medium text-white">{data.role}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-slate-400">{t('fields.country')}</dt>
          <dd className="font-medium text-white">{data.country}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-slate-400">{t('fields.experience')}</dt>
          <dd className="font-medium text-white">
            {data.yearsOfExperience} {t('years')}
          </dd>
        </div>
      </dl>
    </section>
  );
}
