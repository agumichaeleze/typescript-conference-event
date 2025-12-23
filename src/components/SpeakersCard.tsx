import type { SpeakerInfo } from "@/types/speaker";

interface SpeakersCardProps {
  speaker: SpeakerInfo;
}

export function SpeakersCard({ speaker }: SpeakersCardProps) {
  return (
    <div className="p-6 rounded-xl shadow bg-base text-center hover:shadow-lg transition">
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="font-semibold text-lg">{speaker.name}</h3>
      <p className="text-muted">{speaker.role}</p>
      <p className="text-sm text-muted">{speaker.bio}</p>
    </div>
  );
}
