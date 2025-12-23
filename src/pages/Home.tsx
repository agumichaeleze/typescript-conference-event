import Hero from "@/components/Hero";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Home (){
    return(
        <section className="py-20">
            <Hero />

              {/* Welcome Section */}
           <div className="container mx-auto px-4 pt-20 text-center overflow-hidden">
                {/* Heading */}
                <motion.h2
                    className="text-3xl md:text-5xl font-extrabold mb-6"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Welcome to <span className="text-accent">Conf2025</span>!
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-lg md:text-2xl max-w-2xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Join the brightest minds in tech for a week of{" "}
                    <span className="font-semibold">knowledge</span>,{" "}
                    <span className="font-semibold">networking</span>, and{" "}
                    <span className="font-semibold">innovation</span>.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <Link
                    to="/register"
                    className="
                        bg-accent px-6 py-3 rounded-lg font-semibold
                        inline-flex items-center gap-2
                        hover:opacity-90 transition
                    "
                    >
                    Register Now <ArrowRight />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}