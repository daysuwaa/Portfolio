export default function Logo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="8 8 48 48" aria-hidden="true" className="shrink-0">
      <path
        d="M25 12c-6 0-8 2-8 8v6c0 4-2 6-5 6 3 0 5 2 5 6v6c0 6 2 8 8 8"
        transform="translate(1 0)"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M35 19h5c8 0 12 5 12 13s-4 13-12 13h-5z" fill="var(--pen)" />
    </svg>
  );
}
