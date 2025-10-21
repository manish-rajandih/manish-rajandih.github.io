import { Mail, Phone, Linkedin, Github, Briefcase, GraduationCap, Award, Code } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Manish Kumar</h1>
            <div className="flex gap-6">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition">About</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 transition">Experience</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 transition">Skills</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Data Scientist</h2>
            <h3 className="text-3xl text-slate-600 mb-6">Building Intelligent Solutions</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Senior Data Scientist with over 5 years of experience specializing in delivering high-impact business intelligence solutions. Proficient in MLOps, Machine Learning, Computer Vision, and Generative AI with a proven track record of solving complex business problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:manishrajandih@gmail.com" className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition">
                <Mail size={20} />
                Email Me
              </a>
              <a href="https://linkedin.com/in/mmm84766" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-slate-800 text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/6325663606787652950.jpg" alt="Manish Kumar" className="rounded-2xl shadow-2xl w-80 h-80 object-cover" />
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <Briefcase className="text-slate-600" />
            Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-slate-800 pl-6 py-2">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Senior Data Scientist</h3>
                  <p className="text-lg text-slate-600">HDFC Life Insurance Company Limited</p>
                </div>
                <span className="text-slate-500">Jun 2022 – Present</span>
              </div>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mt-4">
                <li>Built deep learning authentication systems achieving 95% accuracy in fraud detection</li>
                <li>Led MedTech initiatives for facial video analysis, improving patient monitoring efficiency by 30%</li>
                <li>Automated customer document processing and email query resolution, reducing manual effort by 40%</li>
                <li>Fine-tuned LLaMA 3 for multilingual video transcription achieving 90% accuracy</li>
                <li>Reduced inference times by 25% and improved system throughput by 35%</li>
              </ul>
            </div>

            <div className="border-l-4 border-slate-600 pl-6 py-2">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Machine Learning Engineer</h3>
                  <p className="text-lg text-slate-600">Throw No More AS</p>
                </div>
                <span className="text-slate-500">Aug 2020 – May 2022</span>
              </div>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mt-4">
                <li>Developed predictive models achieving 90% precision in demand forecasting</li>
                <li>Built ML pipelines integrating weather APIs and event databases for real-time predictions</li>
                <li>Reduced food waste by 35% through data-driven insights</li>
                <li>Implemented MLOps practices using MLflow and GitHub Actions for CI/CD</li>
              </ul>
            </div>

            <div className="border-l-4 border-slate-400 pl-6 py-2">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">AI Engineer</h3>
                  <p className="text-lg text-slate-600">Freelance</p>
                </div>
                <span className="text-slate-500">Jun 2019 – Jul 2020</span>
              </div>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mt-4">
                <li>Built AI/ML solutions for early-stage startups across HealthTech, AgriTech, and Logistics</li>
                <li>Delivered production-ready solutions using Docker, MLflow, and GitHub Actions</li>
                <li>Developed document parsing, fraud detection, and recommendation systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <Code className="text-slate-600" />
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-800 mb-4">AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                {['Generative AI', 'LLMs', 'Computer Vision', 'Deep Learning', 'MLOps'].map(skill => (
                  <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face', 'Scikit-learn'].map(skill => (
                  <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'C++', 'C'].map(skill => (
                  <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-800 mb-4">DevOps & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Kubernetes', 'AWS', 'MLflow', 'GitHub Actions'].map(skill => (
                  <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MongoDB', 'ChromaDB'].map(skill => (
                  <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['Flask', 'FastAPI', 'Streamlit', 'Tableau', 'OpenCV'].map(skill => (
                  <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <Award className="text-slate-600" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-slate-200 p-6 rounded-xl hover:border-slate-400 transition">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Generative AI Certified Professional</h3>
              <p className="text-slate-600">Oracle Cloud Infrastructure • 2024</p>
            </div>
            <div className="border-2 border-slate-200 p-6 rounded-xl hover:border-slate-400 transition">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Machine Learning Engineering for Production</h3>
              <p className="text-slate-600">DeepLearning.AI • 2020</p>
            </div>
            <div className="border-2 border-slate-200 p-6 rounded-xl hover:border-slate-400 transition">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Deep Learning Specialization</h3>
              <p className="text-slate-600">DeepLearning.AI • 2019</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-3">
            <GraduationCap className="text-slate-600" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Master of Computer Applications</h3>
              <p className="text-slate-600">Pondicherry University</p>
              <p className="text-slate-500 mt-1">2016 – 2019</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Bachelor of Computer Applications</h3>
              <p className="text-slate-600">Magadh University</p>
              <p className="text-slate-500 mt-1">2013 – 2016</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-8">Interested in collaborating or discussing AI solutions?</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:manishrajandih@gmail.com" className="flex items-center gap-2 bg-white text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-100 transition">
              <Mail size={20} />
              manishrajandih@gmail.com
            </a>
            <a href="tel:+917004927041" className="flex items-center gap-2 bg-white text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-100 transition">
              <Phone size={20} />
              +91-7004927041
            </a>
            <a href="https://linkedin.com/in/mmm84766" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-100 transition">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/mmm84766" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-100 transition">
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-6 text-center">
        <p>© 2024 Manish Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
