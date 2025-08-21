

import React from 'react';
import { NEWS_ARTICLES } from '../constants';
import type { NewsArticle } from '../types';

const ArticleCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <div className="bg-white/5 rounded-md overflow-hidden flex flex-col group border border-white/10 h-full tilt-card">
    <div className="overflow-hidden">
        <img className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" src={article.imageUrl} alt={article.title} />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-sm text-brand-accent-500 mb-2 font-semibold uppercase tracking-wider font-body">{article.date}</p>
      <h3 className="text-xl font-bold font-display text-brand-heading mb-3 flex-grow group-hover:text-brand-action transition-colors">{article.title}</h3>
      <p className="text-brand-gray text-base mb-6 font-body">{article.excerpt}</p>
      <a href="#" className="font-semibold text-brand-action hover:text-brand-action-600 self-start mt-auto font-body transition-colors">
        Beitrag lesen &rarr;
      </a>
    </div>
  </div>
);

const NewsSection: React.FC = () => {
  return (
    <section className="bg-brand-primary py-20 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
            <h4 className="font-bold text-brand-accent-500 uppercase tracking-widest font-body mb-2">Aktuelles</h4>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-heading font-display mt-2 mb-4">Neues aus dem Arbeitsrecht</h2>
            <p className="text-brand-gray max-w-3xl mx-auto text-lg font-body">
                Wir halten Sie auf dem Laufenden über wichtige Urteile, Gesetzesänderungen und praxisrelevante Themen.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;