import React from "react";
import { FaReact, FaJava, FaPhp, FaDatabase, FaAndroid, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaUsers, FaCamera, FaBluetooth, FaNetworkWired, FaFileAlt, FaSearch, FaShieldAlt, FaCube, FaLightbulb, FaPalette, FaUserFriends } from "react-icons/fa";
import { SiFirebase, SiWireshark, SiFigma, SiMysql, SiGoogleanalytics, SiBlender } from "react-icons/si";
import { MdSecurity, MdAnalytics, MdBrush, MdGroup, MdSettings, MdStorage, MdApi } from "react-icons/md";
import { HiOutlineDocumentText, HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineCamera, HiOutlineWifi } from "react-icons/hi";

export const getIconForTech = (tech: string): JSX.Element => {
  const iconMap: { [key: string]: JSX.Element } = {
    "Figma": <SiFigma className="text-gray-600" />,
    "PHP": <FaPhp className="text-gray-600" />,
    "MySQL": <SiMysql className="text-gray-600" />,
    "JavaScript": <FaJs className="text-gray-600" />,
    "HTML/CSS": <FaHtml5 className="text-gray-600" />,
    "Java": <FaJava className="text-gray-600" />,
    "Android Studio": <FaAndroid className="text-gray-600" />,
    "Firebase": <SiFirebase className="text-gray-600" />,
    "Wireshark": <SiWireshark className="text-gray-600" />,
    "React": <FaReact className="text-gray-600" />,
    "Google Analytics": <SiGoogleanalytics className="text-gray-600" />,
    "User Research": <FaUsers className="text-gray-600" />,
    "Wireframing": <HiOutlineDocumentText className="text-gray-600" />,
    "Prototyping": <MdBrush className="text-gray-600" />,
    "Persona Development": <HiOutlineUserGroup className="text-gray-600" />,
    "AJAX": <MdApi className="text-gray-600" />,
    "Session Management": <MdSettings className="text-gray-600" />,
    "SensorManager": <MdAnalytics className="text-gray-600" />,
    "Camera API": <FaCamera className="text-gray-600" />,
    "Bluetooth API": <FaBluetooth className="text-gray-600" />,
    "Real-time Database": <MdStorage className="text-gray-600" />,
    "Network Miner": <FaNetworkWired className="text-gray-600" />,
    "PCAP Analysis": <MdAnalytics className="text-gray-600" />,
    "File Recovery Tools": <FaFileAlt className="text-gray-600" />,
    "Log Analysis": <FaSearch className="text-gray-600" />,
    "Incident Response": <MdSecurity className="text-gray-600" />,
    "3D Modeling Software": <FaCube className="text-gray-600" />,
    "Animation Tools": <SiBlender className="text-gray-600" />,
    "Lighting Systems": <FaLightbulb className="text-gray-600" />,
    "Texture Mapping": <FaPalette className="text-gray-600" />,
    "Team Collaboration": <FaUserFriends className="text-gray-600" />,
    "Project Management": <MdSettings className="text-gray-600" />,
    "Educational Planning": <HiOutlineDocumentText className="text-gray-600" />,
    "Community Outreach": <FaUsers className="text-gray-600" />,
    "Interactive Learning": <HiOutlineLightBulb className="text-gray-600" />,
    "Environmental Education": <HiOutlineLightBulb className="text-gray-600" />,
    "Marketing Strategy": <MdAnalytics className="text-gray-600" />,
    "Brand Development": <MdBrush className="text-gray-600" />,
    "Digital Marketing": <FaNetworkWired className="text-gray-600" />,
    "Customer Engagement": <FaUsers className="text-gray-600" />,
    "Sales Analytics": <MdAnalytics className="text-gray-600" />,
    "Team Leadership": <FaUserFriends className="text-gray-600" />
  };
  
  return iconMap[tech] || <div className="w-3 h-3 bg-gray-600 rounded-sm"></div>;
};