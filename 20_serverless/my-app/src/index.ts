

export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log(request.body)
		console.log(request.headers)
		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
