export default function Footer({ positioning }: { positioning: string }) {
  return (
    <footer className="bg-ink border-t border-line-dark">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-10">
        <p className="text-sm text-paper/60 max-w-md">{positioning}</p>
        <p className="text-xs text-muted mt-6">© {new Date().getFullYear()} MAK Enterprises</p>
      </div>
    </footer>
  );
}
