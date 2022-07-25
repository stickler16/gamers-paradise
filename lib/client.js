// SANITY

import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '1hrto3lr',
    dataset: 'production',
    apiVersion: '2022-07-25',
    useCdn: true,
    token: 'skevmyBIgLkDhusqI50GozzEhgwxhIcV3Npu02hDYzsEb9xceSaET0HjwdRQAaQ6sFKJyrljOnZKrTjTCAZRAlOqqdMAFxoEDtLi3gGC6gKi0gd6J7boiqhmBqmKm7Rbsf6bOiC1gHkAxwFfF2Ru8zKnXCeXjVal0QnWL3Or9lEpwymyGFW4'
});

const builder = imageUrlBuilder(client);


export const urlFor = (source) => builder.image(source);
