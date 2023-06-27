import { Input, Typography } from 'antd';
import { debounce } from 'lodash';
import { ChangeEvent, Dispatch, ReactElement, SetStateAction, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { cocktailEnglishNameState, cocktailKoreanNameState } from '@/states/cocktail/cocktailCreate.state';

const CocktailName = (): ReactElement => {
  const setKoreanName = useSetRecoilState(cocktailKoreanNameState);
  const setEnglishName = useSetRecoilState(cocktailEnglishNameState);

  const debouncedOnChange = debounce((setState: Dispatch<SetStateAction<string | undefined>>, value: string) => {
    setState(value);
  }, 300);

  const onChangeKoreanName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => debouncedOnChange(setKoreanName, e.target.value),
    [debouncedOnChange, setKoreanName],
  );

  const onChangeEnglishName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => debouncedOnChange(setEnglishName, e.target.value),
    [debouncedOnChange, setEnglishName],
  );

  return (
    <>
      <Typography.Text>칵테일명 입력</Typography.Text>
      {/* TODO: 한국어 영어 regex 설정 필요한지 확인 */}
      <Input placeholder="한국어 이름" allowClear onChange={onChangeKoreanName} required maxLength={15} />
      <Input placeholder="영어 이름" allowClear onChange={onChangeEnglishName} required maxLength={20} />
    </>
  );
};

export default CocktailName;
