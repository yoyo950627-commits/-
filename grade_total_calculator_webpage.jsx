export default function GradeCalculator() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
        <h1 className="text-4xl font-bold text-center mb-8">成績總分計算器</h1>

        <div className="space-y-6">
          <ScoreInput id="chinese" label="國文成績" />
          <ScoreInput id="english" label="英文成績" />
          <ScoreInput id="math" label="數學成績" />
        </div>

        <button
          onClick={() => {
            const c = parseFloat(document.getElementById('chinese').value) || 0;
            const e = parseFloat(document.getElementById('english').value) || 0;
            const m = parseFloat(document.getElementById('math').value) || 0;
            document.getElementById('total').innerText = c + e + m;
          }}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-4 rounded-2xl transition"
        >
          計算總分
        </button>

        <div className="mt-8 text-center text-3xl font-bold">
          總分：<span id="total" className="text-red-600">0</span>
        </div>
      </div>
    </div>
  );
}

function ScoreInput({ id, label }) {
  return (
    <div>
      <label className="block text-lg font-medium mb-2">{label}</label>
      <input
        id={id}
        type="number"
        min="0"
        max="100"
        placeholder={`請輸入${label}`}
        className="w-full border rounded-xl p-4 text-lg"
      />
    </div>
  );
}
