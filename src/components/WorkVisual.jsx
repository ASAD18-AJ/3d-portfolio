import React from 'react';

const WorkVisual = ({ work }) => (
  <div className="h-full w-full rounded-xl bg-black-100 border border-black-50 flex flex-col justify-center items-center gap-5 p-6 text-center">
    <svg viewBox="0 0 160 100" className="w-40 h-24 text-white-50" aria-hidden="true"><rect x="2" y="2" width="156" height="96" rx="18" fill="#282732" stroke="currentColor"/><text x="80" y="61" fill="currentColor" textAnchor="middle" fontFamily="inherit" fontSize="30">{work.mark}</text></svg>
    <p className="text-white-50 font-semibold">{work.caption}</p>
    <div className="flex flex-wrap justify-center gap-2">{work.tags.map(tag => <span key={tag} className="rounded-full bg-black-200 px-3 py-1 text-sm text-white-50">{tag}</span>)}</div>
    <p className="text-sm text-blue-50">Company work · Product screenshot unavailable</p>
  </div>
);
export default WorkVisual;
