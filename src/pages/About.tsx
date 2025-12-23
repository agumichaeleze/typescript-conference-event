import { useState, useEffect } from "react";
import { Users, MapPin, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function About() {
  // December 5, 2026 — 00:00 UTC
  const eventDate = new Date(Date.UTC(2026, 11, 5, 0, 0, 0));

  function getTimeLeft(): TimeLeft {
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const eventStarted =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="container py-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
        About <span className="text-accent">Conf2026</span>
      </h2>

      <p className="text-lg md:text-xl leading-relaxed mb-12 text-center text-muted">
        Conf2026 is a global tech event bringing together innovators, developers,
        and leaders from around the world.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[ 
          { Icon: Users, title: "Community", text: "Connect with professionals worldwide." },
          { Icon: Target, title: "Our Mission", text: "Empowering the future of tech." },
          { Icon: MapPin, title: "Venue", text: "Grand Convention Center, Lagos." },
        ].map(({ Icon, title, text }) => (
          <div
            key={title}
            className="bg-base shadow-md rounded-xl p-6 text-center
                       hover:shadow-xl hover:scale-105 transition"
          >
            <Icon className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-muted">{text}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary text-primary-foreground rounded-2xl py-12 px-6 text-center">
        <h3 className="text-3xl md:text-5xl font-semibold mb-4">Don’t Miss Out!</h3>
        <p className="mb-6 text-lg md:text-2xl font-semibold">Date: 5th Dec 2026</p>

        {!eventStarted ? (
          <p className="mb-6 text-xl font-mono">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        ) : (
          <p className="mb-6 text-xl font-bold">🎉 The event has started!</p>
        )}

        <Link
          to="/register"
          className="bg-accent text-accent-foreground
                     px-6 py-3 rounded-lg font-semibold
                     inline-flex items-center gap-2 hover:scale-105 transition"
        >
          Register Now <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default About;
