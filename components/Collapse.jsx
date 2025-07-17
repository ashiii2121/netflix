import { useState } from "react";
import "./collaps.css";

const faqData = [
  {
    question: "What is Netflix?",
    answer: (
      <>
        <p>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
        </p>
        <br />
        <p>
          You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
        </p>
      </>
    ),
  },
  {
    question: "How much does Netflix cost?",
    answer: (
      <p>
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
      </p>
    ),
  },
  {
    question: "Where can I watch?",
    answer: (
      <>
        <p>
          Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.
        </p>
        <br />
        <p>
          You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
        </p>
      </>
    ),
  },
  {
    question: "How do I cancel?",
    answer: (
      <p>
        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
      </p>
    ),
  },
  {
    question: "Is Netflix good for kids?",
    answer: (
      <>
        <p>
          The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
        </p>
        <br />
        <p>
          Kids' profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
        </p>
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <button
            onClick={() => toggleFAQ(index)}
            className="qst text-left p-4 bg-gray-800 text-white flex justify-between items-center w-full cursor-pointer transition-all"
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "x" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="faq-answer p-4 bg-gray-700 transition-all">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
