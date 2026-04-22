import { useState } from "react";
import IntroSection from "../Benefits/IntroSection";
import styles from "./Frequently.module.css";
import FrequentlyItem from "./FrequentlyItem";

const FreqData = [
  {
    question: "What are the school hours at Little Learners Academy?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    question: "Is there a uniform policy for students?",
    answer:
      "Yes, students are required to follow the school uniform during regular days.",
  },
  {
    question: "What extracurricular activities are available for students?",
    answer:
      "We offer activities like art, music, storytelling, and outdoor play.",
  },
  {
    question: "How do you support children's social development?",
    answer:
      "We encourage teamwork and communication through group activities and play.",
  },
  {
    question: "How do you handle food allergies and dietary restrictions?",
    answer:
      "We follow clear safety guidelines and coordinate closely with parents.",
  },
  {
    question: "What is the teacher-to-student ratio at Little Learners Academy?",
    answer:
      "We maintain a low ratio to ensure personal attention for each child.",
  },
  {
    question: "How do you handle discipline and behavior management?",
    answer:
      "We use positive reinforcement and gentle guidance for behavior.",
  },
  {
    question: "How do I apply for admission to Little Learners Academy?",
    answer:
      "You can apply by contacting our admissions office and completing the form.",
  },
];

const FrequentlySection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const leftColumn = FreqData.slice(0, 4);
  const rightColumn = FreqData.slice(4, 8);

  return (
    <section className={styles.FreqContainer}>
      <IntroSection
      
        btnText="Solutions For The Doubts"
        title="Frequently Asked Questions"
        desription="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />

      <div className={styles.Inquiries}>
        <div className={styles.column}>
          {leftColumn.map((item, index) => (
            <FrequentlyItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

        <div className={styles.column}>
          {rightColumn.map((item, index) => {
            const realIndex = index + 4;

            return (
              <FrequentlyItem
                key={realIndex}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === realIndex}
                onToggle={() =>
                  setOpenIndex(openIndex === realIndex ? null : realIndex)
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FrequentlySection;