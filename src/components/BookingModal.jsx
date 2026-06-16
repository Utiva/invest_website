export default function BookingModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-primary">Book a Time to Meet</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.utiva.co/talk2E"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in New Tab
          </a>
          <p className="hidden sm:flex items-center text-gray-400 text-sm font-medium">or scroll below</p>
        </div>

        <div className="flex-1 overflow-auto">
          <iframe
            width="100%"
            height="750px"
            src="https://utiva.zohobookings.com/portal-embed#/eyitayo-calendar"
            frameBorder="0"
            allowFullScreen
            title="Book a Meeting"
            className="block"
          />
        </div>
      </div>
    </div>
  );
}
