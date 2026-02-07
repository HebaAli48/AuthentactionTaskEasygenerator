import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose, onAccept }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Terms and Conditions"
      maxWidth="2xl"
      footer={
        <Button onClick={onAccept} className="w-full">
          Accept Terms
        </Button>
      }
    >
      <div className="space-y-4 text-gray-700">
        <section>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h4>
          <p className="text-sm leading-relaxed">
            By accessing and using EasyGenerator, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Use License</h4>
          <p className="text-sm leading-relaxed">
            Permission is granted to temporarily access the materials (courses, information, or software) on EasyGenerator for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1 ml-4">
            <li>You may not modify or copy the materials</li>
            <li>You may not use the materials for any commercial purpose</li>
            <li>You may not attempt to decompile or reverse engineer any software</li>
            <li>You may not remove any copyright or proprietary notations from the materials</li>
          </ul>
        </section>

        <section>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">3. User Account</h4>
          <p className="text-sm leading-relaxed">
            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Privacy Policy</h4>
          <p className="text-sm leading-relaxed">
            Your use of EasyGenerator is also governed by our Privacy Policy. We collect and use your personal information to provide and improve our services. By using our platform, you consent to our collection and use of personal data as outlined in our Privacy Policy.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">5. Course Content</h4>
          <p className="text-sm leading-relaxed">
            All course materials, including but not limited to videos, text, graphics, and other content, are the property of EasyGenerator or our content providers. Unauthorized reproduction, distribution, or modification of these materials is strictly prohibited.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">6. Payment Terms</h4>
          <p className="text-sm leading-relaxed">
            Premium features and courses may require payment. All fees are non-refundable unless otherwise stated. We reserve the right to change our pricing structure at any time with reasonable notice to existing subscribers.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">7. Limitation of Liability</h4>
          <p className="text-sm leading-relaxed">
            EasyGenerator shall not be liable for any damages arising out of the use or inability to use our services, even if we have been notified of the possibility of such damages. This includes but is not limited to loss of data, loss of profit, or business interruption.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">8. Modifications</h4>
          <p className="text-sm leading-relaxed">
            We reserve the right to revise these terms at any time without notice. By continuing to use EasyGenerator after changes are posted, you agree to be bound by the revised terms.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">9. Governing Law</h4>
          <p className="text-sm leading-relaxed">
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which EasyGenerator operates, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">10. Contact Information</h4>
          <p className="text-sm leading-relaxed">
            If you have any questions about these Terms and Conditions, please contact us at support@easygenerator.com
          </p>
        </section>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Last updated: February 7, 2026
          </p>
        </div>
      </div>
    </Modal>
  );
};
