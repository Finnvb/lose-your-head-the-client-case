import createClient from '$lib/prismicClient'

export async function load({ fetch, request, params }) {

	const { uid } = params;
	const client = createClient({ fetch, request });
	const document = await client.getByUID('story', uid);
	if(document) {
		return  {...document.data} 
	}

	error(404, 'Not found');
}