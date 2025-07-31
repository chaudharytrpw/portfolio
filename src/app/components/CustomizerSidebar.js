'use client';

// No changes to these arrays
const fonts = ['font-sans', 'font-serif', 'font-mono', 'italic', 'uppercase'];
const bgColors = [
  'bg-white', 'bg-gray-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100'
];
const textColors = [
  'text-black', 'text-gray-700', 'text-blue-700', 'text-red-600', 'text-green-700', 'text-purple-700'
];

export default function CustomizerSidebar({
  isOpen,
  onClose,
  currentFont,
  currentBgColor,
  currentTextColor,
  onFontChange,
  onColorChange,
  onTextColorChange,
}) {
  // We no longer return null. Instead, we control visibility with classes.
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-84 h-full bg-white shadow-lg border-l p-4 z-50 overflow-y-auto 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Customize</h2>
          <button onClick={onClose} className="text-gray-500 cursor-pointer hover:text-black text-2xl font-bold">×</button>
        </div>

        {/* Font Styles */}
        <div className="mb-6">
          <h3 className="font-medium text-sm mb-2 text-gray-600">Font Style</h3>
          <div className="grid grid-cols-3 gap-2">
            {fonts.map((font) => (
              <button
                key={font}
                onClick={() => onFontChange(font)}
                className={`p-2 rounded text-sm transition-colors duration-200 ${font} ${
                  currentFont === font
                    ? 'bg-blue-600 text-white ring-2 ring-offset-1 ring-blue-500'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                Aa
              </button>
            ))}
          </div>
        </div>

        {/* Background Color */}
        <div className="mb-6">
          <h3 className="font-medium text-sm mb-2 text-gray-600">Background Color</h3>
          <div className="grid grid-cols-5 gap-2">
            {bgColors.map((color) => (
              <button
                key={color}
                onClick={() => onColorChange(color)}
                aria-label={`Set background to ${color}`}
                className={`w-8 h-8 rounded-full border border-gray-200 transition-all duration-200 ${color} ${
                  currentBgColor === color
                    ? 'ring-4 ring-offset-2 ring-blue-500'
                    : 'hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Color */}
        <div className="mb-6">
          <h3 className="font-medium text-sm mb-2 text-gray-600">Text Color</h3>
          <div className="grid grid-cols-3 gap-2">
            {textColors.map((color) => (
              <button
                key={color}
                onClick={() => onTextColorChange(color)}
                className={`border px-2 py-1 rounded text-sm font-medium transition-colors duration-200 ${
                  currentTextColor === color
                    ? 'bg-blue-600 text-white ring-2 ring-offset-1 ring-blue-500'
                    : `bg-gray-100 hover:bg-gray-200 ${color}`
                }`}
              >
                Text
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}