import santyClient from '@sanity/client';
import imageUrlBuilder  from '@sanity/image-url';

export const client = santyClient({
    projectId: '13xwyy9x',
    dataset: 'production',
    apiVersion: '2023-02-12',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);