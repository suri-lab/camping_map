const SERVICE_KEY = 'MKEVIcI87d%2FV%2FeMK06XvZnD2lGJ3qh8B9JqI%2FjyiNZjPcOzZO%2BXxIRHA9qoogQ6lUhgxCzYv5L%2FUpVHyTGZeTQ%3D%3D';

module.exports = async function handler(req, res) {
    const url = `https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=${SERVICE_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(502).json({ error: error.message });
    }
};
