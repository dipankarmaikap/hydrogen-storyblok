import {storyblokEditable, StoryblokComponent} from '@storyblok/react';

const Page = ({blok, preview}) => {
  let storyblokPreviewProps = preview ? storyblokEditable(blok) : {};
  return (
    <main {...storyblokPreviewProps}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent
          preview={preview}
          blok={nestedBlok}
          key={nestedBlok._uid}
        />
      ))}
    </main>
  );
};

export default Page;
