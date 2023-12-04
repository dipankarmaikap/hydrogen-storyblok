import {storyblokEditable, StoryblokComponent} from '@storyblok/react';

const PersonalizedBanners = ({blok}) => {
  return (
    <div
      key={blok._uid}
      {...storyblokEditable(blok)}
      className="center-container"
    >
      {blok.variants?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default PersonalizedBanners;
