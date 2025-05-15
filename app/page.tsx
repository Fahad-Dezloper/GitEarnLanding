/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

export default function GitEarnLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const waitlistCount = 250;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyPi7Vb-F6q74rGvSgXGlYz3JjyBWww-hGdJOtOlNiaul5G8P7UjaBB_UX1L6_LPCKTcQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `email=${encodeURIComponent(email)}`,
        }
      );

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError("Failed to join waitlist. Please try again.");
      console.error("Error submitting form:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen mainGrad max-h-screen overflow-hidden text-white">
      <main className="max-w-4xl mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="space-y-8 text-center mb-16">
          <div className="flex w-full items-center justify-center">
          <img src="/GITEARN.svg" alt="GitEarn" className="" />
          </div>
          <p className="text-2xl sm:text-3xl font-light text-gray-300 max-w-2xl mx-auto">
            Get paid for your open-source contributions.
            <span className="block mt-2 text-lg sm:text-xl text-gray-400">No middlemen. No fluff.</span>
          </p>
        </div>

        {/* Beta Access Section */}
        <div className="bg-gray-800/10 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-gray-800/20">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-[#2665C5]/10 text-[#2665C5] text-sm font-medium mb-4">
              Beta Access
            </div>
            <p className="text-lg text-gray-300">
              Limited to <span className="text-[#2665C5] font-semibold">1,000 beta users</span> due to embedded wallet constraints.
              Early users get exclusive access to high-value bounties.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#2665C5] focus:ring-1 focus:ring-[#2665C5] disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-3 rounded-lg bg-[#2665C5] text-white font-medium hover:bg-[#2665C5]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            ) : (
              <div className="bg-[#2665C5]/10 text-[#2665C5] p-4 rounded-lg font-medium">
                You&apos;re on the waitlist! We&apos;ll be in touch soon 🎉
              </div>
            )}
            
            {error && (
              <div className="text-red-400 text-sm mt-2">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gray-800/10 backdrop-blur-sm border border-gray-800/20">
            <div className="flex -space-x-2">
              {["JD", "AS", "MK"].map((initials, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full bg-[#2665C5] flex items-center justify-center text-xs font-bold ring-2 ring-[#0D1117]"
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 font-medium">
              <span className="text-[#2665C5]">{waitlistCount}+</span> people waiting
            </p>
          </div>
        </div>
      </main>

    </div>
  );
}
