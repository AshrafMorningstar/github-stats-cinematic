/**
 * Created by AshrafMorningstar
 * https://github.com/AshrafMorningstar
 */
import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { HolographicOverlay } from "./components/HolographicOverlay";
import { CinematicParticles } from "./components/CinematicParticles";
import { TypeWriter } from "./components/TypeWriter";
import {
  Activity,
  GitCommit,
  GitPullRequest,
  Star,
  Trophy,
  Users,
  Cpu,
  Zap,
  Code,
  Globe,
} from "lucide-react";
import "./style.css";

// Mock data integration or fetch from props
const defaultStats = {
  totalContributions: 8540,
  totalStars: 1240,
  repos: 45,
  commits: 3420,
  prs: 560,
  issues: 120,
  streak: 450,
  topLanguage: "TypeScript",
};

export const CinematicGif: React.FC<{ stats?: typeof defaultStats }> = ({
  stats = defaultStats,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const contentScale = spring({
    frame: frame - 10,
    fps,
    from: 0.9,
    to: 1,
    config: { damping: 12 },
  });

  const cards = [
    {
      icon: Activity,
      label: "Contributions",
      value: stats.totalContributions,
      color: "text-pink-500",
      border: "border-pink-500",
    },
    {
      icon: Star,
      label: "Stars Earned",
      value: stats.totalStars,
      color: "text-yellow-500",
      border: "border-yellow-500",
    },
    {
      icon: GitCommit,
      label: "Total Commits",
      value: stats.commits,
      color: "text-blue-500",
      border: "border-blue-500",
    },
    {
      icon: Zap,
      label: "Current Streak",
      value: `${stats.streak} Days`,
      color: "text-orange-500",
      border: "border-orange-500",
    },
    {
      icon: Code,
      label: "Top Language",
      value: stats.topLanguage,
      color: "text-violet-500",
      border: "border-violet-500",
    },
    {
      icon: Trophy,
      label: "Rank",
      value: "Top 1%",
      color: "text-emerald-500",
      border: "border-emerald-500",
    },
  ];

  return (
    <AbsoluteFill className="bg-slate-950 text-white font-sans overflow-hidden">
      {/* 3D Grid & Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />

      {/* Animated Grid Floor */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          transform:
            "perspective(500px) rotateX(60deg) translateY(100px) translateZ(-200px)",
          animation: "gridMove 20s linear infinite",
        }}
      />

      <CinematicParticles />
      <HolographicOverlay />

      <div className="z-20 w-full h-full p-8 flex flex-col justify-center">
        {/* Header */}
        <div
          className="flex items-center gap-6 mb-8"
          style={{ opacity: titleOpacity }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 p-[3px] animate-spin-slow">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">AM</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 rounded-full border-4 border-slate-950" />
          </div>
          <div>
            <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                AshrafMorningstar
              </span>
              <span className="px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/50 text-xs text-violet-300 uppercase tracking-widest font-bold">
                PRO
              </span>
            </h1>
            <div className="flex items-center gap-2 text-slate-400 mt-1">
              <Globe size={16} />
              <TypeWriter
                text="Full Stack Developer & AI Engineer"
                delay={20}
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-3 gap-6"
          style={{ transform: `scale(${contentScale})` }}
        >
          {cards.map((card, i) => {
            const delay = 30 + i * 5;
            const cardOpacity = interpolate(
              frame,
              [delay, delay + 15],
              [0, 1],
              { extrapolateRight: "clamp" }
            );
            const cardY = interpolate(frame, [delay, delay + 15], [20, 0], {
              extrapolateRight: "clamp",
            });

            return (
              <div
                key={i}
                className={`relative group p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 hover:bg-white/10 transition-colors overflow-hidden`}
                style={{
                  opacity: cardOpacity,
                  transform: `translateY(${cardY}px)`,
                }}
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 ${card.color.replace("text-", "bg-")} shadow-[0_0_15px_currentColor] opacity-70`}
                />

                <div className="absolute -right-4 -top-4 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
                  <card.icon size={80} />
                </div>

                <div className="flex items-center gap-4 mb-2">
                  <div className={`p-2 rounded-lg bg-white/5 ${card.color}`}>
                    <card.icon size={24} />
                  </div>
                  <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    {card.label}
                  </span>
                </div>
                <div className="text-3xl font-bold tracking-tight pl-1">
                  {card.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 w-full text-center z-20 opacity-50 text-xs tracking-[0.5em] uppercase text-slate-500">
        GitHub Intelligence System v2.0
      </div>
    </AbsoluteFill>
  );
};
