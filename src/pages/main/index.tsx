import Navbar from '@/components/common/Navi';
import Category from '@/components/main/Category';
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

const categories = [
  {
    src: 'https://s3-alpha-sig.figma.com/img/9404/32f7/5c93e284f9a3d85c4e9bdb1bcaf82f46?Expires=1680480000&Signature=jwfDJ9pUy7tRw61nfBgxmC~peXgsg01sggl~DRI6xJ9cMyyQ64KU92SeJLWCU2VFE0yJREjZWLPbZIZd6Mw-Rq1Puc-ApBlb1PNbCfZD0REpVUYiy0nNS3ZmLRU1daN2qjwN3MNlFNPnHsBRliDNa2VQ0Uaw8DbFJY6eyQX2uM7qkV1HY2gDebV4OEDm8yp1Jrbnn7RixKmOAwk3VhCf1sZt92-0t6Gq1eH6uCGseMQ8ETYxYW-QxBJsUbTMYde-COOITfYt1uYIrlhNg-B9LQooay2OsxPyLTtouvX~mi2rhIV1El1xNZotduTv7q81W~lb83~xclcyLT6-p0tk3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: '보드카',
  },
  {
    src: 'https://s3-alpha-sig.figma.com/img/67f7/7bd1/ef286c05a771b55018d744b2e695dd47?Expires=1680480000&Signature=YTBb0v5xYM4lxcgbUrLpql1tMBwwRmVDBXQLRbVn3L~YNdgOT47iSMZRfscDJ6iBJHeBnxiXS4W4VwQ~Py~WvIlaU~FqNr-AqqsddsYaeMsQSvkUVm3U~WhJROCylxGc~nGRSQzQbNapp3dENujKq5ttG9mHFrj3-cflr6xUqZvPfMcBqfryaNTXUlnOmHuzgLG1qabK4k94pU2hBNck~RR-DI2r07Q-fDOEQur1Ss46EyXrJS80R8YHSDYxY5iWXOdagYBzhO3lyEWX7CY9PLGQeBQsXBj5qRx3kCT8aTRPVg2zIyq97NfuLzji56v6Pb2jcBEK21bDWpZEdZKFhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: '위스키',
  },
  {
    src: 'https://s3-alpha-sig.figma.com/img/2a38/ce4c/d373e83a0429abb07ea74bc29654bff4?Expires=1680480000&Signature=dkIgJiilScmmz-9ZTNHrnRFxad9XvurJb49tC~0i1mULKoU70FoYK5x31IjIZTAsudtPdQLVwPn4NgibmOvicyLurTfEYcnneAEAGQ2jxwVZxjjwDCupJjv8MGGHNzYrDPuk0602DC79iO7d-QK12tcPBno2pwymuqqghBTXvhWYM7c-usR0xWM6PjOP7VnScBxAzLObK8Xa3Wy~1YR64VpDKYuZd06gheCz1x7YtWbWHYg~0poHmD7dSYseUyfwJGN3Kn1l03buvvtmyGFpvIXelEmL367-ezjGTSTyU-v25Sh83xCbQZUc9BwMSfDrRl8PbWzysT-8QzWpiQncFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: '진',
  },
  {
    src: 'https://s3-alpha-sig.figma.com/img/cdd1/d7fa/9a97c821aa9d388a8a47358f7886a170?Expires=1680480000&Signature=XaIASoRCAUw5pJMaxN5Yryw84eQxgn4ZQZckZzVObj~qW0O~-8dPZV~sAQNZPEefb0p96RXc1olPFLYb0W5pW1upJIYBWMPzr2L4TzFlWxadm~r-J7UvPkXBnA6-jFQ0BMrFbWp-sPIBrxS0rw5-tQ7QRL2iNRnk4NaMQVfYW4v3QdPA1AQyUKwxJjaeRtmv8rjrNGJZbHpggJMWS-viWZMVKOSt~cvQpJvvhmWcGRUUpBYax1UAhjiV~31ryOugFv3um9UaxqAftV5UDnk-RcFX9qJw7xrVedpeLdjwk4WmB-a3LxZ5KxssQhviLa7CzSj5-Qz75PgjzGxBYKp~sQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: '럼',
  },
  {
    src: 'https://s3-alpha-sig.figma.com/img/30e0/36e5/b2a2e5a941f804dc820000eb5412413a?Expires=1680480000&Signature=ohHwtert~b~DHSMjWWNbRjkQlPyjqWhKV4Uxlrl6iJ0cGJwZFwCaf5Yyaji9OCJzNQzObmeyhci28TLGlBlpeB-B06vswkJhJgat4MHjeC2DxSKfCKK10mdWmhJx2HKYKZsjinjYJ6JGYjQRsrXG~SPyBNt9fgO5tSgRe0JwT3~qNDBNEXW9PdSUkV-AoJgK5wyznY1UrTocXPl08-BYrshhtUL2gyyWDC~XuH39MVg77qEWVI-9jvXrje8nz0MOukwpw4zw1oUHLdqYw5sQf0cqg-kREhKyKxN2yIsGz6Jkuuhl74~GqyQ2V85NyLbuRGe~KusVkMzxLJNM1BGxgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: '데킬라',
  },
  {
    src: 'https://s3-alpha-sig.figma.com/img/9404/32f7/5c93e284f9a3d85c4e9bdb1bcaf82f46?Expires=1680480000&Signature=jwfDJ9pUy7tRw61nfBgxmC~peXgsg01sggl~DRI6xJ9cMyyQ64KU92SeJLWCU2VFE0yJREjZWLPbZIZd6Mw-Rq1Puc-ApBlb1PNbCfZD0REpVUYiy0nNS3ZmLRU1daN2qjwN3MNlFNPnHsBRliDNa2VQ0Uaw8DbFJY6eyQX2uM7qkV1HY2gDebV4OEDm8yp1Jrbnn7RixKmOAwk3VhCf1sZt92-0t6Gq1eH6uCGseMQ8ETYxYW-QxBJsUbTMYde-COOITfYt1uYIrlhNg-B9LQooay2OsxPyLTtouvX~mi2rhIV1El1xNZotduTv7q81W~lb83~xclcyLT6-p0tk3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    name: '소주',
  },
];

const Main = () => {
  return (
    <>
      <Navbar links={[]} />
      <Slideshow images={images} />
      <PopularRecipe recipes={popularRecipes} />
      <Category categories={categories} />
    </>
  );
};

export default Main;
