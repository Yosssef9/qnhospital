import { motion } from "framer-motion";
import BreadcrumbArea from "../components/BreadcrumbArea";
import React from "react";
import { CiCircleChevRight } from "react-icons/ci";

export default function PatientsRightss() {
  const rights = [
    {
      title: "Patient Rights",
      points: [
        {
          text: "Receive a copy of Patient and Family Bill of Rights and Responsibilities at the earliest possible moment from reception or admission office or Nursing staff, and if for any reason you cannot understand it, please contact Patient Relations for help.",
        },
        {
          text: "Receive comprehensive care given without discrimination by competent personnel that reflects consideration of your personal values and beliefs, with effective use of time and as per MOH laws and regulations.",
        },
        {
          text: "Expect emergency procedures to be carried out without delay.",
        },
        { text: "Have the appropriate assessment and management of pain." },
        {
          text: "Participate in your treatment plan details including care decisions and process, and be provided with information upon discharge about your continuing health care requirements and the means for meeting them.",
        },
        {
          text: "Refuse or discontinue the treatment to the extent permitted by law, and be informed of the potential consequences of any such action, and accordingly, you will sign the prepared consent for that.",
        },
        {
          text: "Sign the necessary informed consent prior to the start of any surgery, invasive procedures, anesthesia, blood/blood products transfusion, and high-risk procedures except in emergencies.",
        },
        { text: "To know the hospital mission and vision." },
        { text: "To know the identity of your caregiver." },
        {
          text: "To receive complete and current information from the treating doctor once a final diagnosis is reached regarding the diagnosis, treatment, and potential benefits and drawbacks of proposed treatment, likelihood of successful treatment, and possible problems related to treatment in terms that you can understand (an interpreter is available if needed). When it is not medically advisable, the information pertaining to your condition shall be given on your behalf to your designated/legal representative.",
        },
        {
          text: "To receive an appropriate explanation of the cost of your treatment.",
        },
        {
          text: "Voice complaints regarding your care through the patient relations office (Ext.3015) or through suggestion boxes.",
        },
        {
          text: "The result will be given to you by patient relations as soon as possible.",
        },
        {
          text: "To know the available sources of care for your condition and other alternative treatments inside or outside the hospital.",
        },
        {
          text: "We support your choice if you are willing to donate organs and tissues. Although we do not provide this service, you can call the Saudi Center for Organ Donation toll-free at 8001245500, and you will receive the full information that supports your choice from patient relations.",
        },
        { text: "Protect your privacy while receiving services." },
        {
          text: "Request a room transfer if another patient in the room is unreasonably disturbing you and another room equally suitable for your care needs is available.",
        },
        {
          text: "Have all information and records pertaining to your medical care treated as confidential, except as otherwise provided by law or third-party contractual agreement.",
        },
        {
          text: "Have your medical records kept confidential, protected from loss or misuse, and read only by individuals involved in your care or by individuals authorized by law or regulation.",
        },
        {
          text: "Not to be involved in any experimental, research, donor program, or educational activities unless you have given prior informed consent.",
        },
        {
          text: "To be provided with a safety mechanism surrounding your care within the framework established by the hospital.",
        },
        {
          text: "To be provided with a safety mechanism for your valuables to prevent loss when needed.",
        },
        {
          text: "To be protected from physical, verbal, or psychological assault.",
        },
      ],
    },
    {
      title: "Duties of Patients and Their Families",
      points: [
        {
          text: "You have the responsibility to deal with hospital staff and other patients in a decent manner and respect their privacy.",
        },
        {
          text: "You are responsible to follow and respect the hospital rules and regulations such as:",
          subText: [
            "a) Visiting Hours",
            "b) Not bringing food from outside",
            "c) Following safety and security instructions including:",
          ],
        },
        {
          text: "You are responsible for the consequences of refusing the treatment.",
        },
        { text: "You are responsible for keeping your appointments." },
        {
          text: "If you can't keep the appointment, it is your responsibility to notify the appointment office as early as possible.",
        },
        {
          text: "You assume the financial responsibility of paying for all services rendered either through third-party payers (your insurance company) or being personally responsible.",
        },
        {
          text: "You have to respect and consider the priority for emergency cases.",
        },
        {
          text: "Avoid bringing valuable personal belongings to the hospital since the hospital is not responsible for saving them. In special conditions, you can submit your valuables to the nurse taking care of your condition in the presence of a security staff member after checking their ID.",
        },
        {
          text: "You should receive a copy of the patient's valuable receipt to hand it over to the nursing staff to receive back your valuables.",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="md:mt-[122px] mt-[50px] ">
        <BreadcrumbArea imgUrl={"/images/about.jpg"} />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-16 md:gap-10">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-start"
        >
          <img
            src="/images/PatientsRightss/mission-img.png"
            alt="Patients Rights"
            className="h-[450px] w-full md:w-[600px] rounded-2xl "
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          {rights.map((right, i) => (
            <div key={i} className="mb-12">
              <h1 className="text-xl md:text-2xl font-bold text-[var(--main-color)] mb-6 relative after:block after:w-1/12 after:border-b-4 after:border-[#1e7f8f] after:mt-3">
                {right.title}
              </h1>

              <div className="space-y-6">
                {right.points.map((point, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div className="flex items-start gap-3">
                      <CiCircleChevRight className="w-6 h-6 mt-1 text-[var(--main-color)] flex-shrink-0" />
                      <p className="text-gray-800 leading-8 tracking-wide text-[17px] md:text-lg font-medium text-justify">
                        {point.text}
                      </p>
                    </div>

                    {/* Subpoints */}
                    {point.subText && (
                      <ul className="pl-10 mt-1 list-disc space-y-1">
                        {point.subText.map((text, i) => (
                          <li
                            key={i}
                            className="text-gray-800 leading-8 tracking-wide text-[16px] md:text-[17px] font-medium text-justify"
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
