module.exports = async function handler(req, res) {
    const url = `https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=${process.env.CAMPING_SERVICE_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(502).json({ error: error.message });
    }
};
