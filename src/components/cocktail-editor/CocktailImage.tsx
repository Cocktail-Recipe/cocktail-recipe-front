import { Image } from 'antd';
import { ChangeEvent, ReactElement, useCallback, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { cocktailImageState } from '@/states/cocktail/cocktailCreate.state';
import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { StyledCocktailImage } from './CocktailImage.styled';

const CocktailImage = (): ReactElement => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [cocktailImage, setCocktailImage] = useRecoilState(cocktailImageState);

  const onClickAddImage = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      fileRef?.current?.click;

      // TODO: 이미지 3개로 제한
      const target = e.target as HTMLInputElement;
      const image: File = (target.files as FileList)[0];
      setCocktailImage(image);
    },
    [setCocktailImage],
  );

  const onRemoveCocktailImage = useCallback(() => {
    setCocktailImage(undefined);
  }, [setCocktailImage]);

  return (
    <StyledCocktailImage>
      <input
        className="cocktail-image-input"
        type="file"
        id="cocktail-image"
        multiple
        accept="image/*"
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => onClickAddImage(e)}
      />
      {!cocktailImage && (
        <label className="cocktail-image-input-label" aria-label="cocktail-image-label" htmlFor="cocktail-image">
          <PlusOutlined />
          <div>사진 등록</div>
        </label>
      )}
      <div id="cocktail-image-box">
        {cocktailImage && (
          <>
            <Image
              id="edit-cocktail-image"
              width="100vw"
              height="250px"
              preview={false}
              src={URL.createObjectURL(cocktailImage)}
              alt="/api/images"
            />
            <CloseCircleOutlined onClick={onRemoveCocktailImage} />
          </>
        )}
      </div>
    </StyledCocktailImage>
  );
};

export default CocktailImage;
