import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div>
      <div className="flex items-center justify-center pt-[102px] pb-[55px]">
        <div className="flex w-[760px] max-w-[761px] flex-col items-center justify-center">
          {/* Part 1 :  Grab AV Pilot Terms */}
          <div id="grab-av-pilot-terms" className="py-[82px]">
            {/* Main Heading */}
            <h1
              id="terms-heading"
              className="mb-12 text-5xl font-semibold text-[#B80672]"
            >
              Grab AV Pilot Terms
            </h1>

            {/* Section Title */}
            <h2 className="mb-4 text-[34px] font-semibold text-[#222222]">
              Terms of Service
            </h2>

            {/* Intro Paragraph */}
            <p className="mb-10 max-w-3xl text-[20px] leading-relaxed text-[#7A7A7A]">
              Welcome to Ai.R! You're about to experience one of Singapore's
              first public autonomous shuttle services. As we introduce this new
              technology, your safety remains our highest priority. Please read
              the following before you ride.
            </p>

            {/* List */}
            <div className="flex flex-col gap-[61px] pl-6">
              <ol className="list-decimal space-y-6 pl-6">
                {/* Section 1 */}
                <li className="text-[26px] font-medium text-[#2A2A2A]">
                  <span>How We Keep You Safe</span>

                  <ul className="mt-4 list-disc space-y-6 text-[20px] font-normal text-[#7A7A7A]">
                    <li>
                      Human Oversight Every ride is supervised by our trained
                      safety team, including an on-board AiR Safety Operator and
                      our remote AiR Operations Command Centre.
                    </li>
                    <li>
                      Constant Monitoring & Recording: For safety, regulatory
                      compliance, policy enforcement, and operational purposes,
                      this vehicle is equipped with video recording cameras
                      during your trip.
                    </li>
                    <li>
                      Cautious Driving Style: The AV is programmed to prioritise
                      safety, which may result in a more cautious ride with
                      smoother acceleration and earlier braking than you might
                      be used to.
                    </li>
                    <li>
                      Full Insurance Coverage: Every AV ride is covered by a
                      commercial third-party liability insurance policy, as
                      required by the Land Transport Authority’s (LTA)
                      regulations.
                    </li>
                  </ul>
                </li>
                {/* Section 2 */}
                <li className="text-[26px] font-medium text-[#2A2A2A]">
                  <span>Your Safety Responsibilities</span>

                  <p className="mt-4 text-[20px] font-normal text-[#7A7A7A]">
                    To ensure a safe journey for everyone, you agree to the
                    following rules:
                  </p>

                  <ul className="mt-4 list-disc space-y-6 text-[20px] font-normal text-[#7A7A77]">
                    <li>
                      Age Restrictions:Minors (below the age of 18) must be
                      accompanied by an adult (aged 18 and above), unless they
                      are registered as a Teen Member of a Grab Family Account.
                    </li>

                    <li>
                      Child Safety & Restraints:For legal compliance, passengers
                      under 1.35m are not permitted to ride without appropriate
                      child restraints. Passengers accompanying children under
                      1.35m must bring their own child restraint(s) and are
                      responsible for ensuring that children are seated and
                      properly secured in the child restraint during the ride.
                      Please note that child restraints are not provided on
                      board.
                    </li>

                    <li>
                      Always Wear Your Seatbelt:The ride cannot begin until all
                      passengers are buckled up. The system will perform a check
                      before starting.
                    </li>

                    <li>
                      Remain Seated:Please do not stand or move around the cabin
                      while the vehicle is in motion.
                    </li>

                    <li>
                      One passenger per seat:No seat sharing or holding of
                      children in arms is permitted.
                    </li>

                    <li>
                      Respect the Vehicle:Do not tamper with any equipment or
                      distract the on-board Safety Operator.
                    </li>

                    <li>
                      Carry-on Items Only:For your safety, the vehicle's boot is
                      not available for use. Please only bring items that can
                      fit safely at your feet or on your lap, without
                      obstructing the aisle or other seats.
                    </li>

                    <li>
                      You will comply with the Passenger Code of Conduct as
                      published{" "}
                      <a
                        href="#code-of-conduct"
                        className="text-blue-600 underline"
                      >
                        here
                      </a>
                      .
                    </li>
                  </ul>
                </li>
                {/* Section 3 */}
                <li className="text-[26px] font-medium text-[#2A2A2A]">
                  <span>Service Limitations & Health Advisory</span>

                  <ul className="mt-4 list-disc space-y-6 text-[20px] font-normal text-[#7A7A77]">
                    <li>
                      Accessibility: We are working to improve our service, but
                      at this stage, our vehicles are not yet equipped for
                      wheelchair access.
                    </li>

                    <li>
                      For a pleasant journey, passengers who are pregnant,
                      elderly, or have health sensitivities (such as motion
                      sickness or anxiety) are encouraged to evaluate their
                      suitability for the ride. For a more comfortable
                      experience, those requiring additional space (such as
                      expectant mothers and seniors) are encouraged to utilise
                      one of the front passenger seats for more convenient
                      vehicle access.
                    </li>
                  </ul>
                </li>
                {/* Section 4 */}
                <li className="text-[26px] font-medium text-[#2A2A2A]">
                  <span>Ride Boarding and Payment</span>

                  <ul className="mt-4 list-disc space-y-6 text-[20px] font-normal text-[#7A7A77]">
                    <li>
                      Pricing and Payment: Passengers must use the Grab App to
                      scan the designated Boarding QR code and complete payment,
                      unless otherwise specified. This feature is also available
                      to Teen Members of Family Accounts. Payment must be
                      completed via the authorised methods available within the
                      Grab App. Cash payments to the Safety Operator or
                      on-ground staff are not accepted.
                    </li>

                    <li>
                      Scanning of Boarding QR and Boarding Verification: You are
                      required to scan the Boarding QR code and complete payment
                      (where relevant) upon boarding the vehicle. This action
                      serves as your validation to board. Be ready to show the
                      post-boarding app screen to our On-Ground Ambassadors or
                      Safety Operators for verification.
                    </li>

                    <li>
                      Group Travel (not applicable to Teen Members of Family
                      Accounts): If you are traveling with guests, you may scan
                      and pay on their behalf using your account. Please ensure
                      you scan the Boarding QR code for every member of your
                      party and the number of passengers boarding matches the
                      fares paid. As the account holder, you are responsible for
                      the conduct and safety compliance of all members of your
                      group.
                    </li>

                    <li>
                      Do not scan the Boarding QR code or make payment on behalf
                      of strangers.
                    </li>
                  </ul>
                </li>
                {/* Section 5 */}
                <li className="text-[26px] font-medium text-[#2A2A2A]">
                  <span>Other Terms & Conditions</span>

                  <ul className="mt-4 list-disc space-y-6 text-[20px] font-normal text-[#7A7A77]">
                    <li>
                      Personal Belongings: Please remember to take all your
                      personal items with you. Grab is not responsible for any
                      property lost or left behind in the vehicle.
                    </li>

                    <li>
                      Service Improvement: To help our AV learn and improve,
                      anonymised data from trips, such as video clips of unusual
                      traffic scenarios, may be used for system training and
                      development. This data does not contain personal
                      identifiers.
                    </li>

                    <li>
                      Passenger Responsibility: Passengers are responsible for
                      their conduct and will be held liable for any property
                      damage, personal injury, loss or expenses (including
                      cleaning fees) caused by their negligence, misuse of the
                      vehicle, violation of these terms or any applicable laws.
                      Grab shall not be liable for any personal injury or
                      loss/damage to property arising from non-compliance with
                      these safety terms.
                    </li>

                    <li>
                      Service Reliability: This is a pilot service. While we
                      strive for reliability, service availability, routes, and
                      timeliness are not guaranteed and may be subject to change
                      or interruption.
                    </li>

                    <li>
                      Smoking or vaping in the vehicle is strictly prohibited.
                    </li>

                    <li>
                      No Food and Drink: Consumption of food and drinks are
                      prohibited inside the vehicle.
                    </li>

                    <li>
                      Non-compliance: Grab may refuse boarding to or require
                      removal of any passenger who does not comply with these
                      terms or is in breach of any laws.
                    </li>

                    <li>
                      Respect for Others’ Privacy: Please do not post unredacted
                      videos or images of other passengers or our staff on
                      social media or other public platforms.
                    </li>

                    <li>
                      Governing Terms: Your ride is subject to these terms,
                      Grab’s{" "}
                      <a
                        href="https://www.grab.com/sg/terms-policies/transport-delivery-logistics/"
                        className="text-blue-600 underline"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://www.grab.com/sg/terms-policies/transport-delivery-logistics/"
                        className="text-blue-600 underline"
                      >
                        Privacy Notice
                      </a>
                      .
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          {/* Part 2 : Code of Conduct */}
          <div id="code-of-conduct" className="py-[82px]">
            {/* Main Heading */}
            <h1
              id="terms-heading"
              className="mb-12 text-5xl font-semibold text-[#B80672]"
            >
              Code of Conduct
            </h1>

            {/* Section Title */}
            {/* <h2 className='mb-4 text-[34px] font-semibold text-[#222222]'>Terms of Service</h2> */}

            {/* Intro Paragraph */}
            <p className="mb-10 max-w-3xl text-[20px] leading-relaxed text-[#7A7A7A]">
              This Code of Conduct outlines the expected behaviour for all
              passengers using Grab's Autonomous Shuttle service. Your
              cooperation is essential to ensure a safe, pleasant, and compliant
              experience for everyone on-board the Ai.R Autonomous Shuttle,
              including the on-board Safety Operator. If you’re found to be in
              breach of the following guidelines, Grab may take action including
              temporarily or permanently suspending your account, denial of
              boarding and/or requiring your removal from the vehicle.
            </p>

            {/* List */}
            <div className="flex flex-col gap-[61px] pl-6">
              <ol className="list-decimal space-y-6 pl-6">
                {/* Section 1 */}
                <li className="text-[26px] font-medium text-[#2A2A2A]">
                  <span>Stay Safe and Follow the Law </span>

                  <ul className="mt-4 list-disc space-y-6 text-[20px] font-normal text-[#7A7A7A] marker:text-[#2F2F2F]">
                    <li>
                      <strong className="font-medium text-[#2F2F2F]">
                        General Conduct:{" "}
                      </strong>
                      Passengers shall comply with all signs in and on the
                      vehicle and shall ensure that they do not cause nuisance
                      or annoyance to other passengers.
                    </li>

                    <li>
                      <strong className="font-medium text-[#2F2F2F]">
                        Zero Tolerance for Assault, Harassment, or Abuse:{" "}
                      </strong>
                      Assault, harassment, or abuse of any kind directed at the
                      Safety Operator, authorised AiR staff, fellow passengers,
                      or the general public will not be tolerated. Prohibited
                      behaviors include physical abuse, verbal harassment,
                      sexual assault, threats, and intimidation.
                    </li>

                    <li>
                      <strong className="font-medium text-[#2F2F2F]">
                        Respect the Safety Operator:{" "}
                      </strong>
                      The on-board Safety Operator is present to monitor the
                      vehicle’s performance, manage the passenger experience,
                      and take over control only in the event of a system
                      failure or emergency.
                      <ul className="mt-4 list-disc space-y-4 pl-6 marker:text-[#7A7A7A]">
                        <li>
                          Do not distract, interfere with, or obstruct the
                          Safety Operator. Their focus must remain on the safe
                          operation of the vehicle and the surrounding
                          environment.
                        </li>
                        <li>
                          Do not ask the Safety Operator to violate traffic
                          laws, speed, or stop at unsafe, illegal or unapproved
                          locations. The vehicle operates based on
                          pre-programmed routes and traffic laws.
                        </li>
                        <li>
                          Follow all instructions given by the Safety Operator,
                          particularly those related to safety, vehicle
                          entry/exit, or emergency procedures.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong className="font-medium text-[#2F2F2F]">
                        Follow Road Safety Laws and Vehicle Requirements:
                      </strong>
                      <ul className="mt-4 list-disc space-y-4 pl-6">
                        <li>
                          Wear a seatbelt at all times. The vehicle will not
                          proceed until all passengers are securely fastened.
                        </li>
                        <li>
                          Passengers must remain seated while the vehicle is in
                          motion. Doors must remain closed and secured while the
                          vehicle is in motion. Passengers may only prepare to
                          alight once the vehicle has come to a complete stop at
                          the designated drop-off point.
                        </li>
                        <li>
                          No seat sharing or holding of children in arms is
                          permitted.
                        </li>
                        <li>
                          Minors aged 17 and under must be accompanied by an
                          adult (except for Teen Members of Grab Family
                          Accounts). For legal compliance, passengers under
                          1.35m are not permitted to ride without appropriate
                          child restraints. Passengers accompanying children
                          under 1.35m must bring their own child restraint(s)
                          and are responsible for ensuring that children are
                          seated and properly secured in the child restraint
                          during the ride. Please note that child restraints are
                          not provided on board.
                        </li>
                        <li>
                          Pets are not allowed on board the Autonomous Shuttle
                          to ensure comfort and hygiene for all commuters.
                        </li>

                        <li>
                          <strong className="font-medium text-[#2F2F2F]">
                            Prohibited Items:{" "}
                          </strong>
                          Illegal items, drugs, weapons, and hazardous materials
                          must not be brought inside the vehicle. This includes
                          electronic vaporizers and related components. Further,
                          items that are bulky, sharp, unstable, or pose a risk
                          to the vehicle or other passengers are strictly
                          prohibited.
                        </li>
                        <li>
                          <strong className="font-medium text-[#2F2F2F]">
                            Do not smoke or vape{" "}
                          </strong>
                          (including electronic vaporisers).
                        </li>
                        <li>
                          <strong className="font-medium text-[#2F2F2F]">
                            Theft, Robbery, or Property Damage:{" "}
                          </strong>
                          Acts of vandalism, theft, robbery, or any damage to
                          the shuttle's interior, exterior, or the equipment
                          used by the Safety Operator will result in penalties
                          under prevailing laws.
                        </li>

                        <li>
                          <strong className="font-medium text-[#2F2F2F]">
                            Personal Data and Photography/Videography
                          </strong>

                          <ul className="mt-4 list-disc space-y-4 pl-6 marker:text-[#7A7A7A]">
                            <li>
                              Passengers are prohibited from taking unauthorised
                              photographs or videos of the Safety Operator or
                              other passengers inside the vehicle.
                            </li>
                            <li>
                              The vehicle interior is equipped with video
                              recording cameras for safety, regulatory
                              compliance, policy enforcement, and operational
                              purposes.
                            </li>
                          </ul>
                        </li>

                        <li>
                          <strong className="font-medium text-[#2F2F2F]">
                            Personal Data and Photography/Videography
                          </strong>

                          <ul className="mt-4 list-disc space-y-4 pl-6 marker:text-[#7A7A7A]">
                            <li>
                              Always follow the instructions of the Safety
                              Operator, Grab Customer Support, or other
                              authorised Ai.R Staff.
                            </li>
                            <li>
                              For immediate threats or severe emergencies, call
                              the authorities first. Once all parties are safe
                              and authorities have been notified, notify the
                              Safety Operator and contact Grab to report the
                              incident.
                            </li>
                            <li>
                              The designated emergency button is provided solely
                              for use during immediate safety-critical
                              situations, such as a medical emergency, fire,
                              motor accident or physical threat. Misuse of the
                              emergency button, including activation for
                              non-emergency situations, will be treated as a
                              severe violation, potentially leading to immediate
                              trip termination and enforcement actions.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                {/* Section 2 */}
                <li className="text-[26px] font-medium text-[#2A2A2A]">
                  <span>Respect the Autonomous Shuttle</span>

                  <ul className="mt-4 list-disc space-y-6 text-[20px] font-normal text-[#7A7A7A] marker:text-[#2F2F2F]">
                    <li>
                      <strong className="font-medium text-[#2F2F2F]">
                        Do Not Damage or Interfere with the Shuttle:
                      </strong>
                      <ul className="mt-4 list-disc space-y-4 pl-6 marker:text-[#7A7A7A]">
                        <li>
                          Do not touch, interfere with, cover, or activate any
                          part of the vehicle including driving systems,
                          sensors, cameras, dashboard controls, or safety
                          equipment.
                        </li>
                        <li>
                          Tampering with or damaging any vehicle equipment is
                          strictly prohibited and may result in penalties under
                          prevailing laws.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong className="font-medium text-[#2F2F2F]">
                        Ensure a Seamless Pick-Up and Drop-Off:
                      </strong>
                      <ul className="mt-4 list-disc space-y-4 pl-6 marker:text-[#7A7A7A]">
                        <li>
                          The Autonomous Shuttle operates on pre-defined routes
                          and stops. Be physically present at the pick-up point
                          and ready to board before the shuttle arrives.
                        </li>
                        <li>
                          The vehicle will only stop at designated, approved
                          locations. No detours, delays, or unscheduled stops
                          are permitted.
                        </li>
                        <li>
                          Confirm your ride details via the Grab App before
                          boarding.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong className="font-medium text-[#2F2F2F]">
                        Maintain Vehicle Hygiene and Comfort:
                      </strong>
                      <ul className="mt-4 list-disc space-y-4 pl-6 marker:text-[#7A7A7A]">
                        <li>
                          Keep the Autonomous Shuttle clean for the next user.
                          If you find the vehicle dirty, please inform the
                          On-Ground Ambassadors or Ai.R Support.
                        </li>
                        <li>
                          Do not consume food or drinks inside the shuttle.
                        </li>
                        <li>
                          Do not bring pungent food (e.g., durians) into the
                          vehicle.
                        </li>
                        <li>
                          Do not litter, spit, vomit, shout, swear, or place
                          your feet on seats, walls, or dashboard areas.
                        </li>
                        <li>
                          Adhere to all instructions outlined in in-vehicle
                          decals.
                        </li>
                        <li>
                          Only bring items that can be safely secured and
                          carried onboard.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong className="font-medium text-[#2F2F2F]">
                        Leave Nothing Behind:{" "}
                      </strong>
                      Remember to bring all personal belongings and dispose of
                      trash before alighting. Grab is not responsible for items
                      left in the vehicle. Retrieval of lost items is subject to
                      operational availability and successful recovery.
                    </li>
                  </ul>
                </li>

                {/* Section 3 */}
                <li className="text-[26px] font-medium text-[#2A2A2A]">
                  <span>Be a Respectful & Considerate Passenger</span>

                  <ul className="mt-4 list-disc space-y-6 text-[20px] font-normal text-[#7A7A7A] marker:text-[#2F2F2F]">
                    <li>
                      <strong className="font-medium text-[#2F2F2F]">
                        Ensuring a Smooth Boarding Experience:
                      </strong>
                      <ul className="mt-4 list-disc space-y-4 pl-6 marker:text-[#7A7A7A]">
                        <li>
                          As the Autonomous Shuttle arrives, have your Grab App
                          open and ready to scan the Boarding QR code to prevent
                          delays and ensure quick departure.
                        </li>
                        <li>
                          Queue in an orderly manner. Do not cut in line or
                          attempt to board if the vehicle has reached its
                          seating capacity.
                        </li>
                        <li>
                          If paying for a group, ensure all guests board safely
                          and that each passenger’s Boarding QR has been scanned
                          and validated before departure.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong className="font-medium text-[#2F2F2F]">
                        Use the Right Service and Space Properly:
                      </strong>
                      <ul className="mt-4 list-disc space-y-4 pl-6 marker:text-[#7A7A7A]">
                        <li>
                          The Autonomous Shuttle has limited seating capacity.
                          For smoother boarding and disembarking, fill seats
                          from the back row first.
                        </li>
                        <li>
                          Extend courtesy by yielding priority seats to seniors,
                          expectant mothers, persons with disabilities, and
                          passengers travelling with young children.
                        </li>
                        <li>No seating is permitted in the driver’s seat.</li>
                        <li>Do not overload the vehicle with luggage.</li>
                        <li>
                          Do not use the shuttle to transport unaccompanied
                          goods.
                        </li>
                        <li>
                          Respect the vehicle’s capacity limit as displayed in
                          the Grab App and onboard signage.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong className="font-medium text-[#2F2F2F]">
                        Act in Good Faith:
                      </strong>
                      <ul className="mt-4 list-disc space-y-4 pl-6 marker:text-[#7A7A7A]">
                        <li>
                          Provide accurate and truthful information when using
                          the service or submitting feedback.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong className="font-medium text-[#2F2F2F]">
                        Make Correct Payment:
                      </strong>
                      <ul className="mt-4 list-disc space-y-4 pl-6 marker:text-[#7A7A7A]">
                        <li>
                          Confirm your payment method and final fare before
                          boarding. Always ensure the correct fare is reflected
                          in the Grab App.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong className="font-medium text-[#2F2F2F]">
                        Your Account, Your Responsibility:
                      </strong>
                      <ul className="mt-4 list-disc space-y-4 pl-6 marker:text-[#7A7A7A]">
                        <li>
                          You are responsible for the behaviour of your guests
                          and all trips linked to your account.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
