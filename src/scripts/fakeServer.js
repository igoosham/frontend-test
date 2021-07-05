export default function fakeFetch(url, { method, headers, body }) {
  return new Promise((resolve) => {
    console.log(`Sending to: ${url}\n`, {
      method,
      headers,
      body: JSON.parse(body),
    });
    setTimeout(() => {
      resolve("server response: OK!");
    }, 1100);
  });
}
