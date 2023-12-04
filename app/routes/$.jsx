import {json} from '@netlify/remix-runtime';
import {useLoaderData} from '@remix-run/react';
import {
  StoryblokComponent,
  getStoryblokApi,
  useStoryblokState,
} from '@storyblok/react';
export const resolveRelations = ['featured_post.posts'];
export const loader = async ({context, params, request}) => {
  try {
    let slug = params['*'] ?? 'home';

    const res = await getStoryblokApi().get(`cdn/stories/${slug}`, {
      version: 'draft',
      resolve_relations: resolveRelations,
    });
    let story = res?.data?.story;
    if (story) {
      return json(story);
    }
  } catch (e) {
    let error = JSON.parse(e);
    throw json(
      {
        message: `"${
          new URL(request.url).pathname
        }" does not exists in Storyblok.`,
      },
      {status: error?.status ?? 400, statusText: error?.message},
    );
  }
};
export const meta = () => [{title: 'Remix@Edge | New Remix App'}];
export default function CatchAllRoute() {
  const data = useLoaderData();
  let story = useStoryblokState(data, {
    resolveRelations,
  });
  return <StoryblokComponent story={story} blok={story?.content} />;
}
