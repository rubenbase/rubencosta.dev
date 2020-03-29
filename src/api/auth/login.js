export default async function login({ email, password }) {
	const response = await fetch('http://localhost:4000/api/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({ email, password })
	})

	return response.json()
}
