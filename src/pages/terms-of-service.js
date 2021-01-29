import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';
import SecondaryContent from '../components/secondaryContent';

export default function TermsOfService({ location }) {
  const heroData = {
    heading: 'Terms Of Service',
  };

  return (
    <Layout location={location}>
      <Helmet>
        <title>Terms Of Service - RingSavvy, Inc.</title>
        <meta
          name='description'
          content='Ring Savvy Privacy Policy - All Rights Reserved - Read More Here For Specifications On Conditions and Use - Limitations and Disclaimers'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent maxWidth='780px'>
        <p>
          <strong>
            This Answering Services Agreement (“Agreement”) is by and between
            Ring Savvy, Inc d/b/a Ring Savvy (“Ring Savvy”) and (“Customer”). By
            indicating acceptance in writing, online or making any purchase,
            Customer accepts and agrees to be bound by the terms of this
            Agreement.
          </strong>
        </p>

        <h3>Responsibilities</h3>

        <p>
          (1.1) Secure a phone number (“#”) for Customer and answer customer
          calls (“CC”) following Customer’s script.
        </p>
        <p>
          (1.2) Provide the “Services” described in section 2. Customer will:
        </p>
        <ul>
          <li>
            Provide to Ring Savvy the script(s) and directions Customer would
            like Ring Savvy to follow for CCs.
          </li>
          <li>
            Activate forwarding options when Customer wants calls to be directed
            to Ring Savvy.
          </li>
        </ul>

        <h3>Fees</h3>

        <p>
          (2.1) Ring Savvy will charge Customer’s credit card for carrier
          recovery fund of $21.50. All Fees, once charged, are non-refundable.
        </p>

        <h3>Payments</h3>

        <p>
          (3.1) Customer authorizes Ring Savvy to process payment of Fees using
          the credit card information provided by Customer upon sign-up.
        </p>

        <h3>Confidential Information; Intellectual Property</h3>

        <p>
          (4.1) Each party agrees to treat all information as confidential. Ring
          Savvy will use reasonable efforts to avoid eliciting information from
          Customer’s clients that would be subject to attorney-client privilege,
          except at the explicit direction of Customer.
        </p>

        <h3>Terms</h3>

        <p>
          (5.1) This Agreement shall remain in effect until either party
          provides written notice of termination. 30 day written notice or a
          $100 termination fee is required to terminate service.
        </p>

        <h3>Disclaimer of Warranties; Damages</h3>

        <p>
          (6.1) Customer agrees that Ring Savvy’s services are administrative in
          nature, and Ring Savvy will not provide any legal advice to any client
          of Customer or otherwise take any action which may be construed as the
          practice of law.
        </p>
        <p>
          (6.2) Ring Savvy does not make any warranties regarding Services,
          including, without limitation, warranties(a) of merchantability or
          fitness for a particular purpose, (b) regarding dropped telephone
          calls, response time, errors made or any other results.
        </p>
        <p>
          (6.3) Ring Savvy will not be liable for any special, indirect or
          consequential damages suffered by Customer or any damages resulting
          from missed, misdirected or dropped CCs.
        </p>
        <p>
          (6.4) Ring Savvy’s liability to Customer shall be limited to Fees paid
          for the monthly service.
        </p>

        <h3>Indemnification</h3>

        <p>
          (7.1) Each party will defend and indemnify the other party against any
          and all third party claims arising out of a breach of this Agreement.
        </p>
        <p>(7.2) Customer will also indemnify and defend Ring Savvy against:</p>
        <ul>
          <li>Any use by Customer of the #.</li>
          <li>
            Any malpractice or other claim initiated by any Customer client.
          </li>
          <li>Any violation of applicable law by Customer.</li>
        </ul>

        <h3>Non-Solicitation</h3>

        <p>
          (8.1) Customer hereby agrees that it shall not, for 2 years following
          the Term, hire or engage any of Ring Savvy’s (or any affiliate’s)
          employees or independent contractors or otherwise interfere with Ring
          Savvy’s relationship with any of its employees or independent
          contractors.
        </p>

        <h3>Notice; Amendment</h3>

        <p>
          (9.1) All notices shall be in writing and provided to Customer via
          email or posted by Ring Savvy at www.answeringlegal.com.
        </p>
        <p>
          (9.2) No amendment to this Agreement shall be effective unless it is
          in writing and is:
        </p>
        <ul>
          <li>Signed by both parties.</li>
          <li>Sent via email by Ring Savvy to Customer or</li>
          <li>Posted on www.answeringlegal.com.</li>
        </ul>
        <p>
          <i>
            in which case such amendment shall be binding on both parties 10
            days from the date of such posting, unless such changes are
            addressing new functions for the Services or changes made for legal
            reasons, in which case such changes will be effective immediately.
          </i>
        </p>
        <p>
          (9.3) Customer shall be permitted to terminate this Agreement by
          providing 30 days’ notice to Ring Savvy within 10 days of the posting
          of any modification to this Agreement, in which case Customer shall
          remain subject to the version of this Agreement prior to modification.
          In the absence of a notice of termination, Customer’s continued use of
          the Services shall constitute its express acceptance of any such
          Amendment.
        </p>

        <h3>The Free Trial</h3>

        <p>
          (10.1) Ring Savvy reserves the right to refuse a free trial to any
          inquirer on the basis of:
        </p>
        <ul>
          <li>
            The inquirer intends to use the free trial for an advertising
            campaign, i.e. TV, Web, Radio, Direct Mail, or any other method of
            increasing call volume.
          </li>
          <li>The inquirer having already used the free trial in the past.</li>
          <li>
            The inquirer has been sanctioned by a BAR association in any state
            or has a criminal record of any kind.
          </li>
          <li>
            Permitting the inquirer to use the free trial would result in an
            already existing customer of Ring Savvy’s to terminate the business
            relationship.
          </li>
          <li>
            Ring Savvy deems that the inquirer is not a good fit for our service
            to be provided.
          </li>
        </ul>
        <p>
          (10.2) Ring Savvy also reserves the right to terminate the free trial
          at any point in time on the basis of:
        </p>
        <ul>
          <li>
            To quote the inquirer on the cost of the service on a month-to-month
            basis.
          </li>
          <li>
            The inquirer has used more than 100 minutes of virtual receptionist
            time.
          </li>
          <li>
            The inquirer has been abusive or has harassed Ring Savvy employees.
          </li>
          <li>The inquirer is unresponsive to Ring Savvy support.</li>
          <li>
            Ring Savvy deems that the inquirer is no longer a good fit for our
            service to be provided.
          </li>
          <li>
            Any of the reasons listed in the rights to refuse a trial become
            apparent.
          </li>
        </ul>
        <p>
          (10.3) Ring Savvy retains the right to charge the inquirer $175.00 for
          all trials carried through major holidays, including but not limited
          to: New Year’s Day, Memorial Day, Independence Day, Labor Day,
          Thanksgiving, Black Friday, Christmas Eve, Christmas Day, New Year’s
          Eve – et al.
        </p>
        <p>
          (10.4) Ring Savvy does not offer a free trial during the dates between
          December 15 thru January 4.
        </p>
        <p>
          (10.5) For the days beginning December 5th and ending January 7th,
          Ring Savvy reserves the right to charge a $350 setup fee for business’
          who enter into a free trial period.
        </p>

        <h3>Miscellaneous:</h3>

        <p>
          (11.1) Any telephone number assigned to Customer by Ring Savvy shall
          remain the property of Ring Savvy. The rights and obligations of the
          parties shall be governed by the laws of the State of New York,
          without reference to conflict of law principles, and all disputes
          arising under or in connection with this Agreement shall be governed
          by the internal laws of the State of New York and shall be brought and
          tried in federal or state courts located within the County of Suffolk,
          State of New York, and the parties hereby consent to submit to the
          personal jurisdiction of such courts.
        </p>
        <p>
          (11.2) Ring Savvy will only activate an account with a customer who is
          a Principle of the business, and in no such case will provide service
          without the affirmed consent of the majority owner.
        </p>
        <p>
          (11.3) Customer hereby acknowledges that Ring Savvy may, in its sole
          discretion, outsource and/or subcontract certain functions in
          providing the services.
        </p>
        <p>
          (11.4) Each party will be and act as an independent contractor. Ring
          Savvy may assign this Agreement, without the consent of Customer, and
          Customer may not sell, transfer or otherwise assign its rights under
          this Agreement without Ring Savvy’s written approval.
        </p>
        <p>
          (11.5) Our business policy concerning marketing and 3rd party service
          contractors working on behalf of the business is as follows:
          Outsourced companies under contract are prohibited to activate trials
          on behalf of the business.
        </p>
        <p>
          (11.6) All relationships with said business’ that Ring Savvy services
          will be directly between the managing partner or principal of the
          business.
        </p>

        <h3>Switch to Ring Savvy Promotion:</h3>

        <p>
          (12.1) The inquirer must provide a copy of a bill from a different
          answering service from the previous month.
        </p>
        <p>
          (12.2) The inquirer can use this promotion only up to 1,000 minutes.
        </p>
        <p>
          (12.3) After 21 days, a quote will be provided by Ring Savvy to the
          inquirer to be billed on the 31st day of use, after the promotion time
          period has ended.
        </p>
        <p>
          (12.4) Ring Savvy reserves the right to refuse a promotional offer to
          any inquirer on the basis of:
        </p>
        <ul>
          <li>
            The inquirer intends to use the free trial for an advertising
            campaign, i.e. TV, Web, Radio, Direct Mail, or any other method of
            increasing call volume.
          </li>
          <li>The inquirer having already used the free trial in the past.</li>
          <li>
            The inquirer has been sanctioned by a BAR association in any state
            or has a criminal record of any kind.
          </li>
          <li>
            Permitting the inquirer to use the free trial would result in an
            already existing customer of Ring Savvy’s to terminate the business
            relationship.
          </li>
          <li>
            Ring Savvy deems that the inquirer is not a good fit for our service
            to be provided.
          </li>
        </ul>
        <p>
          (12.5) Ring Savvy also reserves the right to terminate the free trial
          at any point in time on the basis of:
        </p>
        <ul>
          <li>
            To quote the inquirer on the cost of the service on a month-to-month
            basis.
          </li>
          <li>
            The inquirer has used more than 150 minutes of virtual receptionist
            time.
          </li>
          <li>
            The inquirer has been abusive or has harassed Ring Savvy employees.
          </li>
          <li>The inquirer is unresponsive to Ring Savvy support.</li>
          <li>
            Ring Savvy deems that the inquirer is no longer a good fit for our
            service to be provided.
          </li>
          <li>
            Any of the reasons listed in the rights to refuse a trial become
            apparent.
          </li>
        </ul>
      </SecondaryContent>
    </Layout>
  );
}
