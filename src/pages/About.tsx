import { Mail, User, Link, Instagram } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#a47864] text-black overflow-hidden flex flex-col p-8 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* About Me Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <User className="w-6 h-6 text-black" />
            <h2 className="text-2xl font-bold">About Me</h2>
          </div>
          <p className="text-black">
            I am a creative professional specializing in video production and visual storytelling. My work focuses on creating compelling narratives through dynamic visual content.
          </p>
        </section>

        {/* Contact Information */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Mail className="w-6 h-6 text-black" />
            <h2 className="text-2xl font-bold">Contact</h2>
          </div>
          <div className="space-y-2">
            <p className="text-black">Email: karl@inde.se</p>
            <p className="text-black">Location: Stockholm, Sweden</p>
            <div className="flex items-center gap-2 mt-4">
              <Instagram className="w-4 h-4 text-black" />
              <a 
                href="https://instagram.com/bakgator" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black hover:underline"
              >
                @bakgator
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;