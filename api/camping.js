module.exports = async function handler(req, res) {
    const url = `https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=${process.env.CAMPING_SERVICE_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json`;

    try {
        const response = await fetch(url);
        const text = await response.text();
        res.status(200).json({
            debug: { status: response.status, hasKey: !!process.env.CAMPING_SERVICE_KEY, bodyLength: text.length, bodyPreview: text.slice(0, 300) }
        });
    } catch (error) {
        res.status(502).json({ error: error.message });
    }
};
