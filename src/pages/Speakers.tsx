import { speakers } from "@/data/speakers";
import { SpeakersCard } from "@/components/SpeakersCard";

export function Speakers () {
    return (
        <section className="container py-20">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                Meet Our Speakers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {speakers.map((speaker, index) => (
                    <SpeakersCard key={index} speaker= {speaker}/>
                ))}
            </div>
        </section>
    );
}



