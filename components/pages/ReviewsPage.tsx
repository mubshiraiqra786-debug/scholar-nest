"use client";


import React from 'react';
import { Star, BadgeCheck } from 'lucide-react';

interface Review {
  initials: string;
  name: string;
  major: string;
  category: string;
  text: string;
  date: string;
  rating: number;
  color: string;
}

const reviews: Review[] = [
  {
    initials: 'AM',
    name: 'A.M.',
    major: 'Economics Major',
    category: 'VERIFIED PROCESS SUPPORT',
    text: '"The research outlines provided were comprehensive and helped me structure my senior thesis according to rigorous university standards. The depth of the bibliography was particularly impressive."',
    date: 'March 12, 2024',
    rating: 5,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    initials: 'JS',
    name: 'J.S.',
    major: 'History Department',
    category: 'VERIFIED GUIDANCE',
    text: '"Meticulous attention to citation styles. The guidance on Chicago Manual of Style formatting was invaluable for my capstone project. They truly understand academic rigor."',
    date: 'Feb 28, 2024',
    rating: 5,
    color: 'bg-amber-100 text-amber-600'
  },
  {
    initials: 'LK',
    name: 'L.K.',
    major: 'Biology Research',
    category: 'CITATION SUPPORT',
    text: '"Timely delivery and exceptional depth in the preliminary literature review phase. A very professional and grounded experience that saved me hours of administrative sourcing."',
    date: 'March 05, 2024',
    rating: 4,
    color: 'bg-orange-50 text-orange-500'
  },
  {
    initials: 'RD',
    name: 'R.D.',
    major: 'Sociology Student',
    category: 'INTEGRITY FIRST',
    text: '"I appreciated the focus on academic integrity. The process-driven support helped me refine my own arguments effectively rather than just giving me answers."',
    date: 'April 01, 2024',
    rating: 5,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    initials: 'PW',
    name: 'P.W.',
    major: 'Computer Science',
    category: 'TECHNICAL OUTLINE',
    text: '"The technical guidance was precise and strictly followed my course rubric. Highly recommended for structured study help in complex algorithmic research."',
    date: 'Feb 15, 2024',
    rating: 5,
    color: 'bg-orange-50 text-orange-500'
  },
  {
    initials: 'SB',
    name: 'S.B.',
    major: 'Literature Studies',
    category: 'LIT REVIEW SUPPORT',
    text: '"Exceptional literature review support, providing a deep dive into peer-reviewed sources I hadn\'t yet considered. Their library science background really shows."',
    date: 'Jan 20, 2024',
    rating: 4,
    color: 'bg-amber-100 text-amber-600'
  },
  {
    initials: 'MT',
    name: 'M.T.',
    major: 'Political Science',
    category: 'RUBRIC ANALYSIS',
    text: '"Helpful feedback on my research methodology. The service is professional, reliable, and maintains high academic standards without cutting corners."',
    date: 'March 25, 2024',
    rating: 5,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    initials: 'KV',
    name: 'K.V.',
    major: 'Psychology Research',
    category: 'DATA GUIDANCE',
    text: '"Great focus on the research process. It helped me feel much more confident in my methodology section through better structural organization and data synthesis."',
    date: 'April 05, 2024',
    rating: 5,
    color: 'bg-orange-50 text-orange-500'
  },
  {
    initials: 'HG',
    name: 'H.G.',
    major: 'Engineering Student',
    category: 'STRUCTURAL REVIEW',
    text: '"Exceptional adherence to my specific departmental guidelines. The quality of research guidance was truly top-tier and aligned with professional engineering standards."',
    date: 'April 02, 2024',
    rating: 5,
    color: 'bg-amber-100 text-amber-600'
  }
];

const Reviews: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Student Success Stories</h1>
          <p className="text-slate-500 max-w-4xl text-sm leading-relaxed">
            Real feedback from university students on research guidance, citation accuracy, and process excellence. 
            We focus on academic growth and institutional integrity.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="border border-gray-100 bg-[#F8F7F5] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${review.color}`}>
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{review.name}</h3>
                    <p className="text-[10px] text-slate-400 uppercase font-medium tracking-wide">{review.major}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={12} 
                      className={i < review.rating ? "fill-orange-400 text-orange-400" : "text-gray-200"} 
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-1.5 mb-4">
                <BadgeCheck className="text-orange-500 w-3.5 h-3.5" />
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">{review.category}</span>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed italic mb-6 flex-grow">
                {review.text}
              </p>

              <div className="text-[10px] text-slate-400 font-medium">
                {review.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
