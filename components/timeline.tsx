import Image from "next/image";
import list from "@/public/assets/images/list_image.jpeg";
export default function Timeline() {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact mt-3 timeline-vertical">
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <div className="flex-col flex md:items-start items-start">
            <time className="font-mono italic">2024</time>
            <Image
              alt="list"
              src={list}
              className="h-10 w-10 rounded-full"
              priority
            />
          </div>
          <div className="text-lg font-black">
            Luxembourg Institut of Science and Technology
          </div>
          <div className="text-sm text-start">
            <p>
              Developed and deployed a scalable{" "}
              <strong>Retrieval-Augmented Generation (RAG)</strong> application
              to support researchers in leveraging{" "}
              <strong>AI-driven insights</strong>.
            </p>
            <ul className="list-disc ml-5">
              <li>
                Utilized <strong>Sentence Transformers</strong> from{" "}
                <strong>Hugging Face</strong> to generate high-quality,{" "}
                <strong>domain-specific embeddings</strong> for scientific
                literature.
              </li>
              <li>
                Engineered an advanced <strong>data extraction pipeline</strong>{" "}
                using <strong>Python</strong> and state-of-the-art{" "}
                <strong>machine learning frameworks</strong>.
              </li>
              <li>
                Streamlined <strong>model management</strong> and
                experimentation with <strong>MLflow</strong>, ensuring
                reproducibility and scalability.
              </li>
              <li>
                Optimized deployment processes through{" "}
                <strong>containerization</strong> with <strong>Docker</strong>,
                enhancing system reliability and portability.
              </li>
            </ul>
          </div>
        </div>

        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end ">
          <time className="font-mono italic">2024</time>
          <div className="text-lg font-black">Freelance - AI solutions</div>
          <div className="text-sm text-start">
            I help small businesses harness the power of AI by recommending the
            right tools to improve their productivity
          </div>
        </div>
      </li>
    </ul>
  );
}
