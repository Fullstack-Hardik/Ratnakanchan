export default function MosaicBackground() {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundColor: 'var(--color-tech-bg)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='rgba(31, 35, 40, 0.2)' stroke-width='0.5'%3E%3Cpath d='M0 100h200M100 0v200M0 50h100M150 0v100M100 150h100M50 100v100'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
        backgroundRepeat: 'repeat',
      }}
    />
  );
}
