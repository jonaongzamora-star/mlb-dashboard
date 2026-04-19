export default async function handler(req, res) {
  const DOC_ID = "1Hk-Wqz5Jao2yZVsiUTQhvqxZVfj3NiZLiaEd-jqJBO0";
  const url = `https://docs.google.com/document/d/${DOC_ID}/export?format=txt`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Google returned ${response.status}`);
    const text = await response.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ ok: true, text });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
