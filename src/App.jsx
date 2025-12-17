
import { Music, Calendar, Users, Award, Target, Mail, Phone, Clock } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <span className="text-xl sm:text-2xl tracking-wider">CIRCLEPLAY</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative background-slider h-screen flex items-center justify-center overflow-hidden">

        <div class="bg bg1"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div class="bg bg4"></div>
        <div class="bg bg5"></div>
        {/* <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1672841821756-fc04525771c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpYyUyMGZlc3RpdmFsfGVufDF8fHx8MTc2NTk3MjU3NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Concert crowd"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div> */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
            CIRCLEPLAY<br />ENTERTAINMENT
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-purple-300 italic">
            Music | Events | Live Experiences
          </p>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-300">
            Curated Music & Live Event Experiences
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            <span className="px-4 py-2 bg-purple-600/30 rounded-full">Concerts</span>
            <span className="px-4 py-2 bg-purple-600/30 rounded-full">Club Shows</span>
            <span className="px-4 py-2 bg-purple-600/30 rounded-full">Festivals</span>
            <span className="px-4 py-2 bg-purple-600/30 rounded-full">Artist Management</span>
            <span className="px-4 py-2 bg-purple-600/30 rounded-full">Brand Integrations</span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">Who We Are</h2>
              <p className="text-gray-300 mb-4">
                Circleplay is an independent music and live entertainment company focused on creating curated, high-quality event experiences. We conceptualize, produce, and execute music-led events ranging from intimate club nights to large-scale concerts and festivals.
              </p>
              <p className="text-gray-300 mb-4">
                Our work spans artist curation, event production, audience experience design, and brand collaborations — ensuring every event is creatively strong, operationally sound, and commercially viable.
              </p>
              <p className="text-purple-300">
                We operate at the intersection of <em>music culture, event execution, and community-building</em>, delivering experiences that feel authentic, intentional, and memorable.
              </p>
            </div>
            <div className="relative h-[400px] sm:h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1764510383709-14be6ec28548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHBlcmZvcm1pbmclMjBuaWdodGNsdWJ8ZW58MXx8fHwxNzY1OTg0Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="DJ performing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] sm:h-[500px] rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1675171155224-e70a5eeb27c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBldmVudCUyMHN0YWdlfGVufDF8fHx8MTc2NTk4NDc4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Live music event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">About Circleplay</h2>
              <p className="text-gray-300 mb-6">
                Circleplay was founded with the objective of building a structured, professional platform for music events and live entertainment.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Music className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">Music curation and DJ-led formats</p>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">Live event production and on-ground execution</p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">Artist coordination and show management</p>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">Brand partnerships and sponsorship integrations</p>
                </div>
              </div>
              <p className="text-purple-300 italic">
                We believe that successful events are not just about scale, but about <em>clarity of concept, quality of execution, and audience relevance</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg">Comprehensive event solutions from concept to execution</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all border border-white/10">
              <div className="mb-4">
                <Calendar className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl sm:text-2xl mb-3">Live Events & Concert Production</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>• Conceptualization and planning of music events</li>
                <li>• End-to-end event execution</li>
                <li>• Venue coordination and logistics management</li>
                <li>• Stage, sound, lighting, and technical production</li>
                <li>• Artist hospitality and show-day management</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all border border-white/10">
              <div className="mb-4">
                <Music className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl sm:text-2xl mb-3">Club Nights & Curated DJ Experiences</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>• Curated DJ-led formats</li>
                <li>• Theme-based music nights (Afro, Bollywood, Commercial, Tech, Fusion)</li>
                <li>• Artist programming and line-up curation</li>
                <li>• Crowd profiling and experience design</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all border border-white/10">
              <div className="mb-4">
                <Users className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl sm:text-2xl mb-3">Artist & Talent Management</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>• Artist booking and coordination</li>
                <li>• Performance contracts and show logistics</li>
                <li>• Artist branding and positioning support</li>
                <li>• Long-term association and representation</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all border border-white/10">
              <div className="mb-4">
                <Award className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl sm:text-2xl mb-3">Brand Partnerships & Sponsorships</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>• Sponsorship strategy and integration</li>
                <li>• Brand visibility planning (on-ground & digital)</li>
                <li>• Collaborative event formats</li>
                <li>• Deliverables planning and ROI-focused execution</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all border border-white/10">
              <div className="mb-4">
                <Target className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl sm:text-2xl mb-3">Event Marketing & Promotion</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>• Digital marketing strategy for events</li>
                <li>• Social media campaigns and content planning</li>
                <li>• Influencer and creator collaborations</li>
                <li>• Ticketing strategy and audience outreach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1605286232233-e448650f5914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjU4ODE0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Music festival"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-2xl">Festival Experiences</p>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbGlnaHRzJTIwc3RhZ2V8ZW58MXx8fHwxNzY1OTU3Mjc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Concert lights"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-2xl">Concert Production</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Circleplay Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-12 text-center">Why Circleplay</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl mb-3">Concept-Driven Event Curation</h3>
              <p className="text-gray-400">Every event is thoughtfully designed with a clear creative vision</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl mb-3">Strong Music & Culture Understanding</h3>
              <p className="text-gray-400">Deep roots in music culture and scene dynamics</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl mb-3">Structured Planning and Execution</h3>
              <p className="text-gray-400">Detailed planning with operational discipline</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl mb-3">Transparent Commercials and Operations</h3>
              <p className="text-gray-400">Clear budgeting and transparent stakeholder coordination</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl mb-3">Community-Oriented Approach</h3>
              <p className="text-gray-400">Building authentic connections with audiences</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl mb-3">Long-Term Brand Building Mindset</h3>
              <p className="text-gray-400">Creating sustainable formats that scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl mb-8">Our Approach</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Understanding the Music Concept and Target Audience</h3>
                    <p className="text-gray-400">Deep dive into audience preferences and music culture</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Curating the Right Artists and Format</h3>
                    <p className="text-gray-400">Selecting artists that align with the event vision</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Planning Budgets, Timelines, and Execution Strategy</h3>
                    <p className="text-gray-400">Detailed operational planning and resource allocation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Coordinating Production, Artists, and Partners</h3>
                    <p className="text-gray-400">Seamless coordination across all stakeholders</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">5</div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Delivering a Seamless Live Experience</h3>
                    <p className="text-gray-400">Execution with attention to detail and creative integrity</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] sm:h-[600px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1744313930610-1649242d1fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBwYXJ0eSUyMGNyb3dkfGVufDF8fHx8MTc2NTk3MTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nightclub party"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-12 text-lg">Let's create something extraordinary together</p>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-xl mb-2">Email</h3>
                <p className="text-gray-400">your-email@circleplay.com</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-xl mb-2">Phone</h3>
                <p className="text-gray-400">+91 XXXXX XXXXX</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 text-gray-400">
              <Clock className="w-5 h-5" />
              <p>Monday to Saturday | 11:00 AM – 7:00 PM</p>
            </div>
            <div className="mt-6">
              <p className="text-gray-400">Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl mb-4 text-purple-300">Disclaimer</h3>
          <p className="text-gray-500 text-sm">
            The information provided on this website is for general informational purposes only. Event outcomes, audience response, and commercial performance may vary depending on multiple factors including venue, artist availability, market conditions, and regulatory approvals.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2025 Circleplay Entertainment. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
