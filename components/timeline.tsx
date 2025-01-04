export default function Timeline() {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
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
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">2024</time>
          <div className="text-lg font-black">
            Luxembourg Institut of Science and Technology
          </div>
          The Apple Watch is a line of smartwatches produced by Apple Inc. It
          incorporates fitness tracking, health-oriented capabilities, and
          wireless telecommunication, and integrates with iOS and other Apple
          products and services
        </div>
      </li>
    </ul>
  );
}
