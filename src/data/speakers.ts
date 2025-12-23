import type { SpeakerInfo } from "@/types/speaker";
import agu from "@/assets/picone.jpg";
import mike from "@/assets/pictwo.jpg";
import eze from "@/assets/picthree.jpg";

export const speakers: SpeakerInfo[] = [
  {
    name: "Agu",
    role: "AI Researcher",
    bio: "Exploring the future of artificial intelligence and ethics.",
    image: agu,
  },
  {
    name: "Mike",
    role: "CTO at TechCorp",
    bio: "Building scalable cloud infrastructure for global apps.",
    image: mike,
  },
  {
    name: "Eze",
    role: "UX Designer",
    bio: "Designing user-centered experiences for startups.",
    image: eze,
  },
];
