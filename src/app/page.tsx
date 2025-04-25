"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  HiChatAlt2,
  HiPlay,
  HiOutlineUserGroup,
  HiOutlineClipboardCheck,
  HiOutlineChatAlt2,
  HiOutlineAcademicCap,
  HiOutlineMicrophone,
} from "react-icons/hi";
import { HiRocketLaunch } from "react-icons/hi2";
import { FiTarget } from "react-icons/fi";
import { PiEyesFill } from "react-icons/pi";
import { motion } from "framer-motion";
import Navbar from "@/components/homeComponent/navbar";
import Footer from "@/components/homeComponent/footer";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex flex-col items-center text-center w-full sm:max-w-xs px-4 hover:scale-105 transition-transform duration-300"
  >
    <div className="mb-4">{icon}</div>
    <h5 className="font-bold text-lg">{title}</h5>
    <p className="text-gray-700 mt-2 text-sm">{desc}</p>
  </motion.div>
);

interface StepCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, desc }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex flex-col items-center bg-white shadow-md rounded-xl p-5 transition-all hover:shadow-xl hover:scale-105"
  >
    <div className="text-indigo-600 text-5xl bg-indigo-100 p-4 rounded-full mb-4 shadow-inner">
      {icon}
    </div>
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-gray-700 text-sm mt-2">{desc}</p>
  </motion.div>
);

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <div className="bg-indigo-50 py-20 mt-20 px-6 md:px-12">
        <section className="container mx-auto flex flex-col items-center gap-12 animate-fade-in">
          <div className="text-center w-full space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
              Get Career-Ready with a <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Personalized AI Mentor
              </span>
            </h1>

            <p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto">
              Interactive. Tailored learning paths and real-time coaching to
              help you grow in your dream career faster and smarter.
            </p>

            <div className="flex justify-center items-center gap-3.5 flex-wrap">
              <Link href="/auth/register">
                <Button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform">
                  <HiRocketLaunch className="mr-2" /> Get Started
                </Button>
              </Link>

              <a href="#demo">
                <Button
                  variant="outline"
                  className="border-2 border-indigo-500 text-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-100 transition"
                >
                  <HiPlay className="mr-2" /> Watch Demo
                </Button>
              </a>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl mt-8 md:mt-10 p-5 shadow text-center max-w-lg mx-auto">
              <i className="text-gray-800 text-base md:text-lg">
                <HiChatAlt2 className="inline-block text-indigo-600 mr-1" />
                &quot;It&apos;s like having a career coach in your pocket —
                24/7.&quot;
              </i>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-4/5 lg:w-3/5 xl:w-1/2 rounded-lg"
          >
            <Image
              src="/hero_pic_2.png"
              alt="AI Mentor Illustration"
              width={500}
              height={500}
              className="w-full max-w-md md:max-w-lg h-auto rounded-4xl"
              priority
            />
          </motion.div>
        </section>
      </div>

      {/* Features */}
      <section id="features" className="container mx-auto w-full px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why settle for generic advice?
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <FeatureCard
            icon={
              <FiTarget className="text-indigo-600 text-5xl bg-indigo-100 rounded-full p-3" />
            }
            title="Tailored Roadmaps"
            desc="Custom learning plans for frontend, backend, design, and more."
          />
          <FeatureCard
            icon={
              <HiRocketLaunch className="text-indigo-600 text-5xl bg-indigo-100 rounded-full p-3" />
            }
            title="Career Acceleration"
            desc="Faster career growth with AI-powered mentorship."
          />
          <FeatureCard
            icon={
              <HiChatAlt2 className="text-indigo-600 text-5xl bg-indigo-100 rounded-full p-3" />
            }
            title="24/7 Support"
            desc="Get instant, AI-powered guidance anytime you need it."
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto bg-gradient-to-b from-indigo-50 via-indigo-100 to-white px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <StepCard
            icon={<HiOutlineUserGroup />}
            title="Pick Your Career Path"
            desc="Frontend, Backend, Product Design, etc."
          />
          <StepCard
            icon={<HiOutlineClipboardCheck />}
            title="Set Your Goals"
            desc="Job-ready in 6 months"
          />
          <StepCard
            icon={<HiOutlineChatAlt2 />}
            title="Meet Your Mentor"
            desc="AI-driven. Human-like. Super helpful."
          />
          <StepCard
            icon={<HiOutlineAcademicCap />}
            title="Start Learning"
            desc="Explore roadmap & track progress"
          />
          <StepCard
            icon={<HiOutlineMicrophone />}
            title="Get Coached"
            desc="Real-time chat & voice responses"
          />
        </div>
      </section>

      {/* Mentor Demo */}
      <section id="demo" className="container mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl font-bold flex items-center justify-center gap-2">
          See Mentor AI in Action <PiEyesFill className="text-indigo-600" />
        </h3>
        <p className="text-gray-700 mt-3 max-w-xl mx-auto">
          Watch how it builds a custom plan and answers tough questions like a
          real coach.
        </p>

        <div className="mt-8 w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg mx-auto">
          <iframe
            src="https://www.youtube.com/embed/zl6DrYBsPp4"
            title="Mentor AI Demo"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-100 py-20 px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              quote:
                "Mentor AI helped me land my first dev job in just 5 months!",
              name: "Fatima A.",
              role: "Frontend Developer",
            },
            {
              quote:
                "It feels like I have a personal career coach available 24/7.",
              name: "David I.",
              role: "Backend Engineer",
            },
            {
              quote:
                "Super intuitive. I now have a clear roadmap and daily guidance.",
              name: "Anita K.",
              role: "Product Designer",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-white/30"
            >
              <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
              <div className="font-semibold text-indigo-700">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Start for Free
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-md bg-white/60 backdrop-blur-lg border-4 border-transparent rounded-xl p-6 text-center shadow-xl"
          style={{
            borderImage: "linear-gradient(to right, #6366f1, #3b82f6) 1",
          }}
        >
          <p className="text-3xl font-bold text-indigo-600">Free</p>
          <p className="text-gray-600 mt-2 mb-6">For serious career growth</p>
          <ul className="text-sm text-gray-800 space-y-2 mb-6">
            <li>✔️ AI-powered Roadmap</li>
            <li>✔️ Real-time AI Chat Mentor</li>
            <li>✔️ 1-on-1 Mock Interviews</li>
            <li>✔️ Personalized Feedback</li>
            <li>✔️ Career Support</li>
          </ul>
          <Link href="/auth/register">
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition">
              Get Started
            </button>
          </Link>
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-indigo-100 py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              q: "What is Mentor AI?",
              a: "Mentor AI is an intelligent agent designed for career guidance with knowledge in any career and personalized learning paths.",
            },
            {
              q: "What makes Mentor AI different?",
              a: "Mentor AI adapts to your goals and pace, giving you a customized roadmap, live coaching, and real-time guidance.",
            },
            {
              q: "Do I need prior experience?",
              a: "No, Mentor AI adapts to your current skill level and creates a customized learning journey.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-lg mb-2">{item.q}</h4>
              <p className="text-sm text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          <HiRocketLaunch className="inline-block mr-2" />
          Your career journey starts now.
        </h2>
        <p className="mt-2">
          Join thousands growing their careers with the power of AI.
        </p>
        <Link href="/auth/register">
          <Button className="mt-8 bg-white text-indigo-600 hover:text-white hover:bg-indigo-700 transition">
            Get Started Free
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
