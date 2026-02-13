
import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  FileSearch, 
  Users, 
  ClipboardCheck,
  Quote
} from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-35">
        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Our Mission &<br />Intellectual Legacy
            </h1>
            <p className="text-gray-600 text-md leading-relaxed mb-6 font-medium">
              Established to bridge the gap between rigorous academic expectations and student achievement, our mission is to provide US university students with scholarly support that upholds the highest institutional standards.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              We believe that true academic assistance goes beyond immediate results. Our approach is rooted in the pedagogical traditions of top-tier American institutions, fostering a culture of integrity, critical inquiry, and long-term intellectual growth for every scholar we mentor.
            </p>
            <div className="flex gap-6 text-[15px] font-bold text-orange-600 uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-3 h-3" /> Institutional Compliance
              </span>
              <span className="flex items-center gap-2">
                <Target className="w-3 h-3" /> Academic Excellence
              </span>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800" 
              alt="Library Interior" 
              className="rounded-2xl shadow-2xl object-cover h-[450px] w-full"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-100 rounded-full -z-10 opacity-50"></div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-gray-500 text-md max-w-[1070px] mx-auto">
              Rooted in the principles of US higher education, we operate with a commitment to ethical excellence and institutional transparency.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ValueCard 
              icon={<ShieldCheck className="text-orange-500 w-5 h-5" />}
              title="Integrity"
              description="Strict adherence to ethical assistance and original thought. We prioritize the honor codes of US universities in every consultation."
            />
            <ValueCard 
              icon={<Target className="text-orange-500 w-5 h-5" />}
              title="Quality"
              description="Multi-tier review processes for all academic outputs. Our standards mirror those of top-tier academic journals and publications."
            />
            <ValueCard 
              icon={<Eye className="text-orange-500 w-5 h-5" />}
              title="Transparency"
              description="Clear communication and honest expectations in every interaction. We believe in providing realistic academic guidance."
            />
          </div>
        </section>

        {/* Quality Control Process Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Quality Control Process</h2>
            <div className="space-y-8">
              <ProcessStep 
                icon={<FileSearch className="text-white w-4 h-4" />}
                title="Initial Scholarly Review"
                description="Rigorous verification of all academic sources and foundational logic."
              />
              <ProcessStep 
                icon={<Users className="text-white w-4 h-4" />}
                title="Peer Verification"
                description="Secondary blind review by subject matter experts within the relevant field."
              />
              <ProcessStep 
                icon={<ClipboardCheck className="text-white w-4 h-4" />}
                title="Compliance & Standards Check"
                description="Final validation against specific US university honor codes and formatting standards."
              />
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" 
              alt="Student Working" 
              className="rounded-3xl shadow-xl h-[450px] w-full object-cover"
            />
          </div>
        </section>

        {/* Quote Section */}
        <section className="text-center py-12 w-full bg-[#F8F7F5] rounded-3xl border-gray-100">
          <Quote className="w-8 h-8 text-orange-200 mx-auto mb-1" />
          <p className="text-xl italic text-slate-700 max-w-2xl mx-auto mb-1 leading-relaxed">
            {'"Our goal is not merely to provide answers, but to facilitate a deeper understanding of academic discourse while respecting the institutional frameworks that define US higher education."'}
          </p>
          <p className="text-[13px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            Academic Standards Council
          </p>
        </section>
      </div>
    </div>
  );
};

const ValueCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-md font-bold text-slate-900 mb-3 uppercase tracking-wide">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const ProcessStep: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="flex gap-4">
    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0 mt-1">
      {icon}
    </div>
    <div>
      <h4 className="text-md font-bold text-slate-900 mb-1">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default AboutUs;
