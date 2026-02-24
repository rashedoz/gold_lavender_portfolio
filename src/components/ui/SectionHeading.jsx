export default function SectionHeading({ label, title, light = false }) {
  return (
    <div className="mb-12">
      <span
        className={`block text-xs tracking-[0.25em] uppercase font-medium mb-2 ${
          light ? 'text-gold-300' : 'text-gold-500'
        }`}
      >
        {label}
      </span>
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? 'text-white' : 'text-charcoal-900'
        }`}
      >
        {title}
      </h2>
      <div className="h-0.5 w-12 bg-gold-500 mt-4" />
    </div>
  )
}
