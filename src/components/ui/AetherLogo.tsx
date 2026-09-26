export default function AetherLogo({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* 4-petal geometric flower symbol matching reference mockup */}
      <path
        d="M20 3C20 12.5 12.5 20 3 20C12.5 20 20 27.5 20 37C20 27.5 27.5 20 37 20C27.5 20 20 12.5 20 3Z"
        fill={color}
      />
      {/* Central subtle highlight star */}
      <circle cx="20" cy="20" r="2.5" fill="rgba(255,255,255,0.9)" />
    </svg>
  );
}
