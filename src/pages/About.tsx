import { Mail, User, Users, Link } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#493B2A] text-white overflow-hidden flex flex-col p-8 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* About Me Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <User className="w-6 h-6" />
            <h2 className="text-2xl font-bold">About Me</h2>
          </div>
          <p className="text-gray-200">
            I am a creative professional specializing in video production and visual storytelling. My work focuses on creating compelling narratives through dynamic visual content.
          </p>
        </section>

        {/* Client References Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Client References</h2>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Link className="w-4 h-4" />
              <span>Major Brand Studio</span>
            </li>
            <li className="flex items-center gap-2">
              <Link className="w-4 h-4" />
              <span>Creative Agency Network</span>
            </li>
            <li className="flex items-center gap-2">
              <Link className="w-4 h-4" />
              <span>Global Media Company</span>
            </li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Mail className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Contact</h2>
          </div>
          <div className="space-y-2">
            <p className="text-gray-200">Email: contact@example.com</p>
            <p className="text-gray-200">Location: New York, NY</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;