import { Image } from 'antd';
import { ChangeEvent, ReactElement, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { cocktailImageState } from '@/states/cocktail/cocktailCreate.state';

const CocktailImage = (): ReactElement => {
  const [cocktailImage, setCocktailImage] = useRecoilState(cocktailImageState);

  const onClickAddImage = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // TODO: 이미지 3개로 제한
      const target = e.target as HTMLInputElement;
      const image: File = (target.files as FileList)[0];

      setCocktailImage(image);
    },
    [setCocktailImage],
  );

  return (
    <>
      <label aria-label="cocktail-image-label" htmlFor="cocktail-image">
        <input
          type="file"
          placeholder="+ 사진 등록하기"
          id="cocktail-image"
          multiple
          accept="image/*"
          required
          onChange={(e: ChangeEvent<HTMLInputElement>) => onClickAddImage(e)}
        />
      </label>
      <div id="cocktail-image-box">
        {cocktailImage && <Image id="edit-cocktail-image" src={URL.createObjectURL(cocktailImage)} alt="/api/images" />}
      </div>
    </>
  );
};

export default CocktailImage;
