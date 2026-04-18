import { Layout } from '../components/Layout';
import { MessageSquare, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
            <p className="text-slate-500 mb-10">Last Updated: January 2026</p>
            
            <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
              <p className="text-lg">Welcome to our website. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.</p>
              
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                <p>We may collect the following information:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Name and email address (when you contact us or make a purchase)</li>
                  <li>Payment details (processed securely via third-party providers)</li>
                  <li>Usage data (such as pages visited, browser type, and IP address)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Process orders and deliver digital products</li>
                  <li>Communicate with you regarding your purchase or inquiry</li>
                  <li>Improve our website and services</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Processing</h2>
                <p>All payments are handled by trusted third-party payment gateways (such as Razorpay, PayPal, or Instamojo). We do not store your card or banking details.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Sharing</h2>
                <p>We do not sell or rent your personal data. We may share information only:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>With payment providers for transaction processing</li>
                  <li>If required by law or legal authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
                <p>We take reasonable measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
                <p>We may use cookies to improve user experience and analyze website traffic.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights</h2>
                <p>You may request to access, update, or delete your personal information by contacting us.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Third-Party Links</h2>
                <p>Our website may contain links to external sites. We are not responsible for their privacy practices.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to Policy</h2>
                <p>We may update this policy at any time. Changes will be posted on this page.</p>
              </section>

              <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Us</h2>
                <p className="mb-6">If you have any questions, contact us at:</p>
                <a 
                  href="https://forms.gle/EtsmPJ3MgC9teQiX8" 
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
