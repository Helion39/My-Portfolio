import React from "react";
import { Skill } from "@/types";
import { FaReact, FaJava, FaPhp, FaDatabase, FaAndroid, FaGitAlt } from "react-icons/fa";
import { SiFirebase, SiWireshark } from "react-icons/si";

export const skills: Skill[] = [
  { name: "React", icon: <FaReact className="text-[#4b5563]" /> },
  { name: "Java", icon: <FaJava className="text-[#4b5563]" /> },
  { name: "PHP", icon: <FaPhp className="text-[#4b5563]" /> },
  { name: "MySQL", icon: <FaDatabase className="text-[#4b5563]" /> },
  { name: "Android Studio", icon: <FaAndroid className="text-[#4b5563]" /> },
  { name: "Wireshark", icon: <SiWireshark className="text-[#4b5563]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#4b5563]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#4b5563]" /> }
];