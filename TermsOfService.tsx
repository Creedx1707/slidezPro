import { Layout } from '../components/Layout';
import { MessageSquare, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <Layout>
      <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Terms of Service</h1>
            <p className="text-slate-500 mb-10">Last Updated: January 2026</p>
            
            <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
              <p className="text-lg">By accessing or using our website, you agree to the following terms:</p>
              
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Use of Services</h2>
                <p>Our website provides digital products (such as projects, presentations, or files). These are for personal and educational use only.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Intellectual Property</h2>
                <p>All content, including files, designs, and materials, is owned by us. You may not:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Resell, redistribute, or share files</li>
                  <li>Claim our work as your own</li>
                  <li>Use content for commercial resale</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payments & Pricing</h2>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>All prices are listed in Dollars</li>
                  <li>Payments must be completed before product delivery</li>
                  <li>We reserve the right to change pricing at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Refund Policy</h2>
                <p>Due to the nature of digital products:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>All sales are final</li>
                  <li>No refunds will be issued once the file is delivered (Exceptions may apply in case of technical issues)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Delivery</h2>
                <p>Products are delivered digitally via download link or email after successful payment.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. User Responsibility</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Use our services for illegal purposes</li>
                  <li>Attempt to hack, copy, or misuse our platform</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
                <p>We are not responsible for:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Any misuse of our products</li>
                  <li>Academic or professional consequences</li>
                  <li>Technical issues beyond our control</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Account & Communication</h2>
                <p>You are responsible for providing accurate information (email, etc.) for delivery.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Termination</h2>
                <p>We reserve the right to block access to users who violate these terms.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to Terms</h2>
                <p>We may update these terms at any time. Continued use of the site means you accept the updated terms.</p>
              </section>

              <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact</h2>
                <p className="mb-6">For any questions, contact us at:</p>
                <a 
                  href="https://forms.gle/ND9bvf5N3FFuXo1q8" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                >
                  <MessageSquare className="w-5 h-5" /> Contact Form
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
