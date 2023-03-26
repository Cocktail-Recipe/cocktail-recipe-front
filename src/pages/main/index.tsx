import Navbar from '@/components/common/Navi';
import PopularRecipe from '@/components/main/PopularRecipe';
import Slideshow from '@/components/main/SlideShow';

const images = [
  {
    src: 'https://s3-alpha-sig.figma.com/img/a9dc/5c72/8e0052a45998b61994af030047095ba5?Expires=1680480000&Signature=A~r-aO66JGh01WamcEWCD-9H3dPlBmYJPhSgQlY4d1vq3GF7Jiqa2D55HKTpCJ6-zCH2wHaCM1A8yotOjW5cxBpHKLEhAgVsikVG-Z9lQxtOBAQmM4H456XefKHSeT5ki~4mRDTmiis5dOFeLImBAkWyXAEYT1p1hUJDibaVc-3y-9Umt6YXELB4mEmtojrX1uA24RHvwxVhAeN3oWZq~RDERm3ilmhnyhe-4NvhmU1snYEssbw8VZ6LghbR~zMgP0Jiu8g7~CKT-W8t7iiwlVC~RMeQqc~-sc2sNLogEGZp8zRO4NXWjZnI~TFyAI1jCzdwtg2WJwPuws3P3dZ4xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'Cocktail 1',
  },
  {
    src: 'https://s3-alpha-sig.figma.com/img/691d/f351/d9931cc8a19ac759a01889ffe114ec89?Expires=1680480000&Signature=NBnTIqwRjJ9BvSWURzEi6M6tVgrRB3k8WrvVcyVw-5DgRtZxUq37~kljrdTxT9BWaQceM1G65KVhkZTyfVEeP91-i7O51C9VYjKCmVlewrOPmkySDBVtuSjXGdwQybol-tSTeBoMyGWYNsYtrNcvyT7GtfRZzYPWR3Ni0h8fcDxpg1Nv~GrTqfTLnd8md8HA3I0AsSC5PehcEu1QvQdDw4DGo1Lb7S4ZuzbO2UINzNPobxiwtd7rlyEPImReV8huCGQuboHsAb0u9iogqUeppTGz90RdRuyTHNqL-dHhcOk7KcZVmbJo5JIoPZCdpei8TQZlljG6me2sVs2d7wt1zA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'Cocktail 2',
  },
  {
    src: 'https://s3-alpha-sig.figma.com/img/a497/dedf/c80317dced52de67feb78b945bb7ac92?Expires=1680480000&Signature=U0AoUVnaOvo6C1rVy45i4z3E8ZeA5qrPWB4QBWCCcvqYds50r99L~J-ZVdWol7hKi-yzzKo42vSIJ52VPxr8~U21JXvEw3~S3I2KftRgQsBa7frlkwGyrI~70oquFQNgqwaF1ACuGKoCscw2ONasYqcX5JZ-exbHJcyDdqoRLSLZMyr2tln6ry3sytDgwAAE-8RF3W6z-nJLL70-zE9wXjn0iTJ8JpRZDyPhLTCc-eDPku0EGIRlVjF0HCO-pJW~X8awXOUih~4hmd9ALDQ-S3nhWq7yNSFf5m4HEyUjO0moP8CyWRPwzHguHlvo1SUVU1111MOZjo2I5FEMhO~wTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'Cocktail 3',
  },
];

const popularRecipes = [
  {
    src: 'https://s3-alpha-sig.figma.com/img/a704/9cfc/9a632c13ac0efb71528fcd66a7fff632?Expires=1680480000&Signature=dtZm824kIK03qvGWdOLpb7uBpDmiad~GCFE0IA3tGAsP6t6XO8ssWs0xpYqRboiC5G4NSd5W6eUdewcrOSaiAYVAK6Fr1uajP4FyyUq~4LEsnxwIqupnOiOUHxOIpTvvaX20eb9tnCFpB2BQlrLN-1p1gZF7k-AFhI0S~r3HVRD~swSYX~O6BStB54fbVRlLPImqHelSTkMEx8ceDenScpMmOsS4~sVoGAKfjmdp9NOplaIrpVNsYh3ouXPTAlbgQ6uLAXUKpFCa8ZgZoy2rO7b0bxcd1n5u4MUpXk0WIP3D9LJCCIq3LYdjSJKIJX4nLsybDacp9q7KfXYc6NoSIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'popular recipe 1',
    name: '모히또',
    tags: ['럼', '19도', '클래식', '여름'],
    viewCount: 18432,
    likeCount: 7841,
    commentCount: 132,
  },
  {
    src: 'https://s3-alpha-sig.figma.com/img/cd64/d65e/cc14acd3ef5fb98c72099041888ef403?Expires=1680480000&Signature=JM3awFJ4I71olIt0BhPkMn03t6OTEsTfD-DVRVwOZpEkP7G8fF7eLlQA8Ck3LU3-lQrfZybg0v7Bju9x2l4VCkFqYy~s0X25n5tJhhYR7Lc52zfN4E1iGvVawsLZgaJkSO3S3TebSPFyQx5MvZVUcgzByrKALMjWDM0RtvY8AvFuSv8xcL9nsaJANp7YViEJMtcoVV2M3zJ9sXNMa9Bz3Yo2qgkl2vgGpDQ0y0vIajjzN~qHUyDwoyKb11Rvd~zRWShiutzkuatYW1EeRH9AkaDDd7s577z6cZ9cFY0MTyJIp2bP5umPzhxLw7bppEqs1EBK932ploK-le0TedUnXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'popular recipe 2',
    name: '칵테일1',
    tags: ['럼', '19도', '클래식', '여름'],
    viewCount: 18432,
    likeCount: 7841,
    commentCount: 132,
  },
  {
    src: 'https://s3-alpha-sig.figma.com/img/a497/dedf/c80317dced52de67feb78b945bb7ac92?Expires=1680480000&Signature=U0AoUVnaOvo6C1rVy45i4z3E8ZeA5qrPWB4QBWCCcvqYds50r99L~J-ZVdWol7hKi-yzzKo42vSIJ52VPxr8~U21JXvEw3~S3I2KftRgQsBa7frlkwGyrI~70oquFQNgqwaF1ACuGKoCscw2ONasYqcX5JZ-exbHJcyDdqoRLSLZMyr2tln6ry3sytDgwAAE-8RF3W6z-nJLL70-zE9wXjn0iTJ8JpRZDyPhLTCc-eDPku0EGIRlVjF0HCO-pJW~X8awXOUih~4hmd9ALDQ-S3nhWq7yNSFf5m4HEyUjO0moP8CyWRPwzHguHlvo1SUVU1111MOZjo2I5FEMhO~wTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'popular recipe 3',
    name: '칵테일2',
    tags: ['럼', '19도', '클래식', '여름'],
    viewCount: 18432,
    likeCount: 7841,
    commentCount: 132,
  },
  {
    src: 'https://s3-alpha-sig.figma.com/img/a497/dedf/c80317dced52de67feb78b945bb7ac92?Expires=1680480000&Signature=U0AoUVnaOvo6C1rVy45i4z3E8ZeA5qrPWB4QBWCCcvqYds50r99L~J-ZVdWol7hKi-yzzKo42vSIJ52VPxr8~U21JXvEw3~S3I2KftRgQsBa7frlkwGyrI~70oquFQNgqwaF1ACuGKoCscw2ONasYqcX5JZ-exbHJcyDdqoRLSLZMyr2tln6ry3sytDgwAAE-8RF3W6z-nJLL70-zE9wXjn0iTJ8JpRZDyPhLTCc-eDPku0EGIRlVjF0HCO-pJW~X8awXOUih~4hmd9ALDQ-S3nhWq7yNSFf5m4HEyUjO0moP8CyWRPwzHguHlvo1SUVU1111MOZjo2I5FEMhO~wTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    alt: 'popular recipe 3',
    name: '칵테일2',
    tags: ['럼', '19도', '클래식', '여름'],
    viewCount: 18432,
    likeCount: 7841,
    commentCount: 132,
  },
];

const Main = () => {
  return (
    <>
      <Navbar links={[]} />
      <Slideshow images={images} />
      <PopularRecipe recipes={popularRecipes} />
    </>
  );
};

export default Main;
