'use client';

import { useState } from 'react';
import {
  ClipboardList,
  Clock,
  UploadCloud,
  ShieldCheck,
  Headphones,
  Timer,
  Lock,
} from 'lucide-react';

export default function OrderNowPage() {
  const [academicLevel, setAcademicLevel] = useState('Undergraduate');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [assignmentType, setAssignmentType] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [fileError, setFileError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const [successMessage, setSuccessMessage] = useState('');

  // Handle File
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;

    setFileError('');

    if (!file) {
      setSelectedFile(null);
      return;
    }

    const maxSize = 20 * 1024 * 1024;

    if (file.size > maxSize) {
      setFileError('File size must be 20MB or less.');
      setSelectedFile(null);
      e.target.value = '';
      return;
    }

    setSelectedFile(file);
  }

  // Handle Submit
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (selectedFile && selectedFile.size > 20 * 1024 * 1024) {
      setFileError('File size must be 20MB or less.');
      return;
    }

    setLoading(true);
    setFileError('');
    setSuccessMessage('');

    try {
      // ✅ SINGLE FORM DATA
      const formData = new FormData();

      formData.append('full_name', fullName);
      formData.append('email', email);
      formData.append('academic_level', academicLevel);
      formData.append('subject', subject);
      formData.append('assignment_type', assignmentType);
      formData.append('word_count', wordCount);
      formData.append('deadline', deadline);

      // IMPORTANT
      formData.append('instructions', description);

      // File
      if (selectedFile) {
        formData.append('file', selectedFile);
      }

      // ✅ ONLY ONE API CALL
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'Failed to submit order');
        return;
      }

      setSuccessMessage('Your order has been submitted successfully. We will contact you shortly.');

      // Reset Form
      setFullName('');
      setEmail('');
      setSubject('');
      setAssignmentType('');
      setWordCount('');
      setDeadline('');
      setDescription('');
      setSelectedFile(null);
      setAcademicLevel('Undergraduate');
      setFileError('');

      const fileInput = document.getElementById(
      'fileUpload'
      ) as HTMLInputElement;

      if (fileInput) {
      fileInput.value = '';
      }

    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] py-35 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
            Calculate Your Project Estimate
          </h1>

          <p className="text-gray-500 text-sm">
            Professional assistance with institutional trust and academic integrity.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 space-y-10">

            <section className="space-y-6">

              {/* Project Details */}
              <div className="flex items-center gap-2 text-[#f97316]">
                <ClipboardList className="w-6 h-6 text-orange-400" />
                <h2 className="font-bold text-slate-800 text-md">
                  Project Details
                </h2>
              </div>

              {/* Academic Level */}
              <div className="space-y-4">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Academic Level
                </label>

                <div className="grid grid-cols-2 gap-2 rounded-xl bg-slate-50 p-2 border border-slate-100">

                  <button
                    type="button"
                    onClick={() => setAcademicLevel('Undergraduate')}
                    className={`py-2 rounded-lg text-sm font-bold transition-all ${
                      academicLevel === 'Undergraduate'
                        ? 'bg-white text-black shadow-sm ring-1 ring-orange-100'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Undergraduate
                  </button>

                  <button
                    type="button"
                    onClick={() => setAcademicLevel('Graduate')}
                    className={`py-2 rounded-lg text-sm font-bold transition-all ${
                      academicLevel === 'Graduate'
                        ? 'bg-orange-50 text-orange-600 shadow-sm ring-1 ring-orange-100'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Graduate
                  </button>

                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full border border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Email
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full border border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
                  />
                </div>

              </div>

              {/* Subject & Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Subject
                  </label>

                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter subject"
                    required
                    className="w-full border border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Assignment Type
                  </label>

                  <input
                    type="text"
                    value={assignmentType}
                    onChange={(e) => setAssignmentType(e.target.value)}
                    placeholder="Enter assignment type"
                    required
                    className="w-full border border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
                  />
                </div>

              </div>

              {/* Volume & Deadline */}
              <div className="flex items-center py-1 gap-2 text-[#f97316]">
                <Clock className="w-5 h-5 text-orange-400" />
                <h2 className="font-bold text-slate-800 text-sm">
                  Volume & Deadline
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Word Count
                  </label>

                  <input
                    type="number"
                    value={wordCount}
                    onChange={(e) => setWordCount(e.target.value)}
                    placeholder="Enter word count"
                    required
                    className="w-full border border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Deadline
                  </label>

                  <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 text-sm text-slate-600 focus:ring-2 focus:ring-orange-100 outline-none"
                  />
                </div>

              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Project Description
                </label>

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Write instructions for your project"
                  className="w-full border border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-orange-100 focus:border-orange-500 outline-none min-h-[120px]"
                />
              </div>

              {/* File Upload */}
              <div className="flex items-center gap-2 text-[#f97316]">
                <div className="w-5 h-5 bg-[#f97316] rounded flex items-center justify-center">
                  <UploadCloud className="w-3.5 h-3.5 text-white" />
                </div>

                <h2 className="font-bold text-slate-800 text-sm">
                  Project Resources
                </h2>
              </div>

              <input
                type="file"
                id="fileUpload"
                key={selectedFile ? selectedFile.name : 'empty'}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
              />

              <label
                htmlFor="fileUpload"
                className="w-full border border-gray-200 rounded-xl py-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-orange-400 transition"
              >
                <p className="text-sm font-medium text-gray-700">
                  Click to upload or drag and drop
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  Syllabus, rubrics, or instructions (PDF, DOCX, up to 20MB)
                </p>
              </label>

              <p className="text-sm text-gray-500 mt-1">
                Maximum file size: 20MB
              </p>

              {selectedFile && (
                <p className="text-sm text-green-600 mt-1">
                  Selected file: {selectedFile.name}
                </p>
              )}

              {fileError && (
                <p className="text-sm text-red-600 mt-1">
                  {fileError}
                </p>
              )}

            </section>

            {/* Success Message */}
            {successMessage && (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm font-medium">
            {successMessage}
            </div>
             )}

            {/* Submit Button */}
            <div className="pt-4 text-center">
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#f97316] text-white py-4 rounded-xl text-sm font-bold shadow-lg hover:shadow-orange-200 hover:bg-orange-600 transition-all"
              >
                {loading ? 'Processing...' : 'Calculate Estimate & Proceed'}
              </button>
            </div>

          </form>

          {/* Footer */}
          <div className="bg-[#fcfcfc] border-t border-gray-50 px-8 py-6 flex flex-wrap justify-center items-center gap-6">

            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                100% Secure
              </span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                Turnitin-Safe
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Headphones className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                24/7 Support
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Timer className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                On-Time or Free
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}