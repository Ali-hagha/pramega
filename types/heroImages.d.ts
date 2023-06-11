type HeroImages = {
  id: number;
  attributes: {
    images: { data: [{ attributes: { url: string } }] };
  };
};
